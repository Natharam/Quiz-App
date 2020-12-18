import React from "react";
import { Link } from "react-router-dom";

const Result = ({score, playAgain}) => (
  <div className="score-board">
    <div className="score">You scored {score} / 5 correct answers!</div>
    <Link to="/" className="playBtn" onClick={playAgain}>
      Play again!
    </Link>
  </div>
);

export default Result;
