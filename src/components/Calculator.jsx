import Keypad from "components/Keypad";
import Display from "components/Display";
import { useEffect, useState } from "react";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [stack, setStack] = useState([]);
  const [display, setDisplay] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setDisplay(result === null ? stack : `${stack.join("")} = ${result}`);
  }, [stack, result]);

  const handlers = {
    button: (event) => {
      if (result === null) setStack([...stack, event.target.value]);
      else {
        setStack([event.target.value]);
        setResult(null);
      }
    },
    equal: () => {
      try {
        setResult(evaluate(stack.join("")));
      } catch (error) {
        setResult("Error");
      }
    },
    clear: () => {
      setStack([]);
      setResult(null);
    },
  };

  return (
    <div
      id="calculator"
      className="lg:max-h-[600px] lg:max-w-[600px] h-full w-full flex flex-col p-1 md:p-3 lg:p-4"
    >
      <Display value={display} />
      <Keypad handlers={handlers} />
    </div>
  );
};

export default Calculator;
