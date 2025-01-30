import { ReactNode } from "react";
export interface ICustomDrawerProps {
  open: boolean,
  togglePanelState: () => void
  title: string;
  children: ReactNode;
}