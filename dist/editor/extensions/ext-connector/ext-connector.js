function asyncGeneratorStep(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}
/**
 * @file ext-connector.js
 *
 * @license MIT
 *
 * @copyright 2010 Alexis Deveria
 *
 */
var t={name:"connector",init:function init(t){var e=this;return function _asyncToGenerator(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function _next(t){asyncGeneratorStep(a,n,o,_next,_throw,"next",t)}function _throw(t){asyncGeneratorStep(a,n,o,_next,_throw,"throw",t)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(){var r,n,o,a,i,s,c,l,u,d,g,f,m,h,v,_,b,p,y,x,k,S,A,w,B,E,N,I,M,C;return regeneratorRuntime.wrap((function _callee$(G){for(;;)switch(G.prev=G.next){case 0:return N=function _init(){a(_).find("*").each((function(){var t=this.getAttributeNS(v,"connector");if(t){this.setAttribute("class",l.substr(1));var e=t.split(" "),r=n.getStrokedBBox([o(e[0])]),i=n.getStrokedBBox([o(e[1])]);a(this).data("c_start",e[0]).data("c_end",e[1]).data("start_bb",r).data("end_bb",i),n.getEditorNS(!0)}}))},E=function _updateConnectors(t){if(B(t),p.length)for(var e=p.length;e--;){var r=p[e],o=r.connector,a=r.elem,i=r.is_start?"start":"end",s=n.getStrokedBBox([a]);s.x=r.start_x,s.y=r.start_y,u(o,i+"_bb",s),u(o,i+"_off");var c=r.is_start?"end":"start",l=u(o,c+"_bb"),d=l.x+l.width/2,g=l.y+l.height/2,f=x(d,g,s,k(i,o));A(o,r.is_start?0:"end",f.x,f.y,!0);var m=x(f.x,f.y,u(o,c+"_bb"),k(c,o));if(A(o,r.is_start?"end":0,m.x,m.y,!0),navigator.userAgent.includes("AppleWebKit")){for(var h=o.points,v=h.numberOfItems,_=[],b=0;b<v;b++)f=h.getItem(b),_[b]=f.x+","+f.y;o.setAttribute("points",_.join(" "))}}},B=function _findConnectors(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=a(_).find(l);p=[],e.each((function(){var e;function add(){t.includes(this)&&(e=!0)}var r=[];["start","end"].forEach((function(t,e){var o=u(this,"c_"+t);null==o?(o=document.getElementById(this.attributes["se:connector"].value.split(" ")[e]),u(this,"c_"+t,o.id),u(this,t+"_bb",n.getStrokedBBox([o]))):o=document.getElementById(o),r.push(o)}),this);for(var o=0;o<2;o++){var i=r[o];if(e=!1,a(i).parents().each(add),i&&i.parentNode){if(t.includes(i)||e){var s=n.getStrokedBBox([i]);p.push({elem:i,connector:this,is_start:0===o,start_x:s.x,start_y:s.y})}}else a(this).remove()}}))},w=function _updateLine(t,e){for(var r=p.length;r--;){var n=p[r],o=n.connector,a=n.is_start?"start":"end",i=u(o,a+"_bb");i.x=n.start_x+t,i.y=n.start_y+e,u(o,a+"_bb",i);var s=n.is_start?"end":"start",c=u(o,s+"_bb"),l=c.x+c.width/2,d=c.y+c.height/2,g=x(l,d,i,k(a,o));A(o,n.is_start?0:"end",g.x,g.y,!0);var f=x(g.x,g.y,u(o,s+"_bb"),k(s,o));A(o,n.is_start?"end":0,f.x,f.y,!0)}},A=function _setPoint(t,e,r,n,o){var a=t.points,s=i.createSVGPoint();s.x=r,s.y=n,"end"===e&&(e=a.numberOfItems-1);try{a.replaceItem(s,e)}catch(o){for(var c=t.getAttribute("points").split(" "),l=0;l<c.length;l++)l===e&&(c[l]=r+","+n);t.setAttribute("points",c.join(" "))}if(o){var u=a.getItem(0),d=a.getItem(a.numberOfItems-1);A(t,1,(d.x+u.x)/2,(d.y+u.y)/2)}},S=function _showPanel(t){var e=a("#connector_rules");e.length||(e=a('<style id="connector_rules"></style>').appendTo("head")),e.text(t?"#tool_clone, #tool_topath, #tool_angle, #xy_panel { display: none !important; }":""),a("#connector_panel").toggle(t)},k=function _getOffset(t,e){var r=e.getAttribute("marker-"+t),n=5*e.getAttribute("stroke-width");return r?n:0},x=function _getBBintersect(t,e,r,n){n&&(n-=0,(r=a.extend({},r)).width+=n,r.height+=n,r.x-=n/2,r.y-=n/2);var o,i=r.x+r.width/2,s=r.y+r.height/2,c=t-i,l=e-s;return{x:i+c*(o=Math.abs(l/c)<r.height/r.width?r.width/2/Math.abs(c):l?r.height/2/Math.abs(l):0),y:s+l*o}},n=(r=e).canvas,o=n.getElem,a=t.$,i=t.svgroot,s=n.addSVGElementFromJson,c=t.selectorManager,l=".se_connector",u=a.data,_=t.svgcontent,b=!1,p=[],y=[],function(){var t=n.groupSelectedElements;n.groupSelectedElements=function(){n.removeFromSelection(a(l).toArray());for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return t.apply(this,r)};var e=n.moveSelectedElements;n.moveSelectedElements=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var o=e.apply(this,r);return E(),o},v=n.getEditorNS()}(),I=[{id:"mode_connect",type:"mode",icon:r.curConfig.imgPath+"cut.png",includeWith:{button:"#tool_line",isDefault:!1,position:1},events:{click:function click(){n.setMode("connector")}}}],G.next=17,import("./locale/".concat(r.curPrefs.lang,".js"));case 17:return M=G.sent,C=M.default,G.abrupt("return",{name:C.name,svgicons:"conn.svg",buttons:C.buttons.map((function(t,e){return Object.assign(I[e],t)})),addLangData:function addLangData(t){t.lang;return{data:C.langList}},mouseDown:function mouseDown(t){var e=t.event;d=t.start_x,g=t.start_y;var o=n.getMode(),i=r.curConfig.initStroke;if("connector"===o){if(b)return;var c=e.target,l=a(c).parents();if(-1!==a.inArray(_,l)){var h=a(c).closest("foreignObject");m=h.length?h[0]:c;var v=n.getStrokedBBox([m]),p=v.x+v.width/2,y=v.y+v.height/2;b=!0,f=s({element:"polyline",attr:{id:n.getNextId(),points:p+","+y+" "+p+","+y+" "+d+","+g,stroke:"#"+i.color,"stroke-width":m.stroke_width&&0!==m.stroke_width?m.stroke_width:i.width,fill:"none",opacity:i.opacity,style:"pointer-events:none"}}),u(f,"start_bb",v)}return{started:!0}}"select"===o&&B()},mouseMove:function mouseMove(t){var e=n.getZoom(),r=t.mouse_x/e,o=t.mouse_y/e,a=r-d,i=o-g,s=n.getMode();if("connector"===s&&b){var c=x(r,o,u(f,"start_bb"),k("start",f));d=c.x,g=c.y,A(f,0,c.x,c.y,!0),A(f,"end",r,o,!0)}else if("select"===s){for(var l=y.length;l--;){var m=y[l];m&&u(m,"c_start")&&(n.removeFromSelection([m]),n.getTransformList(m).clear())}p.length&&w(a,i)}},mouseUp:function mouseUp(t){var e=t.event.target;if("connector"===n.getMode()){var r=a(e).closest("foreignObject");r.length&&(e=r[0]);var o=a(e).parents();if(e===m)return{keep:!0,element:null,started:b=!0};if(-1===a.inArray(_,o))return a(f).remove(),{keep:!1,element:null,started:b=!1};h=e;var i=m.id,s=h.id,u=i+" "+s,p=s+" "+i;if(a(_).find(l).filter((function(){var t=this.getAttributeNS(v,"connector");return t===u||t===p})).length)return a(f).remove(),{keep:!1,element:null,started:!1};var y=n.getStrokedBBox([h]),S=x(d,g,y,k("start",f));return A(f,"end",S.x,S.y,!0),a(f).data("c_start",i).data("c_end",s).data("end_bb",y),v=n.getEditorNS(!0),f.setAttributeNS(v,"se:connector",u),f.setAttribute("class",l.substr(1)),f.setAttribute("opacity",1),n.addToSelection([f]),n.moveToBottomSelectedElement(),c.requestSelector(f).showGrips(!1),{keep:!0,element:f,started:b=!1}}},selectedChanged:function selectedChanged(t){if(a(_).find(l).length){"connector"===n.getMode()&&n.setMode("select");for(var e=(y=t.elems).length;e--;){var r=y[e];r&&u(r,"c_start")?(c.requestSelector(r).showGrips(!1),t.selectedElement&&!t.multiselected?S(!0):S(!1)):S(!1)}E()}},elementChanged:function elementChanged(t){var e=t.elems[0];if(e){if("svg"===e.tagName&&"svgcontent"===e.id&&(_=e,N()),e.getAttribute("marker-start")||e.getAttribute("marker-mid")||e.getAttribute("marker-end")){var r=e.getAttribute("marker-start"),i=e.getAttribute("marker-mid"),c=e.getAttribute("marker-end");if(f=e,a(e).data("start_off",Boolean(r)).data("end_off",Boolean(c)),"line"===e.tagName&&i){var d=Number(e.getAttribute("x1")),g=Number(e.getAttribute("x2")),m=Number(e.getAttribute("y1")),h=Number(e.getAttribute("y2")),v=e.id,b=s({element:"polyline",attr:{points:d+","+m+(" "+(d+g)/2+","+(m+h)/2+" ")+g+","+h,stroke:e.getAttribute("stroke"),"stroke-width":e.getAttribute("stroke-width"),"marker-mid":i,fill:"none",opacity:e.getAttribute("opacity")||1}});a(e).after(b).remove(),n.clearSelection(),b.id=v,n.addToSelection([b]),e=b}}if(e.getAttribute("class")===l.substr(1)){var p=o(u(e,"c_start"));E([p])}else E()}},IDsUpdated:function IDsUpdated(t){var e=[];return t.elems.forEach((function(r){"se:connector"in r.attr&&(r.attr["se:connector"]=r.attr["se:connector"].split(" ").map((function(e){return t.changes[e]})).join(" "),/. ./.test(r.attr["se:connector"])||e.push(r.attr.id))})),{remove:e}},toolButtonStateUpdate:function toolButtonStateUpdate(t){t.nostroke&&a("#mode_connect").hasClass("tool_button_current")&&r.clickSelect(),a("#mode_connect").toggleClass("disabled",t.nostroke)}});case 20:case"end":return G.stop()}}),_callee)})))()}};export default t;
//# sourceMappingURL=ext-connector.js.map
