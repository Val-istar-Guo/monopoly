import Land from './Land';


export default class extends Land {
  constructor(config) {
    super({
      ...config,
      material: {
        color: 0x00ffff,
      }
    });

    this.type = 'FateLand';
  }

  onArrive(player) {
    super.onArrive(player);
  }
}

