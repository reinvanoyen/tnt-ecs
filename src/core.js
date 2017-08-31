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

  removeSystem(system) {

    let index = this.systems.indexOf(system);

    if (index !== -1) {
      this.systems.splice(index, 1);
    }
  }

  addEntity(entity) {

    if (this.entities.indexOf(entity) === -1) {

      this.entities.push(entity);
      entity.core = this;

      let i = this.systems.length;

      while(i--) {
        if(this.systems[i].test(entity)) {
          this.systems[i].addEntity(entity);
        }
      }
    }
  }

  removeEntity(entity) {

    let index = this.entities.indexOf(entity);

    if (index !== -1 ) {

      this.entities.splice(index, 1);
      let s = this.systems.length;
      while(s--) {
        this.systems[s].removeEntity(entity);
      }
      entity.core = null;
    }
  }

  update() {

    let d = this.dirtyEntities.length;

    while(d--) {
      let s = this.systems.length;
      while(s--) {
        if(this.systems[s].test(this.dirtyEntities[d])) {
          this.systems[s].addEntity(this.dirtyEntities[d]);
        } else {
          this.systems[s].removeEntity(this.dirtyEntities[d]);
        }
      }
    }

    this.dirtyEntities = [];

    let i = this.systems.length;

    while(i--) {
      let j = this.systems[i].entities.length;
      this.systems[i].preUpdate();
      while(j--) {
        this.systems[i].update(this.systems[i].entities[j]);
      }
      this.systems[i].postUpdate();
    }
  }
}

export default Core;