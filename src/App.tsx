import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [questions, setQuestions] = useState();

  const getApi = async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=10");
    const data = await response.json();
    console.log(data.results);
    return data.results;
  };

  getApi();

  return (
    <>
      <Header />
    </>
  );
}

export default App;
