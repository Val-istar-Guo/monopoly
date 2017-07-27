import * as Three from 'three';
import { ManualPlayer } from './player';
import Observable from './Observable';


function getRandomList(size) {
  const list = [];
  for (let i = 0; i < size; i++) {
    let random;

    // get random not in list
    do {
      random = Math.random();
    } while (list.some(num => num === random))

    list.push(random);
  }

  return list;
}

export default class extends Observable {
  constructor(id) {
    super();


    this.id = null;
    this.state = 'ready';
    this.players = [];
    this.currentPlayer = null;
    this.roundNum = 0;
  }

  addPlayer(player) {
    this.players.push(player);

    this.modle.add(player.modle);
  }

  setMap(map) {
    this.map = map;

    this.modle = new Three.Group();
    this.modle.add(map.modle);
  }

  // 随机决定玩家掷骰顺序
  sortPlayer() {
    const oldPlayers = this.players;

    const newPlayers = getRandomList(oldPlayers.length)
      .map((num, index) => ({ num, player: oldPlayers[index] }))
      .sort((a, b) => b.num - a.num)
      .map(obj => obj.player);

    this.players = newPlayers;
  }

  async nextRound() {
    this.roundNum++;
    this.send('onNextRound', this.roundNum);


    const players = this.players;

    players.forEach(player => ++player.energy);

    for (let player of players) {
      this.send('onNextPlayer', player);
      await player.turn();
    }


    // 如果只剩一名玩家，则游戏结束
    const effectivePlayer = this.players.filter(player => player.state !== 'bankrupt');
    if (effectivePlayer.length > 1) this.nextRound();
    else this.end(effectivePlayer[0]);
  }

  start() {
    const beginLand = this.map.lands[0];
    this.state = 'playing';

    // Set Player at Star Point
    this.players.forEach(player => player.startWith(beginLand));

    if (this.players.length === 0) console.warn('No Body Play Game');
    this.sortPlayer();

    this.nextRound();
  }

  end() {
    this.send('end');
  }
}

