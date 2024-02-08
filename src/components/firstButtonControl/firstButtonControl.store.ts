import { makeAutoObservable } from "mobx";

class FirstControlStore {
  title: string = "Сотри меня";

  constructor() {
    makeAutoObservable(this);
  }

  clearTitle = () => {
    this.title = "";
  };

  setTitle = () => {
    this.title = "Hello World!";
  };
}

export default new FirstControlStore();
