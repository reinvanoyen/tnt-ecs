"use strict";

const assert = require('assert');
const expect = require('expect.js');

import Core from '../src/core';
import System from '../src/system';
import Entity from '../src/entity';
import Component from '../src/component';

describe('Core', () => {

  let core = new Core();
  let system = new System();
  let entity = new Entity();

  describe('#constructor', () => {
    it('should init', () => {

      assert.equal(0, core.entities.length);
      assert.equal(0, core.dirtyEntities.length);
      assert.equal(0, core.systems.length);

      expect(core.entities).to.be.an('array');
      expect(core.dirtyEntities).to.be.an('array');
      expect(core.systems).to.be.an('array');
      expect(core.components).to.be.an('object');
    });
  });

  describe('#addSystem', () => {
    it('should add a system to the ECS', () => {

      core.addSystem(system);
      assert.equal(1, core.systems.length);
    });
  });

  describe('#removeSystem', () => {
    it('should remove a system from the ECS', () => {

      core.removeSystem(system);
      assert.equal(0, core.systems.length);
    });
  });

  describe('#addEntity', () => {
    it('should add an entity to the ECS if the entity is not already present', () => {

      core.addEntity(entity);
      assert.equal(1, core.entities.length);
      core.addEntity(entity);
      assert.equal(1, core.entities.length);
    });
  });

  describe('#removeEntity', () => {
    it('should remove an entity from the ECS if the entity is present in the ECS', () => {

      core.removeEntity(entity);
      assert.equal(0, core.entities.length);
    });
  });

});

describe('System', () => {

  describe('#constructor', () => {
    it('should have an empty array of entities', () => {
      let system = new System();
      assert.equal(0, system.entities.length);
      expect(system.entities).to.be.an('array');
    });
  });

  describe('#test', () => {
    it('should return a boolean', () => {
      let system = new System();
      let entity = new Entity();
      expect(system.test(entity)).to.be.a('boolean');
    });
  });

  describe('#addEntity', () => {
    it('should add an entity to the system if the entity is not already present', () => {

      let system = new System();
      let entity = new Entity();
      assert.equal(0, system.entities.length);

      system.addEntity( entity );
      assert.equal(1, system.entities.length);

      system.addEntity( entity );
      assert.equal(1, system.entities.length);
    });
  });

  describe('#removeEntity', () => {
    it('should remove an entity from the system if the entity is present in the system', () => {

      let system = new System();
      let entity = new Entity();

      system.addEntity( entity );
      system.removeEntity( entity );
      assert.equal(0, system.entities.length);
    });
  });
});

describe('Entity', () => {

  let core = new Core();
  let entity = new Entity();

  core.addEntity(entity);

  let defaultComponentData = {x: 50, y: 64};

  class TestComponent extends Component {

    getName() {
      return 'test';
    }

    getDefaults() {
      return defaultComponentData;
    }
  }

  describe('#constructor', () => {

    it('should have an object of components', () => {
      expect(entity.components).to.be.an('object');
    });

    it('should have a numerical id', () => {
      expect(entity.getId()).to.be.a('number');
    });
  });

  describe('#addComponent', () => {

    it('should have one component with name "test" and the specified default data', () => {

      entity.addComponent(new TestComponent());

      expect(entity.components.test).to.be.an('object');
      expect(entity.components.test.x).to.be.a('number');
      expect(entity.components.test.y).to.be.a('number');
      assert.equal(defaultComponentData.x, entity.components.test.x);
      assert.equal(defaultComponentData.y, entity.components.test.y);
    });
  });

  describe('#addComponent', () => {

    it('should have one component with name "test" and the given data extended from the default data', () => {

      entity.addComponent(new TestComponent({y: 12}));

      expect(entity.components.test).to.be.an('object');
      expect(entity.components.test.x).to.be.a('number');
      expect(entity.components.test.y).to.be.a('number');
      assert.equal(defaultComponentData.x, entity.components.test.x);
      assert.equal(12, entity.components.test.y);
    });
  });

  describe('#addComponent', () => {

    it('ECS should have the entity, on which a new component gets added, in the array dirtyEntities', () => {

      entity.addComponent(new TestComponent());

      assert.notEqual(-1, core.dirtyEntities.indexOf(entity));
      core.update(); // Calling update to empty the dirtyEntities array
    });
  });

  describe('#removeComponent', () => {

    entity.addComponent(new TestComponent());

    it('ECS should have the entity, on which a new component gets removed, in the array dirtyEntities', () => {
      entity.removeComponent('test');
      assert.notEqual(-1, core.dirtyEntities.indexOf(entity));
      core.update(); // Calling update to empty the dirtyEntities array
    });
  });

  describe('#removeComponent', () => {

    entity.addComponent(new TestComponent());

    it('should have no component with name "test"', () => {
      entity.removeComponent('test');
      expect(entity.components.test).to.be(undefined);
    });
  });

});