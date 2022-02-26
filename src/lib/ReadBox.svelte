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
  } from "../stores";

  const initialCountdown = 3;
  let words: string[];
  let countdown = initialCountdown;
  let interval: NodeJS.Timer;

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
    console.table("fdfd", words);
    testCountdown.start();
  }

  // // On test coundown end
  // $: if ($tested) {
  //   words = words
  //     .split(" ")
  //     .map((word) => `<span class="word">${word}</span>`)
  //     .join(" ");
  // }

  // On test end (any reason)
  $: if (!$started) {
    words = [];
  }
</script>

<div class="box" id="read-box">
  <p class="words" style={`font-size: ${$fontSize || "16px"}`}>
    {#if words.length}
      {#if $tested}
        {#each words as word}
          <span class="word">{word}&nbsp;</span>
        {/each}
      {:else}
        {#each words as word}
          <span>{word}&nbsp;</span>
        {/each}
      {/if}
    {:else if $started && !$prepared}
      <div class="countdown"><h1>{$prepareCountdown}</h1></div>
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

  .countdown {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    display: grid;
    place-content: center;

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
