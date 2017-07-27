import Land from './Land';


export default class extends Land {
  constructor(config) {
    super({
      ...config,
      material: {
        color: 0x0000ff,
      },
    });

    this.type = 'EstateLand';
    this.houses = 0;
    this.constructionCost = config.constructionCost;
    this.revenue = config.revenue;

    this.owner = null;
  }

  onArrive(player) {
    super.onArrive(player);
  }
}

