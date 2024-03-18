<script>
  export let label = "Input field";
  export let placeholder = "...";
  export let type = "text";
</script>

<div class="custom-input">
  <label for={label}>{label}</label>
  <input id={label} {type} {placeholder} />
</div>

<style lang="scss">
  .custom-input {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      font-size: $fontLabel;
      color: $main;
      position: relative;
      top: 0.5rem;
      margin: 0 0 0 7px;
      padding: 0 size(2);
      background: $bg1;
      width: fit-content;
    }

    input {
      padding: size(4);
      border: $borderMedium;
      border-radius: $radiusSmall;
      background: $bg1;
    }

    input:focus {
      outline: none;
    }
  }
</style>
