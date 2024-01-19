import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import Answers from "../Answers/Answers";

export interface QuestionCardProps {
  category: string;
  question: string;
  setSubmittedAnswer: any;
  allAnswers: string[];
  submittedAnswer: string;
}

const QuestionCard = ({
  category,
  question,
  setSubmittedAnswer,
  allAnswers,
}: QuestionCardProps) => {
  const { register, handleSubmit, watch } = useForm();
  const watchAnswer = watch("answerSubmitted", false);
  const formSubmit = (data: any) => {
    setSubmittedAnswer(data.answerSubmitted);
  };

  return (
    <div className="max-w-3xl flex flex-col items-center mx-auto my-12 border overflow-hidden border-sky-900 rounded-xl p-8">
      <p className="text-xl border-b border-sky-900">{category}</p>
      <p className="text-xl p-4">{question}</p>
      <form
        onSubmit={handleSubmit((data) => formSubmit(data))}
        className="flex flex-col items-center"
      >
        <div className="flex flex-wrap justify-around w-full">
          {allAnswers?.map((item) => (
            <Answers key={item} answer={item} register={register} />
          ))}
        </div>

        {!watchAnswer ? (
          <div className="mt-12 py-2 px-12 border-2 border-sky-900 rounded-xl bg-sky-900 text-white text-xl cursor-not-allowed">
            Submit Answer
          </div>
        ) : (
          <Button type="submit" text="Submit Answer" method={() => {}} />
        )}
      </form>
    </div>
  );
};

export default QuestionCard;
