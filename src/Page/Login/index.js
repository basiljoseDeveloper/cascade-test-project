import React, { useState } from "react";
import * as validation from "../../Molecules/Validation";
import { useHistory } from "react-router-dom";
import "./login.css";
import Input from "../../Molecules/Input";
import { login } from "./action";
import { connect } from "react-redux";

const Login = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [credential, setCredential] = useState({ userName: "", password: "" });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredential({ ...credential, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (credential?.userName && credential?.password) {
      if (validation.EMAIL(credential?.userName, "username") && validation.PASSWORD(credential?.password) === true) {
        await props.login({ userName: credential.userName, password: credential.password });
        localStorage.setItem("isLoggedIn", true);
        history.push("/home");
      }
    }
  };

  return (
    <div id="login">
      <div className="container">
        <div id="login-row" className="row login-wrapper">
          <div id="login-column" className="col-12 col-md-6">
            <div id="login-box" className="col-12">
              <form id="login-form" className="form" onSubmit={(e) => handleSubmit(e)}>
                <div className="Logincontainer">
                  <h1>Login</h1>
                </div>
                <hr />
                <div className="login-field-wrapper">
                  <div className="w-100 px-2">
                    <Input
                      type="email"
                      className="form-control form-control-input"
                      placeholder={"Username"}
                      value={credential?.userName || ""}
                      onChange={handleChange}
                      name="userName"
                      maxLength="100"
                      isSubmitted={isSubmitted}
                    />
                    <Input
                      type="password"
                      name="password"
                      className="form-control form-control-input"
                      placeholder={"Password"}
                      maxLength="20"
                      value={credential?.password || ""}
                      onChange={handleChange}
                      isSubmitted={isSubmitted}
                    />
                  </div>
                </div>

                <button type="submit" className="form-control-btn">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (param) => dispatch(login(param)),
  };
};
export default connect(null, mapDispatchToProps)(Login);
