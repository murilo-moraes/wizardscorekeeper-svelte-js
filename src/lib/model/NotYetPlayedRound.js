import { Player } from './Player';

/**
 * @class
 * @param {Player} player
 */
export function NotYetPlayedRound(player) {
  let bet = 0;
  return {
    getPlayer() {
      return player;
    },
    getBet() {
      return bet;
    },
    setBet(value) {
      bet = value;
    },
  };
}
