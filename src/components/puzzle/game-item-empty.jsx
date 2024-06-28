import React from "react";

const GameItemEmpty = ({ item, dropped, dragOver ,index}) => {
  return (
    <div
      className="game-item-empty"
      onDrop={dropped}
      onDragOver={dragOver}
      data-index={index}
    >
      {item}
    </div>
  );
};

export default GameItemEmpty;
