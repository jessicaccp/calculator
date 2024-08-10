const Display = ({ value }) => {
  return (
    <div
      id="display"
      className="bg-yellow-100 flex w-full h-1/5 p-4 items-center justify-end align-middle text-xl md:text-3xl lg:text-5xl text-red-950 rounded overflow-hidden"
    >
      {value}
    </div>
  );
};

export default Display;
