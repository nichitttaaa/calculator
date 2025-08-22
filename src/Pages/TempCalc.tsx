import { useState } from 'react';

const TempCalc = () => {
  const [tempC, setTempC] = useState(0);
  const [tempF, setTempF] = useState(0);

  //C in Celsius into a temperature F in Fahrenheit is C = (F - 32) * (5/9) and the dual direction is F = C * (9/5) + 32.

  const calculatorC = (e: any) => {
    if (e.target.value === undefined) {
      setTempF(0);
      setTempC(0);
    } else {
      const tempC = e.target.value;
      setTempC(tempC);
      setTempF(tempC * (9 / 5) + 32);
    }
  };
  const calculatorF = (e: any) => {
    if (e.target.value === undefined) {
      setTempF(0);
      setTempC(0);
    } else {
      const tempF = e.target.value;
      setTempF(tempF);
      setTempC((tempF - 32) * (5 / 9));
    }
  };

  return (
    <div>
      <div>
        <h1>Celsius</h1>
        <input type="number" onChange={calculatorC} value={tempC} />
      </div>

      <div>
        <h1>Fahrenheit</h1>
        <input type="number" onChange={calculatorF} value={tempF} />
      </div>
    </div>
  );
};
export default TempCalc;
