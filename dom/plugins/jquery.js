(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "core-js/modules/web.dom.iterable", "core-js/modules/es6.array.find", "../../functions"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("core-js/modules/web.dom.iterable"), require("core-js/modules/es6.array.find"), require("../../functions"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.webDom, global.es6Array, global.functions);
    global.jquery = mod.exports;
  }
})(this, function (_exports, _webDom, _es6Array, _functions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var $;

  try {
    window, document;
    $ = require('jquery');
  } catch (e) {
    var _jsdom = jsdom,
        JSDOM = _jsdom.JSDOM;
    var dom = new JSDOM('<html><head><meta charset="utf-8"></head><body></body></html>', {
      contentType: "text/html",
      userAgent: "Mellblomenator/9000",
      includeNodeLocations: true
    });
    global.window = dom.window;
    global.document = dom.document;
    $ = require('jquery');
  }

  var isPointerEvent = $.isPointerEvent = function (e) {};

  var getOriginalEvent = $.getOriginalEvent = function (e) {};

  var getElementPosition = $.getElementPosition = function (el) {
    var _$ = $(el),
        element = _$[0];

    if (!element) return null;
    var xPosition = 0,
        yPosition = 0;

    while (element) {
      xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
      yPosition += element.offsetTop - element.scrollTop + element.clientTop;
      element = element.offsetParent;
    }

    return {
      x: xPosition,
      y: yPosition
    };
  };

  var getPointerPosition = $.getPointerPosition = function (e, root) {
    root = !root ? document.documentElement : root;
    var evt = getOriginalEvent(e);
    var pos = getElementPosition(root);
    if (!pos) return;
    pos.x = e.touches ? e.touches[0].pageX : e.clientX - pos.x;
    pos.y = e.touches ? e.touches[0].pageY : e.clientY - pos.y;
    return pos;
  };

  $.fn.extend({
    //파라메터 노드가 제이쿼리가 가진 노드 안에 있는지 확인
    containsIn: function containsIn(node) {
      var _$$eq = $(node).eq(0),
          target = _$$eq[0];

      if (target) for (var i = 0, l = this.length; i < l; i++) {
        if (this[i] === target) return true;
        if (this.eq(i).find(target).length) return true;
      }
      return false;
    },
    //파라메터 노드가 제이쿼리가 가진 노드 밖에 있는지 확인
    containsOut: function containsOut(node) {
      return !this.containsIn(node);
    },

    /*
      //
      $(window).predict()
      $(window).predict({center:20});
      $(window).predict({center:event});
      
      //TODO
      $(window).predict(element)
      $(window).predict(element, {center:20});
    */
    predict: function predict(offset) {
      var _this$eq = this.eq(0),
          element = _this$eq[0];

      if (!element) return;

      var _ref = element["innerWidth"] ? {
        offsetTop: 0,
        offsetLeft: 0,
        offsetWidth: window.innerWidth,
        offsetHeight: window.innerHeight
      } : element,
          offsetTop = _ref.offsetTop,
          offsetLeft = _ref.offsetLeft,
          offsetWidth = _ref.offsetWidth,
          offsetHeight = _ref.offsetHeight;

      var result = {
        top: offsetTop,
        left: offsetLeft,
        width: offsetWidth,
        height: offsetHeight,
        right: offsetLeft + offsetWidth,
        bottom: offsetTop + offsetHeight,
        center: (offsetWidth + offsetLeft) / 2,
        middle: (offsetHeight + offsetTop) / 2
      };

      if (isPointerEvent(offset)) {
        var _getPointerPosition = getPointerPosition(offset),
            left = _getPointerPosition.x,
            top = _getPointerPosition.y;

        offset = {
          left: left,
          top: top
        };
      }

      if (offset && (0, _functions.isPlainObject)(offset)) {
        ["top", "left", "width", "height", "right", "bottom", "center", "middle"].forEach(function (key) {
          if (typeof offset[key] !== "number") return;
          var equalize;

          switch (key) {
            case "top":
            case "middle":
              equalize = ["y", offset[key] - result[key]];
              break;

            case "left":
            case "center":
              equalize = ["x", offset[key] - result[key]];
              break;

            case "width":
              equalize = ["width", offset[key] - result[key]];
              break;

            case "height":
              equalize = ["height", offset[key] - result[key]];
              break;

            case "right":
              break;

            case "bottom":
              break;
          }

          switch (equalize && equalize[0]) {
            case "x":
              result["left"] += equalize[1];
              result["center"] += equalize[1];
              result["right"] += equalize[1];
              break;

            case "y":
              result["top"] += equalize[1];
              result["middle"] += equalize[1];
              result["bottom"] += equalize[1];
              break;

            case "width":
              result["width"] += equalize[1];
              result["right"] += equalize[1];
              result["center"] += result["right"] - result["left"] / 2;
              break;

            case "height":
              result["height"] += equalize[1];
              result["bottom"] += equalize[1];
              result["middle"] += result["bottom"] - result["top"] / 2;
              break;
          }
        });
      }

      return result;
    }
  });
  var _default = $;
  _exports.default = _default;
});
//# sourceMappingURL=jquery.js.map