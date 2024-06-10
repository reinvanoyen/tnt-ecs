"use strict";

import ECS from '../../../src';

export default class Velocity extends ECS.Component {

	getName() {
		return 'velocity';
	}

	getDefaults() {
		return {x: 0, y: 0};
	}
}