import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions/todoAction";

const TodoItem = ({ title, isCompleted, id }) => {
  const dispatch = useDispatch();
  const [isEdited, setIsEdited] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(title);
  const handleChange = (e) => setUpdatedTodo(e.target.value);

  const handleEdit = () => {
    setIsEdited(!isEdited);
    isEdited && dispatch(updateTodo(id, updatedTodo));
  };
  return (
    <div
      className="container-fluid"
      style={{
        width: "100%",
        background: "grey",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        className="col-9"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <input
          type="checkbox"
          defaultChecked={isCompleted}
          onChange={(e) => e.target.checked}
        />
        {!isEdited ? (
          <span>{title}</span>
        ) : (
          <input
            style={{ background: "transparent", border: "none" }}
            value={updatedTodo}
            onChange={handleChange}
          />
        )}
      </div>
      <div className="col-3">
        <button
          onClick={handleEdit}
          className={`btn ${isEdited ? "btn-primary" : "btn-success"}`}
        >
          {isEdited ? "undo" : "edit"}
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteTodo(id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
