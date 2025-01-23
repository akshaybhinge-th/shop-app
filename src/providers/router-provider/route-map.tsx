import { RouteObject } from "react-router-dom";

import AppLayout from "../../routes/home";
import CheckoutPage from "../../routes/checkout";
import ErrorComponent from "../../components/error";
import LoginPage from "../../routes/login";
import PrivateRoute from "../../components/route-guard";
import ProductsList from "../../routes/products";
import SignupPage from "../../routes/signup";

export const RouteMap: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/checkout",
            element: <CheckoutPage />
          }
        ]
      },
      {
        path: "/",
        element: <ProductsList />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
];
