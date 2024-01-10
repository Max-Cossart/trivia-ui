import { useForm } from "react-hook-form";
import { fetchQuestions } from "../../services/trivia-services";
import { useEffect, useState } from "react";
import Radio from "../../components/Form/Radio/Radio";

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
          <Radio
            register={register}
            label="Random"
            name="random"
            color="pink-500"
          />
          <Radio
            register={register}
            label="Easy"
            name="easy"
            color="green-600"
          />
          <Radio
            register={register}
            label="Medium"
            name="medium"
            color="orange-400"
          />
          <Radio register={register} label="Hard" name="hard" color="red-600" />
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
