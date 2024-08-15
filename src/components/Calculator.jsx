import Keypad from "components/Keypad";
import Display from "components/Display";
import { useEffect, useState } from "react";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [history, setHistory] = useState([]);
  const [stack, setStack] = useState([0]);
  const [display, setDisplay] = useState(0);
  const [result, setResult] = useState(null);

  const operators = ["+", "-", "*", "/"];

  useEffect(() => {
    setDisplay(result === null ? stack : result);
  }, [stack, result]);

  const handlers = {
    button: (event) => {
      if (result !== null) setResult(null);

      const current = event.target.value;
      const last = stack[stack.length - 1];
      const size = stack.length;

      // if stack = 0
      if (size === 1 && Number(last) === 0) {
        // it can't be 00, so it'll continue as 0
        if (Number(current) === 0) return;
        // it can't be only . or +, so it'll be 0. or 0+
        if (current === "." || operators.includes(current))
          setStack([...stack, current]);
        // if value is a number, it'll be the new stack
        else setStack([current]);
      } else {
        if (size > 1) {
          // if 0 is preceded by another number, it'll add another 0
          const penultimate = stack[size - 2];
          if (
            Number(current) === 0 &&
            Number(last) === 0 &&
            !Number.isInteger(Number(penultimate))
          )
            return;

          // a point can't be preceded by another point or an operator
          // in the case of an operator, a 0 will be added before the point
          if (current === "." && last === ".") return;
          if (current === "." && operators.includes(last))
            setStack([...stack, "0", current]);
          else {
            // an operator can't be preceded by another operator
            if (operators.includes(current)) {
              if (!Number.isInteger(Number(last))) stack.pop();
              setStack([...stack, current]);
            } else {
              setStack([...stack, current]);
            }
          }
        } else {
          setStack([...stack, current]);
        }
      }
    },
    equal: () => {
      setHistory([...history, ...stack]);

      const last = stack[stack.length - 1];
      if (last === "." || operators.includes(last)) stack.pop();
      try {
        setResult(evaluate(stack.join("")));
      } catch (error) {
        setResult("Error");
      }
      setStack([0]);
    },
    clear: () => {
      setStack([0]);
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
