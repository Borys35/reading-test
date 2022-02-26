<script lang="ts">
  import Button from "./lib/Button.svelte";
  import Container from "./lib/Container.svelte";
  import Layout from "./lib/Layout.svelte";
  import ReadBox from "./lib/ReadBox.svelte";
  import Settings from "./lib/Settings.svelte";
  import {
    prepareCountdown,
    prepared,
    started,
    testCountdown,
    tested,
    wordsRead,
  } from "./stores";

  function handleStartClick() {
    $started = true;
    prepareCountdown.start();
    document.getElementById("read-box").scrollIntoView();
  }

  function handleResetClick() {
    prepareCountdown.reset();
    testCountdown.reset();
    $wordsRead = 0;
    $started = false;
  }
</script>

<div>
  <Layout>
    <Container>
      <div class="wrapper">
        <h1>Reading speed test</h1>

        <div class="toolbar">
          <Settings />
          {#if !$started}
            <Button on:click={handleStartClick}>Start</Button>
          {:else}
            <Button on:click={handleResetClick}>Reset</Button>
          {/if}
        </div>

        <h2>
          {#if !$started}
            Click START button to start the test
          {:else if !$prepared}
            Prepare for the test!
          {:else if !$tested}
            {$testCountdown}
          {:else if !$wordsRead}
            Pick the word you ended up with
          {:else}
            Test ended
          {/if}
        </h2>

        <ReadBox resetAll={handleResetClick} />
      </div>
    </Container>
  </Layout>
</div>

<style lang="scss">
  @import "./styles/variables";

  :global(*) {
    transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
  }

  .wrapper {
    padding: 4rem 0 2rem;
  }

  h1 {
    margin-bottom: 4rem;
  }

  h2 {
    color: $primary-color;
    margin-bottom: 0.5rem;
    padding: 0 2rem;
    text-align: right;
  }

  .toolbar {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  @media (min-width: $bp-desktop) {
    .toolbar {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
</style>
