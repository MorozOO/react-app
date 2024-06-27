import React, { useState } from "react";
import "./MagicBall.css";

const MagicBall = () => {
  const answerEn = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Most likely",
    "Outlook not so good",
    "Very doubtful",
  ];
  const answerUa = [
    "Це певно",
    "Це однозначно так",
    "Без сумніву",
    "Однозначно так",
    "Ви можете покластися на це",
    "Як я бачу, так",
    "Прогнози хороші",
    "Так",
    "Знаки вказують на так",
    "Відповісти туманно, спробуйте ще раз",
    "Запитати пізніше",
    "Краще не казати тобі зараз",
    "Не можу передбачити зараз",
    "Зосередься і запитай ще раз",
    "Не розраховуйте на це",
    "Моя відповідь - ні",
    "Мої джерела кажуть, що ні",
    "Ймовірно",
    "Перспективи не дуже хороші",
    "Дуже сумнівно",
  ];
  const [answer, setanswer] = useState("8");
  const [languige, setlanguige] = useState('en');
  const en = ()=>{
    setlanguige('en');
  }
  const ua = ()=>{
    setlanguige('ua');
  }
  const click = ()=>{
    if (languige === 'en'){
        setanswer(answerEn[Math.floor(Math.random()*answerEn.length)])
    }
    else{
        setanswer(answerUa[Math.floor(Math.random()*answerUa.length)])
    }
  }
  return (
    <div className="container">
        <div className="btns">
            <button onClick={en}>EN</button>
            <button onClick={ua}>UA</button>
        </div>
      <p>Задай запитання та натисни</p>
      <div className="ball" onClick={click}>
        <div className="answer">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default MagicBall;
