import{s as e,$ as t,r}from"./0f996d08.js";import{n}from"./130c493a.js";let o=class extends e{render(){return t`Hello Data Consumer!`}};o=function(e,t,r,n){var o,c=arguments.length,s=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(c<3?o(s):c>3?o(t,r,s):o(t,r))||s);return c>3&&s&&Object.defineProperty(t,r,s),s}([n("bldn-data-consum")],o);class c extends e{static get styles(){return r``}render(){return t` <h1>Admin</h1> <bldn-data-consum></bldn-data-consum> `}}customElements.define("app-dci",c);export{c as AppDCI};
