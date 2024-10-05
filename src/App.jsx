const Square = () => {
  return (
    <>
      <button className="bg-white border border-gray-300 rounded-md  w-12 h-12 m-1 leading-9 text-lg ">X</button>
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
