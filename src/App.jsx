import { useState } from "react";

// square component
const Square = ({ value, onSquareClick }) => {
  return (
    <>
      <button
        onClick={onSquareClick}
        className="bg-white border border-gray-300 rounded-md w-12 h-12 m-1 leading-9 text-lg "
      >
        {value}
      </button>
    </>
  );
};

//  board component
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  console.log(squares);

  const handleClick = (i) => {
    const nextSquare = squares.slice();
    nextSquare[i] = "X";
    setSquares(nextSquare);
  };

  return (
    <>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
