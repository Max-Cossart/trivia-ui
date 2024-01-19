import { Category } from "../../../App";

interface SelectProps {
  register: any;
  category: any;
}

const Select = ({ register, category }: SelectProps) => {
  return (
    <select
      {...register("category")}
      className="text-xl border border-sky-900 p-3 rounded-xl text-center"
    >
      <option value="">Random</option>
      {category?.map((category: Category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
