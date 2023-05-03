import styles from "./registerForm.module.scss"

const RegisterForm = () => {
  return (
    <div className={styles.formWrapper}>
    <form>
      <h2>Sign Up!</h2>
      <fieldset>
        <legend>Create Account</legend>
        <div>
          <label htmlFor="username">Full name:</label>
          <input type="text" id="username" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input type="password" id="confirmPassword" required />
        </div>
      </fieldset>
      <button>Create</button>
      <button>Have an Account?</button>
    </form>
  </div>
  )
}

export default RegisterForm