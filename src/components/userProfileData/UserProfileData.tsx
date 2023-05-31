import { useContext, useState } from "react";
import styles from "./UserProfileData.module.scss";
import { AuthContext } from "@/context/AuthContext";
import SearchBar from "../searchBar/SearchBar";
import Timer from "../timer/Timer";
import Modal from "../modal/Modal";

const UserProfileData = () => {
  const { user } = useContext(AuthContext);
  const tasks = user?.tasks;

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.userProfileDataWrapper}>
      <SearchBar />
      <div className={styles.tasksHeading}>
        <h2>Your latest tasks: </h2>
        <button onClick={() => { setOpenModal(true) }}>Add new</button>
      </div>
      {openModal ? (<Modal closeModal={setOpenModal} />) : (
        <div className={styles.tasksWrapper}>
          <ol>
            {
              tasks?.map((task: any, index: any) => {
                return (
                  <div key={index} className={styles.taskWrapper}>
                    <div className={styles.taskTitleWrapper}>
                      <li>{task.title}</li>
                    </div>
                    <Timer />
                  </div>
                )
              })
            }
          </ol>
        </div>
      )}
    </div>
  )
};

export default UserProfileData;