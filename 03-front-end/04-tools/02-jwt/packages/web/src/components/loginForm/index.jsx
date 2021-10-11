import React from "react";

import TextInput from "../../template/TextInput/index";
import "./style.sass"

const LoginForm = () => (
  <form className="login-form">
    <TextInput label="name" />
    <TextInput label="password" />
  </form>
);

export default LoginForm;
