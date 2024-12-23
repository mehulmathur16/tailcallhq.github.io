"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4326],{46190:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"directives/modify","title":"@modify","description":"The @modify directive allows altering attributes of a field or node within your GraphQL schema.","source":"@site/docs/directives/modify.md","sourceDirName":"directives","slug":"/modify-directive","permalink":"/docs/modify-directive","draft":false,"unlisted":false,"editUrl":"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/directives/modify.md","tags":[],"version":"current","lastUpdatedAt":1732308017000,"frontMatter":{"title":"@modify","description":"The @modify directive allows altering attributes of a field or node within your GraphQL schema.","slug":"../modify-directive"},"sidebar":"docs","previous":{"title":"@link","permalink":"/docs/link-directive"},"next":{"title":"@omit","permalink":"/docs/omit-directive"}}');var o=n(74848),r=n(28453);const d={title:"@modify",description:"The @modify directive allows altering attributes of a field or node within your GraphQL schema.",slug:"../modify-directive"},s=void 0,c={},a=[{value:"name",id:"name",level:2},{value:"omit",id:"omit",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"@modify"})," directive is defined as follows:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-graphql",metastring:'title="Directive Definition" showLineNumbers',children:'directive @modify(\n  """\n  New name for the field or node\n  """\n  name: String\n\n  """\n  Whether to exclude the field or node from the schema\n  """\n  omit: Boolean\n) repeatable on FIELD_DEFINITION | OBJECT\n'})}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"@modify"})," directive in GraphQL provides the flexibility to alter the attributes of a field or a node within your GraphQL schema. Here's how you can use this directive:"]}),"\n",(0,o.jsx)(i.h2,{id:"name",children:"name"}),"\n",(0,o.jsxs)(i.p,{children:["You can rename a field or a node in your GraphQL schema using the ",(0,o.jsx)(i.code,{children:"name"})," argument in the ",(0,o.jsx)(i.code,{children:"@modify"})," directive. This can be helpful when the field name in your underlying data source doesn't match the desired field name in your schema. For instance:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type User {\n  id: Int! @modify(name: "userId")\n}\n'})}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:'@modify(name: "userId")'})," informs GraphQL to present the field known as ",(0,o.jsx)(i.code,{children:"id"})," in the underlying data source as ",(0,o.jsx)(i.code,{children:"userId"})," in your schema."]}),"\n",(0,o.jsx)(i.h2,{id:"omit",children:"omit"}),"\n",(0,o.jsxs)(i.p,{children:["You can exclude a field or a node from your GraphQL schema using the ",(0,o.jsx)(i.code,{children:"omit"})," argument in the ",(0,o.jsx)(i.code,{children:"@modify"})," directive. This can be useful if you want to keep certain data hidden from the client. For instance:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-graphql",metastring:"showLineNumbers",children:"type User {\n  id: Int! @modify(omit: true)\n}\n"})}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"@modify(omit: true)"})," instructs GraphQL to exclude the ",(0,o.jsx)(i.code,{children:"id"})," field from the schema, making it inaccessible to the client."]}),"\n",(0,o.jsx)(i.admonition,{type:"tip",children:(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"@omit"})," is a standalone directive and is an alias/shorthand for ",(0,o.jsx)(i.code,{children:"modify(omit: true)"})," checkout ",(0,o.jsx)(i.a,{href:"/docs/omit-directive",children:"documentation"})]})})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>s});var t=n(96540);const o={},r=t.createContext(o);function d(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);