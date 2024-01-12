export const fetchQuestions = async (difficulty: string) => {
  if (difficulty == "random") {
    const response = await fetch("https://opentdb.com/api.php?amount=10");
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } else {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`
    );
    const data = await response.json();
    console.log(data);
    return data.results;
  }
};
