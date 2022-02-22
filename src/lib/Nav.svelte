<script lang="ts">
  import logo from "@/assets/svelte.png";
  import Container from "./Container.svelte";
  import DarkThemeToggle from "./DarkThemeToggle.svelte";
</script>

<nav>
  <Container>
    <div class="wrapper">
      <div class="logo">
        <img src={logo} alt="Logo" />
        <h5>Reading test</h5>
      </div>
      <DarkThemeToggle />
    </div>
  </Container>
</nav>

<style lang="scss">
  @import "../styles/variables";

  nav {
    background: $primary-gradient;
    padding: 1rem 0;
    color: $white-text;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  @media (max-width: $bp-tablet) {
    h5 {
      display: none;
    }
  }
</style>
