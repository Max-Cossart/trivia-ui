interface AnswerProps {
  answer: string;
  register: any;
}

const Answers = ({ answer, register }: AnswerProps) => {
  return (
    <div className="w-1/2 flex items-center">
      <input
        className="scale-125 flex"
        type="radio"
        id={answer}
        value={answer}
        {...register("answerSubmitted")}
      />
      <label htmlFor={answer} className="text-xl flex m-4">
        {answer}
      </label>
    </div>
  );
};

export default Answers;
