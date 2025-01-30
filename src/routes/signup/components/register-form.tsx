import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createAccountByEmail } from "../../../lib/appwrite.js";
import { ISignupField } from "../../../components/auth/types.js";
import { SIGNUP_FIELDS } from "../constants/form-fields.js";

import FormAction from "../../../components/auth/form-action.js";
import Input from "../../../components/auth/form-Input.js";

const fields: ISignupField[] = SIGNUP_FIELDS;

// Create an initial state object where each field's value is an empty string
const initialFieldState: Record<string, string> = {};
fields.forEach((field) => {
  initialFieldState[field.id] = "";
});

const Signup: FC = (): JSX.Element => {
  const [signupState, setSignupState] =
    useState<Record<string, string>>(initialFieldState);

  const navigate = useNavigate();

  /**
   * Handles input changes and updates the state of the signup form.
   * @param {ChangeEvent<HTMLInputElement>} e - The input change event.
   * @returns {void} - No return value.
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };

  const createAccount = (): void => {
    try {
      createAccountByEmail(signupState);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Handles form submission for the signup form.
   * Prevents the default form submission behavior, and initiates the account creation process.
   *
   * @param {FormEvent<HTMLFormElement>} e - The form submission event.
   * @returns {void} - No return value.
   */

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    createAccount();
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={() => {}} text="Signup" />
      </div>
    </form>
  );
};

export default Signup;
