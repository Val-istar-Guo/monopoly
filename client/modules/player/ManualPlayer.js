import Player from './player';


export default class extends Player {
  constructor(name, modle) {
    super(name, modle);
  }

  buttonClick() {
    return new Promise((resolve, reject) => {
      this.send('createDiceButton', resolve);
    });
  }

  async dice() {
    await this.buttonClick();
    // await dice animate
    return Math.floor(Math.random() * 6 + 1);
    // return 3;
  }

  async manage() {
    const num = await this.dice();

    await this.move(num);
  }
}

