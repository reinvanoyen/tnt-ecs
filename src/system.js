"use strict";

class System {

  /**
   * 
   * @param frequency
   */
  constructor(frequency = 1) {
    this.core = null;
    this.frequency = frequency;
    this.entities = [];
    this.isRunning = true;
  }

  /**
   * Starts this system
   */
  start() {
    this.isRunning = true;
  }

  /**
   * Stops this system
   */
  stop() {
    this.isRunning = false;
  }

  /**
   * 
   * @param entity
   * @returns {boolean}
   */
  test(entity) {
    return false;
  }

  /**
   * 
   * @param entity
   */
  enter(entity) {}

  /**
   * 
   * @param entity
   */
  exit(entity) {}

  /**
   * 
   * @param entity
   * @param delta
   */
  update(entity, delta) {}

  /**
   * 
   * @param delta
   */
  postUpdate(delta) {}

  /**
   * 
   * @param delta
   */
  preUpdate(delta) {}

  /**
   * 
   * @param entity
   */
  addEntity(entity) {

    if (this.entities.indexOf(entity) === -1) {
      this.entities.push(entity);
      this.enter(entity);
    }
  }

  /**
   * 
   * @param entity
   */
  removeEntity(entity) {

    let index = this.entities.indexOf(entity);

    if (index !== -1) {
      this.entities.splice(index, 1);
      this.exit(entity);
    }
  }
}

export default System;