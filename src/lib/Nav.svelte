<script lang="ts">
  import logo from "@/assets/svelte.png";
  import Container from "./Container.svelte";
  import DarkThemeToggle from "./DarkThemeToggle.svelte";
  import Heading from "./Heading.svelte";
</script>

<nav>
  <Container>
    <div class="wrapper">
      <div class="logo">
        <img src={logo} alt="Logo" />
        <Heading level={3} text="Read.svelte" />
      </div>
      <DarkThemeToggle />
    </div>
  </Container>
</nav>

<style lang="scss">
  nav {
    background-color: blue;
    padding: 1rem 0;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
  }
  img {
    width: 3rem;
    height: 3rem;
  }
  .logo {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
</style>
