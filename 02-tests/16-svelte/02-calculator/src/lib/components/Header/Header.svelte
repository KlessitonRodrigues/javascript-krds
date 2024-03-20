<script lang="ts">
  import "./styles.scss";
  import IoLogoGithub from "svelte-icons/io/IoLogoGithub.svelte";
  import IoMdCalculator from "svelte-icons/io/IoIosCalculator.svelte";
  import Icon from "$lib/base/Icon/Icon.svelte";
  import Text from "$lib/base/Text/Text.svelte";
  import { changeLanguage, getLanguage } from "../../../utils/i18n";
  const lang = getLanguage();
</script>

<header class="header">
  <div class="row">
    <Icon white size={12}>
      <IoMdCalculator />
    </Icon>
    <h1>
      <Text path="title_text" />
    </h1>
  </div>

  <div class="row gap-6">
    <div class="lang-btn row">
      {#if lang === "pt"}
        <b aria-hidden="true" on:click={() => changeLanguage("en")}>EN</b>
      {:else}
        <b aria-hidden="true" on:click={() => changeLanguage("pt")}>PT</b>
      {/if}
    </div>

    <div class="row">
      <Icon white size={7}>
        <IoLogoGithub />
      </Icon>
      <div>GitHub</div>
    </div>
  </div>
</header>
