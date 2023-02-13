<script lang="ts">
	import { onMount } from 'svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  $: ({ list } = data);
  
  onMount(() => {
    console.log('Live Widget on mount');
  })
</script>

<h1> Live Widget Component </h1>

<table cellspacing="10" cellpadding="10">
  <thead>
    <tr>
      <th>Task</th>
      <th>Assigned</th>
    </tr>
  </thead>
  <tbody>
    {#each list as i}
    <tr>
      <td>{i.title}</td>
      <td>{i.assigned}</td>
    </tr>
    {/each}
  </tbody>
</table>

<style>
  th {
    text-align: left;
  }
</style>