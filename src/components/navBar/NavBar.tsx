import { useRouter } from "next/router";
import styles from "./NavBar.module.scss";
import SearchBar from "../searchBar/SearchBar";
import { useContext, useState } from "react";
import Searchresult from "../SearchResult/Searchresult";
import { AuthContext } from "@/context/AuthContext";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  const [results, setResults] = useState<string[]>([]);

  const handleLogout = () => {
    try {
      logout(user);
      router.push("/");
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className={styles.navBarWrapper}>
      <div>
        <h2>Hello, {user.username}</h2>
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
