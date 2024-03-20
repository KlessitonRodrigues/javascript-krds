<script>
  import { ENContent } from "../../../constants/i18n/EN";
  import { PTContent } from "../../../constants/i18n/PT";
  import { getLanguage } from "../../../utils/i18n";

  const lang = getLanguage();
  export let path = "";
</script>

{#if lang === "pt"}
  {PTContent[path] || "NO_TEXT"}
{:else}
  {ENContent[path] || "NO_TEXT"}
{/if}
