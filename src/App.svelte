<script>
  import NewGameComponent from 
    "./lib/components/NewGame.component.svelte";
  import RoundsComponent from "./lib/components/Rounds.component.svelte";
  
  let route = "new-game";
  let players;
  let rounds;

  function startNewGame(event) {
    const game = event.detail.game;
    players = game.getPlayers();
    rounds = game.getRounds();
    route = "rounds";
  }
  
  function handleRoundsBack() {
    route = "new-game";
  }
</script>

<main>
  <h1>Wizard Scorekeeper</h1>
  { #if route == "new-game"}
  <NewGameComponent on:newgame={startNewGame}/>
  { :else }
  <RoundsComponent 
    on:back={handleRoundsBack}
    players={players}
    rounds={rounds}/>
  { /if }
</main>

<style>
h1 {
  font-size: 2rem;
}
</style>
