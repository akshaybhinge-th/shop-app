import React, { FC } from "react";

interface IFormActionProps {
  handleSubmit: (event: React.FormEvent<HTMLButtonElement>) => void; 
  action?: "submit" | "button" | "reset";
  text: string; 
}

const FormAction: FC<IFormActionProps> = ({
  handleSubmit,
  action = "submit",
  text,
}): JSX.Element => {
  return (
    <button
      type={action}
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
      onClick={handleSubmit}
    >
      {text}
    </button>
  );
};

export default FormAction;
