const Button = ({ value, handler }) => {
  return (
    <>
      <input value={value} onClick={handler} type="button" />
    </>
  );
};

export default Button;
