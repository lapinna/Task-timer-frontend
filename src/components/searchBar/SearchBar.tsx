import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ setResults }: any) => {
  const [searchInput, setSearchInput] = useState("");
  const tasks = [
    { title: "create searchbar" },
    { title: "add button" },
    { title: "filter tasks" },
  ];

  const fetchData = (value: any) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user: any) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value));
        });
        console.log(results)
        setResults(results);
      });
  };

  if (searchInput.length > 0) {
    tasks.filter((task) => {
      return task.title.includes(searchInput);
    });
  };

  const handleChange = (value: any) => {
    setSearchInput(value);
    fetchData(value);
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