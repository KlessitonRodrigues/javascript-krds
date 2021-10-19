import React, { useState } from "react";

import TextInput from "../../template/textInput/index";
import DefaultButton from "../../template/defaultBtn/index";
import { postAuth } from "../../data/api/auth";
import "./style.sass";

function handleSubmit(formData) {
  postAuth(formData).then((res) => console.log(res));
}

const LoginForm = () => {
  const [form, setForm] = useState({ name: "", password: "" });

  return (
    <form className="login-form">
      <TextInput
        label="Name"
        value={form.name}
        onChange={(name) => setForm({ ...form, name })}
      />
      <TextInput
        label="Password"
        value={form.password}
        onChange={(password) => setForm({ ...form, password })}
      />
      <div className="lf__button-box">
        <DefaultButton label="Login" onClick={() => handleSubmit(form)} />
      </div>
    </form>
  );
};

export default LoginForm;
