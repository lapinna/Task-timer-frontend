import { useContext } from "react";
import styles from "./UserProfileData.module.scss";
import { AuthContext } from "@/context/AuthContext";
import SearchBar from "../searchBar/SearchBar";

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
                  <div><span>spentTime</span></div>
                  <div className={styles.taskButtonsWrapper}>
                    <div><button>Start</button></div>
                    <div><button>Pause</button></div>
                    <div><button>Stop</button></div>
                  </div>
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