"use strict";(()=>{var p="https://x8ki-letl-twmt.n7.xano.io/api:n2wGC7P0";var m=async()=>{try{return await(await fetch(`${p}/articles`)).json()}catch(e){return console.log("error:",e.message),[]}};var y=(e,r)=>{let t=r.cloneNode(!0),o=t.querySelector('[data-element="image"]'),n=t.querySelector('[data-element="title"]'),i=t.querySelector('[data-element="role"]'),a=t.querySelector('[data-element="description"]'),l=t.querySelector('[data-element="content-type"]');return o&&(o.src=e.featuredImage.url),n&&(n.textContent=e.title),i&&(i.textContent=e._role.role),a&&(a.textContent=e.articleDescription),l&&(l.textContent=e.content_type,l.style.display="none"),t},f=async(e,r)=>{let[t]=e.items,o=t.element;e.clearItems();let n=r.map(i=>y(i,o));await e.addItems(n)};var s=({label:e,value:r},t)=>{let o=t.cloneNode(!0),n=o.querySelector("span"),i=o.querySelector("input");if(!(!n||!i))return n.textContent=e,i.value=r,o};var d=async(e,r)=>{let t=e.form.querySelector('[data-element="filter-by-role"]');if(!t)return;let o=t.parentElement;if(o){t.remove();for(let n of r){let i=s({label:n.role,value:n.id},t);i&&o.append(i)}}};var u=async(e,r)=>{let t=e.form.querySelector('[data-element="filter-by-content-type"]');if(!t)return;let o=t.parentElement;if(o){t.remove();for(let n of r){let i=s({label:n.ContentType,value:n.id},t);i&&o.append(i)}}};var w=async e=>{let[r]=e,{listInstance:t}=r,{articles:o,roles:n,contentTypes:i}=await m();await f(t,o),await d(r,n),await u(r,i),r.storeFiltersData()};var c=(e=document)=>e.documentElement.getAttribute("data-wf-site");var x=()=>{let e=c();console.log(`${e} is the Webflow site id`)};window.Webflow||(window.Webflow=[]);window.Webflow.push(x);window.fsAttributes=window.fsAttributes||[];window.fsAttributes.push(["cmsfilter",w]);})();
