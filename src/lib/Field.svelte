<script lang="ts">
  export let label: string;
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label>{label}<slot /></label>

<style lang="scss">
  label {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
</style>
