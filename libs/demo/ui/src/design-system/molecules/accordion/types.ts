export interface AccordionItem {
  id: string;
  title: string;
  isOpen?: boolean;
  content: JSX.Element;
}
