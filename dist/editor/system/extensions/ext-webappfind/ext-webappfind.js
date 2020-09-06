System.register([],(function(e,n){"use strict";return{execute:function(){function asyncGeneratorStep(e,n,t,r,a,i,o){try{var c=e[i](o),s=c.value}catch(e){return void t(e)}c.done?n(s):Promise.resolve(s).then(r,a)}
/**
      * Depends on Firefox add-on and executables from
      * {@link https://github.com/brettz9/webappfind}.
      * @author Brett Zamir
      * @license MIT
      * @todo See WebAppFind Readme for SVG-related todos
      */
e("default",{name:"webappfind",init:function init(e){var t=this;return function _asyncToGenerator(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function _next(e){asyncGeneratorStep(i,r,a,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(i,r,a,_next,_throw,"throw",e)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(){var r,a,i,o,c,s,u,p;return regeneratorRuntime.wrap((function _callee$(f){for(;;)switch(f.prev=f.next){case 0:return r=e.$,a=t,f.next=4,n.import("./locale/".concat(a.curPrefs.lang,".js"));case 4:return i=f.sent,o=i.default,"read",s=["read",c="save"],t.canvas.bind("message",(function(e,n){var t,i,o=n.data,c=n.origin;try{var p=o.webappfind;if(t=p.type,u=p.pathID,i=p.content,c!==location.origin||s.includes(t))return}catch(e){return}switch(t){case"view":a.loadFromString(i);break;case"save-end":r.alert("save complete for pathID ".concat(u,"!"));break;default:throw new Error("Unexpected WebAppFind event type")}})),p=[{id:"webappfind_save",icon:"webappfind.png",type:"app_menu",position:4,events:{click:function click(){u&&window.postMessage({webappfind:{type:c,pathID:u,content:a.canvas.getSvgString()}},"null"===window.location.origin?"*":window.location.origin)}}}],f.abrupt("return",{name:o.name,svgicons:"webappfind-icon.svg",buttons:o.buttons.map((function(e,n){return Object.assign(p[n],e)}))});case 10:case"end":return f.stop()}}),_callee)})))()}})}}}));
