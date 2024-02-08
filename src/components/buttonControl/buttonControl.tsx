import styles from "./buttonControl.module.css";
import { ButtonControlProps } from "./buttonControl.options";

export default function ButtonControl({
  leftChildren,
  rightChildren,
  title,
}: ButtonControlProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonBlock}>
        {leftChildren}
      </div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.buttonBlock}>
        {rightChildren}
      </div>
    </div>
  );
}
