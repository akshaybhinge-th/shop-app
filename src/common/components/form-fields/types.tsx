import { ChangeEvent } from "react";
export interface IInputProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  labelText: string;
  labelFor: string;
  id: string;
  name: string;
  type: string;
  isRequired?: boolean;
  placeholder?: string;
  customClass?: string;
}