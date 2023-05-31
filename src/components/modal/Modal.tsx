import styles from "./Modal.module.scss";
import NewTaskForm from "../form/newTask.tsx/NewTaskForm";

const Modal = ({ closeModal }: any) => {
  return (
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className={styles.title}>
          <h1>New task</h1>
        </div>
        <div className={styles.body}>
          <NewTaskForm />
        </div>
      </div>
  )
}

export default Modal;