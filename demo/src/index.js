"use strict";

import lib from '../../src';

// Create ecs

let ecs = new lib.Core();

class Position extends lib.Component {

  getName() {
    return 'position';
  }

  getDefaults() {
    return {x: 0, y: 0};
  }
}

// Movement system

class Movement extends lib.System {

  test(entity) {
    return entity.components.position;
  }

  update(entity, delta) {
    console.log('position', entity.components.position.x, entity.components.position.y, delta);
  }
}

// Adding system
ecs.addSystem(new Movement());

// Adding entity
let entity = new lib.Entity([
    new Position()
]);

ecs.addEntity(entity);

setTimeout(() => {
  ecs.removeEntity(entity);
}, 3000);

setTimeout(() => {
  ecs.addEntity(entity);
}, 5000);

// Render loop
let run = () => {
  requestAnimationFrame(() => {
    ecs.update();
    run();
  });
};

run();