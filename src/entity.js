"use strict";

import getId from './id';

class Entity {

  constructor(components = []) {
    this.id = getId();
    this.core = null;
    this.components = {};
    this.tags = [];

    let i = components.length;
    while(i--) {
      this.components[components[i].getName()] = components[i];
    }
  }

  /**
   * Get the ID of the entity
   * @returns {number}
   */
  getId() {
    return this.id;
  }

  /**
   * Tag the entity
   * @param tagName
   */
  tag(tagName) {
    if (! this.tags.includes(tagName)) {
      this.tags.push(tagName);
      if(this.core) {
        this.core.dirtyEntities.push(this);
      }
    }
  }

  /**
   * Remove a tag
   * @param tagName
   */
  removeTag(tagName) {
    this.tags = this.tags.filter(tag => tag !== tagName);
    if(this.core) {
      this.core.dirtyEntities.push(this);
    }
  }

  /**
   * Check if entity has tag
   * @param tagName
   * @returns {boolean}
   */
  hasTag(tagName) {
    return this.tags.includes(tagName);
  }

  /**
   * Add a component to the entity
   * @param component
   */
  addComponent(component) {
    this.components[component.getName()] = component;
    if(this.core) {
      this.core.dirtyEntities.push(this);
    }
  }

  /**
   * Remove a component by name
   * @param name
   */
  removeComponent(name) {
    if (this.components[name]) {
      delete this.components[name];
      if(this.core) {
        this.core.dirtyEntities.push(this);
      }
    }
  }

  /**
   * Remove multiple components by name
   * @param names
   */
  removeComponents(names) {
    let i = names.length;

    while(i--) {
      if (this.components[names[i]]) {
        delete this.components[names[i]];
      }
    }

    if(this.core) {
      this.core.dirtyEntities.push(this);
    }
  }

  /**
   * Check if entity has component
   * @param name
   * @returns {boolean}
   */
  hasComponent(name) {
    return this.components.hasOwnProperty(name);
  }
}

export default Entity;