"use strict";

import performance from './performance';

class Core {
  
  constructor() {
    
    this.systems = [];
    this.entities = [];
    this.entityLookup = {};
    this.dirtyEntities = [];
    this.updateCount = 0;
    this.lastUpdate = performance.now();
  }
  
  /**
   * Adds the system from the ECS core
   * @param system
   */
  addSystem(system) {

    this.systems.push(system);
    system.core = this;

    let i = this.entities.length;

    while(i--) {
      if( system.test(this.entities[i]) ) {
        system.addEntity(this.entities[i]);
      }
    }
  }

  /**
   * Removes the system from the ECS core
   * @param system
   */
  removeSystem(system) {

    let index = this.systems.indexOf(system);
    
    if (index !== -1) {
      
      system.core = null;
      this.systems.splice(index, 1);
    }
  }
  
  findEntityById(id) {
    return this.entityLookup[id] || null;
  }
  
  addEntity(entity) {

    if (this.entities.indexOf(entity) === -1) {
      
      // Add the entity to the list of entities
      this.entities.push(entity);
      
      // Add the entity to the entity lookup table
      this.entityLookup[entity.id] = entity;
      
      // Assign the core to the entity
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
      
      // Remove the entity from the entity list
      this.entities.splice(index, 1);
      
      // Remove the entity from the entity lookup table
      delete this.entityLookup[entity.id];
      
      // Remove entity from all systems
      let s = this.systems.length;
      while(s--) {
        this.systems[s].removeEntity(entity);
      }
      
      // Remove core assignment from entity
      entity.core = null;
    }
  }

  update() {
    
    let now = performance.now();
    let delta = now - this.lastUpdate;
    
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
      if (this.updateCount % this.systems[i].frequency === 0) {
        let j = this.systems[i].entities.length;
        this.systems[i].preUpdate(delta);
        while(j--) {
          this.systems[i].update(this.systems[i].entities[j], delta);
        }
        this.systems[i].postUpdate(delta);
      }
    }
    
    ++this.updateCount;
    this.lastUpdate = now;
  }
}

export default Core;