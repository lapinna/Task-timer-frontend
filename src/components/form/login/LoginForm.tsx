import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useRouter } from 'next/router';
import Link from "next/link";
import styles from "../Form.module.scss";
import UserOperations from "../../../graphql/operations/user";

type LoginFormValues = {
  email: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<LoginFormValues>();

  const [loginUser] = useMutation(UserOperations.Mutations.LOGIN_USER)

  const submitData = async ({ email, password }: LoginFormValues) => {
    try {
      const user = await loginUser({ variables: { email, password } });
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      router.push("/profile");
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit(submitData)} data-testid="loginForm">
          <h2>Welcome Back!</h2>
          <fieldset>
            <legend>Log In</legend>
            <div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" {...register("email")} required data-testid="emailInput"/>
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input type="password" {...register("password")} required data-testid="passwordInput"/>
              </div>
            </div>
          </fieldset>
          <button type="submit" data-testid="loginBtn">Login</button>
          <Link href={"/register"}><button type="button" data-testid="registerBtn">Create an Account</button></Link>
        </form>
    </div>
  )
};

export default LoginForm;