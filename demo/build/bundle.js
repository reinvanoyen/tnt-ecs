(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _src = _interopRequireDefault(require("../../src"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Create ecs
var ecs = new _src["default"].Core();

var Position = /*#__PURE__*/function (_lib$Component) {
  _inherits(Position, _lib$Component);

  var _super = _createSuper(Position);

  function Position() {
    _classCallCheck(this, Position);

    return _super.apply(this, arguments);
  }

  _createClass(Position, [{
    key: "getName",
    value: function getName() {
      return 'position';
    }
  }, {
    key: "getDefaults",
    value: function getDefaults() {
      return {
        x: 0,
        y: 0
      };
    }
  }]);

  return Position;
}(_src["default"].Component); // Movement system


var Movement = /*#__PURE__*/function (_lib$System) {
  _inherits(Movement, _lib$System);

  var _super2 = _createSuper(Movement);

  function Movement() {
    _classCallCheck(this, Movement);

    return _super2.apply(this, arguments);
  }

  _createClass(Movement, [{
    key: "test",
    value: function test(entity) {
      return entity.components.position;
    }
  }, {
    key: "update",
    value: function update(entity, delta) {
      console.log('position', entity.components.position.x, entity.components.position.y, delta);
      console.log(this.core.findEntityById(entity.getId()));
    }
  }]);

  return Movement;
}(_src["default"].System); // Adding system


ecs.addSystem(new Movement()); // Adding entity

var entity = new _src["default"].Entity([new Position()]);
ecs.addEntity(entity);
setTimeout(function () {
  ecs.removeEntity(entity);
}, 3000);
setTimeout(function () {
  ecs.addEntity(entity);
}, 5000); // Render loop

var run = function run() {
  requestAnimationFrame(function () {
    ecs.update();
    run();
  });
};

run();

},{"../../src":6}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Component = /*#__PURE__*/function () {
  function Component() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Component);

    Object.assign(this, this.getDefaults(), data);
  }

  _createClass(Component, [{
    key: "getName",
    value: function getName() {
      return '';
    }
  }, {
    key: "getDefaults",
    value: function getDefaults() {
      return {};
    }
  }]);

  return Component;
}();

