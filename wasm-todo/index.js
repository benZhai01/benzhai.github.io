!function(e){function t(t){for(var r,i,o=t[0],s=t[1],a=0,l=[];a<o.length;a++)i=o[a],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&l.push(n[i][0]),n[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(c&&c(t);l.length;)l.shift()()}var r={},n={0:0};var i={};var o={3:function(){return{"./index_bg.js":{__wbindgen_json_parse:function(e,t){return r[1].exports.C(e,t)},__wbindgen_json_serialize:function(e,t){return r[1].exports.D(e,t)},__wbindgen_object_drop_ref:function(e){return r[1].exports.F(e)},__wbg_modelupdated_db1802eb89819f6a:function(e){return r[1].exports.k(e)},__wbindgen_string_new:function(e,t){return r[1].exports.H(e,t)},__wbg_instanceof_Window_adf3196bdc02b386:function(e){return r[1].exports.g(e)},__wbg_localStorage_47e8ad68b9e5dcb9:function(e){return r[1].exports.j(e)},__wbg_getItem_cb17cd47353971da:function(e,t,n,i){return r[1].exports.c(e,t,n,i)},__wbg_setItem_71df4161bb87d575:function(e,t,n,i,o){return r[1].exports.s(e,t,n,i,o)},__wbindgen_is_function:function(e){return r[1].exports.z(e)},__wbindgen_is_object:function(e){return r[1].exports.A(e)},__wbg_next_edda7e0003e5daf9:function(e){return r[1].exports.o(e)},__wbg_next_2966fa909601a075:function(e){return r[1].exports.n(e)},__wbg_done_037d0a173aef1834:function(e){return r[1].exports.b(e)},__wbg_value_e60bbfb7d52af62f:function(e){return r[1].exports.v(e)},__wbg_iterator_09191f8878ea9877:function(){return r[1].exports.i()},__wbg_get_0e3f2950cdf758ae:function(e,t){return r[1].exports.d(e,t)},__wbg_call_8e95613cc6524977:function(e,t){return r[1].exports.a(e,t)},__wbindgen_object_clone_ref:function(e){return r[1].exports.E(e)},__wbg_new_e13110f81ae347cf:function(){return r[1].exports.l()},__wbg_isArray_8719d1387c4e1aca:function(e){return r[1].exports.h(e)},__wbg_push_b46eeec52d2b03bb:function(e,t){return r[1].exports.q(e,t)},__wbg_shift_35b1ab6602dacc9a:function(e){return r[1].exports.t(e)},__wbg_newnoargs_f3b8a801d5d4b079:function(e,t){return r[1].exports.m(e,t)},__wbg_self_07b2f89e82ceb76d:function(){return r[1].exports.r()},__wbg_window_ba85d88572adc0dc:function(){return r[1].exports.w()},__wbg_globalThis_b9277fc37e201fe5:function(){return r[1].exports.e()},__wbg_global_e16303fe83e1d57f:function(){return r[1].exports.f()},__wbindgen_is_undefined:function(e){return r[1].exports.B(e)},__wbg_parse_ba49950ce04b31a1:function(e,t){return r[1].exports.p(e,t)},__wbg_stringify_5d3f3e81ec4aa600:function(e){return r[1].exports.u(e)},__wbindgen_string_get:function(e,t){return r[1].exports.G(e,t)},__wbindgen_boolean_get:function(e){return r[1].exports.x(e)},__wbindgen_debug_string:function(e,t){return r[1].exports.y(e,t)},__wbindgen_throw:function(e,t){return r[1].exports.I(e,t)}}}}};function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,i){r=n[e]=[t,i]}));t.push(r[2]=a);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=function(e){return s.p+""+e+".index.js"}(e);var c=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(p);var r=n[e];if(0!==r){if(r){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",c.name="ChunkLoadError",c.type=i,c.request=o,r[1](c)}n[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return({2:[3]}[e]||[]).forEach((function(e){var r=i[e];if(r)t.push(r);else{var n,a=o[e](),l=fetch(s.p+""+{3:"830fb8b0b839bc106b7c"}[e]+".module.wasm");if(a instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)n=Promise.all([WebAssembly.compileStreaming(l),a]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)n=WebAssembly.instantiateStreaming(l,a);else{n=l.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,a)}))}t.push(i[e]=n.then((function(t){return s.w[e]=(t.instance||t).exports})))}})),Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e},s.w={};var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var c=l;s(s.s=0)}([function(e,t,r){"use strict";r.r(t);class n{constructor(e){this.model=e,this.init(),this.bindEvent()}set filterType(e){if(this.filter_type!=e){this.list_wrapper.dataset.selected=e,this.filter_type=e;for(let t=0;t<this.filter_wrapper.children.length;t++){let r=this.filter_wrapper.children[t];r.dataset.active=!1,r.dataset.type==e&&(r.dataset.active=!0)}}}set completedAll(e){e!=this._completedAll&&(this._completedAll=e,this.completedAll_wrapper.dataset.active=!!this._completedAll)}init(){this.wrapper=document.getElementById("todo_app"),this.filter_wrapper=this.wrapper.querySelector(".filter_type"),this.list_wrapper=this.wrapper.querySelector(".list"),this.completedAll_wrapper=this.wrapper.querySelector(".toggle"),this.footer_info_wrapper=this.wrapper.querySelector(".task_count"),this.task_editor=this.wrapper.querySelector(".task_editor"),this.filterType="all",this.items=[],this.model.onChanged=e=>this.modelChanged(e)}bindEvent(){this.filter_wrapper.addEventListener("click",e=>{e.target&&e.target.dataset.type&&(this.filterType=e.target.dataset.type)}),this.wrapper.querySelector(".action").addEventListener("click",e=>{let t=this.items.filter(e=>e.completed).map(e=>e.id.toString());t.length&&this.model.delete(t)}),this.completedAll_wrapper.addEventListener("click",()=>{this.completedAll=void 0===this._completedAll||!this._completedAll;let e=this.items.filter(e=>e.completed!=this._completedAll);e.forEach(e=>e.completed=this._completedAll),e.length>0&&this.model.updateItems(e)}),this.list_wrapper.addEventListener("click",e=>{if(e.target)if("INPUT"==e.target.tagName){let t=e.target.parentElement.parentElement.dataset.id,r=this.items.find(e=>e.id==t);r.completed=e.target.checked,this.model.upsert(r),this.completedAll=void 0}else if("SPAN"==e.target.tagName){let t=e.target.parentElement.parentElement.dataset.id;this.model.delete(t)}}),this.task_editor.addEventListener("keydown",e=>{13==e.keyCode&&""!=this.task_editor.value&&(this.model.upsert({title:this.task_editor.value,completed:!1}),this.task_editor.value="",e.preventDefault())})}appendList(){this.items.forEach(e=>this.list_wrapper.appendChild(this.createListItem(e)))}createListItem(e){let t=document.createElement("div");return t.className="list-item",t.dataset.completed=e.completed,t.dataset.id=e.id,t.innerHTML='\n        <div class="check-box">\n            <input type=\'checkbox\'/>\n        </div>\n        <div class="title_area">\n            <label></label>\n            <input data-show="false" class="title_modify-input"/>\n        </div>\n        <div class="clear_item">\n            <span>×</span>\n        </div>',t.querySelector("input").checked=e.completed,t.querySelector("label").innerText=e.title,t.querySelector(".title_area").addEventListener("dblclick",r=>{r.preventDefault();let n=t.querySelector(".title_modify-input");n.dataset.show=!0,n.value=e.title,n.focus();let i=()=>{n.dataset.show=!1,n.removeEventListener("keydown",o),n.removeEventListener("focusout",i)},o=t=>{13==t.keyCode?(e.title=n.value,this.model.upsert(e),i()):27==t.keyCode&&i()};n.addEventListener("keydown",o),n.addEventListener("focusout",i)}),t}updateFooterInfo(){this.footer_info_wrapper.innerText=this.model.leftCount()+" items left"}modelChanged(e){switch(this.items=this.model.getItems(),e._type){case"fill":case"batch_delete":case"batch_update":this.list_wrapper.innerHTML="",this.appendList();break;case"update":let t=e.detail.item.id,r=this.list_wrapper.querySelector(`[data-id="${t}"]`);r.dataset.completed=e.detail.item.completed,r.querySelector("label").innerText=e.detail.item.title;break;case"delete":let n=this.list_wrapper.querySelector(`[data-id="${e.detail.item.id}"]`);this.list_wrapper.removeChild(n);break;case"add":this.list_wrapper.appendChild(this.createListItem(e.detail.item)),this.completedAll=void 0}this.updateFooterInfo()}}const i=Promise.all([r.e(1),r.e(2)]).then(r.bind(null,8)),o=new class{constructor(e){this.onChanged=void 0,this.items=void 0}setWasm(e){this.wasm=e}fill(){this.wasm.run("todo_data")}delete(e){Array.isArray(e)?this.wasm.delete_items(e):this.wasm.delete_item(e)}upsert(e){e.id?this.wasm.update_item(e):(e.id=Date.now().toString(),this.wasm.add_item(e))}updateItems(e){this.wasm.update_items(e)}getItems(){return this.wasm.get_items()}leftCount(){return this.getItems().filter(e=>!e.completed).length}};window.model_updated=e=>{o.onChanged(e)},i.then(e=>{o.setWasm(e);new n(o);o.fill()}).catch(console.error)}]);