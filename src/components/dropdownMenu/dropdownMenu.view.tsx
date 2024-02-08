import { DropdownViewProps } from "./dropdownMenu.options";
import styles from "./dropdownMenu.module.css";

export default function DropdownMenuView({
  items,
  onItemClick,
  itemLimit,
}: DropdownViewProps) {
  return (
    <div className={styles.dropdown}>
      {items.slice(0, itemLimit).map((item) => (
        <div
          onClick={() => onItemClick?.(item.fullName)}
          className={styles.item}
          key={item.name}
        >
          <span>
            {item.name} | {item.fullName}
          </span>
          <img src={item.flag} alt="flag" />
        </div>
      ))}
    </div>
  );
}
