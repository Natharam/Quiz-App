const questions = [
  {
    question: "Which candy is NOT made by Mars?",
    answers: ["Almond Joy", "M&M's", "Twix", "Snickers"],
    correct: "Almond Joy",
    questionId: "1",
  },
  {
    question:
      "Which company did Valve cooperate with in the creation of the Vive?",
    answers: ["HTC", "Oculus", "Google", "Razer"],
    correct: "HTC",
    questionId: "2",
  },
  {
    question: "What's the name of Batman's  parents?",
    answers: [
      "Thomas & Martha",
      "Joey & Jackie",
      "Jason & Sarah",
      "Todd & Mira",
    ],
    correct: "Thomas & Martha",
    questionId: "3",
  },
  {
    question: "What is the most common surname Wales?",
    answers: ["Jones", "Williams", "Davies", "Evans"],
    correct: "Jones",
    questionId: "4",
  },
  {
    question: "In which fast food chain can you order a Jamocha Shake?",
    answers: ["Arby's", "McDonald's", "Burger King", "Wendy's"],
    correct: "Arby's",
    questionId: "5",
  },
  {
    question:
      "What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?",
    answers: [
      "Demolition",
      "The Dream Team",
      "The Bushwhackers",
      "The British Bulldogs",
    ],
    correct: "Demolition",
    questionId: "6",
  },
  {
    question: "What is the first book of the Old Testament?",
    answers: ["Genesis", "Exodus", "Leviticus", "Numbers"],
    correct: "Genesis",
    questionId: "7",
  },
  {
    question: "In past times, what would a gentleman keep in his fob pocket?",
    answers: ["Watch", "Money", "Keys", "Notebook"],
    correct: "Watch",
    questionId: "8",
  },
  {
    question: "What is the largest organ of the human body?",
    answers: ["Skin", "Heart", "large Intestine", "Liver"],
    correct: "Skin",
    questionId: "9",
  },
  {
    question: "On a dartboard, what number is directly opposite No. 1?",
    answers: ["19", "20", "12", "15"],
    correct: "19",
    questionId: "10",
  },
];

// const sortedQues = (n = 5) =>
// Promise.resolve(questions.sort(() => 0.5 - Math.random()).slice(0, n));

// export default sortedQues;

export default (n = 5) =>
  Promise.resolve(questions.sort(() => 0.5 - Math.random()).slice(0, n));
