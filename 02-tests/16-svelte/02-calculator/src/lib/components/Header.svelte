<script>
  import IoLogoGithub from "svelte-icons/io/IoLogoGithub.svelte";
  import IoMdCalculator from "svelte-icons/io/IoIosCalculator.svelte";
  import Row from "$lib/base/Row.svelte";
  import Icon from "$lib/base/Icon.svelte";
</script>

<header class="header">
  <Row>
    <Icon white size={12}>
      <IoMdCalculator />
    </Icon>
    <h1>Calculator App</h1>
  </Row>

  <Row>
    <Icon white size={10}>
      <IoLogoGithub />
    </Icon>
    <div>GitHub</div>
  </Row>
</header>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: size(3) size(8);
    background-color: $mainBg;
    color: $mainText;
  }
</style>
