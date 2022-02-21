<script lang="ts">
  let on: boolean = false;

  function toggle() {
    on = !on;
  }
</script>

<div class="toggle" on:click={toggle}>
  <div class="wrapper">
    <div class="handler" class:active={on} />
  </div>
</div>

<style lang="scss">
  $width: 4rem;
  $height: 2rem;
  $padding: 0.5rem;

  .toggle {
    width: $width;
    height: $height;
    padding: 0.2rem;
    background-color: orange;
    box-sizing: content-box;
    border-radius: $height;
  }
  .wrapper {
    position: relative;
  }
  .handler {
    position: absolute;
    width: $height;
    height: $height;
    border-radius: $height;
    background-color: orangered;
    left: 0;
    transition: 0.2s ease-in-out;

    &.active {
      left: 100%;
      transform: translateX(-100%);
    }
  }
</style>
