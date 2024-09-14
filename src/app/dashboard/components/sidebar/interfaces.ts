export interface MenuItemProps {
  title: string;
  icon: React.ReactElement;
  subItems?: { title: string; content: React.ReactNode }[];
  onItemClick?: (content: React.ReactNode) => void;
}
