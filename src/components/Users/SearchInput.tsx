import { SyntheticEvent, useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import classes from "./Users.module.scss";
import CloseIcon from "../icons/CloseIcon";

type SearchInputType = {
  initialValue: string;
  setSearchCriteria: (v: string) => void;
};

function SearchInput({ initialValue, setSearchCriteria }: SearchInputType) {
  const [inputValue, setInputValue] = useState(initialValue);

  const debouncedValue = useDebounce(inputValue, 500);

  function changeHandler(e: SyntheticEvent<HTMLInputElement>) {
    const value = (e.target as HTMLInputElement).value;

    setInputValue(value);
  }

  useEffect(() => {
    setSearchCriteria(debouncedValue);
  }, [debouncedValue, setSearchCriteria]);

  return (
    <div className={classes.search_input_container}>
      <input
        name="search user"
        type="text"
        placeholder="Search by: name, surname, user id, user role, task id"
        value={inputValue}
        onChange={changeHandler}
      />
      <CloseIcon onClick={() => setInputValue("")} />
    </div>
  );
}

export default SearchInput;
