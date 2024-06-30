import React, { useEffect, useState } from "react";
import { shuffle } from "./shuffleFunction";
import Timer from "./Timer";
import "./Game.css";
import GameItem from "./game-item";
import GameItemEmpty from "./game-item-empty";

const Game = () => {
  const [shuffledArray, setShuffledArray] = useState(shuffle());
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  const newGame = () => {
    setMoves(0);
    setTime(0);
    setTimerActive(false);
    setShuffledArray(shuffle());
  };

  const startDrag = (e) => {
    e.dataTransfer.setData("item", e.target.dataset.index);
  };
  const dragOver = (e) => {
    e.preventDefault();
  };
  const dropped = (e) => {
    e.preventDefault();
    const itemIndex = e.dataTransfer.getData("item");
    const emptyIndex = e.target.dataset.index;

    if (
      !(
        Math.abs(itemIndex - emptyIndex) === 4 ||
        Math.abs(itemIndex - emptyIndex) === 1
      )
    ) {
      return;
    }
   const newArray = [...shuffledArray];
   newArray.splice(itemIndex, 1 ,shuffledArray[emptyIndex]);
   newArray.splice(emptyIndex, 1 ,shuffledArray[itemIndex]);
   setShuffledArray([...newArray]);
   setMoves(moves + 1);
  };
  useEffect(() => {
    if (moves === 1) setTimerActive(true);
    }, [moves]);
  return (
    <div className="wrapper">
      <h1>Puzzle Game</h1>
      <div className="top-panel">
        <div>Moves:{moves}</div>
        <Timer time={time} setTime={setTime} timerActive={timerActive}/>
      </div>
      <div className="game">
        {shuffledArray.map((item, index) => {
          if (item === "") {
            return (
              <GameItemEmpty
                item={item}
                key={index}
                dropped={dropped}
                dragOver={dragOver}
                index={index}
              />
            );
          } else {
            return (
              <GameItem
                item={item}
                key={index}
                startDrag={startDrag}
                index={index}
              />
            );
          }
        })}
      </div>
      <button onClick={newGame}>New game</button>
    </div>
  );
};

export default Game;
