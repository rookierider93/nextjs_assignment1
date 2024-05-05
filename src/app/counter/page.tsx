"use client";
import { useState } from "react";

export default function counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="text-3xl text-center  mt-8">Counter Page</h1>
      <p className="text-center ">
        <b className="text-red-400">*</b>
        <b className="text-yellow-400">Note</b> : This is a client page
      </p>
      <div className="text-center mt-8">
        <p>You Clicked {count} times</p>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={() => setCount(count + 1)}
        >
          Click Me{" "}
        </button>
      </div>
    </>
  );
}
