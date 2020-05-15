import React from "react";
import Header from "./components/Header";
import UserLogin from './components/UserLogin';
import "./styles.scss";

const Login: React.FC = () => {
  return (
    <div className="login">
      <Header />
      <UserLogin />
    </div>
  );
};

export default Login;
