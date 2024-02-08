import { DropdownProps } from "./dropdownMenu.options";
import DropdownMenuView from "./dropdownMenu.view";

export default function DropdownMenu({ isOpen, ...props }: DropdownProps) {
  if (!isOpen) return null;
  return <DropdownMenuView {...props} />;
}
