import React from "react";

const DisplayCounter = ({ setCount, count }) => {
  return (
    <div className="main">
      <div className="counter-wrapper">
        <div
          className="counter-display-main"
          onClick={() => setCount((prev) => prev + 10)}
        >
          <div className="count">{count < 10 ? `0${count}` : count}</div>
          <a href="#" className="counter-btn">
            Click to increase counter
          </a>
        </div>
      </div>
    </div>
  );
};

export default DisplayCounter;
