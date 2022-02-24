<script lang="ts">
  export let value = "";
  export let disabled = false;
</script>

<select bind:value {disabled}><slot /></select>

<style lang="scss">
  @import "../styles/variables";

  select {
    font-size: 1rem;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    color: var(--text-color);
    background: var(--bg-shade-color);
    font-family: $body-family;
    cursor: pointer;
    outline: none;
    border: none;

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  }
</style>
