export interface ICustomDrawerProps {
  open: boolean,
  togglePanelState: () => void
  title: string;
  children: React.ReactNode;
}