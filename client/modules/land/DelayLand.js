import Land from './Land';


export default class extends Land {
  constructor(config) {
    super({
      ...config,
      material: {
        color: 0x666666,
      },
    });

    this.type = 'DelayLand';
    this.delayRound = config.delay;
  }

  onArrive(player) {
    super.onArrive(player);

    player.energy -= 1;
    // player.enery -= this.delayRound;
    // player.state = 'wait';
  }
}

