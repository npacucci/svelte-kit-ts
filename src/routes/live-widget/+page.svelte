<script lang="ts">
	import type { LiveWidgetData } from './+page.server';

  export let data: LiveWidgetData;
  $: ({ list } = data);
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