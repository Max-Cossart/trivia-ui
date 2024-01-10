import { useForm } from "react-hook-form";
import { fetchQuestions } from "../../services/trivia-services";
import { useEffect, useState } from "react";

const NewGame = () => {
  const [questions, setQuestions] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: {},
  } = useForm();
  const watchDifficulty = watch("difficulty", false);

  const formSubmit = async (data: any) => {
    setQuestions(await fetchQuestions(data.difficulty));
  };

  const handleChange = () => {
    console.log("hello");
  };

  useEffect(() => {
    console.log(questions);
  }, [, questions]);

  return (
    <div className="flex items-center flex-col">
      <p className="m-8 text-xl">
        Please select the difficulty you would like to play below.
      </p>
      <form
        onSubmit={handleSubmit((data) => formSubmit(data))}
        className="flex flex-col items-center"
      >
        <div className="flex">
          <div className="w-32 mx-4">
            <input
              className="sr-only peer"
              id="random"
              value="random"
              type="radio"
              {...register("difficulty")}
            />
            <label
              className="p-4 text-xl text-white border-2 border-pink-500 bg-pink-500 rounded-xl transition-all ease flex justify-center hover:border-black cursor-pointer duration-200 peer-checked:border-black "
              htmlFor="random"
            >
              Random
            </label>
          </div>
          <div className="w-32 mx-4">
            <input
              className="sr-only peer"
              id="easy"
              value="easy"
              type="radio"
              {...register("difficulty")}
            />
            <label
              htmlFor="easy"
              className="p-4 text-xl text-white border-2 border-green-600 bg-green-600 rounded-xl transition-all ease flex justify-center hover:border-black duration-200 peer-checked:border-black"
            >
              Easy
            </label>
          </div>
          <div className="w-32 mx-4">
            <input
              className="sr-only peer"
              id="medium"
              value="medium"
              type="radio"
              {...register("difficulty")}
            />
            <label
              className="p-4 text-xl text-white border-2 border-orange-400 bg-orange-400 rounded-xl transition-all ease flex justify-center hover:border-black duration-200 peer-checked:border-black"
              htmlFor="medium"
            >
              Medium
            </label>
          </div>
          <div className="w-32 mx-4">
            <input
              className="sr-only peer"
              id="hard"
              value="hard"
              type="radio"
              {...register("difficulty")}
            />
            <label
              className="p-4 text-xl text-white border-2 border-red-600 bg-red-600 rounded-xl transition-all ease flex justify-center hover:border-black duration-200 peer-checked:border-black"
              htmlFor="hard"
            >
              Hard
            </label>
          </div>
        </div>
        {!watchDifficulty ? (
          <div className="mt-12 py-2 px-12 border-2 border-sky-900 rounded-xl bg-sky-900 text-white text-xl hover:border-black cursor-not-allowed ">
            New Game
          </div>
        ) : (
          <button
            className="mt-12 py-2 px-12 border-2 border-sky-900 rounded-xl bg-sky-900 text-white text-xl hover:border-black cursor-pointer "
            type="submit"
          >
            New Game
          </button>
        )}
      </form>
    </div>
  );
};

export default NewGame;
