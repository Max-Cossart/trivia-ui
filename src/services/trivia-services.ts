import { decode } from "html-entities";
import { Question } from "../App";

export const fetchQuestions = async (difficulty: string) => {
  let data;
  if (difficulty == "random") {
    const response = await fetch("https://opentdb.com/api.php?amount=10");
    data = await response.json();
  } else {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`
    );
    data = await response.json();
  }
  const decodedData = data.results.map((item: Question) => {
    return {
      ...item,
      correct_answer: decode(item.correct_answer),
      incorrect_answers: item.incorrect_answers.map((answer) => decode(answer)),
      question: decode(item.question),
    };
  });
  return decodedData;
};
