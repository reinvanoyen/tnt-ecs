(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _src = _interopRequireDefault(require("../../../src"));

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

var Position = /*#__PURE__*/function (_ECS$Component) {
  _inherits(Position, _ECS$Component);

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
}(_src["default"].Component);

exports["default"] = Position;

},{"../../../src":11}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _src = _interopRequireDefault(require("../../../src"));

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

var Velocity = /*#__PURE__*/function (_ECS$Component) {
  _inherits(Velocity, _ECS$Component);

  var _super = _createSuper(Velocity);

  function Velocity() {
    _classCallCheck(this, Velocity);

    return _super.apply(this, arguments);
  }

  _createClass(Velocity, [{
    key: "getName",
    value: function getName() {
      return 'velocity';
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

  return Velocity;
}(_src["default"].Component);

exports["default"] = Velocity;

},{"../../../src":11}],3:[function(require,module,exports){
"use strict";

var _src = _interopRequireDefault(require("../../src"));

var _renderingSystem = _interopRequireDefault(require("./systems/rendering-system"));

var _movementSystem = _interopRequireDefault(require("./systems/movement-system"));

var _position = _interopRequireDefault(require("./components/position"));

var _velocity = _interopRequireDefault(require("./components/velocity"));

var _cameraSystem = _interopRequireDefault(require("./systems/camera-system"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Create ecs
var ecs = new _src["default"].Core(); // Adding systems

var cameraSystem = new _cameraSystem["default"]();
ecs.addSystem(new _renderingSystem["default"]());
ecs.addSystem(new _movementSystem["default"]());
ecs.addSystem(cameraSystem);
cameraSystem.stop();
setTimeout(function () {
  cameraSystem.start();
}, 5000); // Adding entity

var entity = new _src["default"].Entity([new _position["default"](), new _velocity["default"]({
  x: .05
})]);
var camera = new _src["default"].Entity([new _position["default"](), new _velocity["default"]({
  x: .05,
  y: .05
})]);
ecs.addEntity(entity);
ecs.addEntity(camera); // Render loop

ecs.start();
setInterval(function () {
  ecs.stop();
  setTimeout(function () {
    ecs.start();
  }, 2500);
}, 5000);
setInterval(function () {
  camera.tag('camera');
  setTimeout(function () {
    camera.removeTag('camera');
  }, 500);
}, 1000);
setInterval(function () {
  camera.removeComponents(['position', 'velocity']);
  setTimeout(function () {
    camera.addComponent(new _position["default"]());
    camera.addComponent(new _velocity["default"]({
      x: .05,
      y: .05
    }));
  }, 2500);
}, 5000);
setInterval(function () {
  entity.removeComponent('velocity');
  setTimeout(function () {
    entity.addComponent(new _velocity["default"]({
      x: .05
    }));
  }, 5000);
}, 10000);

},{"../../src":11,"./components/position":1,"./components/velocity":2,"./systems/camera-system":4,"./systems/movement-system":5,"./systems/rendering-system":6}],4:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _src = _interopRequireDefault(require("../../../src"));

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

var CameraSystem = /*#__PURE__*/function (_ECS$System) {
  _inherits(CameraSystem, _ECS$System);

  var _super = _createSuper(CameraSystem);

  function CameraSystem() {
    _classCallCheck(this, CameraSystem);

    return _super.apply(this, arguments);
  }

  _createClass(CameraSystem, [{
    key: "test",
    value: function test(entity) {
      return entity.hasTag('camera');
    }
  }, {
    key: "enter",
    value: function enter(entity) {
      entity.textElement = document.createElement('div');
      entity.textElement.style.position = 'absolute';
      entity.textElement.textContent = 'Camera';
      document.body.appendChild(entity.textElement);
    }
  }, {
    key: "exit",
    value: function exit(entity) {
      document.body.removeChild(entity.textElement);
    }
  }, {
    key: "update",
    value: function update(entity) {
      var position = entity.components.position;
      entity.textElement.style.left = position.x + 'px';
      entity.textElement.style.top = position.y + 'px';
    }
  }]);

  return CameraSystem;
}(_src["default"].System);

exports["default"] = CameraSystem;

},{"../../../src":11}],5:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _src = _interopRequireDefault(require("../../../src"));

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

var MovementSystem = /*#__PURE__*/function (_ECS$System) {
  _inherits(MovementSystem, _ECS$System);

  var _super = _createSuper(MovementSystem);

  function MovementSystem() {
    _classCallCheck(this, MovementSystem);

    return _super.apply(this, arguments);
  }

  _createClass(MovementSystem, [{
    key: "test",
    value: function test(entity) {
      return entity.hasComponent('position') && entity.hasComponent('velocity');
    }
  }, {
    key: "update",
    value: function update(entity, delta) {
      var _entity$components = entity.components,
          position = _entity$components.position,
          velocity = _entity$components.velocity;
      position.x += velocity.x * delta;
      position.y += velocity.y * delta;
    }
  }]);

  return MovementSystem;
}(_src["default"].System);

exports["default"] = MovementSystem;

},{"../../../src":11}],6:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _src = _interopRequireDefault(require("../../../src"));

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

