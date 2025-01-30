import { FC } from "react";

import { IInputProps } from "./types";
import { Fixed_Input_Class } from "./constants";

const InputTest: FC<IInputProps> = ({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder = "",
  customClass = "",
}) => {
  return (
    <div className="my-5">
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={`${Fixed_Input_Class} ${customClass}`} // Combine base and custom classes
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputTest;
