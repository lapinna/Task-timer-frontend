import { useState } from "react";
import LoginForm from "@/components/form/login/LoginForm";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toogleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
        <LoginForm isLogin={isLogin} toogle={toogleAuth} />
    </div>
  )
}

export default Home;