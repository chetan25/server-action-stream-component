"use client";

import React, { useState } from "react";

const Counter = ({ base }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count is {count}</h2>
      <button
        className={
          base
            ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            : "focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        }
        onClick={(e) => {
          e.preventDefault();
          console.log("test");
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
