import { FC } from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/nav-bar";

const AppLayout:FC = (): JSX.Element => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
