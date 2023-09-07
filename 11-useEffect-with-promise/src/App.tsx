import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const App = () => { 
  const [todos, setTodos] = useState([]); 

  useEffect(() => { 
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json()) 
      .then((data) => setTodos(data)); 
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
