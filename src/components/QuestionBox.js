import React, { useState, useEffect } from "react";
import wrongAudio from "../assets/audio files/wrong-answer.mp3";
import correctAudio from "../assets/audio files/correct-answer.mp3";

const QuestionBox = ({
  question,
  no,
  options,
  correct,
  selected,
  bubbleHandler,
}) => {
  const [answers, setAnswers] = useState(options);
  const [clicked, setClicked] = useState(false);
  
  useEffect(() => {
    if (clicked) {
      if (answers == correct) {
        let value = true;
        bubbleHandler(value);
        document.getElementById("correct-audio").play();
      } else {
        let value = false;
        bubbleHandler(value);
        document.getElementById("wrong-audio").play();
      }
    }
  }, [answers]);

  return (
    <div className="questionBox">
      <div style={{ display: "none" }}>
        <audio src={correctAudio} id="correct-audio"></audio>
        <audio src={wrongAudio} id="wrong-audio"></audio>
      </div>
      <div className="question">
        Q.{no} {question}
      </div>
      {answers.map((text, index) => (
        <button
          key={index}
          id="answerBtn"
          onClick={() => {
            setAnswers([text]);
            selected(text);
            setClicked(true);
          }}
          disabled={clicked}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
