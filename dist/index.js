"use strict";(()=>{var f="https://x8ki-letl-twmt.n7.xano.io/api:n2wGC7P0";var d=async()=>{try{return await(await fetch(`${f}/articles`)).json()}catch(e){return console.log("error:",e.message),[]}};var g=(e,r)=>{var m,p;let t=r.cloneNode(!0),o=t.querySelector('[data-element="image"]'),n=t.querySelector('[data-element="title"]'),s=t.querySelector('[data-element="role"]'),a=t.querySelector('[data-element="description"]'),i=t.querySelector('[data-element="content-type"]');return o&&(o.src=((m=e==null?void 0:e.featuredImage)==null?void 0:m.url)||""),n&&(n.textContent=e.title),s&&(s.textContent=(p=e==null?void 0:e._role)==null?void 0:p.role),a&&(a.textContent=e.articleDescription),i&&(i.textContent=e.content_type,i.style.display="none"),t},u=async(e,r)=>{let[t]=e.items,o=t.element;o.style.opacity=1,o.style.transform="",o.style.transformStyle="",e.clearItems();let n=r.map(s=>g(s,o));await e.addItems(n)};var l=({label:e,value:r},t)=>{let o=t.cloneNode(!0),n=o.querySelector("span"),s=o.querySelector("input");if(!(!n||!s))return n.textContent=e,s.value=r,o};var w=async(e,r)=>{let t=e.form.querySelector('[data-element="filter-by-role"]');if(!t)return;let o=t.parentElement;if(o){t.remove();for(let n of r){let s=l({label:n.role,value:n.id},t);s&&o.append(s)}}};var y=async(e,r)=>{let t=e.form.querySelector('[data-element="filter-by-content-type"]');if(!t)return;let o=t.parentElement;if(o){t.remove();for(let n of r){let s=l({label:n.ContentType,value:n.id},t);s&&o.append(s)}}};var x=async e=>{let[r]=e,{listInstance:t}=r,{articles:o,roles:n,contentTypes:s}=await d();await u(t,o),await w(r,n),await y(r,s),r.storeFiltersData()};var c=(e=document)=>e.documentElement.getAttribute("data-wf-site");var S=()=>{let e=c();console.log(`${e} is the Webflow site id`)};window.Webflow||(window.Webflow=[]);window.Webflow.push(S);window.fsAttributes=window.fsAttributes||[];window.fsAttributes.push(["cmsfilter",x]);window.fsAttributes.push(["cmsload",e=>{console.log("cmsload Successfully loaded!");let[r]=e;r.on("renderitems",t=>{console.log("RenderedItem:",t)})}]);})();
