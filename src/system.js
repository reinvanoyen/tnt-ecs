"use strict";

class System {

  constructor() {
    this.entities = [];
  }

  test(entity) {
    return false;
  }

  enter(entity) {}
  exit(entity) {}
  update(entity) {}

  addEntity(entity) {
    this.entities.push(entity);
    this.enter(entity);
  }

  removeEntity(entity) {
    // @TODO
    /*
    * let index = this.entities.indexOf(entity);

     if (index !== -1) {
     entity.removeSystem(this);
     fastSplice(this.entities, index, 1);

     this.exit(entity);
     }
     */
  }
}

export default System;