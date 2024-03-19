<script lang="ts">
  import Button from "$lib/base/Button/Button.svelte";
  import Input from "$lib/base/Input/Input.svelte";
  import { onSubmit } from "./handlers";
  import "./styles.scss";

  const form: Forms.SingIn = {
    email: "",
    password: "",
  };
</script>

<form class="form" on:submit={() => onSubmit(form)}>
  <h1>Login</h1>
  <Input
    label="Email"
    placeholder="digite o email"
    value={form.email}
    onChange={(value) => (form.email = value)}
  />

  <div class="password">
    <Input
      type="password"
      label="Senha"
      placeholder="digite a senha"
      value={form.password}
      onChange={(value) => (form.password = value)}
    />
    <a href="/auth/recover">Recuperar senha</a>
  </div>
  <Button type="submit">Login</Button>
  <a href="/auth/signup">Criar Conta</a>
</form>
