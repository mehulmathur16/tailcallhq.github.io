"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6433],{89524:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"directives/addField","title":"@addField","description":"The @addField directive simplifies queries by adding a field that _inline_ or flattens a nested field or node within your schema.","source":"@site/docs/directives/addField.md","sourceDirName":"directives","slug":"/addField-directive","permalink":"/docs/addField-directive","draft":false,"unlisted":false,"editUrl":"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/directives/addField.md","tags":[],"version":"current","lastUpdatedAt":1732308017000,"frontMatter":{"title":"@addField","description":"The @addField directive simplifies queries by adding a field that _inline_ or flattens a nested field or node within your schema.","slug":"../addField-directive"},"sidebar":"docs","previous":{"title":"Getting Started","permalink":"/docs/tailcall-dsl-graphql-custom-directives"},"next":{"title":"@cache","permalink":"/docs/cache-directive"}}');var d=t(74848),s=t(28453);const r={title:"@addField",description:"The @addField directive simplifies queries by adding a field that _inline_ or flattens a nested field or node within your schema.",slug:"../addField-directive"},a=void 0,l={},c=[];function o(e){const n={code:"code",em:"em",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"@addField"})," directive is defined as follows:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-graphql",metastring:'title="Directive Definition" showLineNumbers',children:'directive @addField(\n  """\n  Name of the new field to be added\n  """\n  name: String!\n\n  """\n  Path of the data where the field should point to\n  """\n  path: [String!]\n) repeatable on OBJECT\n'})}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"@addField"})," directive simplifies data structures and queries by adding a field that ",(0,d.jsx)(n.em,{children:"inline"})," or flattens a nested field or node within your schema. It modifies the schema and the data transformation process, making nested data more accessible and straightforward to present."]}),"\n",(0,d.jsx)(n.p,{children:"For instance, consider a schema:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema {\n  query: Query\n}\n\ntype User\n  @addField(name: "street", path: ["address", "street"]) {\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n  phone: String\n  website: String\n  address: Address @modify(omit: true)\n}\n\ntype Address {\n  street: String!\n  city: String!\n  state: String!\n}\n\ntype Query {\n  user(id: Int!): User\n    @http(\n      url: "https://jsonplaceholder.typicode.com/users/{{.args.id}}"\n    )\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["Suppose we focus on the ",(0,d.jsx)(n.code,{children:"street"})," field in ",(0,d.jsx)(n.code,{children:"Address"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["In this case, applying the ",(0,d.jsx)(n.code,{children:"@addField"})," directive to the ",(0,d.jsx)(n.code,{children:"User"})," type creates a ",(0,d.jsx)(n.code,{children:"street"})," field within the ",(0,d.jsx)(n.code,{children:"User"})," type. It uses a ",(0,d.jsx)(n.code,{children:"path"})," argument to specify the sequence of fields from a declared field (",(0,d.jsx)(n.code,{children:"address"}),"), leading to the ",(0,d.jsx)(n.code,{children:"Address"})," field to add. We also can apply ",(0,d.jsx)(n.code,{children:"@modify(omit: true)"})," to remove the ",(0,d.jsx)(n.code,{children:"address"})," field from the schema, as the ",(0,d.jsx)(n.code,{children:"street"})," field from ",(0,d.jsx)(n.code,{children:"Address"})," is now directly accessible on the ",(0,d.jsx)(n.code,{children:"User"})," type."]}),"\n",(0,d.jsx)(n.p,{children:"Post application, the schema becomes:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:"schema {\n  query: Query\n}\n\ntype User {\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n  phone: String\n  website: String\n  street: String\n}\n\ntype Query {\n  user(id: Int): Post!\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["In the above example, since we added a ",(0,d.jsx)(n.code,{children:"@modify(omit: true)"})," on the ",(0,d.jsx)(n.code,{children:"address"})," field, the schema no longer includes the ",(0,d.jsx)(n.code,{children:"Address"})," type."]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"@addField"})," directive also take cares of nullablity of the fields. If any of the fields in the path is nullable, the resulting type will be nullable."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"@addField"})," also supports indexing, allowing for the specification of an array index for inline inclusion. For instance, if a field ",(0,d.jsx)(n.code,{children:"posts"})," is of type ",(0,d.jsx)(n.code,{children:"[Post]"}),", and the goal is to access the title of the first post, specify the path as [",(0,d.jsx)(n.code,{children:'"posts"'}),",",(0,d.jsx)(n.code,{children:'"0"'}),",",(0,d.jsx)(n.code,{children:'"title"'}),"]."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type User\n  @addField(\n    name: "firstPostTitle"\n    path: ["posts", "0", "title"]\n  ) {\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n  phone: String\n  website: String\n  posts: Post\n    @http(\n      url: "https://jsonplaceholder.typicode.com/users/{{.value.id}}/posts"\n    )\n}\n\ntype Post {\n  id: Int!\n  userId: Int!\n  title: String!\n  body: String!\n}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["In conclusion, the ",(0,d.jsx)(n.code,{children:"@addField"})," directive helps tidy up your schema and streamline data fetching by reducing query depth, promoting better performance and simplicity."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const d={},s=i.createContext(d);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);