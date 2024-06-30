import React, { useEffect } from 'react';
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
  
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(secs).padStart(2, '0');
  
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
const Timer = ({time, setTime, timerActive}) => {
useEffect(() => {
    let interval = null;
    if(timerActive){
        interval = setInterval(() => {
            setTime((time)=>time + 1);
        }, 1000);
    }
    else{
        clearInterval(interval);
    }
    return () =>{
        clearInterval(interval);
    };
}, [timerActive]);

    return (
        <div>
            Time: {formatTime(time)}
        </div>
    );
}

export default Timer;
