import { Todo } from "./initialTodos";

export type Action =
 | { type: typeof ADD_TODO, payload: Todo }
 | { type: typeof TOGGLE_TODO, payload: Todo }

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';