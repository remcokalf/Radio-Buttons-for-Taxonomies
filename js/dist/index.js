!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=21)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.lodash}()},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},function(e,t){!function(){e.exports=this.wp.url}()},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},function(e,t,r){var n=r(15),o=r(16),a=r(17),i=r(18);e.exports=function(e){return n(e)||o(e)||a(e)||i()}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,r){var n=r(19);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t,r){var n=r(20),o=r(3);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},function(e,t,r){var n=r(9);e.exports=function(e){if(Array.isArray(e))return n(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t,r){var n=r(9);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t,r){"use strict";r.r(t);var n=r(10),o=r.n(n),a=r(5),i=r.n(a),c=r(11),s=r.n(c),u=r(12),l=r.n(u),f=r(3),m=r.n(f),p=r(13),d=r.n(p),h=r(14),b=r.n(h),y=r(7),v=r.n(y),O=r(0),g=r(2),j=r(1),_=r(4),x=r(6),T=r.n(x),w=r(8);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e){var t=e.map((function(e){return S({children:[],parent:null},e)})),r=Object(g.groupBy)(t,"parent");if(r.null&&r.null.length)return t;return function e(t){return t.map((function(t){var n=r[t.id];return S(S({},t),{},{children:n&&n.length?e(n):[]})}))}(r[0]||[])}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v()(e);if(t){var o=v()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return b()(this,r)}}var R={per_page:-1,orderby:"name",order:"asc",_fields:"id,name,parent"},A=function(e){d()(r,e);var t=E(r);function r(){var e;return s()(this,r),(e=t.apply(this,arguments)).findTerm=e.findTerm.bind(m()(e)),e.onChange=e.onChange.bind(m()(e)),e.onChangeFormName=e.onChangeFormName.bind(m()(e)),e.onChangeFormParent=e.onChangeFormParent.bind(m()(e)),e.onAddTerm=e.onAddTerm.bind(m()(e)),e.onToggleForm=e.onToggleForm.bind(m()(e)),e.setFilterValue=e.setFilterValue.bind(m()(e)),e.sortBySelected=e.sortBySelected.bind(m()(e)),e.state={loading:!0,availableTermsTree:[],availableTerms:[],adding:!1,formName:"",formParent:"",showForm:!1,filterValue:"",filteredTermsTree:[]},e}return l()(r,[{key:"onChange",value:function(e){var t=this.props;(0,t.onUpdateTerms)([e],t.taxonomy.rest_base)}},{key:"onChangeFormName",value:function(e){var t=""===e.target.value.trim()?"":e.target.value;this.setState({formName:t})}},{key:"onChangeFormParent",value:function(e){this.setState({formParent:e})}},{key:"onToggleForm",value:function(){this.setState((function(e){return{showForm:!e.showForm}}))}},{key:"findTerm",value:function(e,t,r){return Object(g.find)(e,(function(e){return(!e.parent&&!t||parseInt(e.parent)===parseInt(t))&&e.name.toLowerCase()===r.toLowerCase()}))}},{key:"onAddTerm",value:function(e){var t=this;e.preventDefault();var r=this.props,n=r.onUpdateTerms,a=r.taxonomy,i=r.terms,c=r.slug,s=this.state,u=s.formName,l=s.formParent,f=s.adding,m=s.availableTerms;if(""!==u&&!f){var p=this.findTerm(m,l,u);if(p)return Object(g.some)(i,(function(e){return e===p.id}))||n([p.id],a.rest_base),void this.setState({formName:"",formParent:""});this.setState({adding:!0}),this.addRequest=T()({path:"/wp/v2/".concat(a.rest_base),method:"POST",data:{name:u,parent:l||void 0}}),this.addRequest.catch((function(e){return"term_exists"===e.code?(t.addRequest=T()({path:Object(w.addQueryArgs)("/wp/v2/".concat(a.rest_base),F(F({},R),{},{parent:l||0,search:u}))}),t.addRequest.then((function(e){return t.findTerm(e,l,u)}))):Promise.reject(e)})).then((function(e){var r=!!Object(g.find)(t.state.availableTerms,(function(t){return t.id===e.id}))?t.state.availableTerms:[e].concat(o()(t.state.availableTerms)),i=Object(j.sprintf)(Object(j._x)("%s added","term"),Object(g.get)(t.props.taxonomy,["labels","singular_name"],"category"===c?Object(j.__)("Category"):Object(j.__)("Term")));t.props.speak(i,"assertive"),t.addRequest=null,t.setState({adding:!1,formName:"",formParent:"",availableTerms:r,availableTermsTree:t.sortBySelected(k(r))}),n([e.id],a.rest_base)}),(function(e){"abort"!==e.statusText&&(t.addRequest=null,t.setState({adding:!1}))}))}}},{key:"componentDidMount",value:function(){this.fetchTerms()}},{key:"componentWillUnmount",value:function(){Object(g.invoke)(this.fetchRequest,["abort"]),Object(g.invoke)(this.addRequest,["abort"])}},{key:"componentDidUpdate",value:function(e){this.props.taxonomy!==e.taxonomy&&this.fetchTerms()}},{key:"fetchTerms",value:function(){var e=this,t=this.props.taxonomy;t&&(this.fetchRequest=T()({path:Object(w.addQueryArgs)("/wp/v2/".concat(t.rest_base),R)}),this.fetchRequest.then((function(t){var r=e.sortBySelected(k(t));e.fetchRequest=null,e.setState({loading:!1,availableTermsTree:r,availableTerms:t})}),(function(t){"abort"!==t.statusText&&(e.fetchRequest=null,e.setState({loading:!1}))})))}},{key:"sortBySelected",value:function(e){var t=this.props.terms,r=function e(r){return-1!==t.indexOf(r.id)||void 0!==r.children&&!!(r.children.map(e).filter((function(e){return e})).length>0)};return e.sort((function(e,t){var n=r(e),o=r(t);return n===o?0:n&&!o?-1:!n&&o?1:0})),e}},{key:"setFilterValue",value:function(e){var t=this.state.availableTermsTree,r=e.target.value,n=t.map(this.getFilterMatcher(r)).filter((function(e){return e}));this.setState({filterValue:r,filteredTermsTree:n});var o=function e(t){for(var r=0,n=0;n<t.length;n++)r++,void 0!==t[n].children&&(r+=e(t[n].children));return r}(n),a=Object(j.sprintf)(Object(j._n)("%d result found.","%d results found.",o),o);this.props.debouncedSpeak(a,"assertive")}},{key:"getFilterMatcher",value:function(e){return function t(r){if(""===e)return r;var n=F({},r);return n.children.length>0&&(n.children=n.children.map(t).filter((function(e){return e}))),(-1!==n.name.toLowerCase().indexOf(e.toLowerCase())||n.children.length>0)&&n}}},{key:"renderTerms",value:function(e){var t=this,r=this.props,n=r.terms,o=void 0===n?[]:n,a=r.taxonomy.hierarchical?"hierarchical":"non-hierarchical";return e.map((function(e){"editor-post-taxonomies-".concat(a,"-term-").concat(e.id);var r=-1!==o.indexOf(e.id)?e.id:0;return Object(O.createElement)("div",{key:e.id,className:"editor-post-taxonomies__"+a+"-terms-choice "},Object(O.createElement)(_.RadioControl,{selected:r,options:[{label:Object(g.unescape)(e.name),value:e.id}],onChange:function(){var r=parseInt(e.id,10);t.onChange(r)}}),!!e.children.length&&Object(O.createElement)("div",{className:"editor-post-taxonomies__"+a+"-terms-subchoices "},t.renderTerms(e.children)))}))}},{key:"render",value:function(){var e=this.props,t=e.slug,r=e.taxonomy,n=e.instanceId,o=e.hasCreateAction,a=e.hasAssignAction,i=r.hierarchical?"hierarchical":"non-hierarchical";if(!a)return null;var c=this.state,s=c.availableTermsTree,u=c.availableTerms,l=c.filteredTermsTree,f=c.formName,m=c.formParent,p=c.loading,d=c.showForm,h=c.filterValue,b=function(e,n,o){return Object(g.get)(r,["labels",e],"category"===t?n:o)},y=b("add_new_item",Object(j.__)("Add new category"),Object(j.__)("Add new term")),v=b("new_item_name",Object(j.__)("Add new category"),Object(j.__)("Add new term")),x=b("parent_item",Object(j.__)("Parent Category"),Object(j.__)("Parent Term")),T="— ".concat(x," —"),w=y,P="editor-post-taxonomies__".concat(i,"-terms-input-").concat(n),S="editor-post-taxonomies__".concat(i,"-terms-filter-").concat(n),k=Object(g.get)(this.props.taxonomy,["labels","search_items"],Object(j.__)("Search Terms")),C=Object(g.get)(this.props.taxonomy,["name"],Object(j.__)("Terms")),F=u.length>=8;return[F&&Object(O.createElement)("label",{key:"filter-label",htmlFor:S},k),F&&Object(O.createElement)("input",{type:"search",id:S,value:h,onChange:this.setFilterValue,className:"editor-post-taxonomies__hierarchical-terms-filter",key:"term-filter-input"}),Object(O.createElement)("div",{className:"editor-post-taxonomies__hierarchical-terms-list",key:"term-list",tabIndex:"0",role:"group","aria-label":C},this.renderTerms(""!==h?l:s)),!p&&o&&Object(O.createElement)(_.Button,{key:"term-add-button",onClick:this.onToggleForm,className:"editor-post-taxonomies__hierarchical-terms-add","aria-expanded":d,isLink:!0},y),d&&Object(O.createElement)("form",{onSubmit:this.onAddTerm,key:i+"-terms-form"},Object(O.createElement)("label",{htmlFor:P,className:"editor-post-taxonomies__hierarchical-terms-label"},v),Object(O.createElement)("input",{type:"text",id:P,className:"editor-post-taxonomies__hierarchical-terms-input",value:f,onChange:this.onChangeFormName,required:!0}),r.hierarchical&&!!u.length&&Object(O.createElement)(_.TreeSelect,{label:x,noOptionLabel:T,onChange:this.onChangeFormParent,selectedId:m,tree:s}),Object(O.createElement)(_.Button,{isSecondary:!0,type:"submit",className:"editor-post-taxonomies__hierarchical-terms-submit"},w))]}}]),r}(O.Component);wp.hooks.addFilter("editor.PostTaxonomyType","RB4T",(function(e){return function(t){return RB4Tl18n.radio_taxonomies.indexOf(t.slug)>=0?wp.element.createElement(A,t):wp.element.createElement(e,t)}}))}]);