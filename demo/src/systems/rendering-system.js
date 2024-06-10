"use strict";

import ECS from '../../../src';

export default class RenderingSystem extends ECS.System {

	test(entity) {
		return entity.hasComponent('position');
	}

	enter(entity) {
		entity.element = document.createElement('div');
		entity.element.style.position = 'absolute';
		entity.element.style.backgroundColor = 'red';
		entity.element.style.width = '5px';
		entity.element.style.height = '5px';
		entity.element.style.borderRadius = '5px';

		document.body.appendChild(entity.element);
	}

	exit(entity) {
		document.body.removeChild(entity.element);
	}

	update(entity) {
		const { position } = entity.components;

		entity.element.style.top = position.y+'px';
		entity.element.style.left = position.x+'px';
	}
}