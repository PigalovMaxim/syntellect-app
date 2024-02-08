import DropdownMenu from "../dropdownMenu";
import styles from "./inputWithDropdown.module.css";
import { InputWithDropdownViewProps } from "./inputWithDropdown.options";

export default function InputWithDropdownView({
  value,
  setValue,
  ...props
}: InputWithDropdownViewProps) {
  return (
    <div className={styles.wrapper}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.input}
      />
      <DropdownMenu {...props} />
    </div>
  );
}
