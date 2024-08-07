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
    <div id="calculator" className="flex flex-col h-1/2 w-1/2">
      <Display value={display} />
      <Keypad handlers={handlers} />
    </div>
  );
};

export default Calculator;
