<script>
  import Container from "./Container.svelte";
</script>

<footer>
  <Container
    >&copy; {new Date().getFullYear()}, Borys Kaczmarek |
    <a href="https://github.com/Borys35" target="_blank">github</a>
    |
    <a href="https://www.linkedin.com/in/borys-kaczmarek/" target="_blank"
      >linkedin</a
    ></Container
  >
</footer>

<style lang="scss">
  footer {
    text-align: center;
    padding: 1rem 0;
    font-size: 14px;
    color: grey;
  }
</style>
