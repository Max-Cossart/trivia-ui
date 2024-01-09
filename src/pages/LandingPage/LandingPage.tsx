import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="mt-10 w-100vw flex items-center flex-col">
      <p className="text-xl">Welcome to Trivia Head!</p>
      <p className="text-xl my-4">
        Press the button below to start a new game.{" "}
      </p>
      <NavLink to={"/new"}>
        <button className="border-2 bg-sky-900 p-4 text-2xl text-white rounded-xl align-center w-max">
          Start New Game
        </button>
      </NavLink>
    </div>
  );
};

export default LandingPage;
