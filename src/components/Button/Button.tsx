interface ButtonProps {
  type: string;
  text: string;
  method: any;
}

const Button = ({ type, method, text }: ButtonProps) => {
  return (
    <div>
      {type == "submit" ? (
        <button
          className="mt-12 py-2 px-12 border-2 border-sky-900 rounded-xl bg-sky-900 text-white text-xl hover:border-black cursor-pointer"
          type="submit"
        >
          {text}
        </button>
      ) : (
        <button
          className="mt-12 py-2 px-12 border-2 border-sky-900 rounded-xl bg-sky-900 text-white text-xl hover:border-black cursor-pointer"
          onClick={method}
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
