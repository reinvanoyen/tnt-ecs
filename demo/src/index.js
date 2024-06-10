"use strict";

import ECS from '../../src';
import RenderingSystem from "./systems/rendering-system";
import MovementSystem from "./systems/movement-system";
import Position from "./components/position";
import Velocity from "./components/velocity";
import CameraSystem from "./systems/camera-system";

// Create ecs
const ecs = new ECS.Core();

// Adding systems
const cameraSystem = new CameraSystem();
ecs.addSystem(new RenderingSystem());
ecs.addSystem(new MovementSystem());
ecs.addSystem(cameraSystem);

cameraSystem.stop();

setTimeout(() => {
    cameraSystem.start();
}, 5000);

// Adding entity
const entity = new ECS.Entity([
    new Position(),
    new Velocity({x: .05})
]);

const camera = new ECS.Entity([
    new Position(),
    new Velocity({x: .05, y: .05})
]);

ecs.addEntity(entity);
ecs.addEntity(camera);

// Render loop
ecs.start();

setInterval(() => {
    ecs.stop();
    setTimeout(() => {
        ecs.start();
    }, 2500);
}, 5000);

setInterval(() => {
    camera.tag('camera');
    setTimeout(() => {
        camera.removeTag('camera');
    }, 500);
}, 1000);

setInterval(() => {
    camera.removeComponents(['position', 'velocity']);
    setTimeout(() => {
        camera.addComponent(new Position());
        camera.addComponent(new Velocity({x: .05, y: .05}));
    }, 2500);
}, 5000);

setInterval(() => {
    entity.removeComponent('velocity');
    setTimeout(() => {
        entity.addComponent(new Velocity({x: .05}));
    }, 5000);
}, 10000);