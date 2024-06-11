import React, { useState } from "react";

const TodoAdd = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(null);
  const clickHandler = () => {
    if (title.trim().length === 0) {
      setTitleError("Title is required");
      return;
    }
    addTask(title);
    setTitle("");
    setTitleError(null);
  };
  return (
    <div className="add-form">
      <input
        type="text"
        className="input-text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e)=>{
          if (e.code === "Enter") clickHandler();
        }}
      />
      <button onClick={clickHandler}>Add</button>
      {titleError && <div className="error">{titleError}</div>}
    </div>
  );
};

export default TodoAdd;
