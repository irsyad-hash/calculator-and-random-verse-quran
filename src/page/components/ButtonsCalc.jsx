import React, { useState } from "react";

const ButtonsCalc = () => {
  const [display, setDisplay] = useState("0");
  const [error, setError] = useState(null);

  const operators = ["+", "-", "÷", "x", "%", "^"];
  const lastChar = display.charAt(display.length - 1);

  const handleButtonClick = (value) => {
    if (operators.includes(value)) {
      if (operators.includes(lastChar)) {
        setDisplay((prevDisplay) => prevDisplay.slice(0, -1) + value);
      } else {
        setDisplay((prevDisplay) => prevDisplay + value);
      }
    } else if (value === "C") {
      handleClear();
    } else if (value === "DEL") {
      handleBackspace();
    } else if (value === "=") {
      handleEvaluate();
    } else if (value === "(" || value === ")") {
      handleBracket(value);
    } else {
      if (display === "0" && value !== ".") {
        setDisplay(value);
      } else {
        setDisplay((prevDisplay) => prevDisplay + value);
      }
    }
  };

  const handleBracket = (bracket) => {
    const openBracketsCount = (display.match(/\(/g) || []).length;
    const closeBracketsCount = (display.match(/\)/g) || []).length;

    if (bracket === "(") {
      setDisplay((prevDisplay) => prevDisplay + bracket);
    } else if (openBracketsCount > closeBracketsCount) {
      setDisplay((prevDisplay) => prevDisplay + ")");
    }
  };

  const handleEvaluate = () => {
    try {
      const formattedDisplay = display
        .replace(/÷/g, "/")
        .replace(/x/g, "*")
        .replace(/\^/g, "**");

      const result = eval(formattedDisplay);
      setDisplay(result.toString());
      setError(null);
    } catch (error) {
      setDisplay("Error");
      setError("Error");
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setError(null);
  };

  const handleBackspace = () => {
    if (display.length === 1 || display === "Error") {
      setDisplay("0");
      setError(null);
    } else {
      setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
    }
  };

  return (
    <div>
      <div className="w-96 h-70 mt-20 mx-auto rounded-xl bg-green-100 shadow-xl text-gray-800 relative overflow-hidden">
        <div className="w-full h-40 bg-gradient-to-b from-green-800 to-green-700 flex items-end text-right">
          <div className="w-full py-5 px-6 text-6xl text-white font-thin">
            {error ? (
              <span className="text-red-500">{error}</span>
            ) : (
              display || "0"
            )}
          </div>
        </div>
        <div className="w-full bg-gradient-to-b from-green-400 to-green-500">
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none bg-green-700 bg-opacity-40 hover:bg-opacity-50 text-white text-xl font-bold"
                onClick={() => handleButtonClick("C")}
              >
                C
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none bg-green-700 bg-opacity-40 hover:bg-opacity-50 text-white text-xl font-bold"
                onClick={() => handleButtonClick("DEL")}
              >
                DEL
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none bg-green-700 bg-opacity-20 hover:bg-opacity-30 text-white text-xl font-bold"
                onClick={() => handleButtonClick("%")}
              >
                %
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none bg-green-700 bg-opacity-20 hover:bg-opacity-30 text-white text-xl font-bold"
                onClick={() => handleButtonClick("÷")}
              >
                ÷
              </button>
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-green-700 hover:bg-opacity-20 text-white text-xl font-normal"
                onClick={() => handleButtonClick("7")}
              >
                7
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-green-700 hover:bg-opacity-20 text-white text-xl font-normal"
                onClick={() => handleButtonClick("8")}
              >
                8
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-green-700 hover:bg-opacity-20 text-white text-xl font-normal"
                onClick={() => handleButtonClick("9")}
              >
                9
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none bg-green-700 bg-opacity-20 hover:bg-opacity-30 text-white text-xl font-normal"
                onClick={() => handleButtonClick("x")}
              >
                x
              </button>
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-green-700 hover:bg-opacity-20 text-white text-xl font-normal"
                onClick={() => handleButtonClick("4")}
              >
                4
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-green-700 hover:bg-opacity-20 text-white text-xl font-normal"
                onClick={() => handleButtonClick("5")}
              >
                5
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-green-700 hover:bg-opacity-20 text-white text-xl font-normal"
                onClick={() => handleButtonClick("6")}
              >
                6
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none bg-green-700 bg-opacity-20 hover:bg-opacity-30 text-white text-xl font-bold"
                onClick={() => handleButtonClick("-")}
              >
                -
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-green-700 hover:bg-opacity-20 text-white text-xl font-normal"
                onClick={() => handleButtonClick("1")}
              >
                1
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-green-700 hover:bg-opacity-20 text-white text-xl font-normal"
                onClick={() => handleButtonClick("2")}
              >
                2
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-green-700 hover:bg-opacity-20 text-white text-xl font-normal"
                onClick={() => handleButtonClick("3")}
              >
                3
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none bg-green-700 bg-opacity-20 hover:bg-opacity-30 text-white text-xl font-bold"
                onClick={() => handleButtonClick("+")}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-green-700 hover:bg-opacity-20 text-white text-xl font-normal"
                onClick={() => handleButtonClick("(")}
              >
                (
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-green-700 hover:bg-opacity-20 text-white text-xl font-normal"
                onClick={() => handleButtonClick("0")}
              >
                0
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-green-700 hover:bg-opacity-20 text-white text-xl font-normal"
                onClick={() => handleButtonClick(")")}
              >
                )
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none bg-green-700 bg-opacity-30 hover:bg-opacity-40 text-white text-xl font-bold"
                onClick={() => handleButtonClick("^")}
              >
                ^
              </button>
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-2/4 border-r border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-green-700 hover:bg-opacity-20 text-white text-xl font-bold"
                onClick={() => handleButtonClick(".")}
              >
                .
              </button>
            </div>
            <div className="w-2/4 border-r border-green-400">
              <button
                className="w-full h-16 outline-none focus:outline-none bg-green-700 bg-opacity-30 hover:bg-opacity-40 text-white text-xl font-bold"
                onClick={() => handleButtonClick("=")}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsCalc;
