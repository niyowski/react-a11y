export interface Tab {
  id: string;
  icon?: JSX.Element;
  title: string;
  children?: React.ReactNode;
}
