import Map from './Map';
import {
  EstateLand,
  DelayLand,
  RewardMoneyLand,
  OpportunityLand,
  FateLand } from '../land';


const map = [
  {
    type: RewardMoneyLand,
    name: '起点',
    rewardMoney: 2000,

    position: { x: 0, y: 0 },
    material: null,
  },
  {
    type: EstateLand,
    name: '中华人民共和国',
    area: 'East Asia',
    price: 2000,
    morgage: 2000,
    costOfHouse: 2000,
    tolls: [180, 2000, 6000, 14000, 17000, 20000],

    position: { x: 0, y: 1 },
  },
  {
    type: EstateLand,
    name: '日本',
    area: 'East Asia',
    price: 1000,
    morgage: 500,
    costOfHouse: 500,
    tolls: [60, 300, 900, 2700, 4000, 5500],


  },
  {
    type: FateLand,
  },
  {
    type: EstateLand,
    name: '韩国',
    area: 'East Asia',
    price: 1000,
    morgage: 500,
    costOfHouse: 500,
    tolls: [60, 300, 900, 2700, 4000, 5500],


  },
  {
    type: EstateLand,
    name: '菲律宾',
    area: 'South Asia',
    price: 600,
    morgage: 300,
    costOfHouse: 500,
    tolls: [40, 200, 600, 1800, 3200, 4500],


  },
  {
    type: EstateLand,
    name: '马来西亚',
    area: 'South Asia',
    price: 2600,
    morgage: 1300,
    costOfHouse: 1500,
    tolls: [220, 1100, 3300, 8000, 9750, 11500],


  },
  {
    type: EstateLand,
    name: '越南',
    area: 'South Asia',
    price: 2800,
    morgage: 1400,
    costOfHouse: 1500,
    tolls: [220, 1200, 3600, 8500, 10250, 12000],


  },
  {
    type: EstateLand,
    name: '泰国',
    area: 'South Asia',
    price: 1600,
    morgage: 800,
    costOfHouse: 1000,
    tolls: [120, 600, 1800, 5000, 7000, 9000],


  },
  {
    type: EstateLand,
    name: '印度',
    area: 'South Asia',
    price: 1400,
    morgage: 700,
    costOfHouse: 1000,
    tolls: [100, 500, 4500, 6250, 7500],


  },
  {
    type: DelayLand,
    name: '太平洋',

    delay: 1,
  },
  {
    type: EstateLand,
    name: '斯里兰卡',
    area: 'Middle East',
    price: 1400,
    morgage: 700,
    costOfHouse: 1000,
    tolls: [100, 500, 1500, 4500, 6250, 7500],


  },
  {
    type: EstateLand,
    name: '伊朗',
    price: 2000,
    morgage: 1000,
    costOfHouse: 1000,
    tolls: [160, 800, 2200, 6000, 8000, 10000],


  },
  {
    type: EstateLand,
    name: '伊拉克',
    price: 1800,
    morgage: 900,
    costOfHouse: 1000,
    tolls: [140, 700, 2000, 5500, 7500, 9500],


  },
  {
    type: EstateLand,
    name: '沙特阿拉伯',
    price: 1800,
    morgage: 900,
    costOfHouse: 1000,
    tolls: [140, 700, 2000, 5500, 7500, 9500],


  },
  {
    type: EstateLand,
    name: '叙利亚',
    price: 3500,
    morgage: 1750,
    costOfHouse: 2000,
    tolls: [350, 1750, 5000, 11000, 13000, 15000],


  },
  {
    type: DelayLand,
    name: '地中海',

    delay: 1,


  },
  {
    type: EstateLand,
    name: '土耳其',
    price: 3500,
    morgage: 1750,
    costOfHouse: 2000,
    tolls: [350, 1750, 5000, 11000, 13000, 15000],


  },
  {
    type: OpportunityLand,


  },
  {
    type: EstateLand,
    name: '黎巴嫩',
    area: 'Northern Europe',
    price: 600,
    morgage: 300,
    costOfHouse: 500,
    tolls: [20, 100, 300, 900, 1600, 2500],


  },
  {
    type: EstateLand,
    name: '以色列',
    price: 2000,
    morgage: 1000,
    costOfHouse: 1000,
    tolls: [160, 800, 2200, 6000, 8000, 10000],


  },
  {
    type: EstateLand,
    name: '俄罗斯',
    price: 1000,
    morgage: 500,
    costOfHouse: 500,
    tolls: [60, 300, 900, 2700, 4000, 5500],


  },
  {
    type: EstateLand,
    name: '波兰',
    price: 1200,
    morgage: 600,
    costOfHouse: 500,
    tolls: [80, 400, 1000, 3000, 4500, 6000],


  },
  {
    type: EstateLand,
    name: '德国',
    price: 2400,
    morgage: 1200,
    costOfHouse: 1500,
    tolls: [200, 1000, 3000, 7500, 9250],


  },
  {
    type: DelayLand,
    name: '印度洋',
    delay: 1,
  },
  {
    type: EstateLand,
    name: '奥地利',
    area: 'Eastern Europe',
    price: 3000,
    morgage: 1500,
    costOfHouse: 2000,
    tolls: [260, 1300, 3900, 9000, 11000, 12750],


  },
  {
    type: EstateLand,
    name: '瑞士',
    price: 3200,
    morgage: 1600,
    costOfHouse: 2000,
    tolls: [280, 1500, 4500, 10000, 12000, 14000],


  },
  {
    type: EstateLand,
    name: '法国',
    price: 3000,
    morgage: 1500,
    costOfHouse: 2000,
    tolls: [260, 1300, 3900, 9000, 11000, 12750],


  },
  {
    type: EstateLand,
    name: '比利时',
    price: 2200,
    morgage: 1100,
    costOfHouse: 1500,
    tolls: [180, 900, 2500, 7000, 8750, 10500],


  },
  {
    type: FateLand,


  },
  {
    type: EstateLand,
    name: '荷兰',
    area: 'Western Europe',
    price: 2400,
    morgage: 1200,
    costOfHouse: 1500,
    tolls: [200, 1000, 3000, 7500, 9250, 11000],


  },
  {
    type: EstateLand,
    name: '英国',
    price: 2200,
    morgage: 1100,
    costOfHouse: 1500,
    tolls: [180, 900, 2500, 7000, 8750, 10500],


  },
  {
    type: DelayLand,
    name: '北极',
    delay: 1,
  },
  {
    type: EstateLand,
    name: '芬兰',
    price: 2600,
    morgage: 1300,
    costOfHouse: 1500,
    tolls: [220, 1100, 3300, 8000, 9750, 11500],

  },
  {
    type: EstateLand,
    name: '瑞典',
    price: 2600,
    morgage: 1300,
    costOfHouse: 1500,
    tolls: [220, 1100, 3300, 8000, 9750, 11500],


  },
  {
    type: EstateLand,
    name: '丹麦',
    price: 2800,
    morgage: 1400,
    costOfHouse: 1500,
    tolls: [220, 1200, 3600, 8500, 10250, 12000],
  },
  {
    type: EstateLand,
    name: '希腊',
    area: 'Southern Europe',
    price: 1600,
    morgage: 800,
    costOfHouse: 1000,
    tolls: [120, 600, 1800, 5000, 7000, 9000],
  },
  {
    type: EstateLand,
    name: '意大利',
    price: 1400,
    morgage: 700,
    costOfHouse: 1000,
    tolls: [100, 500, 1500, 4500, 6250, 7500],
  },
  {
    type: OpportunityLand,
  },
  {
    type: EstateLand,
    name: '西班牙',
    price: 1400,
    morgage: 700,
    costOfHouse: 1000,
    tolls: [100, 500, 1500, 4500, 6250, 7500],
  },
  {
    type: EstateLand,
    name: '葡萄牙',
    price: 2000,
    morgage: 1000,
    costOfHouse: 1000,
    tolls: [160, 800, 2200, 6000, 8000, 10000],
  },
  {
    type: EstateLand,
    name: '埃及',
    area: 'North Africa',
    price: 1800,
    morgage: 900,
    costOfHouse: 1000,
    tolls: [140, 700, 2000, 5500, 7500, 9500],
  },
  {
    type: EstateLand,
    name: '摩洛哥',
    price: 1800,
    morgage: 900,
    costOfHouse: 1000,
    tolls: [140, 700, 2000, 5500, 7500, 9500],
  },
  {
    type: EstateLand,
    name: '赞比亚',
    price: 600,
    morgage: 300,
    costOfHouse: 500,
    tolls: [20, 100, 300, 900, 1600, 2500],
  },
  {
    type: FateLand,
  },
  {
    type: EstateLand,
    name: '南非共和国',
    price: 600,
    morgage: 300,
    costOfHouse: 500,
    tolls: [40, 200, 600, 1800, 3200, 4500],
  },
  {
    type: EstateLand,
    name: '加拿大',
    area: 'North America',
    price: 3500,
    morgage: 1750,
    costOfHouse: 2000,
    tolls: [350, 1750, 5000, 11000, 13000, 15000],
  },
  {
    type: EstateLand,
    name: '美国',
    price: 3500,
    morgage: 1750,
    costOfHouse: 2000,
    tolls: [350, 1750, 5000, 11000, 13000, 15000],
  },
  {
    type: DelayLand,
    name: '夏威夷',
    delay: 1,
  },
  {
    type: EstateLand,
    name: '墨西哥',
    price: 1000,
    morgage: 500,
    costOfHouse: 500,
    tolls: [60, 300, 900, 2700, 4000, 5500],
  },
  {
    type: EstateLand,
    name: '洪都拉斯',
    price: 1200,
    morgage: 600,
    costOfHouse: 1500,
    tolls: [80, 400, 1000, 3000, 4500, 6000],
  },
  {
    type: EstateLand,
    name: '尼加拉瓜',
    area: 'South of South America',
    price: 3000,
    morgage: 1500,
    costOfHouse: 2000,
    tolls: [260, 1300, 3900, 9000, 11000, 12750],
  },
  {
    type: EstateLand,
    name: '哥斯达黎加',
    price: 1000,
    morgage: 500,
    costOfHouse: 500,
    tolls: [60, 300, 900, 2700, 4000, 5500],
  },
  {
    type: OportunityLand,
  },
  {
    type: EstateLand,
    name: '巴拿马',
    price: 3200,
    morgage: 1600,
    costOfHouse: 2000,
    tolls: [280, 1500, 4500, 10000, 12000, 14000],
  },
  {
    type: EstateLand,
    name: '古巴',
    price: 3000,
    morgage: 1500,
    costOfHouse: 2000,
    tolls: [260, 1300, 3900, 9000, 11000, 12750],
  },
  {
    type: EstateLand,
    name: '哥伦比亚',
    area: 'Northern South America',
    price: 1800,
    morgage: 900,
    costOfHouse: 1000,
    tolls: [140, 700, 2000, 5500, 7500, 9500],
  },
  {
    type: EstateLand,
    name: '玻利维亚',
    price: 1200,
    morgage: 600,
    costOfHouse: 500,
    tolls: [80, 400, 1000, 3000, 4500, 6000],
  },
  {
    type: EstateLand,
    name: '巴西',
    price: 2600,
    morgage: 1300,
    costOfHouse: 1500,
    tolls: [220, 1100, 3300, 8000, 9750, 11500],
  },
  {
    type: DelayLand,
    name: '大西洋',
    delay: 1,
  },
  {
    type: EstateLand,
    name: '阿根廷',
    price: 1000,
    morgage: 500,
    costOfHouse: 500,
    tolls: [60, 300, 900, 2700, 4000, 5500],
  },
  {
    type: EstateLand,
    name: '智利',
    pirce: 3500,
    morgage: 1750,
    costOfHouse: 2000,
    tolls: [350, 1750, 5000, 11000, 13000, 15000],
  },
  {
    type: EstateLand,
    name: '澳大利亚',
    price: 3200,
    morgage: 1600,
    costOfHouse: 2000,
    tolls: [280, 1500, 4500, 10000, 12000, 14000],
  },
  {
    type: EstateLand,
    name: '新西兰',
    price: 3500,
    morgage: 1750,
    costOfHouse: 2000,
    tolls: [350, 1750, 5000, 11000, 13000, 15000],
  },
];

export default class extends Map {
  constructor(game) {
    super(map);
  }
};

