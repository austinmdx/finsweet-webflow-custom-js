"use strict";(()=>{var s="https://x8ki-letl-twmt.n7.xano.io/api:n2wGC7P0";var c=async r=>{try{return await(await fetch(`${s}/articles/${r}`)).json()}catch(t){return console.log("error:",t.message),[]}};var i=()=>{for(var r=[],t,e=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),n=0;n<e.length;n++)t=e[n].split("="),r.push(t[0]),r[t[0]]=t[1];return r};$(document).ready(async()=>{let t=i().id,e=await c(t),n=$('[data-element="article-title"]'),o=$('[data-element="article-description"]')[0],a=$('[data-element="article-content"]')[0];n.length&&n.each((d,l)=>{l.innerHTML=e.title}),a&&(a.innerHTML=e.articleContent),o&&(o.innerHTML=e.articleDescription)});})();
