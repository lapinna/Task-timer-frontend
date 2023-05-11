import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import styles from "../Form.module.scss";
import { FormData } from "../../../util/types.js";
import UserOperations from "../../../graphql/operations/user";
import { useRouter } from "next/router";

const RegisterForm = () => {
  const router = useRouter();

  const schema: ZodType<FormData> = z
    .object({
      username: z.string().min(2).max(50),
      email: z.string().email(),
      password: z.string().min(7).max(30),
      confirmPassword: z.string().min(7).max(30),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [registerUser] = useMutation(UserOperations.Mutations.REGISTER_USER);

  const submitData = async ({ username, email, password }: FormData) => {
    try {
      const user = await registerUser({ variables: { username, email, password } });
      if(user) {
        router.push("/profile");
      }
    } catch (error) {
      console.log("onSubmit error", error);
    }
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit(submitData)}>
        <h2>Sign Up!</h2>
        <fieldset>
          <legend>Create Account</legend>
          <div>
            <label htmlFor="username">Full name:</label>
            <input type="text" id="username" {...register("username")} />
            {errors.username && <span>{errors.username.message}</span>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" {...register("password")} />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm password:</label>
            <input type="password" id="confirmPassword" {...register("confirmPassword")} />
            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
          </div>
        </fieldset>
        <button type="submit">Create</button>
        <Link href={"/"}><button type="button">Have an Account?</button></Link>
      </form>
    </div>
  )
};

export default RegisterForm;