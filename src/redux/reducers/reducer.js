import { todoList } from "../../constants/todoList";
import { todoAction } from "../actionTypes/actionTypes";

const INITIAL_STATE = {
  todoList: todoList,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoAction.ADD_TODO:
      return {
        todoList: [
          ...state.todoList,
          { title: action.payload, isCompleted: false, id: Date.now() },
        ],
      };
    case todoAction.DELETE_TODO:
      return {
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };

    case todoAction.UPDATE_TODO:
      return {
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              title: action.payload.newTitle,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
export default reducer;
