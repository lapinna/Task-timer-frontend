import { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./SearchBar.module.scss";
import { AuthContext } from "@/context/AuthContext";

const SearchBar = ({ setResults }: any) => {
  const [searchInput, setSearchInput] = useState("");
    const { user } = useContext(AuthContext);
    const tasks = user.tasks;

  // if (searchInput.length > 0) {
  //   tasks.filter((task: any) => {
  //     return task.title.includes(searchInput);
  //   });
  // };

  const handleChange = (value: any) => {
    setSearchInput(value);
    setResults(tasks);
  };

  return (
    <div className={styles.searchBarWrapper}>
      <BsSearch />
      <input
        onChange={(e) => handleChange(e.target.value)}
        value={searchInput}
        type="search"
        placeholder="Type to search..."
      />
    </div>
  );
};

export default SearchBar;