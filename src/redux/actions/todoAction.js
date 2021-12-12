import { todoAction } from "../actionTypes/actionTypes";

export const addTodo = (newTodo) => ({
  type: todoAction.ADD_TODO,
  payload: newTodo,
});

export const deleteTodo = (id) => ({
  type: todoAction.DELETE_TODO,
  payload: id,
});

export const updateTodo = (id, newTitle) => ({
  type: todoAction.UPDATE_TODO,
  payload: { id, newTitle },
});
