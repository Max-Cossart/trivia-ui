interface FinishProps {
  questionIndex: number;
  emoji: string;
  message: string;
}

const Finish = ({ questionIndex, emoji, message }: FinishProps) => {
  return (
    <div
      className="flex flex-col items-center
    "
    >
      <h4 className="text-2xl p-4">
        {message} {questionIndex}/10!
      </h4>
      <p className="text-9xl pb-12">{emoji}</p>
    </div>
  );
};

export default Finish;
