import React from "react";

const TodoItem = ({ title, done, id, removeTask, toggleDone }) => {
  return (
    <li className="list-item">
      <input
        type="checkbox"
        defaultChecked={done}
        onClick={() => toggleDone(id)}
      />
      <span className={done ? "task-done" : ""}>{title}</span>
      <button onClick={() => removeTask(id)}>X</button>
    </li>
  );
};

export default TodoItem;
