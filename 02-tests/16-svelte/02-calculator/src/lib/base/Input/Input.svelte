<script lang="ts">
  import "./styles.scss";
  export let value = "";
  export let label = "Input field";
  export let placeholder = "...";
  export let type = "text";
  export let onchange = (value: string) => {};
</script>

<div class="custom-input">
  <label for={label}>{label}</label>
  <input
    id={label}
    {type}
    {placeholder}
    {value}
    on:change={(ev) => onchange(ev.currentTarget.value)}
  />
</div>
