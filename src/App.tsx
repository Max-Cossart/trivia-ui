import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NewGame from "./pages/Game/Game";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [questions, setQuestions] = useState();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/new" element={<NewGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
