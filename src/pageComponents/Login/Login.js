import React from 'react';
import { Link } from 'react-router-dom';
import "./login.css";
import "../Home/main.css"
import "../Home/util.css"
import "../../assets/static/vendor/bootstrap/css/bootstrap.min.css"
import "../../assets/static/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "../../assets/static/fonts/iconic/css/material-design-iconic-font.min.css"
import "../../assets/static/vendor/animate/animate.css"
import "../../assets/static/vendor/animsition/css/animsition.min.css"
import "../../assets/static/vendor/daterangepicker/daterangepicker.css"
import "../../assets/static/vendor/select2/select2.min.css"
const Login = () => {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-49">Login</span>

            <div
              className="wrap-input100 validate-input m-b-23"
              data-validate="Username is required"
            >
              <span className="label-input100">Username</span>
              <input
                className="input100"
                type="text"
                name="username"
                id="username"
                placeholder="Type your username"
              />
              <span className="focus-input100" data-symbol="&#xf206;"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <span className="label-input100">Password</span>
              <input
                className="input100"
                type="password"
                name="pass"
                id="password"
                placeholder="Type your password"
              />
              <span className="focus-input100" data-symbol="&#xf190;"></span>
            </div>

            <div className="text-right p-t-8 p-b-31">
              <a href="#">Forgot password?</a>
            </div>

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button className="login100-form-btn">Login</button>
              </div>
            </div>

            <div className="txt1 text-center p-t-54 p-b-20">
              <span>Or Sign Up Using</span>
            </div>

            <div className="flex-c-m">
              <a href="#" className="login100-social-item bg1">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="login100-social-item bg2">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="login100-social-item bg3">
                <i className="fa-brands fa-google"></i>
              </a>
            </div>

            <div className="flex-col-c p-t-155">
              <span className="txt1 p-b-17">Or Sign Up Using</span>
              <Link to="/registration" className="txt2">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login ;