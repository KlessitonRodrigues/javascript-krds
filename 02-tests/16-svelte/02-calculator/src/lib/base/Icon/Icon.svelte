<script>
  import "./styles.scss";
  export let white = false;
  export let size = 0;
  export let onClick = () => {};
  const width = size ? `width: ${size * 0.2 + "rem"};` : "";
</script>

<div class={`icon ${white && "icon-white"}`} style={width} on:click={onClick}>
  <slot />
</div>