var RenderingSystem = /*#__PURE__*/function (_ECS$System) {
  _inherits(RenderingSystem, _ECS$System);

  var _super = _createSuper(RenderingSystem);

  function RenderingSystem() {
    _classCallCheck(this, RenderingSystem);

    return _super.apply(this, arguments);
  }

  _createClass(RenderingSystem, [{
    key: "test",
    value: function test(entity) {
      return entity.hasComponent('position');
    }
  }, {
    key: "enter",
    value: function enter(entity) {
      entity.element = document.createElement('div');
      entity.element.style.position = 'absolute';
      entity.element.style.backgroundColor = 'red';
      entity.element.style.width = '5px';
      entity.element.style.height = '5px';
      entity.element.style.borderRadius = '5px';
      document.body.appendChild(entity.element);
    }
  }, {
    key: "exit",
    value: function exit(entity) {
      document.body.removeChild(entity.element);
    }
  }, {
    key: "update",
    value: function update(entity) {
      var position = entity.components.position;
      entity.element.style.top = position.y + 'px';
      entity.element.style.left = position.x + 'px';
    }
  }]);

  return RenderingSystem;
}(_src["default"].System);

exports["default"] = RenderingSystem;

},{"../../../src":11}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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
    this.isRunning = false; // Run the update loop

    this.updateLoop();
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
    /**
     * Find an entity by ID
     * @param id
     * @returns {*|null}
     */

  }, {
    key: "findEntityById",
    value: function findEntityById(id) {
      return this.entityLookup[id] || null;
    }
    /**
     * Add an entity the ECS core
     * @param entity
     */

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
    /**
     * Remove an entity from the ECS core
     * @param entity
     */

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
    /**
     * Update tick
     */

  }, {
    key: "update",
    value: function update() {
      var now = _performance["default"].now();

      var delta = now - this.lastUpdate; // First check the changes in the dirty entities

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

      this.dirtyEntities = []; // Perform the update tick

      var i = this.systems.length;

      while (i--) {
        if (this.updateCount % this.systems[i].frequency === 0) {
          if (this.systems[i].isRunning) {
            var j = this.systems[i].entities.length;
            this.systems[i].preUpdate(delta);

            while (j--) {
              this.systems[i].update(this.systems[i].entities[j], delta);
            }

            this.systems[i].postUpdate(delta);
          }
        }
      }

      ++this.updateCount;
      this.lastUpdate = now;
    }
    /**
     * Start running the update loop
     */

  }, {
    key: "start",
    value: function start() {
      this.lastUpdate = _performance["default"].now();
      this.isRunning = true;
    }
    /**
     * Stop running the update loop
     */

  }, {
    key: "stop",
    value: function stop() {
      this.isRunning = false;
    }
    /**
     * Run the update loop
     */

  }, {
    key: "updateLoop",
    value: function updateLoop() {
      var _this = this;

      if (this.isRunning) {
        this.update();
      }

      requestAnimationFrame(function () {
        return _this.updateLoop();
      });
    }
  }]);

  return Core;
}();

var _default = Core;
exports["default"] = _default;

},{"./performance":12}],9:[function(require,module,exports){
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
    this.tags = [];
    var i = components.length;

    while (i--) {
      this.components[components[i].getName()] = components[i];
    }
  }
  /**
   * Get the ID of the entity
   * @returns {number}
   */


  _createClass(Entity, [{
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * Tag the entity
     * @param tagName
     */

  }, {
    key: "tag",
    value: function tag(tagName) {
      if (!this.tags.includes(tagName)) {
        this.tags.push(tagName);

        if (this.core) {
          this.core.dirtyEntities.push(this);
        }
      }
    }
    /**
     * Remove a tag
     * @param tagName
     */

  }, {
    key: "removeTag",
    value: function removeTag(tagName) {
      this.tags = this.tags.filter(function (tag) {
        return tag !== tagName;
      });

      if (this.core) {
        this.core.dirtyEntities.push(this);
      }
    }
    /**
     * Check if entity has tag
     * @param tagName
     * @returns {boolean}
     */

  }, {
    key: "hasTag",
    value: function hasTag(tagName) {
      return this.tags.includes(tagName);
    }
    /**
     * Add a component to the entity
     * @param component
     */

  }, {
    key: "addComponent",
    value: function addComponent(component) {
      this.components[component.getName()] = component;

      if (this.core) {
        this.core.dirtyEntities.push(this);
      }
    }
    /**
     * Remove a component by name
     * @param name
     */

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
    /**
     * Remove multiple components by name
     * @param names
     */

  }, {
    key: "removeComponents",
    value: function removeComponents(names) {
      var i = names.length;

      while (i--) {
        if (this.components[names[i]]) {
          delete this.components[names[i]];
        }
      }

      if (this.core) {
        this.core.dirtyEntities.push(this);
      }
    }
    /**
     * Check if entity has component
     * @param name
     * @returns {boolean}
     */

  }, {
    key: "hasComponent",
    value: function hasComponent(name) {
      return this.components.hasOwnProperty(name);
    }
  }]);

  return Entity;
}();

var _default = Entity;
exports["default"] = _default;

},{"./id":10}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{"./component":7,"./core":8,"./entity":9,"./system":13}],12:[function(require,module,exports){
"use strict"; // Check if performance exists on global
// Otherwise, in node (or potentially older browsers), we decide to fall back to Date.now()

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var performance = window.performance ? window.performance : {
  now: function now() {
    return Date.now();
  }
};
var _default = performance;
exports["default"] = _default;

},{}],13:[function(require,module,exports){
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
    this.isRunning = true;
  }
  /**
   * Starts this system
   */


  _createClass(System, [{
    key: "start",
    value: function start() {
      this.isRunning = true;
    }
    /**
     * Stops this system
     */

  }, {
    key: "stop",
    value: function stop() {
      this.isRunning = false;
    }
    /**
     * 
     * @param entity
     * @returns {boolean}
     */

  }, {
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

},{}]},{},[3]);
