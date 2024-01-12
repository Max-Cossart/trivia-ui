import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface QuestionCardProps {
  category: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  setSubmittedAnswer: any;
}

const QuestionCard = ({
  category,
  question,
  correctAnswer,
  incorrectAnswers,
  setSubmittedAnswer,
}: QuestionCardProps) => {
  const { register, handleSubmit } = useForm();

  const formSubmit = (data: any) => {
    setSubmittedAnswer(data.answerSubmitted);
  };

  return (
    <div className="max-w-3xl flex flex-col items-center mx-auto my-12 border overflow-hidden border-sky-900 rounded-xl p-8">
      <p className="text-xl">{category}</p>
      <p className="text-xl p-4">
        {question && question.includes("&quot;")
          ? question.replace(/&quot;/g, '"')
          : question}
      </p>
      <form
        onSubmit={handleSubmit((data) => formSubmit(data))}
        className="flex flex-col items-center"
      >
        <div className="flex flex-wrap justify-around w-full">
          <div className="w-1/2">
            <input
              className="scale-125 m-4"
              type="radio"
              id={correctAnswer}
              value={correctAnswer}
              {...register("answerSubmitted")}
            />
            <label htmlFor={correctAnswer} className="text-xl">
              {correctAnswer}
            </label>
          </div>
          {incorrectAnswers?.map((item) => (
            <div key={item} className="w-1/2">
              <input
                className="scale-125 m-4"
                type="radio"
                id={item}
                value={item}
                {...register("answerSubmitted")}
              />
              <label htmlFor={item} className="text-xl">
                {item}
              </label>
            </div>
          ))}
        </div>
        <button
          className="mt-8 py-2 px-8 text-xl border border-sky-900 rounded-xl ease duration-100 hover:bg-sky-900 hover:text-white active:scale-95"
          type="submit"
        >
          Submit Answer
        </button>
      </form>
    </div>
  );
};

export default QuestionCard;
