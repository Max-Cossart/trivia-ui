import "./App.css";
import Header from "./components/Header/Header";
import Game from "./pages/Game/Game";

export interface Question {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  allAnswers: string[];
  question: string;
  type: string;
}

function App() {
  return (
    <>
      <Header />
      <Game />
    </>
  );
}

export default App;
