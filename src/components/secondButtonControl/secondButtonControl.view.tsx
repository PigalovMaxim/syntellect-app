import ButtonControl from "../buttonControl";
import styles from "./secondButtonControl.module.css";

export default function SecondButtonControlView({
  title,
  leftClickHandler,
  rightClickHandler,
  leftChangeText,
  rightChangeText,
}: {
  title: string;
  leftClickHandler: () => void;
  rightClickHandler: () => void;
  leftChangeText: () => void;
  rightChangeText: () => void;
}) {
  return (
    <ButtonControl
      leftChildren={
        <>
          <button className={styles.button} onClick={leftClickHandler}>
            Alert всего
          </button>
          <button className={styles.button} onClick={leftChangeText}>
            Создателю не захотелось добавлять инпут в этот контрол, простите его
            и кликните сюда, что бы заменить title на цифры
          </button>
        </>
      }
      rightChildren={
        <>
          <button className={styles.button} onClick={rightClickHandler}>
            Alert числа
          </button>
          <button className={styles.button} onClick={rightChangeText}>
            Создателю не захотелось добавлять инпут в этот контрол, простите его
            и кликните сюда, что бы заменить title на текст
          </button>
        </>
      }
      title={title}
    />
  );
}
