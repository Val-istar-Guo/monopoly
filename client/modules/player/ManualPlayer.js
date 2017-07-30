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
    const num =  Math.floor(Math.random() * 6 + 1);

    // await dice animate
    await this.send('showDice', num);

    return num;
  }

  async manage() {
    const num = await this.dice();


    await this.move(num);
  }
}

