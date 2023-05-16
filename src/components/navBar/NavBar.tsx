import { useRouter } from "next/router";
import styles from "./NavBar.module.scss";
import SearchBar from "../searchBar/SearchBar";
import { useState } from "react";
import Searchresult from "../SearchResult/Searchresult";

const NavBar = () => {
  const router = useRouter();

  const currentUser = JSON.parse(localStorage.getItem("loggedInUser")!);
  const currentUserUsername = currentUser.data.loginUser.user.username;

  const [results, setResults] = useState<string[]>([]);

  const handleLogout = () => {
    try {
      localStorage.removeItem("loggedInUser");
      router.push("/");
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className={styles.navBarWrapper}>
      <div>
        <h2>Hello, {currentUserUsername}</h2>
        <button>Update</button>
      </div>
      <SearchBar results={results} setResults={setResults} />
      <div>
        {
          results.map((result, index) => {
            return <Searchresult result={result} key={index} />
          })
        }
      </div>
      <div>
        <button>Add new</button>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
};

export default NavBar;
