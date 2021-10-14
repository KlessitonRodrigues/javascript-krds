import React from "react";

import TextInput from "../../template/textInput/index";
import DefaultButton from "../../template/defaultBtn/index";
import "./style.sass";

const LoginForm = () => (
  <form className="login-form">
    <TextInput label="name" />
    <TextInput label="password" />
    <div className="lf__button-box">
      <DefaultButton label="Login" onClick={() => {}} />
    </div>
  </form>
);

export default LoginForm;
