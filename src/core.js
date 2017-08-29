"use strict";

class Core {

  constructor() {
    this.systems = [];
    this.entities = [];
    this.components = {};

    this.dirtyEntities = [];
  }

  addSystem(system) {

    this.systems.push(system);

    let i = this.entities.length;

    while(i--) {
      if( system.test(this.entities[i]) ) {
        system.addEntity(this.entities[i]);
      }
    }
  }

  addEntity(entity) {

    this.entities.push(entity);
    entity.core = this;

    let i = this.systems.length;

    while(i--) {
      if(this.systems[i].test(entity)) {
        this.systems[i].addEntity(entity);
      }
    }
  }

  registerComponent(name, defaults = {}) {
    this.components[name] = defaults;
  }

  update() {

    let i = this.systems.length;

    while(i--) {
      let j = this.systems[i].entities.length;
      while(j--) {
        this.systems[i].update(this.systems[i].entities[j]);
      }
    }
  }
}

export default Core;