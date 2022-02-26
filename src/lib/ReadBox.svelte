<script lang="ts">
  import languages from "../languages";
  import {
    fontSize,
    language,
    prepareCountdown,
    prepared,
    started,
    testCountdown,
  } from "../stores";

  const initialCountdown = 3;
  let text: string;
  let countdown = initialCountdown;
  let interval: NodeJS.Timer;

  // After preparing
  $: if ($prepared) {
    const { texts } = languages[$language];
    const i = Math.floor(Math.random() * texts.length);
    text = texts[i];
    testCountdown.start();
  }

  // On test end (any reason)
  $: if (!$started) {
    text = null;
  }
</script>

<div class="box" id="read-box">
  <p style={`font-size: ${$fontSize || "16px"}`}>
    {#if text}
      {text}
    {:else if $started && !$prepared}
      <div class="countdown"><span>{$prepareCountdown}</span></div>
    {:else}
      This is just a test text.
      <br />
      Play around with settings above and try what font size and theme fit to you!
    {/if}
  </p>
</div>

<style lang="scss">
  .box {
    position: relative;
    background: var(--bg-shade-color);
    border-radius: 0.5rem;
    padding: 2rem;
    height: 30rem;
    overflow-y: auto;
  }
  .countdown {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-weight: bold;
    font-size: 7rem;
    text-align: center;
    display: grid;
    place-content: center;
  }
</style>
