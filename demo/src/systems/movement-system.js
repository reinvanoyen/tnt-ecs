"use strict";

import ECS from '../../../src';

export default class MovementSystem extends ECS.System {

	test(entity) {
		return entity.hasComponent('position') && entity.hasComponent('velocity');
	}

	update(entity, delta) {
		const { position, velocity } = entity.components;

		position.x += velocity.x * delta;
		position.y += velocity.y * delta;
	}
}