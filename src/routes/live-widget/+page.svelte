<script lang="ts">
	import { getQuotes } from '$lib/data/dataService';
	import { onDestroy, onMount } from 'svelte';
  import type { PageData } from './$types';

  const LIMIT: number = 30;
  const INTERVAL: number = 5000;

  export let data: PageData;
  $: ({ quotes } = data);

  let isLive: boolean = true;
  let pollingLoop: any;

  onMount(() => {
    pollingLoop = setInterval(() => pollingData(5), INTERVAL);
  })

  onDestroy(() => {
    destroyLoop();
  })

  const pollingData = async (amount: number = 3) => {
    let newAmount: number = amount;
    const newLength: number = quotes.length + amount;
    if (newLength >= LIMIT) {
      newAmount = LIMIT - quotes.length;
      destroyLoop();
    }
    const newData = await getQuotes(newAmount, quotes.length);
    quotes = [...quotes, ...newData];
  }

  const destroyLoop = () => { 
    clearInterval(pollingLoop);
    isLive = false;
  }
</script>

<h1> Live Widget Component </h1>

{#if isLive}
   <span class="live"> LIVE </span>
{/if}

<table cellspacing="10" cellpadding="10">
  <thead>
    <tr>
      <th>Task</th>
      <th>Assigned</th>
    </tr>
  </thead>
  <tbody>
    {#each quotes as q}
    <tr>
      <td>{q.quote}</td>
      <td>{q.author}</td>
    </tr>
    {/each}
  </tbody>
</table>

<style>
  th {
    text-align: left;
  }

  .live {
    color: red;
    font-weight: bold;
  }
</style>