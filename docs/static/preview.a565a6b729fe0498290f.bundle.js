(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{12:function(t,n,e){"use strict";var r=e(82),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return"string"==typeof t&&t.length&&(t+=" "),n.map(function(n,e){var a=t+"i"+e;return Object(r.text)(a,n)})},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1];"string"==typeof t&&t.length&&(t+=" ");var e=Object(r.select)(t+"select",n.reduce(function(n,e,r){var a=t+"Param"+(r+1);return n[String(r)]=a,n},{}),"0");return n.reduce(function(n,e,a){var o=t+"Param"+(a+1);return n[String(a)]=Object(r.text)(o,e),n},{})[e]},u=e(222),i=e(68);var c=function(t){e(1315)},s=Object(i.a)(u.a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("div",{staticClass:"data-display",on:{click:t.toggleOpen}},[t._v("\n      🏁\n      "),e("div",{staticClass:"data-display"},[e("h3",{staticClass:"hidden-display"},[t._v("Command")]),t._v(" "),e("pre",[t._v(t._s(t.commandDisplay||t.commandValue))])]),t._v(" "),e("div",[e("div",{staticClass:"data-display"},[e("h3",{staticClass:"hidden-display"},[t._v("Output")]),t._v(" "),t.outputType?e("label",{staticClass:"badge"},[t._v(t._s(t.outputType))]):t._e(),t._v(" "),e("pre",[t._v(t._s(t.outputValue))]),t._v(" "),e("div",{staticClass:"hidden-display"},[e("div",{staticClass:"data-display"},[e("h3",[t._v("Input")]),t._v(" "),t._l(t.inputEntries,function(n,r){return e("div",{key:r},[e("label",{staticClass:"badge"},[t._v(t._s(r))]),t._v(" "),e("label",{staticClass:"badge"},[t._v(t._s(n.inputType))]),t._v(" "),e("pre",[t._v(t._s(n.inputDisplay||n.inputValue))])])})],2)])])]),t._v(" "),e("div",{staticClass:"data-display hidden-display"},[e("h3",[t._v("Reason")]),t._v(" "),t.commandDetail?e("pre",[t._v(t._s(t.commandDetail))]):t._e()])])])])},[],!1,c,"data-v-781a5055",null).exports,d=e(141),l=function(t,n){return Object(d.storiesOf)(t,n).addDecorator(r.withKnobs)},p={MethodIO:s},f={components:p,template:'\n    <div>\n      <p v-if="!defaultCommand">Undefined defaultCommand</p>\n      <p v-if="!defaultScope">Undefined defaultScope</p>\n      <section v-for="param in inputParams">\n        <h2 v-if="param.title">{{param.title}}</h2>\n        <MethodIO :command="param.command || defaultCommand" :input-params="param.inputs" :scope="param.scope || defaultScope"></MethodIO>\n      </section>\n    </div>\n  '},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"methodIO",n=arguments[1],e=arguments[2],r=""+t;return Object.assign({title:r,inputs:a(r,n)},e)};e.d(n,"d",function(){return r.text}),e.d(n,!1,function(){return r.select}),e.d(n,!1,function(){return r.withKnobs}),e.d(n,!1,function(){return a}),e.d(n,!1,function(){return o}),e.d(n,"c",function(){return l}),e.d(n,!1,function(){return p}),e.d(n,"a",function(){return f}),e.d(n,"b",function(){return m})},1313:function(t,n,e){"use strict";e.r(n),function(t){var n=e(12),r=e(87).withStorySource;Object(n.c)("Function|cast",t).addDecorator(r("import { storiesOf, FunctionGuide, text, methodIOInputParams } from '../util';\n\nstoriesOf('Function|cast', module)\n  .add('asArray', () => {\n    const { asArray } = require('../../../../.src/functions/cast');\n    return {\n      mixins: [FunctionGuide],\n      computed: {\n        defaultScope: () => ({ asArray }),\n        defaultCommand: () => text('Command', `asArray(i0);`),\n        inputParams: () => [\n          methodIOInputParams('String', [`\"Input value\"`]),\n          methodIOInputParams('Number', [`2018`]),\n          methodIOInputParams('Object', [`{foo:'bar'}`]),\n          methodIOInputParams('Array', [`[1,2,3,4]`]),\n          methodIOInputParams('null', [`null`]),\n        ],\n      },\n    };\n  })\n  .add('asObject', () => {\n    const { asObject } = require('../../../../.src/functions/cast');\n    return {\n      mixins: [FunctionGuide],\n      computed: {\n        defaultScope: () => ({ asObject }),\n        defaultCommand: () => text('Command', `asObject(i0);`),\n        inputParams: () => [\n          methodIOInputParams('String', [`\"Input value\"`]),\n          methodIOInputParams('Number', [`2018`]),\n          methodIOInputParams('Object', [`{foo:'bar'}`]),\n          methodIOInputParams('Array', [`[1,2,3,4]`]),\n          methodIOInputParams('null', [`null`]),\n        ],\n      },\n    };\n  });\n",{"Function|cast@asObject":{startLoc:{col:7,line:21},endLoc:{col:3,line:37}},"Function|cast@asArray":{startLoc:{col:7,line:4},endLoc:{col:3,line:20}}})).add("asArray",function(){var t=e(221).asArray;return{mixins:[n.a],computed:{defaultScope:function(){return{asArray:t}},defaultCommand:function(){return Object(n.d)("Command","asArray(i0);")},inputParams:function(){return[Object(n.b)("String",['"Input value"']),Object(n.b)("Number",["2018"]),Object(n.b)("Object",["{foo:'bar'}"]),Object(n.b)("Array",["[1,2,3,4]"]),Object(n.b)("null",["null"])]}}}}).add("asObject",function(){var t=e(221).asObject;return{mixins:[n.a],computed:{defaultScope:function(){return{asObject:t}},defaultCommand:function(){return Object(n.d)("Command","asObject(i0);")},inputParams:function(){return[Object(n.b)("String",['"Input value"']),Object(n.b)("Number",["2018"]),Object(n.b)("Object",["{foo:'bar'}"]),Object(n.b)("Array",["[1,2,3,4]"]),Object(n.b)("null",["null"])]}}}})}.call(this,e(174)(t))},1314:function(t,n,e){(t.exports=e(153)(!1)).push([t.i,'h3[data-v-781a5055]{display:inline-block;margin:5px 0}pre[data-v-781a5055]{margin:10px 0}.badge[data-v-781a5055]{display:inline-block;background-color:gray;font-size:13px;padding:0 5px;height:15px;line-height:15px;border-radius:4px;color:#fff}.data-display[data-v-781a5055]{margin:5px 0;padding:10px;border:1px solid #ddd}.data-display .hidden-display[data-v-781a5055]{display:none}.data-display[data-v-781a5055]:hover,.data-display[open][data-v-781a5055]{background-color:#fafafa}.data-display[open] .hidden-display[data-v-781a5055]{display:block}.div-column-2>div[data-v-781a5055]{float:left;width:50%}.div-column-2[data-v-781a5055]:after{content:"";display:block;clear:both}',""])},1315:function(t,n,e){var r=e(1314);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(142).default)("7eccd4c6",r,!0,{})},1321:function(t,n,e){"use strict";e.r(n),function(t){var n=e(12),r=e(87).withStorySource;Object(n.c)("Function|datetime",t).addDecorator(r("import { storiesOf, FunctionGuide, text, methodIOInputParams } from '../util';\n\nstoriesOf('Function|datetime', module)\n  .add('dateExp', () => {\n    //dateExp\n    //timestampExp\n    //timescaleExp\n\n    const { dateExp } = require('../../../../.src/functions/datetime');\n    return {\n      mixins: [FunctionGuide],\n      computed: {\n        defaultScope: () => ({ dateExp }),\n        defaultCommand: () => text('Command', `dateExp(i0,i1);`),\n        inputParams: () => [\n          methodIOInputParams('YYYY-MM-DD', [`\"2018-01-01\"`, undefined]),\n          methodIOInputParams('YYYY-MM-DD format', [`\"2018-01-02\"`, `\"YYYY_MM_DD\"`]),\n        ],\n      },\n    };\n  })\n  .add('timestampExp', () => {\n    //timescaleExp\n\n    const { timestampExp } = require('../../../../.src/functions/datetime');\n    return {\n      mixins: [FunctionGuide],\n      computed: {\n        defaultScope: () => ({ timestampExp }),\n        defaultCommand: () => text('Command', `timestampExp(i0);`),\n        inputParams: () => [\n          methodIOInputParams('Now', [], { command: text('Now command', 'timestampExp();') }),\n          methodIOInputParams('Date format', [`\"2018-01-01\"`]),\n          methodIOInputParams('Date time', [`\"2018-01-02 12:50:44\"`]),\n        ],\n      },\n    };\n  })\n  .add('timescaleExp', () => {\n    const { timescaleExp } = require('../../../../.src/functions/datetime');\n    return {\n      mixins: [FunctionGuide],\n      computed: {\n        defaultScope: () => ({ timescaleExp }),\n        defaultCommand: () => text('Command', `timescaleExp(i0);`),\n        inputParams: () => [\n          methodIOInputParams('Now', [], { command: text('Now command', 'timescaleExp();') }),\n          methodIOInputParams('2 Years', [`\"2Y\"`]),\n          methodIOInputParams('3 minute', [`\"3m\"`]),\n          methodIOInputParams('1:11:11', [`\"1h11m11s\"`]),\n          methodIOInputParams('1:11:11.111', [`\"1h11m11s111ms\"`]),\n        ],\n      },\n    };\n  });\n",{"Function|datetime@timescaleExp":{startLoc:{col:7,line:39},endLoc:{col:3,line:55}},"Function|datetime@timestampExp":{startLoc:{col:7,line:22},endLoc:{col:3,line:38}},"Function|datetime@dateExp":{startLoc:{col:7,line:4},endLoc:{col:3,line:21}}})).add("dateExp",function(){var t=e(261).dateExp;return{mixins:[n.a],computed:{defaultScope:function(){return{dateExp:t}},defaultCommand:function(){return Object(n.d)("Command","dateExp(i0,i1);")},inputParams:function(){return[Object(n.b)("YYYY-MM-DD",['"2018-01-01"',void 0]),Object(n.b)("YYYY-MM-DD format",['"2018-01-02"','"YYYY_MM_DD"'])]}}}}).add("timestampExp",function(){var t=e(261).timestampExp;return{mixins:[n.a],computed:{defaultScope:function(){return{timestampExp:t}},defaultCommand:function(){return Object(n.d)("Command","timestampExp(i0);")},inputParams:function(){return[Object(n.b)("Now",[],{command:Object(n.d)("Now command","timestampExp();")}),Object(n.b)("Date format",['"2018-01-01"']),Object(n.b)("Date time",['"2018-01-02 12:50:44"'])]}}}}).add("timescaleExp",function(){var t=e(261).timescaleExp;return{mixins:[n.a],computed:{defaultScope:function(){return{timescaleExp:t}},defaultCommand:function(){return Object(n.d)("Command","timescaleExp(i0);")},inputParams:function(){return[Object(n.b)("Now",[],{command:Object(n.d)("Now command","timescaleExp();")}),Object(n.b)("2 Years",['"2Y"']),Object(n.b)("3 minute",['"3m"']),Object(n.b)("1:11:11",['"1h11m11s"']),Object(n.b)("1:11:11.111",['"1h11m11s111ms"'])]}}}})}.call(this,e(174)(t))},1322:function(t,n,e){var r={"./functions.datetime.stories.js":1321,"./functions.stories.js":1313};function a(t){var n=o(t);return e(n)}function o(t){var n=r[t];if(!(n+1)){var e=new Error('Cannot find module "'+t+'".');throw e.code="MODULE_NOT_FOUND",e}return n}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id=1322},1323:function(t,n,e){(t.exports=e(153)(!1)).push([t.i,"dd+dt{margin-top:20px}dd{margin-left:20px}",""])},1324:function(t,n,e){var r=e(1323);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(142).default)("3c2309d1",r,!0,{})},1325:function(t,n,e){"use strict";e.r(n),function(t){var n=e(141),r=e(139),a=(e(135),e(672)),o=e(87).withStorySource;Object(n.storiesOf)("Welcome",t).addDecorator(o("import { storiesOf } from '@storybook/vue';\nimport { linkTo } from '@storybook/addon-links';\nimport { action } from '@storybook/addon-actions';\nimport Welcome from './Welcome.vue';\n\nconst story = storiesOf('Welcome', module);\nstory.add('Welcome', () => ({\n  render: h => h(Welcome, { props: { goToButton: linkTo('App') } }),\n}));\n",{"@Welcome":{startLoc:{col:10,line:7},endLoc:{col:2,line:9}}})).add("Welcome",function(){return{render:function(t){return t(a.a,{props:{goToButton:Object(r.linkTo)("App")}})}}})}.call(this,e(174)(t))},1326:function(t,n,e){(t.exports=e(153)(!1)).push([t.i,".rounded{border-radius:5px}.button{border:3px solid;padding:10px 20px;background-color:#fff;outline:none}",""])},1327:function(t,n,e){var r=e(1326);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(142).default)("2612fb8e",r,!0,{})},1348:function(t,n,e){"use strict";e.r(n),function(t){var n=e(141),r=e(675),a=e(223),o=e(674),u=e(673);a.default.component("my-button",u.a),a.default.use(o.a),Object(r.setOptions)({hierarchyRootSeparator:/\|/}),Object(n.configure)(function(){e(1325);var t=e(1322);t.keys().forEach(function(n){return t(n)})},t)}.call(this,e(174)(t))},1350:function(t,n,e){e(447),e(1349),t.exports=e(1348)},221:function(t,n,e){"use strict";e.r(n),e.d(n,"asArray",function(){return a}),e.d(n,"toArray",function(){return o}),e.d(n,"asObject",function(){return u}),e.d(n,"toNumber",function(){return i}),e.d(n,"cleanObject",function(){return c}),e.d(n,"clone",function(){return s}),e.d(n,"cloneDeep",function(){return d}),e.d(n,"free",function(){return l}),e.d(n,"removeValue",function(){return f}),e.d(n,"instance",function(){return m}),e.d(n,"alloc",function(){return b});var r=e(24);const a=function(t,n){return Object(r.b)(t)?t:Object(r.c)(t)?Object(r.b)(n)?n:Object(r.c)(n)?[]:[n]:"object"==typeof t&&"function"==typeof t.toArray?t.toArray():[t]},o=function(t,n){return void 0===t||null===t||NaN===t?[]:Object(r.b)(t)?Array.prototype.slice.call(t):"object"==typeof t&&"function"==typeof t.toArray?t.toArray():"string"==typeof n?t.split(n):[t]},u=function(t,n="default"){return Object(r.e)(t)?t:{[n]:t}},i=function(t,n){switch(typeof t){case"number":return t;case"string":var e=1*t.replace(/[^.\d\-]/g,"");return Object(r.a)(e)?0:e}switch(typeof n){case"number":return n;case"string":e=1*n;return Object(r.a)(e)?0:e}return 0},c=function(t){return t instanceof Array?Array.prototype.splice.call(t,0,t.length):"object"==typeof t&&Object.keys(t).forEach(n=>{delete t[n]}),t},s=function(t){switch(typeof t){case"undefined":case"function":case"boolean":case"number":case"string":return t;case"object":if(null===t)return t;if(Object(r.b)(t)){let n=[];for(let e=0,r=t.length;e<r;e++)n.push(t[e]);return n}if(!Object(r.e)(t)){if(t instanceof Date){let n=new Date;return n.setTime(t.getTime()),n}return t}let n={};return Object.keys(t).forEach(e=>{t.hasOwnProperty(e)&&(n[e]=t[e])}),n;default:return console.error("clone::copy failed : target => ",t),t}},d=function(t){if("object"==typeof t){let a;if(Object(r.b)(t)){Object(r.b)(a)||(a=[]);for(var n=0,e=t.length;n<e;n++)a.push("object"==typeof t[n]&&null!==t[n]?s(t[n]):t[n]);return a}return a={},Object.keys(t).forEach(n=>{"object"==typeof t[n]&&null!==t[n]&&a[n]?s(t[n],a[n]):a[n]=t[n]}),a}return s(t)},l=function(t){const n={};return Object.keys(t).forEach(e=>{/^\$/.test(e)||(n[e]=d(t[e]))}),n},p=function(t,n){if(Object(r.b)(t))for(var e=0,a=t.length;e<a;e++)if(t[e]===n)return e;if(Object(r.d)(t))for(var o in t)if(t[o]===n)return o},f=function(t,n){for(var e=!0,a=Object(r.b)(t);e;){var o=p(t,n);void 0===o?e=!1:a?t.splice(o,1):delete t[o]}return t},m=function(t,n){var e,r=function(t){if("object"==typeof t)for(var n in t)this[n]=t[n]};return"object"==typeof t&&("object"==typeof n&&(r.prototype=n),e=new r(t)),"function"==typeof t&&("object"==typeof n&&(t.prototype=n),e=new t),e},b=function(t){let n=t();const e=function(...t){return n.apply(this,t)};return e.reset=function(){n=t(e,e)},e.$constructor=n,e};!function(){const t=t=>_.assign({},t),n=(t,n)=>_.assign({},t,n)}()},222:function(module,__webpack_exports__,__webpack_require__){"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},altTextFilter=function(t){return"string"==typeof t?'"'+t+'"':null===t?"null":void 0===t?"undefined":null},scopeFunction=function(t){t.indexOf("return")>-1||(t="  return "+t);var n=t,e=function(t,e){var r=[],a=[];Object.keys(t).forEach(function(n){r.push(t[n]),a.push(n)}),a.push(n);var o=Function.apply(Function,a);return"function"==typeof e&&e({func:o,args:a,params:r}),o.apply(void 0,r)};return e.scoped=function(){return n},e},inputEvaluation=function inputEvaluation(input){var inputTextMode=arguments.length>1&&void 0!==arguments[1]&&arguments[1],evalResult={inputValue:void 0,inputType:void 0,inputError:void 0,inputDisplay:void 0};try{if(inputTextMode){var inputStringValue=input+"";evalResult.inputValue=inputStringValue.trim()?eval("( "+inputStringValue+" )"):inputStringValue}else evalResult.inputValue=input;evalResult.inputType=_typeof(evalResult.inputValue),"object"===_typeof(evalResult.inputValue)&&Array.isArray(evalResult.inputValue)&&(evalResult.inputType="Array"),evalResult.inputError=null,evalResult.inputDisplay=altTextFilter(evalResult.inputValue)}catch(t){evalResult.inputType="ERROR",evalResult.inputError=t.message,evalResult.inputDisplay=t.message}return evalResult},dataEvaluation=function(t){var n={type:void 0};return n.type=void 0===t?"undefined":_typeof(t),"object"===n.type&&Array.isArray(t)&&(n.type="Array"),n};__webpack_exports__.a={props:["command","input","inputText","inputParams","scope"],data:function(){return{commandDisplay:null,commandDetail:null,inputEvals:[],outputError:null,outputType:null,outputDisplay:null}},methods:{toggleOpen:function(t){"string"==typeof t.currentTarget.getAttribute("open")?t.currentTarget.removeAttribute("open"):t.currentTarget.setAttribute("open","")}},computed:{commandValue:function(){var t=scopeFunction(this.command);return this.scopedFn=t,this.command},inputEntries:function(){var t=this;if(this.inputParams)this.inputEvals=[],this.inputParams.forEach(function(n){t.inputEvals.push(inputEvaluation(n,!0))});else{var n=void 0;n="string"==typeof this.inputText?inputEvaluation(this.inputText,!0):inputEvaluation(this.input,!1),this.inputEvals=[n]}return this.inputEvals},outputValue:function(){var t=this,n=void 0;try{var e=Object.keys(this.scope||{}).reduce(function(n,e){return n[e]=t.scope[e],n},{inputs:this.inputEntries});e.inputs&&e.inputs.forEach(function(t,n){e["i"+n]=t.inputValue});var r=this.commandValue,a=function(t,n){r&&(r=r.replace(t,n))};n=this.scopedFn(e,function(n){var e=n.func,o=n.args,u=n.params.reduce(function(t,n,e){var r=void 0;return"function"==typeof n?r="[Function]":"inputs"===o[e]?r="[Arguments]":"object"===(void 0===n?"undefined":_typeof(n))?(r=JSON.stringify(n),a(o[e],r)):(r=n+"",a(o[e],"string"==typeof n?'"'+r+'"':r)),t[o[e]]=r,t},{});t.commandDisplay=r||null,t.commandDetail=JSON.stringify(u,2,2),t.commandDetail+="\n\n"+e})}catch(t){return this.outputType=null,this.outputDisplay=null,t.message}var o=dataEvaluation(n).type;try{this.outputType=o,this.outputDisplay=altTextFilter(n)}catch(t){return this.outputType=null,this.outputDisplay=null,t.message}return JSON.stringify(n)}}}},24:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"c",function(){return a}),e.d(n,"b",function(){return o}),e.d(n,"d",function(){return u}),e.d(n,"e",function(){return i});const r=function(t){return t!=t&&"number"==typeof t},a=function(t){return r(t)||void 0===t||null===t},o=function(t){return Array.isArray(t)||t instanceof Array},u=t=>null!==t&&"object"==typeof t,i=(function(t,n){let e;try{e=0 instanceof NodeList,e=!0}catch(t){e=!1}}(),t=>"object"==typeof t&&t.constructor===Object)},261:function(t,n,e){"use strict";e.r(n),e.d(n,"dateExp",function(){return o}),e.d(n,"timestampExp",function(){return u}),e.d(n,"timescaleExp",function(){return i});var r=e(24),a=e(221);const o=function(t,n,e){Object(r.b)(t)&&(t=t.join(" "));var o=/(\d\d\d\d|)[^\d]?(\d\d|\d|).?(\d\d|\d|)[^\d]?(\d\d|\d|)[^\d]?(\d\d|\d|)[^\d]?(\d\d|\d|)/.exec(t);o[1]=o[1]||(new Date).getYear()+1900+"",o[2]=o[2]||(new Date).getMonth()+1,o[3]=o[3]||(new Date).getDate(),o[4]=o[4]||"00",o[5]=o[5]||"00",o[6]=o[6]||"00";var u=[o[1],o[2],o[3],o[4],o[5],o[6],o[0]];return u.year=o[1],u.month=o[2],u.date=o[3],u.hour=o[4],u.minute=o[5],u.second=o[6],u.init=o[7],u.format=function(t){return t.replace("YYYY",u.year).replace(/(MM|M)/,u.month).replace(/(DD|D)/,u.date).replace(/(hh|h)/,u.hour).replace(/(mm|m)/,u.minute).replace(/(ss|s)/,u.second).replace(/(A)/,Object(a.toNumber)(u.hour)>12?"PM":"AM")},"string"==typeof n?u.format(n):u},u=function(t){return 0===arguments.length?+new Date:("string"==typeof t&&(t=o(t)),"number"==typeof t?t:(Object(r.b)(t)&&7==t.length&&(t=new Date(t[0],t[1],t[2],t[3],t[4],t[5])),t instanceof Date?+t:0))},i=function(t){var n=0;return"number"==typeof t?t:("string"==typeof t&&(t=(t=(t=(t=(t=(t=(t=t.replace(/\d+(Y|year)/,function(t){return t.replace(/\d+/,function(t){n+=31536e6*t}),""})).replace(/\d+(M|month)/,function(t){return t.replace(/\d+/,function(t){n+=26784e5*t}),""})).replace(/\d+(D|day)/,function(t){return t.replace(/\d+/,function(t){n+=864e5*t}),""})).replace(/\d+(h|hour)/,function(t){return t.replace(/\d+/,function(t){n+=36e5*t}),""})).replace(/\d+(ms|millisecond)/,function(t){return t.replace(/\d+/,function(t){n+=1*t}),""})).replace(/\d+(m|minute)/,function(t){return t.replace(/\d+/,function(t){n+=6e4*t}),""})).replace(/\d+(s|second)/,function(t){return t.replace(/\d+/,function(t){n+=1e3*t}),""})),n)}},672:function(t,n,e){"use strict";var r=e(68);var a=function(t){e(1324)},o=Object(r.a)({props:{goToButton:{default:function(){return function(){return null}}}}},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main"},[e("h1",[t._v("Pado storybook")]),t._v(" "),e("dl",[e("dt",[t._v("GIT")]),t._v(" "),e("dd",[e("a",{attrs:{href:"https://github.com/sepalang/pado",target:"_blank"}},[t._v("sepalang/pado")])]),t._v(" "),e("dt",[t._v("Feature")]),t._v(" "),e("dd",[t._v("Functions")]),t._v(" "),e("dd",[t._v("Modules")]),t._v(" "),e("dd",[t._v("Hacks")]),t._v(" "),e("dt",[t._v("Advence")]),t._v(" "),e("dd",[t._v("How use to visual programming")])])])}],!1,a,null,null);n.a=o.exports},673:function(t,n,e){"use strict";var r={props:{rounded:Boolean,handleClick:{default:function(){return function(){return null}}},handleDblclick:{default:function(){return function(){return null}}},color:{default:"#42b983"}}},a=e(68);var o=function(t){e(1327)},u=Object(a.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"button",class:{rounded:this.rounded},style:{color:this.color,borderColor:this.color},on:{click:this.handleClick,dblclick:this.handleDblclick}},[this._t("default"),this._v("!")],2)},[],!1,o,null,null);n.a=u.exports}},[[1350,1,2]]]);
//# sourceMappingURL=preview.a565a6b729fe0498290f.bundle.js.map