import { CountryInfo } from "../../api/apiService";

export type DropdownProps = {
  items: CountryInfo[];
  itemLimit: number;
  isOpen: boolean;
  onItemClick?: (name: string) => void;
};

export type DropdownViewProps = Omit<DropdownProps, "isOpen">;
