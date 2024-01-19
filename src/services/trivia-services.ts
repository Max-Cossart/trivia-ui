import { decode } from "html-entities";
import { Question } from "../App";
import { randomiseAnswers } from "./randomise-answers";

export const fetchQuestions = async (difficulty: string, category: string) => {
  let data;

  if (difficulty == "random" && category == "") {
    const response = await fetch("https://opentdb.com/api.php?amount=10");
    data = await response.json();
  } else if (difficulty != "random" && category == "") {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`
    );
    data = await response.json();
  } else if (difficulty == "random" && category != "") {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}`
    );
    data = await response.json();
  } else if (difficulty != "random" && category != "") {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`
    );
    data = await response.json();
  }

  const decodedData = data.results.map((item: Question) => {
    return {
      ...item,
      category: decode(item.category),
      correct_answer: decode(item.correct_answer),
      allAnswers: randomiseAnswers([
        ...item.incorrect_answers.map((answer) => decode(answer)),
        decode(item.correct_answer),
      ]),
      question: decode(item.question),
    };
  });
  console.log(decodedData);
  return decodedData;
};

export const fetchCategories = async () => {
  let data;
  const response = await fetch("https://opentdb.com/api_category.php");
  data = await response.json();
  return data.trivia_categories;
};
