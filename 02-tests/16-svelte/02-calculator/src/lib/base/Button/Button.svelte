<script lang="ts">
  import "./styles.scss";
  export let type: "submit" | "button" = "button";
  export let onClick = () => {};
</script>

<button {type} class="button" on:click={onClick}>
  <span>
    <slot />
  </span>
</button>
