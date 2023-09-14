import { useState, useEffect, useReducer, ChangeEvent, FormEvent } from 'react';
import initialTodos, { Todo } from './initialTodos';
import { TOGGLE_TODO, ADD_TODO } from './actionTypes';
import todosReducer from './reducer';

const App = () => {
  const [todos, dispatch] = useReducer(
    todosReducer, 
    initialTodos, 
    (initial) => JSON.parse(localStorage.getItem("todos") as string) || initial
  );

  const [newTodoText, setNewTodoText] = useState('');
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (t: Todo) => {
    dispatch({ type: TOGGLE_TODO, payload: t })
  }

  const handleChangeInput = (ev: ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(ev.target.value);
  }

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    dispatch({
      type: ADD_TODO,
      payload: {
        id: todos.length + 1,
        title: newTodoText,
        completed: false,
      }
    });

    setNewTodoText('');
  }

  return (
    <main>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder='Enter todo...' 
          value={newTodoText} 
          onChange={handleChangeInput}
        />
        <button type='submit'>Add todo</button>
      </form>
      <ul>
        {todos.map((t: Todo) => (
          <li key={t.id}>
            <label htmlFor={String(t.id)}>{t.title}
              <input 
                id={String(t.id)} 
                type='checkbox' 
                checked={t.completed} 
                onChange={() => handleChange(t)}
              />
            </label>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
