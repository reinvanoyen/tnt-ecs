# tnt-ecs
## Simple Entity Component System

### Basic example

```javascript
import Core from 'tnt-ecs';
import System from 'tnt-ecs';
import Entity from 'tnt-ecs';
import Component from 'tnt-ecs';

class Position extends Component {
  
  getName() {
    return 'position';
  }
  
  getDefaults() {
    return {x: 0, y: 0};
  }
}

class Color extends Component {
  
  getName() {
    return 'color';
  }
  
  getDefaults() {
    return {r: 255, g: 255, b: 255};
  }
}

class Rendering extends System {
  
  test(entity) {
    return entity.components.position && entity.components.color;
  }
  
  update(entity) {
    console.log( entity.components.position.x, entity.components.position.x );
    console.log( entity.components.color.r, entity.components.color.g, entity.components.color.b );
  }
  
  preUpdate() {
    console.log('Before all entities are being updated');
  }  

  postUpdate() {
    console.log('After all entities are being updated');
  }
  
  enter(entity) {
    console.log('Enter system', entity);
  }
  
  exit(entity) {
    console.log('Exit system', entity);
  }
}

const ecs = new Core();

ecs.addSystem(new Rendering());

// Add entities

ecs.addEntity(new Entity([
  new Position(),
  new Color()
]));

ecs.addEntity(new Entity([
  new Position({x: 50}),
  new Color({b: 20})
]));

ecs.addEntity(new Entity([
  new Position({x: 50}),
  new Color({r: 0, g: 0, b: 0})
]));

```