import React, {useState} from "react";

const QuestionContainer = ({question, options, selected}) => {
  const [answer, setAnswer] = useState(options);
  console.log(question, options, selected);
  return (
    <div className="questionContainer">
      <div className="question">{question}</div>
      {answer && answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionContainer;
