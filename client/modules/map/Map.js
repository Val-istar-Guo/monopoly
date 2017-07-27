import * as Three from 'three';


export default class {
  constructor(json) {
    this.last = null;
    this.first = null;

    const lands = json
      .map(config => new config.type(config));


    lands
      .reduce((last, land) => {
        if (last !== null) {
          last.next = land;
        }

        return land;
      }, null);

    lands[lands.length - 1].next = lands[0];

    this.lands = lands;
    this.modle = lands.reduce((group, land) => {
      group.add(land.modle);
      return group;
    }, new Three.Group());
  }
}

