import { useEffect, useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('');

  const handleClick = (e: any) => {
    const buttonIdNum = e.target.id;
    const buttonIdOperators = e.target.id;
    setDisplay((prev) => prev + buttonIdNum);
    if (operator === '') {
      setNum1((prev) => parseFloat(prev.toString() + buttonIdNum));
    } else {
      setNum2((prev) => parseFloat(prev.toString() + buttonIdNum));
    }
  };

  const handleOperator = (op: string) => {
    setOperator(op);
    setDisplay((prev) => prev + op);
  };

  const handleEqual = () => {
    const a = num1;
    const b = num2;
    let result = 0;

    if (operator === '+') {
      result = a + b;
    }
    if (operator === '-') {
      result = a - b;
    }
    if (operator === '*') {
      result = a * b;
    }
    if (operator === '/') {
      if (b === 0) {
        result = 'Error';
      } else {
        result = a / b;
      }
    }

    setDisplay(result.toString());
    setNum1(0);
    setNum2(0);
    setOperator('');
  };
  const handleReset = () => {
    setDisplay('');
    setNum1(0);
    setNum2(0);
    setOperator('');
  };
  const handleBSpace = () => {
    setDisplay((prev) => prev.slice(0, -1));

    if (operator === '') {
      const shortened = String(num1).slice(0, -1);
      setNum1(shortened ? Number(shortened) : 0);
    } else {
      const shortened = String(num2).slice(0, -1);
      setNum2(shortened ? Number(shortened) : 0);
    }
  };

  return (
    <div className="centered flex-col bg-[url('../src/assets/images/image.webp')] bg-cover bg-center">
      <div className="p-8 bg-black/80 rounded-4xl shadow-xl">
        <input
          type="text"
          className="w-50 h-50 text-6xl text-white text-right"
          value={display}
        />
        <div>
          <button className="button gray" id="AC" onClick={handleReset}>
            AC
          </button>
          <button className="button gray" id="bspace" onClick={handleBSpace}>
            ⌫
          </button>
          <button
            className="button blue"
            id="X"
            onClick={() => handleOperator('*')}
          >
            X
          </button>
          <button
            className="button blue"
            id="/"
            onClick={() => handleOperator('/')}
          >
            /
          </button>
        </div>
        <div>
          <button className="button" id="7" onClick={handleClick}>
            7
          </button>
          <button className="button" id="8" onClick={handleClick}>
            8
          </button>
          <button className="button" id="9" onClick={handleClick}>
            9
          </button>
          <button
            className="button blue"
            id="-"
            onClick={() => handleOperator('-')}
          >
            -
          </button>
        </div>
        <div>
          <button className="button" id="4" onClick={handleClick}>
            4
          </button>
          <button className="button" id="5" onClick={handleClick}>
            5
          </button>
          <button className="button" id="6" onClick={handleClick}>
            6
          </button>
          <button
            className="button blue"
            id="+"
            onClick={() => handleOperator('+')}
          >
            +
          </button>
        </div>
        <div>
          <button className="button" id="1" onClick={handleClick}>
            1
          </button>
          <button className="button" id="2" onClick={handleClick}>
            2
          </button>
          <button className="button" id="3" onClick={handleClick}>
            3
          </button>
          <button className="button blue1" id="=" onClick={handleEqual}>
            =
          </button>
        </div>
        <button
          className=" w-[140px] h-12.5 rounded-xl ml-[5px] blue0 mt-2 bg-gray-900"
          id="0"
          onClick={handleClick}
        >
          0
        </button>
      </div>
    </div>
  );
};

export default Calculator;
