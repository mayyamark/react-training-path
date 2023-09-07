import useFetch from "./useFetch";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const App = () => { 
  const { 
    data: todos, 
    loading, 
    error 
  } = useFetch("https://jsonplaceholder.typicode.com/todos");

  if (error) {
    return <div>An error occurred</div>;
  }

  return (
    <div>
      {loading && <div>Loading</div>}
      <ul>
        {todos && todos.map((t: Todo) => (
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
