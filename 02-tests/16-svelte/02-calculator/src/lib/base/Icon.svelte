<script>
  export let white = false;
  export let size = 0;
  const width = size ? `width: ${size * 0.2 + "rem"};` : "";
</script>

<div class={`icon ${white && "white"}`} style={width}>
  <slot />
</div>

<style lang="scss">
  .icon {
    width: size(8);
    color: $text1;
    cursor: pointer;

    &.white {
      color: $white;
    }
  }
</style>
