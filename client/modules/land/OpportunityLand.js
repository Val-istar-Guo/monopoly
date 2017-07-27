import Land from './Land.js';


export default class extends Land {
  constructor(config) {
    super({
      ...config,
      material: {
        color: 0xff00ff,
      },
    });

    this.type = 'OpportunityLand';
  }

  onArrive(player) {
    super.onArrive(player);
  }
}

