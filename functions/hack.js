(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "core-js/modules/es6.array.iterator", "core-js/modules/es6.object.keys", "core-js/modules/web.dom.iterable", "core-js/modules/es6.regexp.split", "core-js/modules/es6.regexp.to-string", "core-js/modules/es6.regexp.match"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.object.keys"), require("core-js/modules/web.dom.iterable"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.regexp.match"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.es6Array, global.es6Object, global.webDom, global.es6Regexp, global.es6Regexp, global.es6Regexp);
    global.hack = mod.exports;
  }
})(this, function (_exports, _es6Array, _es6Object, _webDom, _es6Regexp, _es6Regexp2, _es6Regexp3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.scopelizeBy = _exports.argumentNamesBy = void 0;

  var argumentNamesBy = function getArgs(fn) {
    if (typeof fn !== "function") return []; // normal -  function[^\(]*?\(([^)]*)\)
    // arrow  -  \([\)]*\)\s*\=\>\s*\{

    var args = fn.toString().match(/function[^\(]*?\(([^)]*)\)|\([\)]*\)\s*\=\>\s*\{/)[1];
    if (!args) return [];
    return args.split(',').map(function (s) {
      return s.trim();
    }).filter(function (n) {
      return n;
    });
  };

  _exports.argumentNamesBy = argumentNamesBy;

  var scopelizeBy = function scopelizeBy(evalCommand) {
    if (evalCommand.indexOf("return") == -1) {
      evalCommand = "  return " + evalCommand;
    }

    var command = evalCommand;

    var scopeBeforeFn = function scopeBeforeFn(scope, info) {
      var params = [];
      var fnArgs = [];
      Object.keys(scope).forEach(function (key) {
        params.push(scope[key]);
        fnArgs.push(key);
      });
      fnArgs.push(command);
      var makeFn = Function.apply(Function, fnArgs);

      if (typeof info === "function") {
        info({
          func: makeFn,
          args: fnArgs,
          params: params
        });
      }

      return makeFn.apply(void 0, params);
    };

    scopeBeforeFn.scoped = function () {
      return command;
    };

    return scopeBeforeFn;
  };

  _exports.scopelizeBy = scopelizeBy;
});
//# sourceMappingURL=hack.js.map