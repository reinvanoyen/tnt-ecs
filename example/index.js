import lib from '../src/index';

// Create ecs

let ecs = new lib.Core();

// Position component

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
    console.log(entity.getId(), entity.components.pos.x, entity.components.pos.y);
  }
}

// Adding system

ecs.addSystem(new Rendering());

// Adding entity

let entity = new lib.Entity([ new Position() ]);
ecs.addEntity(entity);

// Loop

let run = () => {
  requestAnimationFrame(() => {
    ecs.update();
    run();
  });
};

run();