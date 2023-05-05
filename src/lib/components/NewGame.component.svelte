<script>
  import { Game } from "../model/Game.js";
  import { Player } from "../model/Player.js";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  /** @type {"Standard" | "Tournment"}*/
  let gameType = "Standard";
  
  let players = [];
  
  function handleAddPlayer() {
    players = [...players, ""];
  }

  function handleRemovePlayer(name) {
    players = players.filter(n => n != name);
  }

  function handleNewGame() {
    if (players.length < 3) {
      alert("you need at least 3 players");
      return;
    }
    const game = Game(players.map(name => Player(name)), gameType);
    dispatch("newgame", { game });
  }

</script>

<main>
  <form on:submit|preventDefault>
    <select bind:value={gameType}>
      <option value="Standard">Standard</option>
      <option value="Tournment">Tournment</option>
    </select>
    <button on:click={handleAddPlayer}>Add player</button>
    { #each players as name }
    <div>
      <input type="text" bind:value={name}>
      <button on:click={handleRemovePlayer(name)}>Remove</button>
    </div>

    { /each }
    <button on:click={handleNewGame} >New Game</button>
  </form>
</main>

<style>
  form button,
  form select {
    display: block;
  }
  div button {
    display: inline;
  }
  button, select, input {
    margin: 0.25rem;
  }
</style>