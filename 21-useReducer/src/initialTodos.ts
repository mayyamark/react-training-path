export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const initialTodos: Todo[] = [
  {
    id: 1,
    title: "Make app",
    completed: false
  },
  {
    id: 2,
    title: "Walk the dog",
    completed: true
  },
  {
    id: 3,
    title: "Buy milk",
    completed: true
  },
];

export default initialTodos;
