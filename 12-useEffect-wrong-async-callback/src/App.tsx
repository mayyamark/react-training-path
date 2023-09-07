import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const App = () => { 
  const [todos, setTodos] = useState([]); 

  // WRONG!
  useEffect(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await res.json();
    setTodos(json);
  }, []);

  return (
    <ul>
      {todos.map((t: Todo) => (
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
  ); 
};

export default App;
