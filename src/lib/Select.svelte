<script lang="ts"></script>

<select><slot /></select>

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
  }
</style>
