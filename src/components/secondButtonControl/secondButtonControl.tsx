import { observer } from "mobx-react-lite";
import SecondButtonControlView from "./secondButtonControl.view";
import secondButtonControlStore from "./secondButtonControl.store";

function SecondButtonControl() {
  const leftClickHandler = () => {
    alert(secondButtonControlStore.title);
  };

  const rightClickHandler = () => {
    if (!/^\d+$/.test(secondButtonControlStore.title)) return;
    alert(secondButtonControlStore.title);
  };

  return (
    <SecondButtonControlView
      leftClickHandler={leftClickHandler}
      leftChangeText={secondButtonControlStore.setTitleNumbers}
      rightClickHandler={rightClickHandler}
      rightChangeText={secondButtonControlStore.setTitleText}
      title={secondButtonControlStore.title}
    />
  );
}

export default observer(SecondButtonControl);
