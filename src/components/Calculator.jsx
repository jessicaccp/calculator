import Keypad from "components/Keypad";
import Display from "components/Display";
import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState(0);
  const [numbers, setNumbers] = useState([0]);
  const [operator, setOperator] = useState(null);

  const handlers = {
    number: (event) => {
      setNumbers([...numbers, event.target.value]);
      setDisplay(event.target.value);
    },
    operator: (event) => {
      setOperator(event.target.value);
      setDisplay(event.target.value);
    },
    clear: () => {
      setNumbers([0]);
      setOperator(null);
      setDisplay(0);
    },
  };

  return (
    <>
      <Display value={display} />
      <Keypad handlers={handlers} />
    </>
  );
};

export default Calculator;
