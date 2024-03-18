<script>
  import Button from "$lib/base/Button.svelte";
  import Input from "$lib/base/Input.svelte";
</script>

<div class="form">
  <h1>Login</h1>
  <Input label="Email" placeholder="digite o email" />
  <div class="password">
    <Input label="Senha" placeholder="digite a senha" />
    <a href="/">Recuperar senha</a>
  </div>
  <Button>Login</Button>
  <a href="/">Criar Conta</a>
</div>

<style lang="scss">
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: size(6);
    width: 100%;
    max-width: size(120);
    margin: auto;
    padding: size(12);
    border-radius: $radiusLarge;
    box-shadow: $shadowMedium;

    h1 {
      color: $main;
      font-size: size(10);
    }

    .password {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: size(1);
      a {
        font-size: $fontVerySmall;
      }
    }
  }
</style>
