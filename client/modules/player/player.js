import * as Three from 'three';
import Observable from '../Observable';


let uuid = 1;

export default class extends Observable {

  constructor(name, modle) {
    super();

    this.uuid = uuid++;
    this.name = name;
    this.modle = modle;

    this.status = null;

    this.size = {
      length: 30,
      width: 30,
    }

    this.money = 20000;
    this.energy = 0;
    this.property = [];

    this.event = [];
  }

  // 设定起始地点
  startWith(land) {
    this.land = land;
    land.addPlayer(this);
  }

  position(x, z) {
    this.modle.position.set(x, 0, z);
  }

  move(num) {
    console.log(`${this.name} move ${num}`);

    this.land.onAway(this);

    let nextLand = this.land.next;

     while(--num) {
      nextLand.onPass(this);
      nextLand = nextLand.next;
    }

    this.land = nextLand;
    nextLand.onArrive(this);
  }

  delay(x, y) {
    this.energy -= 1;
  }

  async turn() {
    if (this.energy <= 0) return;
    this.energy -= 1;

    await this.manage();
  }


  async manage() {
    console.log('You must overloading Player.manage function');
  }

  static createRedModle() {
    const geometry = new Three.BoxGeometry(30, 30, 30);
    const material = new Three.MeshLambertMaterial({ color: 0xFF0000 });

    const modle = new Three.Mesh(geometry, material);

    /**
     * 模型从正中心开始建模
     * Y坐标等于模型高度的一半
     * 保证高度是从模型的低部开始建模
     * 从而使得Player模型正好在Land模型上方
     * 而不嵌入Land中去
     */
    const orginalSet = modle.position.set;
    modle.position.set = function (x, y, z) {
      orginalSet.call(this, x, y + 15, z);
    }

    return modle;
  }

  static createGreenModle() {
    const geometry = new Three.BoxGeometry(30, 30, 30);
    const material = new Three.MeshLambertMaterial({ color: 0x00FF00 })

    const modle = new Three.Mesh(geometry, material);

    const orginalSet = modle.position.set;
    modle.position.set = function (x, y, z) {
      orginalSet.call(this, x, y + 15, z);
    }

    return modle;
  }
}

