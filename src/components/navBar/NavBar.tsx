import { useRouter } from "next/router";
import styles from "./NavBar.module.scss";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  const username = user?.username

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
        <h2>Hello, {username}</h2>
        <button>Update</button>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
};

export default NavBar;
