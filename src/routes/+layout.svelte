<main class="container">
  <!-- +page.svelte is rendered in this <slot> -->
  <slot />
</main>

<style>
  .container {
    margin: 0 auto;
    padding: 20 10vw;
    max-width: 800px;
    font-family: 'Oswald', sans-serif;
  }
</style>