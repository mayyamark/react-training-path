import { Action, ADD_TODO, TOGGLE_TODO } from "./actionTypes";
import { Todo } from "./initialTodos";

const todosReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        { 
          ...action.payload,
          id: state.length + 1,
          completed: false
        }];
    }
    case TOGGLE_TODO: {
      return state.reduce((acc: Todo[], todo: Todo) => {
        if (action.payload && action.payload.id) {
          if (todo.id === action.payload.id) {
            return [...acc, {
              ...todo,
              completed: !todo.completed,
            }];
          }
        }
        return [...acc, todo];
      }, []);
    }
    default: {
      return state;
    }
  }
}

export default todosReducer;
