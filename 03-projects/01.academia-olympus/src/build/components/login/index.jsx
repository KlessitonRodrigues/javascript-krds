import React, { useCallback, useState } from "react";

import { userAuth } from "../../data/routes/auth";
import TextInput from "../../templates/textInput/index";
import Button from "../../templates/button/index";
import "./style.sass";

function handleSubmit(formData) {
  userAuth(formData).then((res) => {
    if (res.success) window.location.hash = "manager";
  });
}

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const setForm = (prop) => setFormData({ ...formData, ...prop });

  return (
    <div className="login-form">
      <h2 className="lf__title">Login</h2>
      <form>
        <TextInput
          type="email"
          title="Email"
          placeholder="exemplo@email.com"
          name="email"
          value={formData.email}
          onChange={(email) => setForm({ email })}
        />
        <TextInput
          type="password"
          title="Senha"
          name="password"
          value={formData.password}
          onChange={(password) => setForm({ password })}
        />
        <span className="lf__forget">
          <a>Esqueceu a senha?</a>
        </span>
        <Button text="Entrar" onClick={() => handleSubmit(formData)} />
      </form>
    </div>
  );
};

export default Login;
