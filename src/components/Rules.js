import React from "react";
import { NavLink } from "react-router-dom";

const Rules = () => {
  return (
    <div className="rules">
      <h2>Rules</h2>
      <p className="right">
        1. For Every Correct Answer There Will Be Clapping Sound and Bubble Flying
        Animation.
      </p>
      <p className="wrong">
        2. For Every Wrong Answer There Will Be Warning Sound.
      </p>
      <p className="answer">
        3. After Selecting Answer, Only Selected Answer Will Be Left There.
      </p>
      <p className="wrong">
        4. After Selecting Correct Answer Wait For 3-4 Second To See Animation.
      </p>
      <p className="wrong">
        5. After Every Question Answer There Will Be Button Below To See Score.
      </p>
      <NavLink to="/home">
        Let's Start
      </NavLink>
    </div>
  );
};

export default Rules;
