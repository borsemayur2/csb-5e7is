var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function l(){return f(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let m;function $(t){m=t}const h=[],g=[],b=[],x=[],y=Promise.resolve();let _=!1;function v(t){b.push(t)}let k=!1;const w=new Set;function E(){if(!k){k=!0;do{for(let t=0;t<h.length;t+=1){const n=h[t];$(n),C(n.$$)}for($(null),h.length=0;g.length;)g.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];w.has(n)||(w.add(n),n())}b.length=0}while(h.length);for(;x.length;)x.pop()();_=!1,k=!1,w.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const A=new Set;let S;function j(t,n){t&&t.i&&(A.delete(t),t.i(n))}function N(t,e,c,u){const{fragment:i,on_mount:s,on_destroy:a,after_update:f}=t.$$;i&&i.m(e,c),u||v(()=>{const e=s.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]}),f.forEach(v)}function O(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function L(t,n){-1===t.$$.dirty[0]&&(h.push(t),_||(_=!0,y.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function T(n,r,c,u,i,a,f=[-1]){const l=m;$(n);const d=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:r.context||[]),callbacks:e(),dirty:f,skip_bound:!1};let p=!1;if(d.ctx=c?c(n,r.props||{},(t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&L(n,t)),e}):[],d.update(),p=!0,o(d.before_update),d.fragment=!!u&&u(d.ctx),r.target){if(r.hydrate){const t=(h=r.target,Array.from(h.childNodes));d.fragment&&d.fragment.l(t),t.forEach(s)}else d.fragment&&d.fragment.c();r.intro&&j(n.$$.fragment),N(n,r.target,r.anchor,r.customElement),E()}var h;$(l)}class q{$destroy(){O(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function B(n){let e,o,r,c,m,$,h,g=1===n[0]?"time":"times";return{c(){e=a("button"),o=f("Clicked "),r=f(n[0]),c=l(),m=f(g),d(e,"class","svelte-1bt0ocf")},m(t,s){var a,f,l,d;i(t,e,s),u(e,o),u(e,r),u(e,c),u(e,m),$||(a=e,f="click",l=n[1],a.addEventListener(f,l,d),h=(()=>a.removeEventListener(f,l,d)),$=!0)},p(t,[n]){1&n&&p(r,t[0]),1&n&&g!==(g=1===t[0]?"time":"times")&&p(m,g)},i:t,o:t,d(t){t&&s(e),$=!1,h()}}}function H(t,n,e){let o=0;return[o,function(){e(0,o+=1)}]}class M extends q{constructor(t){super(),T(this,t,H,B,c,{})}}function P(n){let e,o,r,c,f,p,m;return p=new M({}),{c(){var t;e=a("main"),(o=a("h1")).textContent="Hello CodeSandbox",r=l(),(c=a("h2")).textContent="Start editing to see some magic happen!",f=l(),(t=p.$$.fragment)&&t.c(),d(e,"class","svelte-1na4wt1")},m(t,n){i(t,e,n),u(e,o),u(e,r),u(e,c),u(e,f),N(p,e,null),m=!0},p:t,i(t){m||(j(p.$$.fragment,t),m=!0)},o(t){!function(t,n,e,o){if(t&&t.o){if(A.has(t))return;A.add(t),S.c.push(()=>{A.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}(p.$$.fragment,t),m=!1},d(t){t&&s(e),O(p)}}}return new class extends q{constructor(t){super(),T(this,t,null,P,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map