import ButtonControl from "../buttonControl";
import styles from "./firstButtonControl.module.css";

export default function FirstButtonControlView({
  title,
  clearTitle,
  setTitle,
}: {
  title: string;
  clearTitle: () => void;
  setTitle: () => void;
}) {
  return (
    <ButtonControl
      rightChildren={
        <>
          <button className={styles.button} onClick={clearTitle}>
            Очистить
          </button>
          <button className={styles.button} onClick={setTitle}>
            Hello World!
          </button>
        </>
      }
      title={title}
    />
  );
}
