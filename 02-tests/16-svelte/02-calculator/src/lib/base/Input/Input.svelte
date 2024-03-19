<script lang="ts">
  import "./styles.scss";
  export let value = "";
  export let label = "Input field";
  export let placeholder = "...";
  export let type = "text";
  export let onChange = (value: string) => {};
</script>

<div class="custom-input">
  <label for={label}>{label}</label>
  <input
    id={label}
    {type}
    {placeholder}
    {value}
    on:change={(ev) => onChange(ev.currentTarget.value)}
  />
</div>
