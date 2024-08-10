import Button from "components/Button";

const Keypad = ({ handlers }) => {
  const rowClasses =
    "flex flex-1 h-1/5 justify-between pt-1 gap-1 md:pt-2 md:gap-2 lg:pt-3 lg:gap-3 text-xs md:text-2xl lg:text-3xl align-middle";
  return (
    <div
      id="keypad"
      className="w-full h-4/5 flex flex-col"
      // className="w-full h-4/5 flex flex-col space-y-2 justify-between"
    >
      <div className={rowClasses}>
        <Button value={1} handler={handlers.button} />
        <Button value={2} handler={handlers.button} />
        <Button value={3} handler={handlers.button} />
        <Button value={"C"} handler={handlers.clear} />
      </div>
      <div className={rowClasses}>
        <Button value={4} handler={handlers.button} />
        <Button value={5} handler={handlers.button} />
        <Button value={6} handler={handlers.button} />
        <Button value={"/"} handler={handlers.button} />
      </div>
      <div className={rowClasses}>
        <Button value={7} handler={handlers.button} />
        <Button value={8} handler={handlers.button} />
        <Button value={9} handler={handlers.button} />
        <Button value={"*"} handler={handlers.button} />
      </div>
      <div className={rowClasses}>
        <Button value={0} handler={handlers.button} />
        <Button value={"."} handler={handlers.button} />
        <Button value={"-"} handler={handlers.button} />
        <Button value={"+"} handler={handlers.button} />
      </div>
      <div className={rowClasses}>
        <Button value={"="} handler={handlers.equal} />
      </div>
    </div>
  );
};

export default Keypad;
