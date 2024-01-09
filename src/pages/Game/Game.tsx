import { useForm } from "react-hook-form";
import { fetchQuestions } from "../../services/trivia-services";
import { useEffect, useState } from "react";

const NewGame = () => {
  const [questions, setQuestions] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = async (data: any) => {
    setQuestions(await fetchQuestions(data.difficulty));
  };

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <div className="flex items-center flex-col">
      <p className="m-5">Please select the difficulty you would like to play</p>
      <form onSubmit={handleSubmit((data) => formSubmit(data))}>
        <div className="">
          <input
            className="sr-only peer"
            id="random"
            value=""
            type="radio"
            {...register("difficulty")}
          />
          <label
            className="m-4 p-4 text-xl text-white border-2 border-pink-500 bg-pink-500 rounded-xl transition-all ease hover:border-black duration-200 peer-checked:border-black "
            htmlFor="random"
          >
            Random
          </label>
        </div>
        <div>
          <input
            className="sr-only peer"
            id="easy"
            value="easy"
            type="radio"
            {...register("difficulty")}
          />
          <label
            htmlFor="easy"
            className="m-4 p-4 text-xl text-white border-2 border-green-600 bg-green-600 rounded-xl transition-all ease  hover:border-black duration-200 peer-checked:border-black"
          >
            easy
          </label>
        </div>
        <div>
          <input
            className="sr-only peer"
            id="medium"
            value="medium"
            type="radio"
            {...register("difficulty")}
          />
          <label
            className="m-4 p-4 text-xl text-white border-2 border-orange-400 bg-orange-400 rounded-xl transition-all ease  hover:border-black duration-200 peer-checked:border-black"
            htmlFor="medium"
          >
            Medium
          </label>
        </div>
        <div>
          <input
            className="sr-only peer"
            id="hard"
            value="hard"
            type="radio"
            {...register("difficulty")}
          />
          <label
            className="m-4 p-4 text-xl text-white border-2 border-red-600 bg-red-600 rounded-xl transition-all ease  hover:border-black duration-200 peer-checked:border-black"
            htmlFor="hard"
          >
            Hard
          </label>
        </div>
        <button className="border" type="submit">
          New Game
        </button>
        {/* {questions.map((question) => (
          <>
            <p>{question.question}</p>
            <p>{question.correct_answer}</p>
            {question.incorrect_answers.map((item) => (
              <>
                <p>item</p>
                <p>{item}</p>
              </>
            ))}
          </>
        ))} */}
      </form>
    </div>
  );
};

export default NewGame;
