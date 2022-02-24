<script lang="ts">
  import languages from "../languages";
  import { fontSize, language, started, testTime } from "../stores";
  import Field from "./Field.svelte";
  import Select from "./Select.svelte";
</script>

<div class="settings">
  <Field label="Font size">
    <Select bind:value={$fontSize} disabled={$started}>
      <option value="14px">14px</option>
      <option value="16px">16px</option>
      <option value="18px">18px</option>
      <option value="20px">20px</option>
    </Select>
  </Field>
  <Field label="Test time">
    <Select bind:value={$testTime} disabled={$started}>
      <option value={`${60}`}>1 min</option>
      <option value={`${60 * 2}`}>2 min</option>
      <option value={`${60 * 5}`}>5 min</option>
    </Select>
  </Field>
  <Field label="Language">
    <Select bind:value={$language} disabled={$started}>
      {#each Object.entries(languages) as [value, { name }]}
        <option {value}>{name}</option>
      {/each}
    </Select>
  </Field>
</div>

<style lang="scss">
  @import "../styles/variables";

  .settings {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: $bp-desktop) {
      flex-direction: row;
    }
  }
</style>
