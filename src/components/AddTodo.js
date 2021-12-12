import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoAction";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "50px",
      }}
    >
      <input className="form-control" value={newTodo} onChange={handleChange} />
      <div>
        <button
          style={{ width: "150px" }}
          onClick={handleAddTask}
          className="btn btn-primary"
        >
          Add task
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
