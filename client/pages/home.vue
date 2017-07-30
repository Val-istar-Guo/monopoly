<template lang="html">
  <div class='game'>
    <div class='canvas'>

    </div>

    <div class='state-line'>
      <span class='player-name'>{{ activePlayerName }}</span>
      <span class='player-state'>置骰子</span>
      <span class='player-money'>Money: {{ activePlayerMoney }}</span>
    </div>

    <button class='dice-button' @click='dice'>置骰子</button>

    <dice v-if='showDice' :num='diceNum'></dice>
  </div>
</template>

<script>
import * as Three from 'three';
import OrbitControls from '../modules/cameraControls';
import Game from '../modules/game';
import { ExampleMap } from '../modules/map';
import { Player, ManualPlayer, RemotePlayer, RobotPlayer } from '../modules/player';


export default {
  data: function () {
    const width = window.innerWidth;
    const height = window.innerHeight;


    const scene = new Three.Scene();

    const ambientLight = new Three.AmbientLight(0x404040);
    scene.add(ambientLight);
    let directionalLight = new Three.DirectionalLight(0xFFFFFF);
    directionalLight.position.set(50, 10, 150);
    scene.add(directionalLight);
    directionalLight = new Three.DirectionalLight(0xFFFFFF);
    directionalLight.position.set(-50, 100, -150);
    scene.add(directionalLight);


    const camera = new Three.PerspectiveCamera(80, width / height, 1, 500);
    camera.position.set(-100, 100, -100);
    camera.lookAt(new Three.Vector3(0, 0, 0));

    const renderer = new Three.WebGLRenderer({
      antialias : true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.domElement.className = 'three-js-canvas';

    const orbit = new OrbitControls(camera);
    orbit.enableZoom = false;

    return {
      scene,
      camera,
      renderer,

      diceNum: 0,
      showDice: false,
      activePlayerName: '未开始',
      activePlayerMoney: 0,
      diceResolve: null,
    };
  },

  methods: {
    createEnvironment: function () {
      const generateUrl = (name) => `/textures/skybox/${name}.jpg`;

      const urls = [
        generateUrl('px'),
        generateUrl('nx'),
        generateUrl('py'),
        generateUrl('ny'),
        generateUrl('pz'),
        generateUrl('nz'),
      ];

      const textureCube = new Three.CubeTextureLoader().load(urls);

      this.scene.background = textureCube;


      const map = new ExampleMap();
      const game = new Game(1);

      game.addEventListener('onNextPlayer', this.updateStateLine);

      const player1 = new ManualPlayer('GG', ManualPlayer.createRedModle());
      const player2 = new ManualPlayer('DC', ManualPlayer.createGreenModle());
      game.setMap(map);
      game.addPlayer(player1);
      game.addPlayer(player2);

      player1.addEventListener('createDiceButton', (resolve) => {
        console.log('GG Dice');

        this.diceResolve = resolve;
      });

      player2.addEventListener('createDiceButton', (resolve) => {
        console.log('DC Dice');

        this.diceResolve = resolve;
      });

      player1.addEventListener('showDice', this.showDiceNum);
      player2.addEventListener('showDice', this.showDiceNum);

      game.start();
      this.scene.add(game.modle);
    },

    animate: function () {
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.animate);
    },

    dice: function () {
      if (this.diceResolve) this.diceResolve();

      this.diceResolve = null;
    },

    updateStateLine: function (player) {
      this.activePlayerName = player.name;
      this.activePlayerMoney = player.money;
    },

    showDiceNum: function (num) {
      this.diceNum = num;
      this.showDice = true;

      setTimeout(() => this.showDice = false, 1000);
    }
  },

  mounted() {
    this.$el.appendChild(this.renderer.domElement);
    this.animate();

    this.createEnvironment();
  },
}
</script>

<style lang="scss">
.game {
  position: relative;
}

.three-js-canvas {
  display: block;
}

.dice {
  position: absolute;
  height: 100%;
  width: 100%;
}

.state-line {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 30px;

  padding: 10px 0;

  text-align: center;
  line-height: 30px;

  background: rgba(255, 255, 255, 0.4);
}

.dice-button {
  position: absolute;

  bottom: 20px;
  right: 20px;

  width: 120px;
  height: 60px;

  font-size: 15px;

  background: rgba(255, 255, 255, 0.4);
}

.player-state,
.player-name,
.player-money {
  display: inline-block;
}

.player-state {
  margin: 0 20px;
}
</style>

