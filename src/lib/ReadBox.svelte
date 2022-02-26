<script lang="ts">
  import languages from "../languages";
  import {
  fontSize,
  language,
  prepareCountdown,
  prepared,
  started,
  testCountdown,
  tested,
  testTime,
  wordsRead
  } from "../stores";
  import Button from "./Button.svelte";

  export let resetAll: Function;

  let words: string[];

  function handleWordClick(i: number) {
    $wordsRead = i + 1;
  }

  // After preparing
  $: if ($prepared) {
    const { texts } = languages[$language];
    const i = Math.floor(Math.random() * texts.length);
    words = (texts[i] as string).split(" ").reduce((words, word) => {
      if (word) {
        words.push(word);
      }
      return words;
    }, []);
    testCountdown.start();
  }

  // On test end (any reason)
  $: if (!$started) {
    words = [];
  }
</script>

<div class="box" id="read-box">
  <p class="words" style={`font-size: ${$fontSize || "16px"}`}>
    {#if $wordsRead}
      <div class="content">
        <h2>Congratulations</h2>
        <p>
          You read with speed of <strong
            >{Math.round(($wordsRead / parseInt($testTime)) * 60)}</strong
          > words per minute
        </p>
        <Button on:click={() => resetAll()}>Reset</Button>
      </div>
    {:else if words.length}
      {#if $tested}
        {#each words as word, i}
          <span class="word" on:click={() => handleWordClick(i)}>
            {word}&nbsp;
          </span>
        {/each}
      {:else}
        {#each words as word}
          <span>{word}&nbsp;</span>
        {/each}
      {/if}
    {:else if $started && !$prepared}
      <div class="content">
        <h1>{$prepareCountdown}</h1>
      </div>
    {:else}
      This is just a test text.
      <br />
      Play around with settings above and try what font size and theme fit to you!
    {/if}
  </p>
</div>

<style lang="scss">
  @import "../styles/variables";

  .box {
    position: relative;
    background: var(--bg-shade-color);
    border-radius: 0.5rem;
    padding: 2rem;
    height: 30rem;
    overflow-y: auto;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    gap: 2rem;

    h1 {
      font-size: 7rem;
    }
  }

  .words {
    display: flex;
    flex-wrap: wrap;
  }

  .word {
    animation: flash 0.3ms ease-in-out;
    cursor: pointer;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: $primary-color;
    }
  }

  @keyframes flash {
    0% {
      color: inherit;
    }
    50% {
      color: $primary-color;
    }
    100% {
      color: inherit;
    }
  }
</style>
