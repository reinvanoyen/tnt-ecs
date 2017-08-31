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
  postUpdate() {}
  preUpdate() {}

  addEntity(entity) {

    if (this.entities.indexOf(entity) === -1) {
      this.entities.push(entity);
      this.enter(entity);
    }
  }

  removeEntity(entity) {

    let index = this.entities.indexOf(entity);

    if (index !== -1) {
      this.entities.splice(index, 1);
      this.exit(entity);
    }
  }
}

export default System;