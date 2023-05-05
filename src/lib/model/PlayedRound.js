import { Player } from './Player';

/**
 * @class
 * @param {Player} player
 * @param {number} bet
 * @param {number} roundsWon
 */
export function PlayedRound(player, bet, roundsWon) {
  return {
    getPlayer() {
      return player;
    },
    getBet() {
      return bet;
    },
    getRoundsWon() {
      return roundsWon;
    },
  };
}
