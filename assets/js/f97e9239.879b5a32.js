"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7033],{38913:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"directives","title":"Getting Started with Tailcall Directives","description":"Enhance your GraphQL API with Tailcall custom directives. These directives offer powerful compile-time guarantees, ensuring robust and optimized API composition. Tailcall automates the generation of resolver logic for improved performance.","source":"@site/docs/directives.md","sourceDirName":".","slug":"/tailcall-dsl-graphql-custom-directives","permalink":"/docs/tailcall-dsl-graphql-custom-directives","draft":false,"unlisted":false,"editUrl":"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/directives.md","tags":[],"version":"current","lastUpdatedAt":1734952853000,"sidebarPosition":5,"frontMatter":{"title":"Getting Started with Tailcall Directives","description":"Enhance your GraphQL API with Tailcall custom directives. These directives offer powerful compile-time guarantees, ensuring robust and optimized API composition. Tailcall automates the generation of resolver logic for improved performance.","slug":"tailcall-dsl-graphql-custom-directives","sidebar_label":"Getting Started","sidebar_position":5},"sidebar":"docs","previous":{"title":"upstream","permalink":"/docs/upstream-configuration"},"next":{"title":"@addField","permalink":"/docs/addField-directive"}}');var s=t(74848),n=t(28453);const l={title:"Getting Started with Tailcall Directives",description:"Enhance your GraphQL API with Tailcall custom directives. These directives offer powerful compile-time guarantees, ensuring robust and optimized API composition. Tailcall automates the generation of resolver logic for improved performance.",slug:"tailcall-dsl-graphql-custom-directives",sidebar_label:"Getting Started",sidebar_position:5},d=void 0,o={},c=[{value:"Resolvable Directives",id:"resolvable-directives",level:3},{value:"Combining Resolvable Directives on Fields",id:"combining-resolvable-directives-on-fields",level:3},{value:"Example: Combining Resolvable Directives",id:"example-combining-resolvable-directives",level:4},{value:"Key Points",id:"key-points",level:3}];function a(e){const i={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"Tailcall DSL builds on your existing GraphQL knowledge by allowing the addition of some custom directives. These directives provide powerful compile time guarantees to ensure your API composition is tight and robust. Behind the scenes, Tailcall automatically generates highly optimized resolver logic for your types using the information in the directives."}),"\n",(0,s.jsx)(i.p,{children:"Here is a list of all the custom directives supported by Tailcall:"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Operator"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/addField-directive",children:(0,s.jsx)(i.code,{children:"@addField"})})}),(0,s.jsx)(i.td,{children:"Simplifies data structures and queries by adding, inlining, or flattening fields or nodes within the schema."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/cache-directive",children:(0,s.jsx)(i.code,{children:"@cache"})})}),(0,s.jsx)(i.td,{children:"Enables caching for the query, field or type applied to."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/call-directive",children:(0,s.jsx)(i.code,{children:"@call"})})}),(0,s.jsx)(i.td,{children:"Invokes a query or mutation from another query or mutation field."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/discriminate",children:(0,s.jsx)(i.code,{children:"@discriminate"})})}),(0,s.jsx)(i.td,{children:"Allows to customize the discriminator while working with union types."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/expr-directive",children:(0,s.jsx)(i.code,{children:"@expr"})})}),(0,s.jsx)(i.td,{children:"Allows embedding of a constant response within the schema."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/graphQL-directive",children:(0,s.jsx)(i.code,{children:"@graphQL"})})}),(0,s.jsx)(i.td,{children:"Resolves a field or node by a GraphQL API."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/grpc-directive",children:(0,s.jsx)(i.code,{children:"@grpc"})})}),(0,s.jsx)(i.td,{children:"Resolves a field or node by a gRPC API."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/http-directive",children:(0,s.jsx)(i.code,{children:"@http"})})}),(0,s.jsx)(i.td,{children:"Resolves a field or node by a REST API."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/modify-directive",children:(0,s.jsx)(i.code,{children:"@modify"})})}),(0,s.jsx)(i.td,{children:"Enables changes to attributes of fields or nodes in the schema."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/omit-directive",children:(0,s.jsx)(i.code,{children:"@omit"})})}),(0,s.jsx)(i.td,{children:"Excludes fields or nodes from the generated schema, making them inaccessible through the GraphQL API."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/protected-directive",children:(0,s.jsx)(i.code,{children:"@protected"})})}),(0,s.jsx)(i.td,{children:"Adds authentication and authorization controls to fields or nodes in the schema."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/docs/rest-directive",children:(0,s.jsx)(i.code,{children:"@rest"})})}),(0,s.jsx)(i.td,{children:"Allows exposing REST endpoints on top of GraphQL."})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"resolvable-directives",children:"Resolvable Directives"}),"\n",(0,s.jsxs)(i.p,{children:["Resolvable directives are used to fetch actual data from external sources. These include the following directives: ",(0,s.jsx)(i.code,{children:"@call"}),", ",(0,s.jsx)(i.code,{children:"@expr"}),", ",(0,s.jsx)(i.code,{children:"@graphQL"}),", ",(0,s.jsx)(i.code,{children:"@grpc"}),", and ",(0,s.jsx)(i.code,{children:"@http"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"combining-resolvable-directives-on-fields",children:"Combining Resolvable Directives on Fields"}),"\n",(0,s.jsxs)(i.p,{children:["When multiple resolvable directives (such as ",(0,s.jsx)(i.code,{children:"@call"}),", ",(0,s.jsx)(i.code,{children:"@expr"}),", ",(0,s.jsx)(i.code,{children:"@graphQL"}),", ",(0,s.jsx)(i.code,{children:"@grpc"}),", or ",(0,s.jsx)(i.code,{children:"@http"}),") are applied to a field, the ",(0,s.jsx)(i.strong,{children:"order in which they are defined in the schema is important"}),". Each directive contributes a part of the final result, and the outputs are combined by performing a deep merge of all partial results."]}),"\n",(0,s.jsx)(i.h4,{id:"example-combining-resolvable-directives",children:"Example: Combining Resolvable Directives"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-graphql",children:'type Query {\n  data: Data\n    # This request resolves the `{ "foo": "..." }` part of the response\n    @http(url: "http://api.com/foo")\n    # This request resolves the `{ "bar": "..." }` part of the response\n    # After executing both requests, the results are merged into a single `Data` object\n    @http(url: "http://api.com/bar")\n\n  dataList: [Data]\n    # This request resolves 3 entries of data: `[.., .., ..]`\n    @http(url: "http://api.com/list/foo")\n    # This request resolves 2 entries of data: `[.., ..]`\n    # After executing both requests, the results are merged into a single list\n    # containing 5 entries\n    @http(url: "http://api.com/list/bar")\n}\n\ntype Data {\n  foo: String\n  bar: String\n}\n'})}),"\n",(0,s.jsx)(i.h3,{id:"key-points",children:"Key Points"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Order Matters"}),": The schema's order of directives determines how partial results are combined."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Deep Merge"}),": Partial outputs from each directive are deep-merged to produce the final result."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Versatility"}),": Resolvable directives can fetch data from various sources, making them powerful tools for flexible schema design."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>l,x:()=>d});var r=t(96540);const s={},n=r.createContext(s);function l(e){const i=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(n.Provider,{value:i},e.children)}}}]);