import { useContext, useState } from "react";
import styles from "./UserProfileData.module.scss";
import { AuthContext } from "@/context/AuthContext";
import SearchBar from "../searchBar/SearchBar";
import Timer from "../timer/Timer";
import Modal from "../modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import TaskOperations from "../../graphql/operations/task";
import { getTasks, getAllTasks } from "@/redux/features/taskSlice";

const UserProfileData = () => {
  const { user } = useContext(AuthContext);
  //const tasks = user?.tasks;

  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  if (user) {
    const fetchTasks = () => {
      const { data } = useQuery(TaskOperations.Query.GET_TASKS, { variables: { userId: user?._id } });
      dispatch(getTasks(data));
    }
    fetchTasks();
  };

  const tasks = user? useSelector(getAllTasks) : [];

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
              tasks ? (tasks.getTasks.map((task: any, index: any) => {
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