import React from "react";

const TodoItem = ({title, done, id, removeTask}) => {
  return (
    <li className="list-item">
      <input type="checkbox"  defaultChecked={done}/>
      {title}
      <button onClick={()=>removeTask(id)}>X</button>
    </li>
  );
};

export default TodoItem;
