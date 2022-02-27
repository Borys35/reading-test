<script>
  import Container from "./Container.svelte";
</script>

<footer>
  <Container
    >&copy; {new Date().getFullYear()}, Borys Kaczmarek |
    <a href="https://github.com/Borys35" target="_blank">github</a>
    |
    <a href="https://twitter.com/borys_35" target="_blank">twitter</a
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
