<script lang="ts">
  import languages from "../languages";
  import { fontSize, language, started } from "../stores";

  let text: string;

  $: {
    if ($started) {
      const { texts } = languages[$language];
      const i = Math.floor(Math.random() * texts.length);
      text = texts[i];
    } else {
      text = null;
    }
  }
</script>

<div class="box">
  <p style={`font-size: ${$fontSize || "16px"}`}>
    {#if text}
      {text}
    {:else}
      This is just a test text.
      <br />
      Play around with settings above and try what font size and theme fit to you!
    {/if}
  </p>
</div>

<style lang="scss">
  .box {
    background: var(--bg-shade-color);
    border-radius: 0.5rem;
    padding: 2rem;
    max-height: 30rem;
    overflow-y: auto;
  }
</style>
