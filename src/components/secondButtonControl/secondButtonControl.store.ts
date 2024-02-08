import { makeAutoObservable } from "mobx";

class SecondControlStore {
  title: string = "Сотри меня";

  constructor() {
    makeAutoObservable(this);
  }

  setTitleNumbers = () => {
    this.title = "23123";
  };

  setTitleText = () => {
    this.title = "Тест текст";
  };
}

export default new SecondControlStore();
