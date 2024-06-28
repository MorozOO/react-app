import React from "react";

const GameItem = ({ item, startDrag, index }) => {
  return (
    <div
      className="game-item"
      onDragStart={startDrag}
      draggable="true"
      data-index={index}
    >
      {item}
    </div>
  );
};

export default GameItem;
