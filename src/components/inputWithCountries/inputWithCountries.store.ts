import { makeAutoObservable, runInAction } from "mobx";
import { CountryInfo, getCountryByName } from "../../api/apiService";

class CountriesInputHints {
  value: string = "";
  items: CountryInfo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setValue = (value: string) => {
    this.value = value;
  };

  clearCountries = () => {
    this.items = [];
  };

  getCountries = async () => {
    const data = await getCountryByName(this.value);
    runInAction(() => {
      this.items = data;
    });
  };
}

export default CountriesInputHints;
