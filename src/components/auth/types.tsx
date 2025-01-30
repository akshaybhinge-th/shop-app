import { FormEvent, ChangeEvent, ReactNode } from "react";

export interface IHeaderProps {
  readonly heading: string;
  readonly paragraph: string;
  readonly linkName: string;
  readonly linkUrl?: string;
}

export interface IFormActionProps {
  handleSubmit: (event: FormEvent<HTMLButtonElement>) => void;
  action?: "submit" | "button" | "reset";
  text: string;
}

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

export interface ILoginField {
  id: string;
  labelText: string;
  labelFor: string;
  name: string;
  type: string;
  isRequired: boolean;
  placeholder: string;
}
export type RedirectLocationState = {
  redirectTo: Location;
};

export interface ISignupField {
  id: string;
  labelText: string;
  labelFor: string;
  name: string;
  type: string;
  isRequired: boolean;
  placeholder: string;
}

export interface IUserAuthContextType {
  user: object;
}

export interface IUserAuthProviderProps {
  children: ReactNode;
}
