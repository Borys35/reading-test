<script lang="ts">
  export let disabled = false;
  export let href: string = "";
  export let style: string = "";
</script>

{#if href}
  <a {href} {disabled} {style} target="_blank" class="btn"><slot /></a>
{:else}
  <button on:click {disabled} {style} class="btn"><slot /></button>
{/if}

<style lang="scss">
  @import "../styles/variables";

  .btn {
    display: inline-block;
    font-size: 1.25rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: bold;
    color: $white-text;
    background: $primary-gradient;
    font-family: $body-family;
    cursor: pointer;
    outline: none;
    border: none;
    box-shadow: 0 0 1.5rem rgba($primary-color, 0.2);
    transition: box-shadow 0.15s ease-in-out;

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }

    &:hover:not(:disabled) {
      box-shadow: 0 0 1.5rem rgba($primary-color, 0.5);
    }
  }
</style>
