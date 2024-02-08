import { observer } from "mobx-react-lite";
import inputWithCountriesStore from "./inputWithCountries.store";
import InputWithCountriesView from "./inputWithCountries.view";
import { debounce } from "lodash";
import { useCallback, useMemo } from "react";

function InputWithCountries({ itemsLimit }: { itemsLimit: number }) {
  const store = useMemo(() => new inputWithCountriesStore(), []);

  const debounsedGetCountries = useCallback(
    debounce(store.getCountries, 500),
    []
  );

  const setValue = (value: string) => {
    store.setValue(value);
    debounsedGetCountries();
  };

  return (
    <InputWithCountriesView
      onItemClick={(name) => {
        console.log(name)
        store.setValue(name);
        store.clearCountries();
      }}
      setValue={setValue}
      itemLimit={itemsLimit}
      value={store.value}
      items={store.items}
    />
  );
}

export default observer(InputWithCountries);
