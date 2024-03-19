<script>
  import Toast from "$lib/base/Toast/Toast.svelte";
  import Header from "$lib/components/Header/Header.svelte";
  import "../styles/app.scss";
</script>

<Header />
<slot />
<Toast />
