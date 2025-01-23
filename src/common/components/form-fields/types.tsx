export interface IInputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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