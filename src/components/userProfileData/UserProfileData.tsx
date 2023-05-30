import { useContext } from "react";
import styles from "./UserProfileData.module.scss";
import { AuthContext } from "@/context/AuthContext";
import SearchBar from "../searchBar/SearchBar";
import Timer from "../timer/Timer";

const UserProfileData = () => {
  const { user } = useContext(AuthContext);
  const tasks = user?.tasks;

  return (
    <div className={styles.userProfileDataWrapper}>
      <SearchBar />
      <div className={styles.tasksHeading}>
        <h2>Your latest tasks: </h2>
        <button>Add new</button>
      </div>
      <div className={styles.tasksWrapper}>
        <ol>
          {
            tasks?.map((task: any, index: any) => {
              return (
                <div key={index} className={styles.taskWrapper}>
                  <div className={styles.taskTitleWrapper}>
                    <li>{task.title}</li>
                  </div>
                  <Timer/>
                </div>
              )
            })
          }
        </ol>
      </div>
    </div>
  )
};

export default UserProfileData;