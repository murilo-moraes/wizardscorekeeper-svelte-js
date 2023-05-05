import { GameRound } from './GameRound';
import { NotYetPlayedRound } from './NotYetPlayedRound';
import { Player } from './Player';

/**
 * @param {number} len
 */
function range(len) {
  return Array.from(Array(len).keys()).map((n) => n + 1);
}

/**
 * @param {"Standard"|"Tournment"} gameType
 * @param {number} numberOfPlayers
 */
function getTotalRounds(gameType, numberOfPlayers) {
  if (gameType == 'Standard') {
    return 60 / numberOfPlayers;
  } else if (gameType == 'Tournment') {
    return 10;
  } else {
    return 0;
  }
}

/**
 * @class
 * @param {Player[]} players
 * @param {"Standard"|"Tournment"} gameType
 */
export function Game(players, gameType) {
  /** @type {GameRound[]} */
  let rangeRounds = range(getTotalRounds(gameType, players.length));
  let rounds = range(getTotalRounds(gameType, players.length)).map((id) => {
    return GameRound(
      id,
      players.reduce(
        (/** @type {NotYetPlayedRound[]} */ infos, p) => [
          ...infos,
          NotYetPlayedRound(p),
        ],
        []
      )
    );
  });
  return {
    getRounds() {
      return rounds;
    },
    getPlayers() {
      return players;
    },
    getGameType() {
      return gameType;
    },
  };
}
