<script lang="ts">
  import Footer from "./Footer.svelte";
  import Nav from "./Nav.svelte";
</script>

<div class="layout">
  <Nav />
  <main class="content"><slot /></main>
  <Footer />
</div>

<style lang="scss">
  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .content {
    flex: 1;
  }
</style>
