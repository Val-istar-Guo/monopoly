import Land from './Land.js';


const Map = [
  {
    event: '进入银月城，维也纳',
    result: '付学费1000分',
  },
  {
    event: '渴死在撒哈拉沙漠',
    result: '得救济金1000分',
  },
  {
    event: '飞机跌落太平洋',
    result: '退回起点',
  },
  {
    event: '参加世界小姐选美',
    result: '奖金500分',
  },
  {
    event: '登喜马拉雅山成功',
    result: '奖励金500分',
  },
  {
    event: '与木乃伊合照冲洗照片',
    result: '费用300分',
  },
  {
    event: '到夏威夷度假',
    result: '如经过起点得2000分',
  },
  {
    event: '付户税',
    result: '房屋每栋250分,旅馆每栋1000分',
  },
  {
    event: '环游世界，第一天晕船',
    result: '暂停一次',
  },
  {
    event: '击落战斗机',
    result: '得奖金3000分',
  },
  {
    event: '横越英吉利海峡',
    result: '得奖励1000分',
  },
  {
    event: '泛莱茵河',
    result: '船只租金1000分',
  },
  {
    event: '梦见埃及艳后',
    result: '赏赐500分',
  },
  {
    event: '进入影城好莱坞当明星',
    result: '得1000分',
  },
  {
    event: '畅游迪斯尼乐园',
    result: '门票花费200分',
  },
  {
    event: '跳西班牙舞，舞姿美妙',
    result: '前尽两步',
  },
  {
    event: '吃韩国烤肉',
    result: '付200分',
  },
  {
    event: '遭受原子弹轰炸',
    result: '损失500分',
  },
  {
    event: '金字塔内寻得宝藏',
    result: '得2000分',
  },
  {
    event: '破获泰北毒品走私案',
    result: '奖金1000分',
  }
];


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

