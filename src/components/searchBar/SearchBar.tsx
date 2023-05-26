import { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./SearchBar.module.scss";
import { AuthContext } from "@/context/AuthContext";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const { user } = useContext(AuthContext);
  const tasks = user?.tasks

  const filteredTasks = tasks?.filter((task: any) => {
    return task.title.includes(searchInput)
  });

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchBarWrapper}>
        <BsSearch />
        <input
          onChange={handleInput}
          value={searchInput}
          type="search"
          placeholder="Type to search..."
        />
      </div>
      {/* {searchInput &&
        <div className={styles.searchResultWrapper}>
          <ul>
            {
              filteredTasks?.map((result: any, index: any) => {
                return (
                  <div key={index} >
                    <li><a href="#">{result.title}</a></li>
                    <span>spentTime</span>
                    <div>
                      <button>Start</button>
                      <button>Pause</button>
                      <button>Stop</button>
                    </div>
                  </div>
                )
              })
            }
          </ul>
        </div>
      } */}
    </div>
  );
};

export default SearchBar;