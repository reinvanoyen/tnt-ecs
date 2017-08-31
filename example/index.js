"use strict";

import lib from '../src/index';

// Create ecs

let ecs = new lib.Core();

// Position component

class Circle extends lib.Component {

  getName() {
    return 'circle';
  }

  getDefaults() {
    return {radius: 50};
  }
}

class Position extends lib.Component {

  getName() {
    return 'pos';
  }

  getDefaults() {
    return {x: 0, y: 0};
  }
}

// Rendering system

class Rendering extends lib.System {

  test(entity) {
    return entity.components.pos;
  }

  update(entity) {
    console.log('position', entity.components.pos.x, entity.components.pos.y);
  }
}

class CircleRendering extends lib.System {

  test(entity) {
    return entity.components.circle;
  }

  update(entity) {
    console.log('circle', entity.components.circle.radius);
  }
}

// Adding system
let rendering = new Rendering();
let circleRendering = new CircleRendering();
ecs.addSystem(new Rendering());
ecs.addSystem(new CircleRendering());

// Adding entity

let entity = new lib.Entity([ new Position() ]);
ecs.addEntity(entity);

setTimeout( () => {
  ecs.removeEntity(entity);
}, 5000 );

setTimeout( () => {
  ecs.addEntity(entity);
}, 10000 );

setTimeout( () => {
  entity.removeComponent('pos');
  entity.addComponent(new Circle());
}, 15000 );

setTimeout( () => {
  entity.components.circle.radius = 10;
}, 20000 );

setTimeout( () => {
  ecs.removeSystem(circleRendering);
}, 25000 );

// Loop

let run = () => {
  requestAnimationFrame(() => {
    ecs.update();
    run();
  });
};

run();