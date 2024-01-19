import { useForm } from "react-hook-form";
import { fetchQuestions } from "../../services/trivia-services";
import { useEffect, useState } from "react";
import Radio from "../../components/Form/Radio/Radio";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import Button from "../../components/Button/Button";
import { Question } from "../../App";
import Finish from "../../components/Finish/Finish";

const NewGame = () => {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    questions[questionIndex]
  );
  const [submittedAnswer, setSubmittedAnswer] = useState("");
  const [lost, setLost] = useState(false);

  const { register, handleSubmit, watch } = useForm();
  const watchDifficulty = watch("difficulty", false);

  const formSubmit = async (data: any) => {
    setQuestions(await fetchQuestions(data.difficulty));
  };

  useEffect(() => {
    setCurrentQuestion(questions[questionIndex]);
  }, [questions, questionIndex]);

  useEffect(() => {
    if (submittedAnswer != "") {
      console.log(questionIndex);
      submittedAnswer == currentQuestion?.correct_answer
        ? setQuestionIndex(questionIndex + 1)
        : setLost(true);
    }
  }, [submittedAnswer]);

  const tryAgain = () => {
    setQuestionIndex(0);
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
          />
          <Radio
            register={register}
            label="Medium"
            name="medium"
            border="border-orange-400"
            background="bg-orange-400"
          />
          <Radio
            register={register}
            label="Hard"
            name="hard"
            border="border-red-600"
            background="bg-red-600"
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
  ) : questionIndex != 10 ? (
    lost != true ? (
      <QuestionCard
        category={currentQuestion?.category}
        question={currentQuestion?.question}
        allAnswers={currentQuestion?.allAnswers}
        setSubmittedAnswer={setSubmittedAnswer}
        submittedAnswer={submittedAnswer}
      />
    ) : (
      <div className="flex flex-col w-full items-center">
        <Finish
          questionIndex={questionIndex}
          message="Game Over, you scored"
          emoji="😔"
        />
        <div className="flex flex-row w-1/4 justify-between">
          <Button type="onClick" text="Try Again" method={tryAgain} />
          <Button
            type="onClick"
            text="New Game"
            method={() => window.location.reload()}
          />
        </div>
      </div>
    )
  ) : (
    <div className="flex flex-col items-center">
      <Finish
        questionIndex={questionIndex}
        message="Congratulations, You won"
        emoji="🥳"
      />
      <Button
        type="onClick"
        text="New Game"
        method={() => window.location.reload()}
      />
    </div>
  );
};

export default NewGame;
