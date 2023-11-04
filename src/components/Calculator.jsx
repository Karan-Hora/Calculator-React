import React from "react";
import { useState } from "react";
const Calculator = () => {
  const [input, setInput] = useState("");

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    
      <div className="bg-gray-900  flex justify-center items-center text-white  rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        <div className="p-4">
          <input
            className="w-full bg-black p-2 rounded-md"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex flex-wrap mt-4">
            {[
              "7",
              "8",
              "9",
              "4",
              "5",
              "6",
              "1",
              "2",
              "3",
              "0",
              "+",
              "-",
              "*",
              "/",
            ].map((val) => (
              <button
                key={val}
                className={
                  "border border-gray-800 w-1/4 p-6 font-bold focus:outline-none " +
                  (isNaN(val) ? "bg-red-500" : "")
                }
                onClick={() => setInput(input + val)}
              >
                {val}
              </button>
            ))}
          </div>
          <div className="mt-4 flex">
            <button
              className="bg-red-500 w-1/2 mr-4 p-4 font-bold focus:outline-none"
              onClick={() => setInput(input.slice(0, -1))}
            >
              Backspace
            </button>
            <button
              className="bg-green-500 w-1/2 p-4 font-bold focus:outline-none"
              onClick={calculate}
            >
              =
            </button>
          </div>
        </div>
      </div>
   
  );
};
export default Calculator;
