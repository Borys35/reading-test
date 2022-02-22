<script>
  import Container from "./Container.svelte";
</script>

<footer>
  <Container>&copy; {new Date().getFullYear()}, Borys Kaczmarek</Container>
</footer>

<style lang="scss">
  footer {
    text-align: center;
    padding: 1rem 0;
    font-size: 14px;
    color: grey;
  }
</style>
