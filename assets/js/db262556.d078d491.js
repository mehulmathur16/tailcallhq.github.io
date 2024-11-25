"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[743],{37184:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=s(74848),n=s(28453);const r={title:"@rest",description:"The @rest directive maps fields to REST API endpoints, allowing GraphQL to serve as a layer over RESTful services.",slug:"../rest-directive"},a=void 0,l={id:"directives/rest",title:"@rest",description:"The @rest directive maps fields to REST API endpoints, allowing GraphQL to serve as a layer over RESTful services.",source:"@site/docs/directives/rest.md",sourceDirName:"directives",slug:"/rest-directive",permalink:"/tailcallhq.github.io/docs/rest-directive",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/directives/rest.md",tags:[],version:"current",lastUpdatedAt:1732308017e3,frontMatter:{title:"@rest",description:"The @rest directive maps fields to REST API endpoints, allowing GraphQL to serve as a layer over RESTful services.",slug:"../rest-directive"},sidebar:"docs",previous:{title:"@protected",permalink:"/tailcallhq.github.io/docs/protected-directive"},next:{title:"@server",permalink:"/tailcallhq.github.io/docs/server-directive"}},d={},o=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"@rest"})," directive is defined as follows:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",metastring:'title="Directive Definition" showLineNumbers',children:'directive @rest(\n  """\n  HTTP method for the REST endpoint\n  """\n  method: Method!\n\n  """\n  Path for the REST endpoint, supports dynamic values\n  """\n  path: String!\n\n  """\n  Query parameters as key-value pairs\n  """\n  query: [InputKeyValue!]\n) on OPERATION_DEFINITION\n'})}),"\n",(0,i.jsx)(t.p,{children:"API orchestration is essential, yet not all can adopt GraphQL despite its benefits. The Tailcall DSL feature leverages GraphQL at compile time to generate REST endpoints, aligning with traditional API infrastructure like CDNs and Gateways."}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"method"}),": Specifies the HTTP method (GET, POST, etc.)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"path"}),": Sets the endpoint URL, with support for dynamic values from query arguments."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"query"}),": Defines the query parameters as key-value pairs."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["Define GraphQL types and queries, using the ",(0,i.jsx)(t.code,{children:"@rest"})," directive to map fields to REST API endpoints."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"schema.graphql"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:'schema\n  @link(type: Operation, src: "user-operation.graphql") {\n  query: Query\n}\n\ntype Query {\n  user(id: Int!): User\n    @rest(method: "GET", path: "/users/{{.args.id}}")\n}\n\ntype User {\n  id: Int!\n  name: String!\n  email: String!\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"user-operation.graphql"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:'query ($id: Int!) @rest(method: GET, path: "/user/$id") {\n  user(id: $id) {\n    id\n    name\n  }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"REST Demo",src:s(21400).A+"",width:"2992",height:"1686"})}),"\n",(0,i.jsxs)(t.p,{children:["This example demonstrates how to define a simple query to fetch user data from a REST endpoint using the ",(0,i.jsx)(t.code,{children:"@rest"})," directive. By leveraging ",(0,i.jsx)(t.code,{children:"@rest"}),", GraphQL can serve as a layer over RESTful services, combining REST's simplicity with GraphQL's flexibility."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},21400:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/rest-user-03cf9e415f57084d2cbfcaebac90df2b.png"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>l});var i=s(96540);const n={},r=i.createContext(n);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);