import * as Three from 'three';


const LAND_WIDTH = 100;
const LAND_LENGTH = 100;
const LAND_HEIGHT = 20;

const LAND_SPACE = 10;


export default class {
  constructor({ name, x, y, material = { color: 0xffffff }}) {
    this.type = 'Land';
    this.name = name;

    this.length = length;
    this.x = x;
    this.y = y;

    this.next = null;

    this.players = [];

    this.createModle(material);
    this.position(x, y);
  }

  createModle(materialConfig) {
    const geometry = new Three.BoxGeometry(LAND_LENGTH, LAND_HEIGHT, LAND_WIDTH);
    const material = new Three.MeshLambertMaterial(materialConfig);

    this.modle = new Three.Mesh(geometry, material);
  }

  position(x, y) {
    const width = x * (LAND_WIDTH + LAND_SPACE);
    const height = -LAND_HEIGHT / 2;
    const length = y * (LAND_LENGTH + LAND_SPACE);

    this.modle.position.set(width, height, length);
  }

  recalculatePlayerPosition() {
    const num = this.players.length;

    const x = this.x * (LAND_WIDTH + LAND_SPACE);
    const y = this.y * (LAND_LENGTH + LAND_SPACE) + 20 * (num - 1);

    this.players.forEach((player, index) => {
      player.position(x, y - 40 * index);
    });
  }

  addPlayer(player) {
    this.players.push(player);

    this.recalculatePlayerPosition();
  }

  removePlayer(targetPlayer) {
    this.players = this.players.filter(player => player !== targetPlayer);
  }

  onArrive(player) {
    console.log(`${player.name} arrive ${this.type}:${this.name}`);
    this.addPlayer(player);
  }

  onPass(player) {

  }

  onAway(player) {
    this.removePlayer(player);
  }
};

