import { FC } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  readonly heading: string;
  readonly paragraph: string;
  readonly linkName: string;
  readonly linkUrl?: string;
}

const Header: FC<HeaderProps> = ({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}): JSX.Element => {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img alt="Logo" className="h-14 w-14" src="vite.svg" />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="text-center text-sm text-gray-600 mt-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-purple-600 hover:text-purple-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
export default Header
