"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7418],{78162:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"directives/grpc","title":"@grpc","description":"The @grpc directive enables the resolution of GraphQL fields via gRPC services.","source":"@site/docs/directives/grpc.md","sourceDirName":"directives","slug":"/grpc-directive","permalink":"/docs/grpc-directive","draft":false,"unlisted":false,"editUrl":"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/directives/grpc.md","tags":[],"version":"current","lastUpdatedAt":1732818775000,"frontMatter":{"title":"@grpc","description":"The @grpc directive enables the resolution of GraphQL fields via gRPC services.","slug":"../grpc-directive"},"sidebar":"docs","previous":{"title":"@graphQL","permalink":"/docs/graphQL-directive"},"next":{"title":"@http","permalink":"/docs/http-directive"}}');var i=r(74848),t=r(28453);const c={title:"@grpc",description:"The @grpc directive enables the resolution of GraphQL fields via gRPC services.",slug:"../grpc-directive"},d=void 0,l={},o=[{value:"<code>@grpc</code> Directive Definition",id:"grpc-directive-definition",level:2},{value:"Example: Resolving Users via gRPC",id:"example-resolving-users-via-grpc",level:2},{value:"Defining gRPC Services",id:"defining-grpc-services",level:3},{value:"Directive Arguments",id:"directive-arguments",level:2},{value:"method",id:"method",level:3},{value:"url",id:"url",level:3},{value:"body",id:"body",level:3},{value:"headers",id:"headers",level:3},{value:"batchKey",id:"batchkey",level:3},{value:"onResponseBody",id:"onresponsebody",level:3},{value:"select",id:"select",level:3},{value:"dedupe",id:"dedupe",level:3},{value:"Combining Directives",id:"combining-directives",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"@grpc"})," directive allows GraphQL fields to be resolved by fetching data through gRPC services, facilitating powerful integrations between GraphQL and gRPC."]}),"\n",(0,i.jsxs)(s.h2,{id:"grpc-directive-definition",children:[(0,i.jsx)(s.code,{children:"@grpc"})," Directive Definition"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-graphql",metastring:'title="Directive Definition" showLineNumbers',children:"directive @grpc(\n  url: String!\n  method: String!\n  body: JSON\n  headers: [InputKeyValue!]\n  batchKey: [String!]\n  onResponseBody: String\n  select: JSON\n  dedupe: Boolean\n) on FIELD_DEFINITION\n"})}),"\n",(0,i.jsx)(s.h2,{id:"example-resolving-users-via-grpc",children:"Example: Resolving Users via gRPC"}),"\n",(0,i.jsxs)(s.p,{children:["Here's an example demonstrating the use of the ",(0,i.jsx)(s.code,{children:"@grpc"})," directive:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema @link(src: "./users.proto", type: Protobuf) {\n  query: Query\n}\n\ntype Query {\n  users: [User] @grpc(method: "users.UserService.ListUsers")\n}\n'})}),"\n",(0,i.jsxs)(s.p,{children:["In this example, the ",(0,i.jsx)(s.code,{children:"users"})," field fetches data from the gRPC method ",(0,i.jsx)(s.code,{children:"UserService.ListUsers"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"defining-grpc-services",children:"Defining gRPC Services"}),"\n",(0,i.jsxs)(s.p,{children:["The gRPC methods referenced by the directive are defined in a ",(0,i.jsx)(s.code,{children:".proto"})," file, such as:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-proto",children:'syntax = "proto3";\n\npackage users;\n\nservice UserService {\n  rpc ListUsers (UserListRequest) returns (UserListReply) {}\n  rpc GetUser (UserGetRequest) returns (UserGetReply) {}\n}\n\nmessage UserListRequest {\n  // Definitions of request parameters\n}\n\nmessage UserListReply {\n  // Structure of the reply\n}\n\nmessage UserGetRequest {\n  // Definitions of request parameters\n}\n\nmessage UserGetReply {\n  // Structure of the reply\n}\n'})}),"\n",(0,i.jsx)(s.admonition,{type:"important",children:(0,i.jsx)(s.p,{children:"It is mandatory to have a package name in a protobuf file."})}),"\n",(0,i.jsxs)(s.p,{children:["Linking this file within a GraphQL schema is facilitated by the ",(0,i.jsx)(s.code,{children:"@link"})," directive, as shown below:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-graphql",children:'schema @link(src: "./users.proto", type: Protobuf) {\n  query: Query\n}\n'})}),"\n",(0,i.jsxs)(s.p,{children:["Tailcall automatically resolves the protobuf file for any methods referenced in the ",(0,i.jsx)(s.code,{children:"@grpc"})," directive."]}),"\n",(0,i.jsx)(s.h2,{id:"directive-arguments",children:"Directive Arguments"}),"\n",(0,i.jsx)(s.h3,{id:"method",children:"method"}),"\n",(0,i.jsxs)(s.p,{children:["Defines the gRPC service and method to call, formatted as ",(0,i.jsx)(s.code,{children:"<package>.<service>.<method>"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-graphql",children:'type Query {\n  users: [User]\n    @grpc(method: "proto.users.UserService.ListUsers")\n}\n'})}),"\n",(0,i.jsx)(s.h3,{id:"url",children:"url"}),"\n",(0,i.jsx)(s.p,{children:"Specifies the base URL for the gRPC service:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-graphql",children:'type Query {\n  users: [User]\n    @grpc(\n      url: "https://grpc-server.example.com"\n      method: "proto.users.UserService.ListUsers"\n    )\n}\n'})}),"\n",(0,i.jsx)(s.h3,{id:"body",children:"body"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"body"})," outlines the arguments for the gRPC call, allowing for both static and dynamic inputs:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-graphql",children:'type UserInput {\n  id: ID\n}\n\ntype Query {\n  user(id: UserInput!): User\n    @grpc(\n      body: "{{.args.id}}"\n      method: "proto.users.UserService.GetUser"\n    )\n}\n'})}),"\n",(0,i.jsx)(s.h3,{id:"headers",children:"headers"}),"\n",(0,i.jsx)(s.p,{children:"Custom headers for the gRPC request can be defined, facilitating the transmission of authentication tokens or other contextual data:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-graphql",children:'type Query {\n  users: [User]\n    @grpc(\n      headers: [\n        {key: "X-CUSTOM-HEADER", value: "custom-value"}\n      ]\n      method: "proto.users.UserService.ListUsers"\n    )\n}\n'})}),"\n",(0,i.jsx)(s.h3,{id:"batchkey",children:"batchKey"}),"\n",(0,i.jsxs)(s.p,{children:["Use ",(0,i.jsx)(s.code,{children:"batchKey"})," to group similar requests for optimized batching, reducing the number of requests:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-graphql",children:'type Query {\n  users(id: UserInput!): [User]\n    @grpc(\n      batchKey: ["id"]\n      method: "proto.users.UserService.ListUsers"\n      url: "https://grpc-server.example.com"\n    )\n}\n'})}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["Refer to ",(0,i.jsx)(s.a,{href:"/docs/graphql-n-plus-one-problem-solved-tailcall",children:"N + 1 Problem"})," to learn how to use the ",(0,i.jsx)(s.code,{children:"batchKey"})," setting."]})}),"\n",(0,i.jsx)(s.h3,{id:"onresponsebody",children:"onResponseBody"}),"\n",(0,i.jsxs)(s.p,{children:["This hook allows you to intercept and modify the response body from upstream services before it's processed by Tailcall. Like ",(0,i.jsx)(s.a,{href:"/docs/http-directive#onrequest",children:"onRequest"}),", it accepts a string value representing a middleware function defined in a JavaScript file. This function can be used to transform or validate the response data."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  news: NewsData!\n    @grpc(\n      method: "news.NewsService.GetAllNews"\n      onResponseBody: "onResponse"\n    )\n}\n'})}),"\n",(0,i.jsx)(s.h3,{id:"select",children:"select"}),"\n",(0,i.jsxs)(s.p,{children:["You can use ",(0,i.jsx)(s.code,{children:"select"})," with mustache syntax to re-construct the directives\nresponse to the desired format. This is useful when data are deeply\nnested or want to keep specific fields only from the response."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["EXAMPLE 1: if we have a call that returns ",(0,i.jsx)(s.code,{children:'{ "user": { "items": [...], ... } ... }'})," we can use ",(0,i.jsx)(s.code,{children:'"{{.user.items}}"'}),", to extract the ",(0,i.jsx)(s.code,{children:"items"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["EXAMPLE 2: if we have a call that returns ",(0,i.jsx)(s.code,{children:'{ "foo": "bar", "fizz": { "buzz": "eggs", ... }, ... }'})," we can use ",(0,i.jsx)(s.code,{children:'{ foo: "{{.foo}}", buzz: "{{.fizz.buzz}}" }'})]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  userCompany(id: Int!): Company\n    @grpc(\n      method: "news.UsersService.GetUserDetails"\n      select: "{{.company}}"\n    )\n  userDetails(id: Int!): UserDetails\n    @grpc(\n      method: "news.UsersService.GetUserDetails"\n      select: {\n        id: "{{.id}}"\n        city: "{{.address.city}}"\n        phone: "{{.phone}}"\n      }\n    )\n}\n'})}),"\n",(0,i.jsx)(s.h3,{id:"dedupe",children:"dedupe"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"dedupe"})," parameter, if set to ",(0,i.jsx)(s.code,{children:"true"}),", prevents duplicate IO requests from being executed concurrently:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-graphql",metastring:"showLineNumbers",children:'@grpc(\n  method: "news.UsersService.GetUserDetails"\n  dedupe: true\n)\n'})}),"\n",(0,i.jsx)(s.h2,{id:"combining-directives",children:"Combining Directives"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"@grpc"})," directive can be used in combination with other ",(0,i.jsx)(s.a,{href:"/docs/tailcall-dsl-graphql-custom-directives#resolvable-directives",children:"resolvable directives"}),", with results merged deeply. This allows for powerful and flexible resolver configurations."]}),"\n",(0,i.jsxs)(s.p,{children:["For more details, see ",(0,i.jsx)(s.a,{href:"/docs/tailcall-dsl-graphql-custom-directives",children:"Directives Documentation"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>c,x:()=>d});var n=r(96540);const i={},t=n.createContext(i);function c(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);