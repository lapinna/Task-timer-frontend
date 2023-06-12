import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./UserProfileData.module.scss";
import { AuthContext } from "@/context/AuthContext";
import SearchBar from "../searchBar/SearchBar";
import Timer from "../timer/Timer";
import Modal from "../modal/Modal";
import { getTasks } from "@/redux/features/taskSlice";

const UserProfileData = () => {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const tasks = user?.tasks;

  useEffect(() => {
    dispatch(getTasks(tasks));
  }, [dispatch])

  const data = useSelector((state: any) => state.tasks.tasks)

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
              data ? (data.map((task: any, index: any) => {
                return (
                  <div key={index} className={styles.taskWrapper}>
                    <div className={styles.taskTitleWrapper}>
                      <li>{task.title}</li>
                    </div>
                    <Timer />
                  </div>
                )
              })) : (<h2>No tasks</h2>)
            }
          </ol>
        </div>
      )}
    </div>
  )
};

export default UserProfileData;