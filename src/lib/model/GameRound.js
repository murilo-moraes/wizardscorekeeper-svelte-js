import { NotYetPlayedRound } from './NotYetPlayedRound';
import { PlayedRound } from './PlayedRound';

/**
 * @class
 * @param {number} id
 * @param {NotYetPlayedRound[] | PlayedRound[]} info
 */
export function GameRound(id, info) {
  return {
    getId() {
      return id;
    },
    getRoundInfo() {
      return info;
    },
  };
}
