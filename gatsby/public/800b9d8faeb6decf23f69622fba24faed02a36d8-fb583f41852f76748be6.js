(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{CoN9:function(t,e,r){"use strict";var n=r("YVoz"),i=r("RT5d");t.exports=function(t,e){var r=e||{useDashedStyles:!1};function o(e,r){return t(e,null,r.children)}return{defaultSerializers:{types:{block:function(e){var r=e.node.style||"normal";return/^h\d/.test(r)?t(r,null,e.children):t("blockquote"===r?"blockquote":"p",null,e.children)},image:function(e){if(!e.node.asset)return null;var r=t("img",{src:i(e)});return e.isInline?r:t("figure",null,r)}},marks:{strong:o.bind(null,"strong"),em:o.bind(null,"em"),code:o.bind(null,"code"),underline:function(e){var n=r.useDashedStyles?{"text-decoration":"underline"}:{textDecoration:"underline"};return t("span",{style:n},e.children)},"strike-through":function(e){return t("del",null,e.children)},link:function(e){return t("a",{href:e.mark.href},e.children)}},list:function(e){var r="bullet"===e.type?"ul":"ol";return t(r,null,e.children)},listItem:function(e){var r=e.node.style&&"normal"!==e.node.style?t(e.serializers.types.block,e,e.children):e.children;return t("li",null,r)},block:function(e){var r=e.node,n=e.serializers,i=e.options,o=e.isInline,s=e.children,a=r._type,l=n.types[a];if(!l)throw new Error('Unknown block type "'.concat(a,'", please specify a serializer for it in the `serializers.types` prop'));return t(l,{node:r,options:i,isInline:o},s)},span:function(e){var r=e.node,n=r.mark,i=r.children,o="string"==typeof n?n:n._type,s=e.serializers.marks[o];return s?t(s,e.node,i):(console.warn('Unknown mark type "'.concat(o,'", please specify a serializer for it in the `serializers.marks` prop')),t(e.serializers.markFallback,null,i))},hardBreak:function(){return t("br")},container:"div",markFallback:"span",text:void 0,empty:""},serializeSpan:function(e,r,i,o){if("\n"===e&&r.hardBreak)return t(r.hardBreak,{key:"hb-".concat(i)});if("string"==typeof e)return r.text?t(r.text,{key:"text-".concat(i)},e):e;var s;e.children&&(s={children:e.children.map((function(t,r){return o.serializeNode(t,r,e.children,!0)}))});var a=n({},e,s);return t(r.span,{key:e._key||"span-".concat(i),node:a,serializers:r})}}}},DCZw:function(t,e,r){"use strict";var n=r("q1tI"),i=(0,r("DEm0").getSerializers)(n.createElement),o=i.defaultSerializers,s=i.serializeSpan;t.exports={serializeSpan:s,serializers:o,renderProps:{nestMarks:!0}}},DEm0:function(t,e,r){t.exports=r("ctZY")},RT5d:function(t,e,r){"use strict";var n=r("pmlw"),i=r("bYjO"),o=r("YVoz"),s=encodeURIComponent,a="You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see ".concat(n("block-content-image-materializing"));t.exports=function(t){var e=t.node,r=t.options,n=r.projectId,l=r.dataset,u=e.asset;if(!u)throw new Error("Image does not have required `asset` property");if(u.url)return u.url+function(t){var e=t.imageOptions,r=Object.keys(e);if(!r.length)return"";var n=r.map((function(t){return"".concat(s(t),"=").concat(s(e[t]))}));return"?".concat(n.join("&"))}(r);if(!n||!l)throw new Error(a);if(!u._ref)throw new Error("Invalid image reference in block, no `_ref` found on `asset`");return i(o({projectId:n,dataset:l},r.imageOptions||{})).image(e).toString()}},V1Fd:function(t,e,r){"use strict";var n=r("YVoz"),i=r("ftCV"),o=r("ueIO"),s=r("xM0z"),a=r("cIWD"),l=["projectId","dataset","imageOptions"],u={imageOptions:{}};function c(t){return"block"===t._type&&t.listItem}t.exports=function(t,e,r,h){var f=n({},u,e),p=Array.isArray(f.blocks)?f.blocks:[f.blocks],d=s(p),m=o(d,f.listNestMode),g=a(r,f.serializers||{}),v=l.reduce((function(t,e){var r=f[e];return void 0!==r&&(t[e]=r),t}),{});function y(e,r,n,o){return"list"===(p=e)._type&&p.listItem?(a=(s=e).listItem,l=s.level,u=s._key,f=s.children.map(y),t(g.list,{key:u,level:l,type:a,options:v},f)):c(e)?function(e,r){var n=e._key,o=i(e).map(y);return t(g.listItem,{node:e,serializers:g,index:r,key:n,options:v},o)}(e,function(t,e){for(var r=0,n=0;n<e.length;n++){if(e[n]===t)return r;c(e[n])&&r++}return r}(e,n)):function(t){return"string"==typeof t||t.marks||"span"===t._type}(e)?h(e,g,r,{serializeNode:y}):function(e,r,n){var o=i(e).map((function(t,e,r){return y(t,e,r,!0)})),s={key:e._key||"block-".concat(r),node:e,isInline:n,serializers:g,options:v};return t(g.block,s,o)}(e,r,o);var s,a,l,u,f,p}var w=Boolean(f.renderContainerOnSingleChild),b=m.map(y);if(w||b.length>1){var k=f.className?{className:f.className}:{};return t(g.container,k,b)}return b[0]?b[0]:"function"==typeof g.empty?t(g.empty):g.empty}},bYjO:function(t,e,r){t.exports=function(){function t(){return(t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(t){var r=0;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t)))return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}var n="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function i(e){if(!e)return null;var r,n;if("string"==typeof e&&/^https?:\/\//.test(""+e))r={asset:{_ref:o(e)}};else if("string"==typeof e)r={asset:{_ref:e}};else if((n=e)&&"string"==typeof n._ref)r={asset:e};else if(function(t){return!!t&&"string"==typeof t._id}(e))r={asset:{_ref:e._id||""}};else if(function(t){var e=t;return!(!e||!e.asset)&&"string"==typeof e.asset.url}(e))r={asset:{_ref:o(e.asset.url)}};else{if("object"!=typeof e.asset)return null;r=e}var i=e;return i.crop&&(r.crop=i.crop),i.hotspot&&(r.hotspot=i.hotspot),function(e){if(e.crop&&e.hotspot)return e;var r=t({},e);return r.crop||(r.crop={left:0,top:0,bottom:0,right:0}),r.hotspot||(r.hotspot={x:.5,y:.5,height:1,width:1}),r}(r)}function o(t){return("image-"+t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}var s=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"]];function a(e){var r=t({},e||{}),o=r.source;delete r.source;var a=i(o);if(!a)return null;var l=function(t){var e=t.split("-"),r=e[1],i=e[2],o=e[3];if(!r||!i||!o)throw new Error("Malformed asset _ref '"+t+"'. Expected an id like \""+n+'".');var s=i.split("x"),a=+s[0],l=+s[1];if(!isFinite(a)||!isFinite(l))throw new Error("Malformed asset _ref '"+t+"'. Expected an id like \""+n+'".');return{id:r,width:a,height:l,format:o}}(a.asset._ref||a.asset._id||""),u=Math.round(a.crop.left*l.width),c=Math.round(a.crop.top*l.height),h={left:u,top:c,width:Math.round(l.width-a.crop.right*l.width-u),height:Math.round(l.height-a.crop.bottom*l.height-c)},f=a.hotspot.height*l.height/2,p=a.hotspot.width*l.width/2,d=a.hotspot.x*l.width,m=a.hotspot.y*l.height,g={left:d-p,top:m-f,right:d+p,bottom:m+f};return r.rect||r.focalPoint||r.ignoreImageParams||r.crop||(r=t(t({},r),function(t,e){var r,n=e.width,i=e.height;if(!n||!i)return{width:n,height:i,rect:t.crop};var o=t.crop,s=t.hotspot,a=n/i;if(o.width/o.height>a){var l=o.height,u=l*a,c=o.top,h=(s.right-s.left)/2+s.left-u/2;h<o.left?h=o.left:h+u>o.left+o.width&&(h=o.left+o.width-u),r={left:Math.round(h),top:Math.round(c),width:Math.round(u),height:Math.round(l)}}else{var f=o.width,p=f/a,d=o.left,m=(s.bottom-s.top)/2+s.top-p/2;m<o.top?m=o.top:m+p>o.top+o.height&&(m=o.top+o.height-p),r={left:Math.max(0,Math.floor(d)),top:Math.max(0,Math.floor(m)),width:Math.round(f),height:Math.round(p)}}return{width:n,height:i,rect:r}}({crop:h,hotspot:g},r))),function(t){var e=t.baseUrl||"https://cdn.sanity.io",r=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format,n=e+"/images/"+t.projectId+"/"+t.dataset+"/"+r,i=[];if(t.rect){var o=t.rect,a=o.left,l=o.top,u=o.width,c=o.height;(0!==a||0!==l||c!==t.asset.height||u!==t.asset.width)&&i.push("rect="+a+","+l+","+u+","+c)}t.bg&&i.push("bg="+t.bg),t.focalPoint&&(i.push("fp-x="+t.focalPoint.x),i.push("fp-y="+t.focalPoint.y));var h=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return h&&i.push("flip="+h),s.forEach((function(e){var r=e[0],n=e[1];void 0!==t[r]?i.push(n+"="+encodeURIComponent(t[r])):void 0!==t[n]&&i.push(n+"="+encodeURIComponent(t[n]))})),0===i.length?n:n+"?"+i.join("&")}(t(t({},r),{},{asset:l}))}var l=["clip","crop","fill","fillmax","max","scale","min"],u=["top","bottom","left","right","center","focalpoint","entropy"],c=["format"];function h(t){for(var e,n=r(s);!(e=n()).done;){var i=e.value,o=i[0],a=i[1];if(t===o||t===a)return o}return t}var f=function(){function e(e,r){this.options=t(e?t({},e.options||{}):{},r||{})}var r=e.prototype;return r.withOptions=function(r){var n=r.baseUrl||this.options.baseUrl,i={baseUrl:n};for(var o in r)r.hasOwnProperty(o)&&(i[h(o)]=r[o]);return new e(this,t({baseUrl:n},i))},r.image=function(t){return this.withOptions({source:t})},r.dataset=function(t){return this.withOptions({dataset:t})},r.projectId=function(t){return this.withOptions({projectId:t})},r.bg=function(t){return this.withOptions({bg:t})},r.dpr=function(t){return this.withOptions({dpr:t})},r.width=function(t){return this.withOptions({width:t})},r.height=function(t){return this.withOptions({height:t})},r.focalPoint=function(t,e){return this.withOptions({focalPoint:{x:t,y:e}})},r.maxWidth=function(t){return this.withOptions({maxWidth:t})},r.minWidth=function(t){return this.withOptions({minWidth:t})},r.maxHeight=function(t){return this.withOptions({maxHeight:t})},r.minHeight=function(t){return this.withOptions({minHeight:t})},r.size=function(t,e){return this.withOptions({width:t,height:e})},r.blur=function(t){return this.withOptions({blur:t})},r.sharpen=function(t){return this.withOptions({sharpen:t})},r.rect=function(t,e,r,n){return this.withOptions({rect:{left:t,top:e,width:r,height:n}})},r.format=function(t){return this.withOptions({format:t})},r.invert=function(t){return this.withOptions({invert:t})},r.orientation=function(t){return this.withOptions({orientation:t})},r.quality=function(t){return this.withOptions({quality:t})},r.forceDownload=function(t){return this.withOptions({download:t})},r.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},r.flipVertical=function(){return this.withOptions({flipVertical:!0})},r.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},r.fit=function(t){if(-1===l.indexOf(t))throw new Error('Invalid fit mode "'+t+'"');return this.withOptions({fit:t})},r.crop=function(t){if(-1===u.indexOf(t))throw new Error('Invalid crop mode "'+t+'"');return this.withOptions({crop:t})},r.saturation=function(t){return this.withOptions({saturation:t})},r.auto=function(t){if(-1===c.indexOf(t))throw new Error('Invalid auto mode "'+t+'"');return this.withOptions({auto:t})},r.url=function(){return a(this.options)},r.toString=function(){return this.url()},e}();return function(t){var e=t;if(function(t){return!!t&&"object"==typeof t.clientConfig}(e)){var r=e.clientConfig,n=r.apiHost,i=r.projectId,o=r.dataset;return new f(null,{baseUrl:(n||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:i,dataset:o})}return new f(null,t)}}()},cIWD:function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var i=r("YVoz");t.exports=function(t,e){return Object.keys(t).reduce((function(r,o){var s=n(t[o]);return r[o]="function"===s?void 0!==e[o]?e[o]:t[o]:"object"===s?i({},t[o],e[o]):void 0===e[o]?t[o]:e[o],r}),{})}},ctZY:function(t,e,r){"use strict";var n=r("CoN9"),i=r("V1Fd"),o=r("RT5d"),s=r("cIWD");t.exports={blocksToNodes:function(t,e,r,o){if(r)return i(t,e,r,o);var s=n(t);return i(t,e,s.defaultSerializers,s.serializeSpan)},getSerializers:n,getImageUrl:o,mergeSerializers:s}},ftCV:function(t,e,r){"use strict";var n=["strong","em","code","underline","strike-through"];function i(t,e,r){if(!t.marks||0===t.marks.length)return t.marks||[];var n=t.marks.reduce((function(t,n){t[n]=t[n]?t[n]+1:1;for(var i=e+1;i<r.length;i++){var o=r[i];if(!o.marks||!Array.isArray(o.marks)||-1===o.marks.indexOf(n))break;t[n]++}return t}),{}),i=o.bind(null,n);return t.marks.slice().sort(i)}function o(t,e,r){var i=t[e]||0,o=t[r]||0;if(i!==o)return o-i;var s=n.indexOf(e),a=n.indexOf(r);return s!==a?s-a:e<r?-1:e>r?1:0}t.exports=function(t){var e=t.children,r=t.markDefs;if(!e||!e.length)return[];var n=e.map(i),o={_type:"span",children:[]},s=[o];return e.forEach((function(t,e){var i=n[e];if(i){var o=1;if(s.length>1)for(;o<s.length;o++){var a=s[o].markKey,l=i.indexOf(a);if(-1===l)break;i.splice(l,1)}var u,c=function(t){for(var e=t.length-1;e>=0;e--){var r=t[e];if("span"===r._type&&r.children)return r}return}(s=s.slice(0,o));if(i.forEach((function(e){var n={_type:"span",_key:t._key,children:[],mark:r.find((function(t){return t._key===e}))||e,markKey:e};c.children.push(n),s.push(n),c=n})),"span"!==(u=t)._type||"string"!=typeof u.text||!Array.isArray(u.marks)&&void 0!==u.marks)c.children=c.children.concat(t);else{for(var h=t.text.split("\n"),f=h.length;f-- >1;)h.splice(f,0,"\n");c.children=c.children.concat(h)}}else{s[s.length-1].children.push(t)}})),o.children}},osSN:function(t,e,r){"use strict";var n=r("q1tI"),i=r("17x9"),o=r("DEm0"),s=r("DCZw"),a=s.serializers,l=s.serializeSpan,u=s.renderProps,c=o.getImageUrl,h=o.blocksToNodes,f=o.mergeSerializers,p=n.createElement,d=function t(e){var r=f(t.defaultSerializers,e.serializers),n=Object.assign({},u,e,{serializers:r,blocks:e.blocks||[]});return h(p,n,a,l)};d.defaultSerializers=a,d.getImageUrl=c,d.propTypes={className:i.string,renderContainerOnSingleChild:i.bool,projectId:i.string,dataset:i.string,imageOptions:i.object,serializers:i.shape({types:i.object,marks:i.object,list:i.func,listItem:i.func,block:i.func,span:i.func}),blocks:i.oneOfType([i.arrayOf(i.shape({_type:i.string.isRequired})),i.shape({_type:i.string.isRequired})]).isRequired},d.defaultProps={renderContainerOnSingleChild:!1,serializers:{},imageOptions:{}},t.exports=d},pmlw:function(t,e){t.exports=function(t){return"https://docs.sanity.io/help/"+t}},ueIO:function(t,e,r){"use strict";var n=r("YVoz");function i(t){return Boolean(t.listItem)}function o(t,e){return t.level===e.level&&t.listItem===e.listItem}function s(t){return{_type:"list",_key:"".concat(t._key,"-parent"),level:t.level,listItem:t.listItem,children:[t]}}function a(t){return t.children&&t.children[t.children.length-1]}function l(t,e){var r="string"==typeof e.listItem;if("list"===t._type&&t.level===e.level&&r&&t.listItem===e.listItem)return t;var n=a(t);return!!n&&l(n,e)}t.exports=function(t){for(var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"html",u=[],c=0;c<t.length;c++){var h=t[c];if(i(h))if(e)if(o(h,e))e.children.push(h);else if(h.level>e.level){var f=s(h);if("html"===r){var p=a(e),d=n({},p,{children:p.children.concat(f)});e.children[e.children.length-1]=d}else e.children.push(f);e=f}else if(h.level<e.level){var m=l(u[u.length-1],h);if(m){(e=m).children.push(h);continue}e=s(h),u.push(e)}else if(h.listItem===e.listItem)console.warn("Unknown state encountered for block",h),u.push(h);else{var g=l(u[u.length-1],{level:h.level});if(g&&g.listItem===h.listItem){(e=g).children.push(h);continue}e=s(h),u.push(e)}else e=s(h),u.push(e);else u.push(h),e=null}return u}},xM0z:function(t,e,r){"use strict";var n=r("YVoz");function i(t){var e=0,r=t.length;if(0===r)return e;for(var n=0;n<r;n++)e=(e<<5)-e+t.charCodeAt(n),e&=e;return e}t.exports=function(t){return t.map((function(t){return t._key?t:n({_key:(e=t,i(JSON.stringify(e)).toString(36).replace(/[^A-Za-z0-9]/g,""))},t);var e}))}}}]);
//# sourceMappingURL=800b9d8faeb6decf23f69622fba24faed02a36d8-fb583f41852f76748be6.js.map