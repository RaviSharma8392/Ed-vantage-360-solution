import React, { useState } from "react";

const data = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  operators: ["+", "-", "*", "/"],
};

const Calc = () => {
  const [display, setDisplay] = useState("0");

  const handleNumber = (num) => {
    setDisplay((prev) => (prev === "0" ? num.toString() : prev + num));
    console.log(`num${num}`);
  };

  const handleOperator = (op) => {
    setDisplay((prev) => (prev === "0" ? prev : prev + op));
  };

  const handleClear = () => setDisplay("0");
  console.log(display);

  const handleEquals = () => {
    try {
      // eslint-disable-next-line no-eval
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
        {/* Display */}
        <div className="bg-gray-200 text-right text-2xl p-4 rounded-lg mb-4 h-16 flex items-center justify-end">
          {display}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {/* Numbers */}
          {data.numbers.map((num, idx) => (
            <button
              key={idx}
              onClick={() => handleNumber(num)}
              className="bg-gray-300 hover:bg-gray-400 text-xl font-semibold rounded-xl py-3">
              {num}
            </button>
          ))}

          {/* Operators */}
          {data.operators.map((op, idx) => (
            <button
              key={idx}
              onClick={() => handleOperator(op)}
              className="bg-orange-400 hover:bg-orange-500 text-white text-xl font-bold rounded-xl py-3">
              {op}
            </button>
          ))}

          {/* Extra buttons */}
          <button
            onClick={handleClear}
            className="col-span-2 bg-red-400 hover:bg-red-500 text-white text-xl font-bold rounded-xl py-3">
            C
          </button>
          <button
            onClick={handleEquals}
            className="col-span-2 bg-green-400 hover:bg-green-500 text-white text-xl font-bold rounded-xl py-3">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calc;
