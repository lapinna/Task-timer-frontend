import { useState } from "react";
import styles from "../Form.module.scss";
import RegisterForm from "../register/RegisterForm";

interface AuthProps {
  isLogin: boolean;
  toogle: () => void;
}

const LoginForm: React.FC<AuthProps> = ({ isLogin, toogle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("LOGIN SUCCESSFUL!")
  };

  return (
    <div className={styles.formWrapper}>
      {isLogin ? (
        <form onSubmit={handleSubmit}>
          <h2>Welcome Back!</h2>
          <fieldset>
            <legend>Log In</legend>
            <div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
            </div>
          </fieldset>
          <button type="submit">Login</button>
          <button onClick={() => toogle()}>Create an Account</button>
        </form>
      ) : (
        <RegisterForm btnHaveAccount={() => toogle()} />
      )}
    </div>
  )
};

export default LoginForm;