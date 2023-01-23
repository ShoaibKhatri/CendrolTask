import React, { useState } from "react";
import DisplayCounter from "./DisplayCounter";

const Counter = () => {
  const [count, setCount] = useState(1);
  const [changeBtn, setChangeBtn] = useState(false);

  return (
    <div>
      <DisplayCounter setCount={setCount} count={count} />
      <button
        onClick={() => setChangeBtn(!changeBtn)}
        className={changeBtn ? "change-colour-red" : "change-colour-green"}
      >
        Change Colour
      </button>
    </div>
  );
};

export default Counter;
