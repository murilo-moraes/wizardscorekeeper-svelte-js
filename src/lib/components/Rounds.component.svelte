<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let players;
  export let rounds;

  function handleBack() {
    dispatch("back");
  }
</script>

<main>
<button on:click={handleBack}>Back</button>
<table>
  <thead>
    <tr>
      <th>Round</th>
      { #each players as player }
      <th>{ player.getName() }</th>
      { /each }
    </tr>
  </thead>
  <tbody>
    { #each rounds as round }
    <tr>
      <td>{round.getId()}</td>
    </tr>
    { /each }
  </tbody>
</table>
</main>

<style>
</style>