import { useMutation } from "@apollo/client";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "@/context/AuthContext";
import TaskOperations from "@/graphql/operations/task";
import styles from "./NewTaskForm.module.scss";

type NewTaskFormValues = {
  title: string;
}

const NewTaskForm = () => {
  const { user } = useContext(AuthContext);
  const [createTask] = useMutation(TaskOperations.Mutations.CREATE_TASK);

  const { register, handleSubmit, reset } = useForm<NewTaskFormValues>();

  const submitData = async ({ title }: NewTaskFormValues) => {
    try {
      const userId: string = user?._id;
      await createTask({ variables: { userId, title } });
      alert("New task created successfully!");
      reset();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(submitData)} className={styles.newTaskContainer}>
      <input type="text" id="title" {...register("title")} placeholder="Description" required />
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewTaskForm;