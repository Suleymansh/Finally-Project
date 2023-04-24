import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import log from "../assets/img/login.png"


const Login = ({ user, setUser} ) => {
  const {t}=useTranslation();
      const name = useRef();
    const pass = useRef();

 const navigate = useNavigate();

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.current.value === "Sehla@gmail.com" && pass.current.value === "Sehla123") {
      localStorage.setItem("nameData", "Sheila");
      localStorage.setItem("passData", "sehla123");
      navigate("/");
    } else {   
        alert("Please fill all the places");
    }
  };
   


  return (
    <>
    
   <div class="container">
        <div class="contact-box">
          <div class="leftl">
            <img src={log} alt="err" />
          </div>
          <div class="rightl">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <input
                ref={name}
                type="email"
                class="field"
                placeholder={t("contact.3")}
              />
              <input
                ref={pass}
                type="password"
                class="field"
                placeholder="Password"
              />

              <button type="submit" class="btnsen">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
