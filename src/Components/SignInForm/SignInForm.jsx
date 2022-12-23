import React from "react";
import s from "./SignInForm.module.css";

const SignInForm = () => {
  return (
    <div className={"signingIn"}>
      <div className={s.loggin_box}>
        <h2>Login</h2>
        <form>
          <div className={s.user_box}>
            <input type="text" name="required" />
            <label>Username</label>
          </div>
          <div className={s.user_box}>
            <input type="password" name="required" />
            <label>Password</label>
          </div>

          <div className={s.button_form}>
            <a id={s.submit} href="#">
              Submit
            </a>
            <div id={s.register}>
              Don't have an account?
              <a href="#">Register</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
