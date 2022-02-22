<script lang="ts">
  let on: boolean = false;

  function toggle() {
    on = !on;
    document.documentElement.classList.toggle("dark", on);
  }
</script>

<div class="toggle" on:click={toggle}>
  <div class="wrapper">
    <div class="handler" class:active={on} />
  </div>
</div>

<style lang="scss">
  @import "../styles/variables";

  $width: 3.5rem;
  $height: 1.25rem;
  $padding: 0.35rem;

  .toggle {
    width: $width;
    height: $height;
    padding: $padding;
    background-color: var(--bg-color);
    box-sizing: content-box;
    border-radius: $height;
    cursor: pointer;
  }
  .wrapper {
    position: relative;
  }
  .handler {
    position: absolute;
    width: $height;
    height: $height;
    border-radius: $height;
    background-color: $primary-color;
    left: 0;
    transition: 0.2s ease-in-out;

    &.active {
      left: 100%;
      transform: translateX(-100%);
    }
  }
</style>
