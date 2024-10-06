import { useState } from "react";

// square component
const Square = ({ value, onSquareClick }) => {
  return (
    <>
      <button
        onClick={onSquareClick}
        className="bg-white shadow-md font-bold border border-gray-400 rounded-md w-12 h-12 m-1 leading-9 text-lg "
      >
        {value}
      </button>
    </>
  );
};

//  board component
export const Board = ({ xIsNext, squares, onPlay }) => {
  // winner functionality
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner:  ${winner}`;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  // square value updater function
  const handleClick = (i) => {
    // toggle validation
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquare = squares.slice();
    // next value functionality
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    onPlay(nextSquare);
  };

  return (
    <>
      <h1 className="font-bold"> {status} </h1>
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

// Game Main Component
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXisNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquare = history[currentMove];

  function jumpTo(move) {
    setCurrentMove(move);
    setXisNext(move % 2 === 0);
  }

  function handlePlay(nextSquare) {
    setXisNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const moves = history.map((square, moveIdx) => {
    let description;
    if (moveIdx > 0) {
      description = `Go To Move #${moveIdx}`;
    } else {
      description = "Start The Game ";
    }

    return (
      <h3 className="text-left font-semibold " key={square}>
        <button onClick={() => jumpTo(moveIdx)}>{description}</button>
      </h3>
    );
  });
  return (
    <div className="flex justify-center gap-4 mt-10 mx-auto text-center">
      <div>
        <Board xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
      </div>
      <div>{moves}</div>
    </div>
  );
}

// winner utility function
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
