"use strict";

class Component {

  constructor(data = {}) {
    Object.assign(this, this.getDefaults(), data);
  }

  getName() {
    return '';
  }

  getDefaults() {
    return {};
  }
}

export default Component;