"use strict";

import getId from './id';

class Entity {

  constructor(components = []) {
    this.id = getId();
    this.core = null;
    this.components = [];

    let i = components.length;
    while(i--) {
      this.components[components[i].getName()] = components[i];
    }
  }

  getId() {
    return this.id;
  }

  addComponent(component) {
    this.components[component.getName()] = component;
    if(this.core) {
      this.core.dirtyEntities.push(this);
    }
  }

  removeComponent(name) {
    if (this.components[name]) {
      delete this.components[name];
      if(this.core) {
        this.core.dirtyEntities.push(this);
      }
    }
  }
}

export default Entity;