import React, { useEffect } from 'react';

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
            Time: {time}
        </div>
    );
}

export default Timer;
