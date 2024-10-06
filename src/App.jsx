import { useState } from "react";

const Square = () => {
  const [value, setValue] = useState(null);
  const handleClick = () => {
    setValue("X");
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="bg-white border border-gray-300 rounded-md w-12 h-12 m-1 leading-9 text-lg "
      >
        {value}
      </button>
    </>
  );
};
const Board = () => {
  return (
    <>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
};

export default Board;
