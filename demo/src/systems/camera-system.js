"use strict";

import ECS from '../../../src';

export default class CameraSystem extends ECS.System {

	test(entity) {
		return entity.hasTag('camera');
	}

	enter(entity) {
		entity.textElement = document.createElement('div');
		entity.textElement.style.position = 'absolute';
		entity.textElement.textContent = 'Camera';

		document.body.appendChild(entity.textElement);
	}

	exit(entity) {
		document.body.removeChild(entity.textElement);
	}

	update(entity) {

		const { position } = entity.components;

		entity.textElement.style.left = position.x+'px';
		entity.textElement.style.top = position.y+'px';
	}
}