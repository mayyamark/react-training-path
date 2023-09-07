import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/todos", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => setTodos(data))

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <ul>
        {todos && todos.map((t) => (
          <li 
            key={t.id} 
            style={{ 
              textDecoration: t.completed ? "line-through" : "none",
            }}
          >
            {t.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
