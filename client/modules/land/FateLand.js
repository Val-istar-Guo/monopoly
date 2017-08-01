import Land from './Land';


const CARDS = [
  {
    event: '违章建筑',
    result: '罚款500分',
  },
  {
    event: '越南沦亡',
    result: '退回起点',
  },
  {
    event: '载游客游览尼罗河风光',
    result: '得300分',
  },
  {
    event: '泛英国女王接见',
    result: '赏500分',
  },
  {
    event: '探险被人面兽身怪袭击',
    result: '损失300分',
  },
  {
    event: '拉斯维加斯赌博，现金输光',
    result: '损失所有现金，每人救济1000分',
  },
  {
    event: '付户税',
    result: '房屋每栋250分，旅馆每栋1000分',
  },
  {
    event: '变魔术，自由女神像不见了',
    result: '酬劳2000分',
  },
  {
    event: '经过梵蒂冈，拜见教宗',
    result: '得1000分',
  },
  {
    event: '飞机在美国大峡谷失事',
    result: '损失1000分',
  },
  {
    event: '误入食人族',
    result: '损失600分',
  },
  {
    event: '荣获诺贝尔奖金',
    result: '得3000分',
  },
  {
    event: '破奥运纪录',
    result: '得2000分',
  },
  {
    event: '能源危机解除，经济复苏',
    result: '得2500分',
  },
  {
    event: '巴黎铁塔一游',
    result: '买香水花费1000分',
  },
  {
    event: '太空船故障',
    result: '损失所有现金的1/10',
  },
  {
    event: '观赏西班牙斗牛',
    result: '门票200分',
  },
  {
    event: '登陆月球',
    result: '得500分',
  },
  {
    event: '直飞美国，会见白马王子，从事政治',
    result: '如果经过起点，得2000分',
  },
  {
    event: '畅游尼加拉瓜',
    result: '可再翻下一张机会',
  }
];

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

