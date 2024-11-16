"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4528],{64762:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(74848),r=t(28453);const s={title:"@call",description:'The @call directive simplifies queries by composing together other resolvers, allowing to create a chain of resolvers that can be executed in sequence."',slug:"../call-directive"},a=void 0,o={id:"directives/call",title:"@call",description:'The @call directive simplifies queries by composing together other resolvers, allowing to create a chain of resolvers that can be executed in sequence."',source:"@site/docs/directives/call.md",sourceDirName:"directives",slug:"/call-directive",permalink:"/tailcallhq.github.io/docs/call-directive",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/directives/call.md",tags:[],version:"current",lastUpdatedAt:1731705464e3,frontMatter:{title:"@call",description:'The @call directive simplifies queries by composing together other resolvers, allowing to create a chain of resolvers that can be executed in sequence."',slug:"../call-directive"},sidebar:"docs",previous:{title:"@cache",permalink:"/tailcallhq.github.io/docs/cache-directive"},next:{title:"@expr",permalink:"/tailcallhq.github.io/docs/expr-directive"}},c={},l=[{value:"steps",id:"steps",level:2},{value:"query",id:"query",level:2},{value:"mutation",id:"mutation",level:2},{value:"args",id:"args",level:2},{value:"Composition",id:"composition",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"@call"})," directive in GraphQL signifies a shift towards more efficient configuration management by introducing a methodology akin to function invocations in conventional programming. This directive is pivotal for developers navigating the intricacies of elaborate GraphQL schemas, where minimizing redundancy and adhering to the DRY (Don't Repeat Yourself) principle are paramount. Consider the following schema example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema {\n  query: Query\n}\n\ntype Query {\n  # highlight-start\n  user(id: Int!): User\n    @http(\n      url: "https://jsonplaceholder.typicode.com/users/{{.args.id}}"\n    )\n  # highlight-end\n  posts: [Post]\n    @http(url: "https://jsonplaceholder.typicode.com/posts")\n}\n\ntype Post {\n  id: Int!\n  userId: Int!\n  title: String!\n  body: String!\n  # highlight-start\n  user: User\n    @http(\n      url: "https://jsonplaceholder.typicode.com/users/{{.value.userId}}"\n    )\n  # highlight-end\n}\n\ntype User {\n  id: Int!\n  name: String!\n  email: String!\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In this schema, at lines ",(0,i.jsx)(n.code,{children:"9"})," and ",(0,i.jsx)(n.code,{children:"18"}),", a pattern of configuration duplication emerges when fetching user's data by its id, demonstrating a prime use case for the ",(0,i.jsx)(n.code,{children:"@call"})," directive. Through refactoring the ",(0,i.jsx)(n.code,{children:"Post"})," type to incorporate the ",(0,i.jsx)(n.code,{children:"@call"})," directive, we can eliminate this redundancy."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Post {\n  id: Int!\n  userId: Int!\n  title: String!\n  body: String!\n  # highlight-start\n  user: User\n    @call(\n      steps: [\n        {query: "user", args: {id: "{{.value.userId}}"}}\n      ]\n    )\n  # highlight-end\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Here, the ",(0,i.jsx)(n.code,{children:"@call"})," directive invokes the ",(0,i.jsx)(n.code,{children:"user"})," query from the ",(0,i.jsx)(n.code,{children:"Query"})," type, leveraging the data-fetching process that's already defined in the root ",(0,i.jsx)(n.code,{children:"query"}),". The ",(0,i.jsx)(n.code,{children:"query"})," parameter specifies the target field, while the ",(0,i.jsx)(n.code,{children:"args"})," parameter delineates the arguments to be passed."]}),"\n",(0,i.jsx)(n.h2,{id:"steps",children:"steps"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@call"})," directive can compose together other resolvers, allowing to create a chain of resolvers that can be executed in sequence. This is done by using the ",(0,i.jsx)(n.code,{children:"steps"})," parameter, which is an array of objects that define the operations to be executed."]}),"\n",(0,i.jsx)(n.h2,{id:"query",children:"query"}),"\n",(0,i.jsxs)(n.p,{children:["Specify the root ",(0,i.jsx)(n.strong,{children:"query"})," field to invoke, alongside the requisite arguments, using the ",(0,i.jsx)(n.code,{children:"@call"})," directive for a concise and efficient query structure."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Post {\n  userId: Int!\n  user: User\n    @call(\n      steps: [\n        {query: "user", args: {id: "{{.value.userId}}"}}\n      ]\n    )\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"mutation",children:"mutation"}),"\n",(0,i.jsxs)(n.p,{children:["Similarly, the ",(0,i.jsx)(n.code,{children:"@call"})," directive can facilitate calling a mutation from another mutation field, employing the ",(0,i.jsx)(n.code,{children:"mutation"})," parameter for field specification and the ",(0,i.jsx)(n.code,{children:"args"})," parameter for argument delineation."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Mutation {\n  insertPost(input: PostInput, overwrite: Boolean): Post\n    @http(\n      body: "{{.args.input}}"\n      method: "POST"\n      url: "https://jsonplaceholder.typicode.com/posts"\n      query: {overwrite: "{{.args.overwrite}}"}\n    )\n\n  upsertPost(input: PostInput): Post\n    @call(\n      steps: [\n        {\n          mutation: "insertPost"\n          args: {input: "{{.args.input}}", overwrite: true}\n        }\n      ]\n    )\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"args",children:"args"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"args"})," parameter in the ",(0,i.jsx)(n.code,{children:"@call"})," directive facilitates passing arguments to the targeted query or mutation, represented as a key-value mapping where each key corresponds to an argument name and its associated value."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Post {\n  userId: Int!\n  user: User\n    @call(\n      steps: [\n        {query: "user", args: {id: "{{.value.userId}}"}}\n      ]\n    )\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"@call"})," directive is predominantly advantageous in complex, large-scale configurations. For those new to GraphQL or Tailcall, it may be beneficial to explore this directive after familiarizing yourself with the foundational aspects of GraphQL."]})}),"\n",(0,i.jsx)(n.h2,{id:"composition",children:"Composition"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@call"})," directive provides the ability to express a sequence of steps that one might need to compose. These steps are executed such that the result of each step is passed as an argument to the next step. The ",(0,i.jsx)(n.code,{children:"query"})," and ",(0,i.jsx)(n.code,{children:"mutation"})," parameters are used to specify the target field, while the ",(0,i.jsx)(n.code,{children:"args"})," parameter is used to pass arguments to the target field."]}),"\n",(0,i.jsx)(n.p,{children:"Let's explain this with an example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema @server {\n  query: Query\n}\n\ntype Query {\n  a(input: JSON): JSON\n    @expr(body: {value: "{{.args.input.a}}"})\n\n  b(input: JSON): JSON\n    @expr(body: {value: "{{.args.input.b}}"})\n\n  c(input: JSON): JSON\n    @expr(body: {value: "{{.args.input.c}}"})\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Here we have defined there operations viz. ",(0,i.jsx)(n.code,{children:"a"}),", ",(0,i.jsx)(n.code,{children:"b"})," & ",(0,i.jsx)(n.code,{children:"c"})," each of them pluck their respective keys from the given input value. Let's run this query with some test input:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"{\n  a(input: {a: 100})\n  b(input: {b: 200})\n  c(input: {c: 300})\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here is how the response would look like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "a": {\n      "value": 100\n    },\n    "b": {\n      "value": 200\n    },\n    "c": {\n      "value": 300\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["As you can see the ",(0,i.jsx)(n.a,{href:"/tailcallhq.github.io/docs/expr-directive",children:(0,i.jsx)(n.code,{children:"@expr"})})," directive plucks the inner value and returns the result. How about we implement an ",(0,i.jsx)(n.code,{children:"abc"})," operation that could leverage the existing operations and unwrap the following input value:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{"a": {"b": {"c": {"d": 1000}}}}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Given the above input if we wish to extract the last inner number ",(0,i.jsx)(n.code,{children:"1000"})," then we could define a new operation as follows"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema @server {\n  query: Query\n}\n\ntype Query {\n  a(input: JSON): JSON\n    @expr(body: {value: "{{.args.input.a}}"})\n\n  b(input: JSON): JSON\n    @expr(body: {value: "{{.args.input.b}}"})\n\n  c(input: JSON): JSON\n    @expr(body: {value: "{{.args.input.c}}"})\n\n  # highlight-start\n  abc(input: JSON): JSON\n    @call(\n      steps: [\n        {query: "a", args: {input: "{{.args.input}}"}}\n        {query: "b", args: {input: "{{.args.value}}"}}\n        {query: "c", args: {input: "{{.args.value}}"}}\n      ]\n    )\n  # highlight-end\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["We use the ",(0,i.jsx)(n.code,{children:"@call"})," directive to compose the operations together. The ",(0,i.jsx)(n.code,{children:"args"})," specify how we would like to pass the arguments to the operation and the result of that operation is passed to the next step. We can test the new ",(0,i.jsx)(n.code,{children:"abc"})," operation with the following query:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"query {\n  abc(input: {a: {b: {c: 1000}}})\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"The server returns the response that we expected:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "abc": {\n      "value": 100\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This way you can compose combine multiple operations can compose them together using the ",(0,i.jsx)(n.code,{children:"@call"})," directive."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["We use ",(0,i.jsx)(n.code,{children:"JSON"})," scalar here because we don't care about the type safety of this option. In a real world example you might want to use proper input and output types."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);