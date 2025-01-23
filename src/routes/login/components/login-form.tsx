import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { LOGIN_FIELDS } from "../constants/form-fields.js";
import { loginByEmail } from "../../../lib/appwrite.js";
import { UserAuthContext } from "../../../providers/user-auth-provider/user-auth-context.js";

import FormAction from "../../../components/auth/form-action.js";
import Input from "../../../components/auth/form-Input.js";
import { useIsUserLoggedIn } from "../../../hooks/auth/user-auth.js";

// Define the type for each field in loginFields
interface LoginField {
  id: string;
  labelText: string;
  labelFor: string;
  name: string;
  type: string;
  isRequired: boolean;
  placeholder: string;
}
type RedirectLocationState = {
  redirectTo: Location;
};

// Type the fields array
const fields: LoginField[] = LOGIN_FIELDS;

// Create an initial state object where each field's value is an empty string
const initialFieldState: Record<string, string> = {};
fields.forEach((field) => {
  initialFieldState[field.id] = "";
});

const Login: React.FC = (): JSX.Element => {
  const { user, setUser } = useContext(UserAuthContext);
  const isUserLoggedIn = useIsUserLoggedIn();
  const [loginState, setLoginState] =
    useState<Record<string, string>>(initialFieldState);
  const { state: locationState } = useLocation();
  const navigate = useNavigate();

  // Handle input changes and update state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  /**
   * Authenticates a user using their email and password.
   * If the user is authenticated successfully, logs the user in
   * and redirects them to the original location they tried to access
   * before being redirected to the login page, or to the home page
   * If authentication fails, displays an error message.
   */
  const authenticateUser = (): void => {
    try {
      const res = loginByEmail(
        loginState["email-address"],
        loginState.password
      );
      toast.success("Logged In Successfully!");
      setUser(res);
      if (locationState) {
        // state is any by default
        const { redirectTo } = locationState as RedirectLocationState;
        navigate(`${redirectTo.pathname}`);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error while logging in!");
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (isUserLoggedIn) {
      navigate("/");
    } else {
      authenticateUser();
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      {/* <FormExtra /> */}
      <FormAction handleSubmit={() => {}} text="Login" />
    </form>
  );
};

export default Login;
