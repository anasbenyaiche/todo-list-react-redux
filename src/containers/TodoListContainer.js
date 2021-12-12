import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";

const TodoListContainer = () => {
  const todoList = useSelector((state) => state.todoList);
  return (
    <div>
      {todoList.map((todo) => (
        <div key={todo.id}>
          <TodoItem
            title={todo.title}
            id={todo.id}
            isCompleted={todo.isCompleted}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoListContainer;
