import { FC } from "react";
import { Link, useRouteError } from "react-router-dom";

interface IErrorType {
  status?: number;
  statusText?: string;
}

const ErrorComponent: FC = (): JSX.Element => {
  const err = useRouteError() as IErrorType;
  
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
            {err.status}
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            Something's missing.
          </p>

          {/* Custom error message for 404 page */}
          <p className="mb-4 text-lg font-light text-gray-500">
            {err?.statusText === "Not Found"
              ? `Sorry, we can't find that page. You'll find lots to explore on the
            home page.`
              : err?.statusText}
          </p>
          <Link
            to="/"
            className="inline-flex text-gray-900 bg-blue-200 hover:bg-blue-300 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ErrorComponent;
