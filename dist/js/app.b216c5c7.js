(function(t){function e(e){for(var r,i,l=e[0],s=e[1],c=e[2],p=0,f=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,l=1;l<a.length;l++){var s=a[l];0!==n[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"32da":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"#app[data-v-49fac0d0]{background:#e8ebee;min-height:1000px}.main-content[data-v-49fac0d0]{-webkit-box-flex:1;-ms-flex:1;flex:1}.main-footer[data-v-49fac0d0]{-webkit-box-flex:0.5;-ms-flex:0.5;flex:0.5}",""])},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main d-flex flex-column justify-content-around align-items-center",attrs:{id:"app"}},[a("label",[t._v("\n    Vertical\n    "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.landscape,expression:"landscape"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.landscape)?t._i(t.landscape,"1")>-1:t.landscape},on:{change:function(e){var a=t.landscape,r=e.target,n=!!r.checked;if(Array.isArray(a)){var o="1",i=t._i(a,o);r.checked?i<0&&(t.landscape=a.concat([o])):i>-1&&(t.landscape=a.slice(0,i).concat(a.slice(i+1)))}else t.landscape=n}}})]),a("div",{staticClass:"main-content d-flex align-items-center"},[a("BinaryTree",{class:{landscape:t.landscape.length},attrs:{json:t.data},on:{"click-node":t.clickNode}})],1),t._m(0)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"main-footer bg-dark col-12 d-flex justify-content-center align-items-center"},[a("p",{staticClass:"text-white"},[t._v("\n      © 2020 Author\n      Github\n      "),a("a",{staticClass:"text-warning",attrs:{href:"https://github.com/mdiaz00147/Vue-Binary-Tree",target:"_blank"}},[t._v("Vue-Binary-Tree")])])])}],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.treeData.name?a("table",[a("tr",[a("td",{class:{parentLevel:t.treeData.children,extend:t.treeData.children&&t.treeData.extend},attrs:{colspan:t.treeData.children?2*t.treeData.children.length:1}},[a("div",{class:{node:!0,hasMate:t.treeData.mate},attrs:{"data-toggle":t.treeData.tooltip_toggle,"data-placement":t.treeData.tooltip_placement,title:t.treeData.tooltip_title,"data-html":t.treeData.tooltip_html}},[a("div",{staticClass:"person",on:{click:function(e){return t.$emit("click-node",t.treeData)}}},[a("div",{staticClass:"avat"},[a("img",{attrs:{src:t.treeData.image_url}})]),a("div",{staticClass:"name"},[t._v(t._s(t.treeData.name))])]),t.treeData.mate?a("div",{staticClass:"person",on:{click:function(e){return t.$emit("click-node",t.treeData.mate)}}},[a("div",{staticClass:"avat"},[a("img",{attrs:{src:t.treeData.mate.image_url}})]),a("div",{staticClass:"name"},[t._v(t._s(t.treeData.mate.name))])]):t._e()]),t.treeData.children?a("div",{staticClass:"extend_handle",on:{click:function(e){return t.toggleExtend(t.treeData)}}}):t._e()])]),t.treeData.children&&t.treeData.extend?a("tr",t._l(t.treeData.children,(function(e,r){return a("td",{key:r,staticClass:"childLevel",attrs:{colspan:"2"}},[a("BinaryTree",{attrs:{json:e},on:{"click-node":function(e){return t.$emit("click-node",e)}}})],1)})),0):t._e()]):t._e()])},l=[],s=(a("ac6a"),{name:"BinaryTree",props:["json"],data:function(){return{treeData:{}}},watch:{json:{handler:function(t){var e=function t(e){return e.extend=void 0===e.extend||!!e.extend,Array.isArray(e.children)&&e.children.forEach((function(e){t(e)})),e};t&&(this.treeData=e(t))},immediate:!0}},methods:{toggleExtend:function(t){t.extend=!t.extend,this.$forceUpdate()}}}),c=s,d=(a("5ab9"),a("2877")),p=Object(d["a"])(c,i,l,!1,null,null,null),f=p.exports,m={name:"app",components:{BinaryTree:f},data:function(){return{landscape:[],data:{name:"root",image_url:"https://static.refined-x.com/static/avatar.jpg",tooltip_toggle:"tooltip",tooltip_placement:"top",tooltip_title:"title",children:[{name:"children1",image_url:"https://static.refined-x.com/static/avatar.jpg",tooltip_toggle:"tooltip",tooltip_placement:"left",tooltip_title:"title"},{name:"children2",image_url:"https://static.refined-x.com/static/avatar.jpg",mate:{name:"mate",image_url:"https://static.refined-x.com/static/avatar.jpg",tooltip_toggle:"tooltip",tooltip_placement:"top",tooltip_title:"<em>Tooltip</em> <u>with</u> <b>HTML</b>",tooltip_html:!0},children:[{name:"grandchild",image_url:"https://static.refined-x.com/static/avatar.jpg",tooltip_toggle:"tooltip",tooltip_placement:"bottom",tooltip_title:"<em>Tooltip</em> <u>with</u> <b>HTML</b>",tooltip_html:!0},{name:"grandchild2",image_url:"https://static.refined-x.com/static/avatar.jpg"},{name:"grandchild3",image_url:"https://static.refined-x.com/static/avatar.jpg"}]}]}}},methods:{clickNode:function(t){console.log(t)}}},h=m,u=(a("ba5b"),Object(d["a"])(h,n,o,!1,null,"49fac0d0",null)),b=u.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(b)}}).$mount("#app")},"5ab9":function(t,e,a){"use strict";var r=a("922f"),n=a.n(r);n.a},"922f":function(t,e,a){var r=a("b179");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=a("499e").default;n("e62530b0",r,!0,{sourceMap:!1,shadowMode:!1})},b179:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'table{border-collapse:separate!important;border-spacing:0!important}td{position:relative;vertical-align:top;padding:0 0 50px 0;text-align:center}.extend_handle{position:absolute;left:50%;bottom:30px;width:10px;height:10px;padding:10px;-webkit-transform:translate3d(-15px,0,0);transform:translate3d(-15px,0,0);cursor:pointer}.extend_handle:before{content:"";display:block;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;border:2px solid;border-color:#ccc #ccc transparent transparent;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}.extend_handle:hover:before{border-color:#333 #333 transparent transparent}.extend .extend_handle:before{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.extend:after{bottom:15px}.childLevel:before,.extend:after{content:"";position:absolute;left:50%;height:15px;border-left:2px solid #ccc;-webkit-transform:translate3d(-1px,0,0);transform:translate3d(-1px,0,0)}.childLevel:before{bottom:100%}.childLevel:after{content:"";position:absolute;left:0;right:0;top:-15px;border-top:2px solid #ccc}.childLevel:first-child:before,.childLevel:last-child:before{display:none}.childLevel:first-child:after{left:50%;height:15px;border:2px solid;border-color:#ccc transparent transparent #ccc;border-radius:6px 0 0 0;-webkit-transform:translate3d(1px,0,0);transform:translate3d(1px,0,0)}.childLevel:last-child:after{right:50%;height:15px;border:2px solid;border-color:#ccc #ccc transparent transparent;border-radius:0 6px 0 0;-webkit-transform:translate3d(-1px,0,0);transform:translate3d(-1px,0,0)}.childLevel:first-child.childLevel:last-child:after{left:auto;border-radius:0;border-color:transparent #ccc transparent transparent;-webkit-transform:translate3d(1px,0,0);transform:translate3d(1px,0,0)}.node{width:13em;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center}.node,.node .person{position:relative;display:inline-block}.node .person{z-index:2;width:6em;overflow:hidden}.node .person .avat{display:block;width:4em;height:4em;margin:auto;overflow:hidden;background:#fff;border:1px solid #ccc;-webkit-box-sizing:border-box;box-sizing:border-box}.node .person .avat img{width:100%;height:100%}.node .person .name{height:2em;line-height:2em;overflow:hidden;width:100%}.node.hasMate:after{content:"";position:absolute;left:2em;right:2em;top:2em;border-top:2px solid #ccc;z-index:1}.node.hasMate .person:last-child{margin-left:1em}.landscape{-webkit-transform:translate(-100%) rotate(-90deg);transform:translate(-100%) rotate(-90deg);-webkit-transform-origin:100% 0;transform-origin:100% 0}.landscape .node{text-align:left;height:8em;width:8em}.landscape .person{position:relative;-webkit-transform:rotate(90deg);transform:rotate(90deg);padding-left:4.5em;height:4em;top:4em;left:-1em}.landscape .person .avat{position:absolute;left:0}.landscape .person .name{height:4em;line-height:4em}.landscape .hasMate{position:relative}.landscape .hasMate .person{position:absolute}.landscape .hasMate .person:first-child{left:auto;right:-4em}.landscape .hasMate .person:last-child{left:-4em;margin-left:0}',""])},ba5b:function(t,e,a){"use strict";var r=a("bd07"),n=a.n(r);n.a},bd07:function(t,e,a){var r=a("32da");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=a("499e").default;n("200e3006",r,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.b216c5c7.js.map