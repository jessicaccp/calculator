import Button from "components/Button";

const Keypad = ({ handlers }) => {
  return (
    <>
      <Button value={0} handler={handlers.number} />
      <Button value={"+"} handler={handlers.operator} />
      <Button value={"C"} handler={handlers.clear} />
    </>
  );
};

export default Keypad;
