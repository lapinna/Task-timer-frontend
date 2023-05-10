import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useRouter } from 'next/router';
import styles from "../Form.module.scss";
import RegisterForm from "../register/RegisterForm";
import UserOperations from "../../../graphql/operations/user"

interface AuthProps {
  isLogin: boolean;
  toogle: () => void;
}

type LoginFormValues = {
  email: string;
  password: string;
}

const LoginForm: React.FC<AuthProps> = ({ isLogin, toogle }) => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<LoginFormValues>();

  const [loginUser] = useMutation(UserOperations.Mutations.LOGIN_USER)

  const submitData = async ({ email, password }: LoginFormValues) => {
    try {
      await loginUser({ variables: { email, password } });
      router.push("/profile");
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className={styles.formWrapper}>
      {isLogin ? (
        <form onSubmit={handleSubmit(submitData)}>
          <h2>Welcome Back!</h2>
          <fieldset>
            <legend>Log In</legend>
            <div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" {...register("email")} required />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input type="password" {...register("password")} required />
              </div>
            </div>
          </fieldset>
          <button type="submit">Login</button>
          <button type="button" onClick={() => toogle()}>Create an Account</button>
        </form>
      ) : (
        <RegisterForm btnHaveAccount={() => toogle()} />
      )}
    </div>
  )
};

export default LoginForm;