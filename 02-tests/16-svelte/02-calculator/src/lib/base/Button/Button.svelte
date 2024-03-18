<script lang="ts">
  import "./styles.scss";
  export let type: "submit" | "button" = "button";
</script>

<button {type} class="button">
  <span>
    <slot />
  </span>
</button>
