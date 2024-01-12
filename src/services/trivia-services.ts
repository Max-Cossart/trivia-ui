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
  return data.results;
};
