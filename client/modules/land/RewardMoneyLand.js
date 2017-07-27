import Land from './Land';


export default class extends Land {
  constructor(config) {
    super({
      ...config,
      material: {
        color: 0xff0000,
      },
    });

    this.type = 'RewardMoneyLand';
    this.rewardMoney = config.rewardMoney;
  }

  onArrive(player) {
    // player.money += 3000;
    super.onArrive(player);

    player.money += 2000;
  }

  onPass(player) {
    super.onPass(player);

    player.money += 2000;
  }
}

