import { InputWithDropdownProps } from "./inputWithDropdown.options";
import InputWithDropdownView from "./inputWithDropdown.view";

export default function InputWithDropdown({
  setValue,
  items,
  onItemClick,
  ...props
}: InputWithDropdownProps) {
  return (
    <InputWithDropdownView
      {...props}
      items={items}
      isOpen={items.length > 0}
      onItemClick={onItemClick}
      setValue={setValue}
    />
  );
}
