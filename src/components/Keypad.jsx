import Button from "components/Button";

const Keypad = ({ handlers }) => {
  return (
    <div id="keypad" className="h-3/4 bg-red-300">
      <Button value={0} handler={handlers.button} />
      <Button value={1} handler={handlers.button} />
      <Button value={2} handler={handlers.button} />
      <Button value={3} handler={handlers.button} />
      <Button value={4} handler={handlers.button} />
      <Button value={5} handler={handlers.button} />
      <Button value={6} handler={handlers.button} />
      <Button value={7} handler={handlers.button} />
      <Button value={8} handler={handlers.button} />
      <Button value={9} handler={handlers.button} />
      <Button value={"+"} handler={handlers.button} />
      <Button value={"-"} handler={handlers.button} />
      <Button value={"*"} handler={handlers.button} />
      <Button value={"/"} handler={handlers.button} />
      <Button value={"="} handler={handlers.equal} />
      <Button value={"C"} handler={handlers.clear} />
    </div>
  );
};

export default Keypad;
