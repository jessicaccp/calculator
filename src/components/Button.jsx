const Button = ({ value, handler }) => {
  return (
    <>
      <input
        value={value}
        onClick={handler}
        type="button"
        className="flex flex-1 bg-yellow-100 h-full rounded"
        // className={
        //   value === "="
        //     ? "flex-1 bg-blue-500 text-white text-sm md:text-base lg:text-lg rounded hover:bg-blue-600 active:bg-blue-700"
        //     : "flex-1 bg-gray-200 text-sm md:text-base lg:text-lg rounded hover:bg-gray-300 active:bg-gray-400"
        // }
      />
    </>
  );
};

export default Button;
