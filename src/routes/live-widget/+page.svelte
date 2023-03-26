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

<h1> Example of Live Widget Component </h1>

{#if isLive}
<div class="live">
  <span class="pulse"></span>
  <span class="live-txt"> LIVE </span>
</div>
{/if}

<div class="live-widget">
  {#each quotes as q}
  <div class="card">
    <h2 class="title">{q.quote}</h2>
    <span class="author">{q.author}</span>
  </div>
  {/each}
</div>

<style>
  .live-widget {
    display: flex;
    flex-direction: column;
  }

  .live-widget > * {
    margin-bottom: 20px;
  }

  .card {
    padding: 20px;
    line-height: 1.5em;
    background-color: #f9f4f4;
    border-left: 3px solid #424242;
  }

  .card:hover {
    cursor: pointer;
    background-color: #f0eeee;
  }

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  .title {
    font-size: 26px;
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: normal;
    line-height: 1.3em;
  }

  .author {
    font-size: 20px;
    font-weight: 200;
  }

  .live {
    font-size: 20px;
    display: flex;
    color: #bb1919;
    font-weight: bold;
    margin-bottom: 10px;
    align-items: center;
  }

  .pulse {
    margin-right: 5px;
    height: 1em;
    width: 1em;
    vertical-align: middle;
    position: relative;
    border-radius: 50%;
    background: radial-gradient(circle,transparent 53%,rgba(187,25,25,.5) 53.5%,#bb1919 54%);
  }

  .pulse:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    -webkit-animation: pulse 1.7s ease infinite;
    animation: pulse 1.7s ease infinite;
    background: radial-gradient(circle,#bb1919 37%,rgba(187,25,25,.5) 37.5%,transparent 38%);
    left: 0;
  }

  @-webkit-keyframes pulse { 
    0% {
        opacity: 0.3;
    }

    50% {
      opacity: 1;
    }

    100% {
        opacity: 0.3;
    }
}

@keyframes pulse {
    0% {
        opacity: 0.3;
    }

    50% {
      opacity: 1;
    }

    100% {
        opacity: 0.3;
    }
}
</style>