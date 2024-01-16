import { useForm } from "react-hook-form";
import { fetchQuestions } from "../../services/trivia-services";
import { useEffect, useState } from "react";
import Radio from "../../components/Form/Radio/Radio";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import Button from "../../components/Button/Button";
import { Question } from "../../App";

const NewGame = () => {
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    questions[count]
  );
  const [submittedAnswer, setSubmittedAnswer] = useState("");
  const [lost, setLost] = useState(false);

  const { register, handleSubmit, watch } = useForm();
  const watchDifficulty = watch("difficulty", false);

  const formSubmit = async (data: any) => {
    setQuestions(await fetchQuestions(data.difficulty));
  };

  useEffect(() => {
    setCurrentQuestion(questions[count]);
  }, [questions, count]);

  useEffect(() => {
    if (submittedAnswer != "") {
      console.log(count);
      submittedAnswer == currentQuestion?.correct_answer
        ? setCount(count + 1)
        : setLost(true);
    }
  }, [submittedAnswer]);

  const tryAgain = () => {
    setCount(0);
    setLost(false);
    setSubmittedAnswer("");
  };

  return questions.length == 0 ? (
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
            border="border-pink-500"
            background="bg-pink-500"
            type="difficulty"
          />
          <Radio
            register={register}
            label="Easy"
            name="easy"
            border="border-green-600"
            background="bg-green-600"
            type="difficulty"
          />
          <Radio
            register={register}
            label="Medium"
            name="medium"
            border="border-orange-400"
            background="bg-orange-400"
            type="difficulty"
          />
          <Radio
            register={register}
            label="Hard"
            name="hard"
            border="border-red-600"
            background="bg-red-600"
            type="difficulty"
          />
        </div>
        {!watchDifficulty ? (
          <div className="mt-12 py-2 px-12 border-2 border-sky-900 rounded-xl bg-sky-900 text-white text-xl hover:border-black cursor-not-allowed ">
            New Game
          </div>
        ) : (
          <Button type="submit" text="New Game" method={() => {}} />
        )}
      </form>
    </div>
  ) : count != 10 ? (
    lost != true ? (
      <QuestionCard
        category={currentQuestion?.category}
        question={currentQuestion?.question}
        correctAnswer={currentQuestion?.correct_answer}
        incorrectAnswers={currentQuestion?.incorrect_answers}
        setSubmittedAnswer={setSubmittedAnswer}
      />
    ) : (
      <>
        <p>You lose</p>
        <Button type="onClick" text="Try Again" method={tryAgain} />
        <Button
          type="onClick"
          text="New Game"
          method={() => window.location.reload()}
        />
      </>
    )
  ) : (
    <>
      <p>congrats</p>
      <Button
        type="onClick"
        text="New Game"
        method={() => window.location.reload()}
      />
    </>
  );
};

export default NewGame;
