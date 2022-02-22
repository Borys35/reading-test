<script lang="ts"></script>

<button><slot /></button>

<style lang="scss">
  @import "../styles/variables";

  button {
    font-size: 1.25rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: bold;
    color: $black-text;
    background: $primary-gradient;
    font-family: $body-family;
    cursor: pointer;
    outline: none;
    border: none;
  }
</style>
