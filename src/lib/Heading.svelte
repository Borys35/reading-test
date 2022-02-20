<script lang="ts">
  export let level: 1 | 2 | 3 | 4 | 5 | 6;
  export let text: string;

  const heading = `<h${level}>${text}</h${level}>`;
</script>

{@html heading}
