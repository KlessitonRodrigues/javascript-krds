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
  <h1>Nova Conta</h1>
  <Input
    label="Email"
    placeholder="digite o email"
    value={form.email}
    onChange={(value) => (form.email = value)}
  />

  <Input
    type="password"
    label="Senha"
    placeholder="digite a senha"
    value={form.password}
    onChange={(value) => (form.password = value)}
  />

  <Input
    type="password"
    label="Confirmar Senha"
    placeholder="digite a mesma senha"
    value={form.password}
    onChange={(value) => (form.password = value)}
  />
  <Button type="submit">Criar conta</Button>
  <a href="/auth/signin">Entra com uma conta</a>
</form>
