// import Estate from './estate';
// import WaitLand from './wait-land';
// import RewardLand from './reward-land';

const map = [
  {
    type: 'RewordLand',
    name: '起点',
    x: 0,
    y: 0,
  },
  {
    type: 'EstateLand',
    name: '格丁尼亚',
    x: 1,
    y: 0,
  },
  {
    type: 'WalfareLand',
    x: 2,
    y: 0,
  },
  {
    type: 'EstateLand',
    x: 3,
    y: 0,
  },
  {
    type: ''
  }
];

export default class {
  constructor(game) {
    this.game = game;

    const map = [
      {
        id: 1,
        name: '起点',
        x: 0,
        y: 0,
      },
      {
        id: 2,
        name: 'China',
        landPrice: 2000,
        x: 1,
        y: 0,
      },
      {
        id: 3,
        name: '太平洋',
        x: 2,
        y: 0,
      },
      {
        id: 4,
        name: '大西洋',
        landPrice: 2000,
        x: 2,
        y: 1,
      },
      {
        id: 5,
        name: '印度洋',
        x: 2,
        y: 2,
      },
      {
        id: 6,
        name: 'China',
        landPrice: 2000,
        x: 1,
        y: 2,
      },
      {
        id: 7,
        name: '北冰洋',
        x: 0,
        y: 2,
      },
      {
        id: 8,
        name: 'China',
        landPrice: 2000,
        x: 0,
        y: 1,
      },
    ];

    this.lands = map
      .map(({ name, landPrice, x, y }) => {
        const land = new Estate(name, landPrice);
        land.position(x, y);

        return land;
      });

    this.modle = this.lands
      .reduce((group, modle) => {
        group.add(modle);
      }, new Three.Group());
  }

  addPlayer(player) {
    player.map = this;
    this.players.push(player);
  }
};