var _default = Component;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _performance = _interopRequireDefault(require("./performance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Core = /*#__PURE__*/function () {
  function Core() {
    _classCallCheck(this, Core);

    this.systems = [];
    this.entities = [];
    this.entityLookup = {};
    this.dirtyEntities = [];
    this.updateCount = 0;
    this.lastUpdate = _performance["default"].now();
  }
  /**
   * Adds the system from the ECS core
   * @param system
   */


  _createClass(Core, [{
    key: "addSystem",
    value: function addSystem(system) {
      this.systems.push(system);
      system.core = this;
      var i = this.entities.length;

      while (i--) {
        if (system.test(this.entities[i])) {
          system.addEntity(this.entities[i]);
        }
      }
    }
    /**
     * Removes the system from the ECS core
     * @param system
     */

  }, {
    key: "removeSystem",
    value: function removeSystem(system) {
      var index = this.systems.indexOf(system);

      if (index !== -1) {
        system.core = null;
        this.systems.splice(index, 1);
      }
    }
  }, {
    key: "findEntityById",
    value: function findEntityById(id) {
      return this.entityLookup[id] || null;
    }
  }, {
    key: "addEntity",
    value: function addEntity(entity) {
      if (this.entities.indexOf(entity) === -1) {
        // Add the entity to the list of entities
        this.entities.push(entity); // Add the entity to the entity lookup table

        this.entityLookup[entity.id] = entity; // Assign the core to the entity

        entity.core = this;
        var i = this.systems.length;

        while (i--) {
          if (this.systems[i].test(entity)) {
            this.systems[i].addEntity(entity);
          }
        }
      }
    }
  }, {
    key: "removeEntity",
    value: function removeEntity(entity) {
      var index = this.entities.indexOf(entity);

      if (index !== -1) {
        // Remove the entity from the entity list
        this.entities.splice(index, 1); // Remove the entity from the entity lookup table

        delete this.entityLookup[entity.id]; // Remove entity from all systems

        var s = this.systems.length;

        while (s--) {
          this.systems[s].removeEntity(entity);
        } // Remove core assignment from entity


        entity.core = null;
      }
    }
  }, {
    key: "update",
    value: function update() {
      var now = _performance["default"].now();

      var delta = now - this.lastUpdate;
      var d = this.dirtyEntities.length;

      while (d--) {
        var s = this.systems.length;

        while (s--) {
          if (this.systems[s].test(this.dirtyEntities[d])) {
            this.systems[s].addEntity(this.dirtyEntities[d]);
          } else {
            this.systems[s].removeEntity(this.dirtyEntities[d]);
          }
        }
      }

      this.dirtyEntities = [];
      var i = this.systems.length;

      while (i--) {
        if (this.updateCount % this.systems[i].frequency === 0) {
          var j = this.systems[i].entities.length;
          this.systems[i].preUpdate(delta);

          while (j--) {
            this.systems[i].update(this.systems[i].entities[j], delta);
          }

          this.systems[i].postUpdate(delta);
        }
      }

      ++this.updateCount;
      this.lastUpdate = now;
    }
  }]);

  return Core;
}();

var _default = Core;
exports["default"] = _default;

},{"./performance":7}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _id = _interopRequireDefault(require("./id"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Entity = /*#__PURE__*/function () {
  function Entity() {
    var components = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Entity);

    this.id = (0, _id["default"])();
    this.core = null;
    this.components = {};
    var i = components.length;

    while (i--) {
      this.components[components[i].getName()] = components[i];
    }
  }

  _createClass(Entity, [{
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "addComponent",
    value: function addComponent(component) {
      this.components[component.getName()] = component;

      if (this.core) {
        this.core.dirtyEntities.push(this);
      }
    }
  }, {
    key: "removeComponent",
    value: function removeComponent(name) {
      if (this.components[name]) {
        delete this.components[name];

        if (this.core) {
          this.core.dirtyEntities.push(this);
        }
      }
    }
  }]);

  return Entity;
}();

var _default = Entity;
exports["default"] = _default;

},{"./id":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var id = 0;

var getId = function getId() {
  id++;
  return id;
};

var _default = getId;
exports["default"] = _default;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = _interopRequireDefault(require("./core"));

var _system = _interopRequireDefault(require("./system"));

var _entity = _interopRequireDefault(require("./entity"));

var _component = _interopRequireDefault(require("./component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  Core: _core["default"],
  Entity: _entity["default"],
  System: _system["default"],
  Component: _component["default"]
};
exports["default"] = _default;

},{"./component":2,"./core":3,"./entity":4,"./system":8}],7:[function(require,module,exports){
(function (global){(function (){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var performance; // Check if performance exists on global
// Otherwise, in node (or potentially older browsers), we decide to fall back to Date.now()

if (global.performance) {
  performance = window.performance;
} else {
  performance = {
    now: function now() {
      return Date.now();
    }
  };
}

var _default = performance;
exports["default"] = _default;

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var System = /*#__PURE__*/function () {
  /**
   * 
   * @param frequency
   */
  function System() {
    var frequency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    _classCallCheck(this, System);

    this.core = null;
    this.frequency = frequency;
    this.entities = [];
  }
  /**
   * 
   * @param entity
   * @returns {boolean}
   */


  _createClass(System, [{
    key: "test",
    value: function test(entity) {
      return false;
    }
    /**
     * 
     * @param entity
     */

  }, {
    key: "enter",
    value: function enter(entity) {}
    /**
     * 
     * @param entity
     */

  }, {
    key: "exit",
    value: function exit(entity) {}
    /**
     * 
     * @param entity
     * @param delta
     */

  }, {
    key: "update",
    value: function update(entity, delta) {}
    /**
     * 
     * @param delta
     */

  }, {
    key: "postUpdate",
    value: function postUpdate(delta) {}
    /**
     * 
     * @param delta
     */

  }, {
    key: "preUpdate",
    value: function preUpdate(delta) {}
    /**
     * 
     * @param entity
     */

  }, {
    key: "addEntity",
    value: function addEntity(entity) {
      if (this.entities.indexOf(entity) === -1) {
        this.entities.push(entity);
        this.enter(entity);
      }
    }
    /**
     * 
     * @param entity
     */

  }, {
    key: "removeEntity",
    value: function removeEntity(entity) {
      var index = this.entities.indexOf(entity);

      if (index !== -1) {
        this.entities.splice(index, 1);
        this.exit(entity);
      }
    }
  }]);

  return System;
}();

var _default = System;
exports["default"] = _default;

},{}]},{},[1]);
