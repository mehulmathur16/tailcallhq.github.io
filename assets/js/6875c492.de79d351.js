/*! For license information please see 6875c492.de79d351.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4813],{53465:(e,l,t)=>{t.d(l,{W:()=>c});var s=t(96540),a=t(44586);const r=["zero","one","two","few","many","other"];function n(e){return r.filter((l=>e.includes(l)))}const o={locale:"en",pluralForms:n(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,s.useMemo)((()=>{try{return function(e){const l=new Intl.PluralRules(e);return{locale:e,pluralForms:n(l.resolvedOptions().pluralCategories),select:e=>l.select(e)}}(e)}catch(l){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${l.message}\n`),o}}),[e])}function c(){const e=i();return{selectMessage:(l,t)=>function(e,l,t){const s=e.split("|");if(1===s.length)return s[0];s.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=t.select(l),r=t.pluralForms.indexOf(a);return s[Math.min(r,s.length-1)]}(t,l,e)}}},70548:(e,l,t)=>{t.d(l,{A:()=>o});t(96540);var s=t(28774),a=t(34164),r=t(47473),n=t(74848);const o=e=>{let{date:l,title:t,description:o,authors:i,permalink:c}=e;return(0,n.jsx)(s.A,{to:c,className:"flex flex-col overflow-hidden !text-black !no-underline",children:(0,n.jsxs)("div",{className:"flex flex-col flex-1 p-3 md:py-12 md:px-6 gap-2 md:gap-3 border border-solid border-tailCall-border-light-400 hover:border-tailCall-border-dark-100 rounded-lg md:rounded-md",children:[(0,n.jsx)("span",{className:"hidden md:flex text-content-mini text-black",children:new Date(l).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}),(0,n.jsxs)("div",{className:"flex flex-col flex-1 gap-1 md:gap-2",children:[(0,n.jsx)("span",{className:(0,a.A)("text-title-small line-clamp-2"),children:t}),(0,n.jsx)("span",{className:"flex-1 text-content-tiny md:text-content-small line-clamp-1 md:line-clamp-3 text-tailCall-light-600 blog-post-content-desc",children:o})]}),i[0]&&(0,n.jsx)(r.e,{author:i[0],containerClassName:"mt-auto"})]})})}},47473:(e,l,t)=>{t.d(l,{e:()=>r});t(96540);var s=t(34164),a=t(74848);const r=e=>{let{author:l,containerClassName:t,textClassName:r}=e;return(0,a.jsxs)("div",{className:(0,s.A)("flex items-center",t),children:[(0,a.jsx)("img",{src:l.imageURL,alt:l.name,className:"mr-2 size-6 rounded-full"}),(0,a.jsx)("span",{className:(0,s.A)("font-medium text-black",r),children:l.name})]})}},50834:(e,l,t)=>{t.d(l,{A:()=>r});t(96540);var s=t(70548),a=t(74848);const r=function(e){let{items:l}=e;return(0,a.jsx)("div",{className:"grid grid-cols-1 gap-4 md:gap-3 md:grid-cols-2 lg:grid-cols-3",children:l.map((e=>{const{permalink:l,date:t,title:r,description:n,authors:o}=e.content.metadata;return(0,a.jsx)(s.A,{date:t,title:r,description:n,authors:o,permalink:l},l)}))})}},50561:(e,l,t)=>{t.r(l),t.d(l,{default:()=>v});var s=t(96540),a=t(34164),r=t(21312),n=t(53465),o=t(45500),i=t(17559),c=t(41463),d=t(50834),m=t(97456),u=t(75957),g=t(48697);const x=(0,t(84722).A)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);var p=t(28774);const h="modalContainer_ad2n",f="modalOverlay_vvM_";var b=t(74848);const j=e=>{let{open:l,onClose:t}=e;const[r,n]=(0,s.useState)("");(0,s.useEffect)((()=>{"undefined"!=typeof window&&(document.body.style.overflow=l?"hidden":"visible")}),[l]);const o=()=>{n(""),t&&t()},i=(0,s.useMemo)((()=>(()=>{const e={},l=r.toLowerCase();for(const[t,s]of Object.entries(u.eN)){const a=s.filter((e=>e.label.toLowerCase().startsWith(l)));a.length&&(e[t]=a)}return e})()),[r]);return(0,b.jsx)(b.Fragment,{children:l?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:(0,a.A)("block lg:hidden fixed inset-0 bg-black bg-opacity-50",f),onClick:o}),(0,b.jsxs)("div",{className:(0,a.A)("absolute w-full lg:w-4/12 h-full overflow-scroll right-0 bg-white rounded-xl lg:rounded-none lg:border lg:border-solid lg:border-tailCall-border-light-500 px-4 py-8 lg:px-10 lg:py-8 flex flex-col gap-8",h),children:[(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsx)("span",{className:"text-title-medium lg:text-title-large text-black",children:"Explore All Tags"}),(0,b.jsx)(g.A,{width:24,height:24,className:"cursor-pointer",onClick:o})]}),(0,b.jsxs)("div",{className:"flex flex-col gap-5 pb-36",children:[(0,b.jsxs)("div",{className:"flex items-center gap-3 border border-solid border-tailCall-border-light-500 rounded-lg py-3 px-6",children:[(0,b.jsx)(x,{width:20,height:20,className:"text-tailCall-light-500"}),(0,b.jsx)("input",{name:"tag",type:"text",value:r,onChange:e=>{n(e.target.value)},placeholder:"Search Tags",className:"text-black placeholder:text-tailCall-light-500 border-none outline-none text-content-small"})]}),(0,b.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 lg:gap-y-10",children:Object.keys(i).map((e=>(0,b.jsxs)("div",{className:"flex flex-col gap-3 lg:gap-4",children:[(0,b.jsx)("span",{className:"text-title-tiny lg:text-title-small text-black",children:e}),i?.[e]?.map((e=>(0,b.jsx)(p.A,{to:e.permalink,onClick:o,className:"text-content-small text-black px-3 py-1 border border-solid border-tailCall-border-light-500 rounded-3xl w-fit cursor-pointer hover:no-underline",children:e.label},e.label)))]},e)))})]})]})]}):null})};function N(e){const l=function(){const{selectMessage:e}=(0,n.W)();return l=>e(l,(0,r.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:l}))}();return(0,r.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:l(e.count),tagName:e.label})}function k(e){let{tag:l}=e;const t=N(l);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o.be,{title:t,description:l.description}),(0,b.jsx)(c.A,{tag:"blog_tags_posts"})]})}function w(e){let{tag:l,items:t}=e;const[a,r]=(0,s.useState)(!1),n=(0,s.useCallback)((()=>{r(!0)}),[]),o=(0,s.useCallback)((()=>{r(!1)}),[]);return(0,b.jsxs)(m.A,{children:[(0,b.jsxs)("div",{className:"container mx-auto mt-3 mb-10 md:my-8 px-4 md:w-8/12",children:[(0,b.jsxs)("div",{className:"flex flex-col md:flex-row gap-2 mb-5",children:[(0,b.jsx)("span",{className:"text-title-medium text-tailCall-light-600",children:"Results for"}),(0,b.jsxs)("span",{className:"flex items-center justify-between flex-1",children:[(0,b.jsx)("span",{className:"text-content-small px-3 py-1 text-tailCall-dark-100 rounded-full bg-tailCall-light-200",children:l.label}),(0,b.jsx)("span",{className:"text-content-small text-tailCall-dark-500 underline cursor-pointer",onClick:n,children:"See all Tags"})]})]}),(0,b.jsx)(d.A,{items:t})]}),(0,b.jsx)(j,{open:a,onClose:o})]})}function v(e){return(0,b.jsxs)(o.e3,{className:(0,a.A)(i.G.wrapper.blogPages,i.G.page.blogTagPostListPage),children:[(0,b.jsx)(k,{...e}),(0,b.jsx)(w,{...e})]})}},84722:(e,l,t)=>{t.d(l,{A:()=>o});var s=t(96540);const a=(...e)=>e.filter(((e,l,t)=>Boolean(e)&&t.indexOf(e)===l)).join(" ");var r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const n=(0,s.forwardRef)((({color:e="currentColor",size:l=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:o="",children:i,iconNode:c,...d},m)=>(0,s.createElement)("svg",{ref:m,...r,width:l,height:l,stroke:e,strokeWidth:n?24*Number(t)/Number(l):t,className:a("lucide",o),...d},[...c.map((([e,l])=>(0,s.createElement)(e,l))),...Array.isArray(i)?i:[i]]))),o=(e,l)=>{const t=(0,s.forwardRef)((({className:t,...r},o)=>{return(0,s.createElement)(n,{ref:o,iconNode:l,className:a(`lucide-${i=e,i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,t),...r});var i}));return t.displayName=`${e}`,t}},48697:(e,l,t)=>{t.d(l,{A:()=>s});const s=(0,t(84722).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])}}]);