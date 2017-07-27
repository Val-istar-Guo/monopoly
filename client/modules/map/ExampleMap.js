import Map from './Map';
import {
  EstateLand,
  DelayLand,
  RewardMoneyLand,
  OpportunityLand,
  FateLand } from '../land';


const exampleMapJson = [
  {
    type: RewardMoneyLand,
    name: '起点',
    rewardMoney: 20000,

    x: 0,
    y: 0,
    isCornor: true,
  },
  {
    type: EstateLand,
    name: '北京',

    x: 1,
    y: 0,
    isCornor: false,
  },
  {
    type: DelayLand,
    name: '大西洋',
    delayRound: 1,

    x: 2,
    y: 0,
    isCornor: true,
  },
  {
    type: EstateLand,
    name: '东京',

    x: 2,
    y: 1,
    isCornor: false,
  },
  {
    type: OpportunityLand,
    name: '机会',

    x: 2,
    y: 2,
    isCornor: true,
  },
  {
    type: EstateLand,
    name: '南京',

    x: 1,
    y: 2,
    isCornor: false,
  },
  {
    type: FateLand,
    name: '命运',

    x: 0,
    y: 2,
    isCornor: true,
  },
  {
    type: EstateLand,
    name: '西京',

    x: 0,
    y: 1,
    isCornor: false,
  }
];


export default class extends Map {
  constructor() {
    super(exampleMapJson);
  }
}

