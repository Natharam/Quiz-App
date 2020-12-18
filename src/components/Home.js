import React from "react";
import QuestionBox from "./QuestionBox";
import { NavLink } from "react-router-dom";

const Home = ({
  randomQuestion,
  showBubble,
  response,
  showBubbleHandler,
  computeAnswer,
}) => {
  return (
    <div>
      {randomQuestion.length > 0 &&
        randomQuestion.map(
          ({ question, answers, correct, questionId }, index) => (
            <QuestionBox
              key={questionId}
              no={index + 1}
              question={question}
              options={answers}
              correct={correct}
              showBubble={showBubble}
              bubbleHandler={showBubbleHandler}
              selected={(answer) => {
                computeAnswer(answer, correct);
              }}
            />
          )
        )}
      {response === 5 ? (
        <div className="show-result">
          <NavLink to="/result">See Result</NavLink>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
