import { FC } from "react";
import Header from "../../components/auth/auth-header";
import Signup from "./components/register-form";

const SignupPage: FC = (): JSX.Element => {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Signup header */}
        <Header
          heading="Signup to create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/login"
        />
        {/* Signup form */}
        <Signup />
      </div>
    </div>
  );
};

export default SignupPage;
