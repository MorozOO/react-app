import React from "react";

const TodoItem = ({title, done}) => {
  return (
    <li className="list-item">
      <input type="checkbox"  defaultChecked={done}/>
      {title}
      <button>X</button>
    </li>
  );
};

export default TodoItem;
