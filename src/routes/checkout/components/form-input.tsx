import { FC } from "react";

interface IFormInputProps {
  label: string;
  name: string;
  type?: string;
  formMethods: any;
  required?: boolean;
}

const FormInput: FC<IFormInputProps> = ({
  label,
  name,
  type = "text",
  formMethods,
  required,
}) => {
  const {
    register,
    formState: { errors },
  } = formMethods;

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700"
        aria-required={required}
      >
        {label}
      </label>
      <input
        type={type}
        {...register(name, {
          required: required ? `${name} is required` : false,
        })}
        id={name}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      {errors[name] && (
        <span className="text-xs text-red-500">{errors[name].message}</span>
      )}
    </div>
  );
};

export default FormInput;
