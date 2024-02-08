import { observer } from "mobx-react-lite";
import FirstButtonControlView from "./firstButtonControl.view";
import firstButtonControlStore from "./firstButtonControl.store";

function FirstButtonControl() {
  return (
    <FirstButtonControlView
      clearTitle={firstButtonControlStore.clearTitle}
      setTitle={firstButtonControlStore.setTitle}
      title={firstButtonControlStore.title}
    />
  );
}

export default observer(FirstButtonControl);
