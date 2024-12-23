"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1999],{72939:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"directives/link","title":"@link","description":"The @link directive is used for bringing external resources into your GraphQL schema.","source":"@site/docs/directives/link.md","sourceDirName":"directives","slug":"/link-directive","permalink":"/docs/link-directive","draft":false,"unlisted":false,"editUrl":"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/directives/link.md","tags":[],"version":"current","lastUpdatedAt":1734634112000,"frontMatter":{"title":"@link","description":"The @link directive is used for bringing external resources into your GraphQL schema.","slug":"../link-directive"},"sidebar":"docs","previous":{"title":"@js","permalink":"/docs/js-directive"},"next":{"title":"@modify","permalink":"/docs/modify-directive"}}');var s=n(74848),r=n(28453);const o={title:"@link",description:"The @link directive is used for bringing external resources into your GraphQL schema.",slug:"../link-directive"},a=void 0,c={},l=[{value:"How it Works",id:"how-it-works",level:2},{value:"Example",id:"example",level:2},{value:"Example using Mustache template",id:"example-using-mustache-template",level:2},{value:"Supported Types",id:"supported-types",level:2},{value:"Config",id:"config",level:3},{value:"Protobuf",id:"protobuf",level:3},{value:"Script",id:"script",level:3},{value:"Cert",id:"cert",level:3},{value:"Key",id:"key",level:3},{value:"Operation",id:"operation",level:3},{value:"Htpasswd",id:"htpasswd",level:3},{value:"Jwks",id:"jwks",level:3},{value:"Grpc",id:"grpc",level:3}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"@link"})," directive is defined as follows:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-graphql",metastring:'title="Directive Definition" showLineNumbers',children:'directive @link(\n  """\n  Source path or URL of the external resource\n  """\n  src: String!\n\n  """\n  Type of the external resource\n  """\n  type: LinkType!\n\n  """\n  Optional identifier for the link\n  """\n  id: String\n\n  """\n  Optional headers for gRPC reflection server requests\n  """\n  headers: [InputKeyValue!]\n\n  """\n  Optional directories to search for imported proto files.\n  """\n  proto_paths: [String!]\n) on SCHEMA\n\n"""\nAvailable types for external resources\n"""\nenum LinkType {\n  Config\n  Protobuf\n  Script\n  Cert\n  Key\n  Operation\n  Htpasswd\n  Jwks\n  Grpc\n}\n'})}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"@link"})," directive is used for bringing external resources into your GraphQL schema. It makes it easier to include configurations, .proto files for gRPC services, and other files into your schema. With this directive, external resources are either merged with or used effectively in the importing configuration."]}),"\n",(0,s.jsx)(i.h2,{id:"how-it-works",children:"How it Works"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"@link"})," directive requires specifying a source ",(0,s.jsx)(i.code,{children:"src"}),", the resource's type ",(0,s.jsx)(i.code,{children:"type"}),", and an optional identifier ",(0,s.jsx)(i.code,{children:"id"}),"."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"src"}),": The source of the link is defined here. It can be either a URL or a file path. When a file path is given, it's relative to the file's location that is importing the link. (This field also supports Mustache template)"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"type"}),": This specifies the link's type, which determines how the imported resource is integrated into the schema. For a list of supported types, see the ",(0,s.jsx)(i.a,{href:"#supported-types",children:"Supported Types"})," section."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"id"}),": This is an optional field that assigns a unique identifier to the link. It's helpful for referring to the link within the schema."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"headers"}),": This is an optional field that assigns custom headers to the gRPC reflection server requests. Specifying a key-value map of header names and their values achieves this. (Values supports Mustache template)"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"proto_paths"}),": This is an optional field that specifies additional directories to search for imported proto files. It only takes effect when ",(0,s.jsx)(i.code,{children:"type"})," is ",(0,s.jsx)(i.code,{children:"Protobuf"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(i.p,{children:["The following example illustrates how to utilize the ",(0,s.jsx)(i.code,{children:"@link"})," directive to incorporate a Protocol Buffers (.proto) file for a gRPC service into your GraphQL schema."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @server(port: 8000)\n  @upstream(httpCache: 42, batch: {delay: 10})\n  @link(\n    id: "news"\n    src: "./src/grpc/news.proto"\n    type: Protobuf\n    headers: [{key: "authorization", value: "Bearer 123"}]\n  ) {\n  query: Query\n}\n\ntype Query {\n  news: NewsData!\n    @grpc(method: "news.NewsService.GetAllNews")\n}\n\ntype News {\n  id: Int\n  title: String\n  body: String\n  postImage: String\n}\n\ntype NewsData {\n  news: [News]!\n}\n'})}),"\n",(0,s.jsx)(i.h2,{id:"example-using-mustache-template",children:"Example using Mustache template"}),"\n",(0,s.jsxs)(i.p,{children:["The following example illustrates how to utilize the ",(0,s.jsx)(i.code,{children:"@link"})," directive to incorporate a Protocol Buffers (.proto) file for a gRPC service into your GraphQL schema using Mustache template."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @server(port: 8000)\n  @upstream(httpCache: 42, batch: {delay: 10})\n  @link(\n    id: "news"\n    src: "{{.env.NEWS_PROTO_PATH}}"\n    type: Protobuf\n    headers: [\n      {key: "authorization", value: "{{.env.BEARER}}"}\n    ]\n  ) {\n  query: Query\n}\n\ntype Query {\n  news: NewsData!\n    @grpc(method: "news.NewsService.GetAllNews")\n}\n\ntype News {\n  id: Int\n  title: String\n  body: String\n  postImage: String\n}\n\ntype NewsData {\n  news: [News]!\n}\n'})}),"\n",(0,s.jsxs)(i.p,{children:["In the above example, you can notice that ",(0,s.jsx)(i.code,{children:"src"})," is changed to ",(0,s.jsx)(i.code,{children:'src: "{{.env.NEWS_PROTO_PATH}}"'}),"\nand value for auth is changed to ",(0,s.jsx)(i.code,{children:'value: "{{.env.BEARER}}"'}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["Assuming ",(0,s.jsx)(i.code,{children:'BEARER="Bearer 123"'})," and ",(0,s.jsx)(i.code,{children:"NEWS_PROTO_PATH=./src/grpc/news.proto"})," is set as\nyour environment variables, the parsed config will automatically parse the mustache templates\nand populate it with the values given."]}),"\n",(0,s.jsx)(i.h2,{id:"supported-types",children:"Supported Types"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"@link"})," directive enriches your configuration by supporting the integration of external resources. Each link type is designed to serve a specific purpose, enhancing the functionality and flexibility of your schema. Below is a detailed overview of each supported link type:"]}),"\n",(0,s.jsx)(i.h3,{id:"config",children:"Config"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"Config"})," link type is essential for importing other configuration files. This feature enables a modular approach to schema management by allowing configurations from the imported file to override overlapping settings in the main schema. This functionality is useful in large projects, where maintaining a single monolithic schema file becomes impractical. By using ",(0,s.jsx)(i.code,{children:"Config"}),", developers can split their schema configurations into manageable pieces, thus promoting better organization and scalability."]}),"\n",(0,s.jsx)(i.p,{children:"Example use case:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Modularizing schema configurations for different environments (development, staging, production)."}),"\n",(0,s.jsx)(i.li,{children:"Reusing common configurations across multiple schema files."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"protobuf",children:"Protobuf"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"Protobuf"})," link type integrates Protocol Buffers definitions by importing .proto files. This integration is crucial for Tailcall to communicate with gRPC services. By including ",(0,s.jsx)(i.code,{children:".proto"})," definitions, the GraphQL server can directly interact with gRPC services, allowing for efficient and type-safe communication."]}),"\n",(0,s.jsxs)(i.p,{children:["For detailed integration steps and best practices, refer to the ",(0,s.jsx)(i.a,{href:"/docs/graphql-grpc-tailcall",children:"gRPC Integration Guide"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"script",children:"Script"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"Script"})," link type allows the config to link to an external JavaScript file. This file can contain custom logic that is executed in response to HTTP request-response events. This feature enables developers to implement custom behaviors, such as adding headers to responses or filtering requests based on specific criteria."]}),"\n",(0,s.jsx)(i.p,{children:"Example script for adding a custom header to all outgoing requests:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",metastring:"showLineNumbers",children:'function onRequest({request}) {\n  // Add a custom header for all outgoing requests\n  request.headers["X-Custom-Header"] = "Processed"\n\n  // Return the updated request\n  return {request}\n}\n'})}),"\n",(0,s.jsx)(i.h3,{id:"cert",children:"Cert"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"Cert"})," link type is designed for importing SSL/TLS certificates, a crucial component for enabling HTTPS in your GraphQL server. This link type ensures that the server can expose connections over HTTPS."]}),"\n",(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsxs)(i.p,{children:["When using the ",(0,s.jsx)(i.code,{children:"Cert"})," link type, specify the path to the certificate file. Ensure the certificate is up-to-date and issued by a trusted certificate authority (CA) to avoid security warnings or connection issues."]})}),"\n",(0,s.jsx)(i.p,{children:"Example use case:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Securing communication between the GraphQL server and clients.","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Enhancing privacy and security by encrypting data in transit."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"key",children:"Key"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"Key"})," link type imports the private key associated with your SSL/TLS certificate, enabling HTTPS for your GraphQL server. The private key is a critical security element that decrypts information encrypted by the corresponding public key in the SSL/TLS certificate."]}),"\n",(0,s.jsxs)(i.p,{children:["When configuring the ",(0,s.jsx)(i.code,{children:"Key"})," link type, provide the path to your private key file. Ensure the private key matches the imported certificate specified by the ",(0,s.jsx)(i.a,{href:"#cert",children:"Cert"})," link above, and is protected by appropriate file permissions to maintain security."]}),"\n",(0,s.jsx)(i.h3,{id:"operation",children:"Operation"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"Operation"})," link type connects your schema to a set of predefined, GraphQL spec-compliant queries and mutations. This functionality allows for the validation and optimization of these operations by the GraphQL server."]}),"\n",(0,s.jsx)(i.p,{children:"Each type serves a specific purpose, enabling the flexible integration of external resources into your GraphQL schema."}),"\n",(0,s.jsx)(i.h3,{id:"htpasswd",children:"Htpasswd"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"Htpasswd"})," link type allows the importation of an ",(0,s.jsx)(i.a,{href:"https://httpd.apache.org/docs/2.4/programs/htpasswd.html",children:(0,s.jsx)(i.code,{children:"htpasswd"})})," file. This file is utilized to set up ",(0,s.jsx)(i.a,{href:"/docs/field-level-access-control-graphql-authentication#basic-authentication",children:"Basic authentication"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"jwks",children:"Jwks"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"Jwks"})," link type enables the importation of a ",(0,s.jsx)(i.a,{href:"https://auth0.com/docs/secure/tokens/json-web-tokens/json-web-key-sets",children:(0,s.jsx)(i.code,{children:"JWKS"})})," file. This file facilitates the provision of detailed access control through ",(0,s.jsx)(i.a,{href:"/docs/field-level-access-control-graphql-authentication#jwt-authentication",children:"JWT authentication"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"grpc",children:"Grpc"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"Grpc"})," link type enables the GraphQL server to understand that the specified source is a gRPC endpoint that supports reflection."]})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var t=n(96540);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);