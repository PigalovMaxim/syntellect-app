import React from "react";
import styles from "./App.module.css";
import FirstButtonControl from "./components/firstButtonControl";
import SecondButtonControl from "./components/secondButtonControl";
import InputWithCountries from "./components/inputWithCountries";

function App() {
  return (
    <div className={styles.App}>
      <FirstButtonControl />
      <SecondButtonControl />
      <div className={styles.inputs}>
        <InputWithCountries itemsLimit={3} />
        <InputWithCountries itemsLimit={10} />
      </div>
    </div>
  );
}

export default App;
