interface Props {
  register: any;
  label: string;
  name: string;
  color: string;
}
const Radio = ({ register, label, name, color }: Props) => {
  return (
    <div className="w-32 mx-4">
      <input
        className="sr-only peer"
        id={name}
        value={name}
        type="radio"
        {...register("difficulty")}
      />
      <label
        className={`p-4 text-xl text-white border-2 border-${color} bg-${color} rounded-xl transition-all ease flex justify-center hover:border-black cursor-pointer duration-200 peer-checked:border-black`}
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};

export default Radio;
