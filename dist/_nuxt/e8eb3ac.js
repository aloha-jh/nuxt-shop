(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{245:function(t,e,r){var content=r(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(118).default)("23d8e0be",content,!0,{sourceMap:!1})},247:function(t,e,r){"use strict";r(245)},248:function(t,e,r){var n=r(117)(!1);n.push([t.i,".container[data-v-d7873b96]{display:flex;justify-content:center;margin:2rem 0}.product-image[data-v-d7873b96]{width:500px;height:375px}.side-panel[data-v-d7873b96]{display:flex;flex-direction:column;justify-content:center;width:220px;text-align:center;padding:0 1rem}",""]),t.exports=n},252:function(t,e,r){"use strict";r.r(e);var n=r(6),c=(r(40),r(119)),o={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,Object(c.c)(r.id);case 3:return n=e.sent,o=n.data,e.abrupt("return",{product:o});case 6:case"end":return e.stop()}}),e)})))()},methods:{addToCart:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)(t.product);case 2:t.$router.push("/cart");case 3:case"end":return e.stop()}}),e)})))()}}},d=(r(247),r(39)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"main-panel"},[r("img",{staticClass:"product-image",attrs:{src:t.product.imageUrl,alt:t.product.name}})]),t._v(" "),r("div",{staticClass:"side-panel"},[r("p",{staticClass:"name"},[t._v(t._s(t.product.name))]),t._v(" "),r("p",{staticClass:"price"},[t._v(t._s(t.product.price))]),t._v(" "),r("button",{attrs:{type:"button"},on:{click:t.addToCart}},[t._v("Add to Cart")])])])])}),[],!1,null,"d7873b96",null);e.default=component.exports}}]);