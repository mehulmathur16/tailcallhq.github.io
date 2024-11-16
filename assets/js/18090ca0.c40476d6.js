"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5873],{76574:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=s(74848),t=s(28453);const i={title:"GraphQL Resolver Context",description:"Explore Tailcall's dynamic Context mechanism for schema field resolution, enabling access to arguments, values, and environment variables for efficient GraphQL queries. Enhance your query handling with Tailcall's advanced Context features for optimized schema field resolution.",slug:"graphql-resolver-context-tailcall",sidebar_label:"Resolver Context"},a=void 0,l={id:"context",title:"GraphQL Resolver Context",description:"Explore Tailcall's dynamic Context mechanism for schema field resolution, enabling access to arguments, values, and environment variables for efficient GraphQL queries. Enhance your query handling with Tailcall's advanced Context features for optimized schema field resolution.",source:"@site/docs/context.md",sourceDirName:".",slug:"/graphql-resolver-context-tailcall",permalink:"/tailcallhq.github.io/docs/graphql-resolver-context-tailcall",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/context.md",tags:[],version:"current",lastUpdatedAt:1729657116e3,frontMatter:{title:"GraphQL Resolver Context",description:"Explore Tailcall's dynamic Context mechanism for schema field resolution, enabling access to arguments, values, and environment variables for efficient GraphQL queries. Enhance your query handling with Tailcall's advanced Context features for optimized schema field resolution.",slug:"graphql-resolver-context-tailcall",sidebar_label:"Resolver Context"},sidebar:"docs",previous:{title:"Command Line",permalink:"/tailcallhq.github.io/docs/tailcall-graphql-cli"},next:{title:"GraphQL Playground",permalink:"/tailcallhq.github.io/docs/graphql-playground-guide"}},o={},c=[{value:"Schema Definition",id:"schema-definition",level:2},{value:"args",id:"args",level:3},{value:"value",id:"value",level:3},{value:"env",id:"env",level:3},{value:"vars",id:"vars",level:3},{value:"headers",id:"headers",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Within Tailcall, ",(0,r.jsx)(n.code,{children:"Context"})," is a pivotal component that allows for dynamic retrieval of values during the resolution of fields for a given type within the schema."]}),"\n",(0,r.jsx)(n.h2,{id:"schema-definition",children:"Schema Definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type Context = {\n  args: Map<string, JSON>\n  value: JSON\n  env: Map<string, string>\n  vars: Map<string, string>\n  headers: Map<string, string>\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Context"})," operates by storing values as key-value pairs, which can be accessed through mustache template syntax."]}),"\n",(0,r.jsx)(n.h3,{id:"args",children:"args"}),"\n",(0,r.jsx)(n.p,{children:"This property facilitates access to query arguments. Consider the example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  user(id: ID!): User\n    @http(\n      url: "http://jsonplaceholder.typicode.com/users/{{.args.id}}"\n    )\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Here, ",(0,r.jsx)(n.code,{children:"args.id"})," is utilized to retrieve the ",(0,r.jsx)(n.code,{children:"id"})," argument provided to the ",(0,r.jsx)(n.code,{children:"user"})," query."]}),"\n",(0,r.jsx)(n.h3,{id:"value",children:"value"}),"\n",(0,r.jsx)(n.p,{children:"This enables access to the fields of the specified type."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showlineNumbers",children:'type Post {\n  id: ID!\n  title: String!\n  body: String!\n  comments: [Comment]\n    @http(\n      url: "http://jsonplaceholder.typicode.com/posts/{{.value.id}}/comments"\n    )\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In this case, ",(0,r.jsx)(n.code,{children:"value.id"})," accesses the ",(0,r.jsx)(n.code,{children:"id"})," field of the ",(0,r.jsx)(n.code,{children:"Post"})," type."]}),"\n",(0,r.jsx)(n.h3,{id:"env",children:"env"}),"\n",(0,r.jsx)(n.p,{children:"Environment variables, set at server startup, allow directives to dynamically adapt behavior based on external configurations without altering the server configuration itself."}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  users: [User]! @http(url: "{{.env.API_ENDPOINT}}/users")\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"env.API_ENDPOINT"})," references an environment variable named ",(0,r.jsx)(n.code,{children:"API_ENDPOINT"}),", which specifies the base URL for HTTP requests."]}),"\n",(0,r.jsx)(n.h3,{id:"vars",children:"vars"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"vars"})," offers a mechanism for defining reusable variables within the configuration. Unlike ",(0,r.jsx)(n.code,{children:"env"}),", these are embedded and can be universally applied across configurations."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @server(\n    vars: {key: "apiKey", value: "{{.env.AUTH_TOKEN}}"}\n  ) {\n  query: Query\n}\n\ntype Query {\n  user(id: ID!): [User]\n    @http(\n      url: "/users"\n      headers: [\n        {\n          key: "Authorization"\n          value: "Bearer {{.vars.apiKey}}"\n        }\n      ]\n    )\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Here, the variable ",(0,r.jsx)(n.code,{children:"apiKey"})," is set using an environment variable and subsequently utilized in the ",(0,r.jsx)(n.code,{children:"Authorization"})," header for HTTP requests."]}),"\n",(0,r.jsx)(n.h3,{id:"headers",children:"headers"}),"\n",(0,r.jsx)(n.p,{children:"Headers originate from the request made to the GraphQL server."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  commentsForUser: [Comment]\n    @http(\n      url: "http://jsonplaceholder.typicode.com/users/{{.headers.x-user-id}}/comments"\n    )\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, ",(0,r.jsx)(n.code,{children:"headers.x-user-id"})," extracts the value of the ",(0,r.jsx)(n.code,{children:"x-user-id"})," header present in the request, dynamically constructing the request path."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var r=s(96540);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);