import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../utils/images";
import LoginForm from "../../components/Forms/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="bg-white w-screen h-screen flex flex-col md:flex-row">
      <div className="w-full h-1/4 md:w-2/5 md:h-full relative">
        <img
          src={IMAGES.bg}
          alt="Logo"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 translate-y-1 translate-x-0 md:translate-x-1 md:translate-y-0 bg-gradient-to-t md:bg-gradient-to-l from-white via-white/60 to-white/0"></div>
      </div>
      <div className="w-full h-3/4 md:w-3/5 md:h-full flex items-center justify-center  ">
        <div className="w-[90%] max-w-[400px] md:w-3/5 h-3/4 min-h-[500px] md:min-w-[400px] md:max-w-none p-2 gap-4 rounded-2xl flex flex-col items-center justify-evenly md:shadow ">
          <img src={IMAGES.logo} className="w-56" alt="Logo" />
          <h1 className="text-primary font-bold text-lg md:text-2xl text-center capitalize w-3/4">
            restaurant management system Admin Login
          </h1>
          <LoginForm />
          <div className="w-3/4 min-w-56 flex justify-between text-sm text-text">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-primary" /> Remember me
            </label>
            <Link to="/forgot-password" className="hover:underline">
              Forget password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
