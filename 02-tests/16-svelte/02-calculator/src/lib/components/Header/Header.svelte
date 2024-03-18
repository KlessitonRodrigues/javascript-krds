<script>
  import "./styles.scss";
  import IoLogoGithub from "svelte-icons/io/IoLogoGithub.svelte";
  import IoMdCalculator from "svelte-icons/io/IoIosCalculator.svelte";
  import Icon from "$lib/base/Icon/Icon.svelte";
</script>

<header class="header">
  <div class="row">
    <Icon white size={12}>
      <IoMdCalculator />
    </Icon>
    <h1>Calculator App</h1>
  </div>

  <div class="row">
    <Icon white size={10}>
      <IoLogoGithub />
    </Icon>
    <div>GitHub</div>
  </div>
</header>
