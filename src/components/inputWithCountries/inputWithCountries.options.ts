import { CountryInfo } from "../../api/apiService";

export type InputWithCountriesViewProps = {
  setValue: (value: string) => void;
  itemsLimit: number;
  value: string;
  items: CountryInfo[];
};
