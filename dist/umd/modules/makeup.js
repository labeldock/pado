(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./promise"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./promise"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.promise);
    global.makeup = mod.exports;
  }
})(this, function (exports, _promise) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.awaitCompose = exports.awaitLeadOnly = undefined;
  var awaitLeadOnly = exports.awaitLeadOnly = function awaitLeadOnly(func) {
    return alloc(function () {
      var $pending = false;
      return function () {
        var _this = this;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if ($pending === true) {
          return (0, _promise.abort)();
        } else {
          $pending = true;
          return (0, _promise.promise)(function (resolve, reject) {
            return (0, _promise.valueOf)(func.apply(_this, args)).then(resolve).catch(reject);
          }).then(function (e) {
            $pending = false;
            return e;
          }).catch(function (e) {
            $pending = false;
            return (0, _promise.reject)(e);
          });
        }
      };
    });
  };

  var awaitCompose = exports.awaitCompose = function awaitCompose(funcArgs) {
    return alloc(function () {
      var composeFuncs = [];

      asArray(funcArgs).forEach(function (f) {
        typeof f === "function" && composeFuncs.push(f);
      });

      return function (payload) {
        var _this2 = this;

        return (0, _promise.promise)(function (resolve, reject) {
          var _marked = /*#__PURE__*/regeneratorRuntime.mark(iterator);

          function iterator() {
            var d, i, l;
            return regeneratorRuntime.wrap(function iterator$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    d = composeFuncs, i = 0, l = d.length;

                  case 1:
                    if (!(i < l)) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 4;
                    return d[i];

                  case 4:
                    i++;
                    _context.next = 1;
                    break;

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _marked, this);
          }

          var doWhile = function doWhile(_ref, taskPayload) {
            var proc = _ref.value,
                done = _ref.done;

            if (done) {
              resolve(taskPayload);
            } else {
              (0, _promise.valueOf)(proc.call(_this2, taskPayload)).then(function (nextPayload) {
                doWhile(iterator.next(), nextPayload);
              }).catch(reject);
            }
          };

          doWhile.apply(iterator.next(), payload);
        });
      };
    });
  };
});