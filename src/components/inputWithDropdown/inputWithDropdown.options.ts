import { DropdownProps } from "../dropdownMenu/dropdownMenu.options";

export type InputWithDropdownProps = Omit<DropdownProps, "isOpen"> & {
  value: string;
  setValue: (value: string) => void;
};

export type InputWithDropdownViewProps = InputWithDropdownProps &
  Pick<DropdownProps, "isOpen">;
