import React from "react";

const Timer = ({ minutes, seconds }) => {
  return (
    <>
      {minutes === 0 && seconds === 0 ? (
        <span>00:00:00</span>
      ) : (
        <span>
          00:
          {minutes < 10 ? `0${minutes}` : { minutes }}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      )}
    </>
  );
};

export default Timer;
