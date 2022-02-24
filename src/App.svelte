<script lang="ts">
  import Button from "./lib/Button.svelte";
  import Container from "./lib/Container.svelte";
  import Layout from "./lib/Layout.svelte";
  import ReadBox from "./lib/ReadBox.svelte";
  import Settings from "./lib/Settings.svelte";
  import { started } from "./stores";
</script>

<div>
  <Layout>
    <Container>
      <div class="wrapper">
        <h1>Reading speed test</h1>

        <div class="toolbar">
          <Settings />
          {#if !$started}
            <Button on:click={() => ($started = true)}>Start</Button>
          {:else}
            <Button on:click={() => ($started = false)}>End</Button>
          {/if}
        </div>

        <h2>Click START button to start the test</h2>

        <ReadBox />
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
    margin-bottom: 1rem;
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

    h2 {
      text-align: right;
      padding: 0 3rem;
    }
  }
</style>
