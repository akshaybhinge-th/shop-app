import { FC } from "react";

import Header from "../../components/auth/auth-header";
import Login from "./components/login-form";

const LoginPage: FC = (): JSX.Element => {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Login header */}
        <Header
          heading="Login to your account"
          paragraph="Don't have an account yet?"
          linkName="Signup"
          linkUrl="/signup"
        />
        {/* Login form */}
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
