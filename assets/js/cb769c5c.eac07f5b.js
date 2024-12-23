"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3407],{53903:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=i(74848),s=i(28453);const r={title:"Field Level GraphQL Authentication",description:"Discover how to provide granular access to types and fields in your GraphQL schema using authentication providers. Our guide helps you enhance security and control by configuring precise access levels within your GraphQL server. Start implementing advanced access control measures today.",slug:"field-level-access-control-graphql-authentication",sidebar_label:"Authentication"},a=void 0,l={id:"auth",title:"Field Level GraphQL Authentication",description:"Discover how to provide granular access to types and fields in your GraphQL schema using authentication providers. Our guide helps you enhance security and control by configuring precise access levels within your GraphQL server. Start implementing advanced access control measures today.",source:"@site/docs/auth.md",sourceDirName:".",slug:"/field-level-access-control-graphql-authentication",permalink:"/tailcallhq.github.io/docs/field-level-access-control-graphql-authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/auth.md",tags:[],version:"current",lastUpdatedAt:1729657116e3,frontMatter:{title:"Field Level GraphQL Authentication",description:"Discover how to provide granular access to types and fields in your GraphQL schema using authentication providers. Our guide helps you enhance security and control by configuring precise access levels within your GraphQL server. Start implementing advanced access control measures today.",slug:"field-level-access-control-graphql-authentication",sidebar_label:"Authentication"},sidebar:"docs",previous:{title:"N+1 Identification",permalink:"/tailcallhq.github.io/docs/graphql-n-plus-one-problem-solved-tailcall"},next:{title:"GraphQL on gRPC",permalink:"/tailcallhq.github.io/docs/graphql-grpc-tailcall"}},o={},c=[{value:"What is Authentication?",id:"what-is-authentication",level:2},{value:"Entity Level Authentication in GraphqQL",id:"entity-level-authentication-in-graphqql",level:3},{value:"GraphQL Authentication",id:"graphql-authentication",level:2},{value:"GraphQL Configuration",id:"graphql-configuration",level:2},{value:"Making test requests",id:"making-test-requests",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"@protected Type",id:"protected-type",level:3},{value:"Mutation",id:"mutation",level:3},{value:"Multiple auth providers",id:"multiple-auth-providers",level:3},{value:"Authentication headers",id:"authentication-headers",level:3},{value:"Basic Authentication",id:"basic-authentication",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Basic Auth GraphQL Configuration",id:"basic-auth-graphql-configuration",level:3},{value:"Making test request",id:"making-test-request",level:3},{value:"JWT Authentication",id:"jwt-authentication",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"JWT Auth GraphQL Configuration",id:"jwt-auth-graphql-configuration",level:3},{value:"Making test request",id:"making-test-request-1",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This guide will walk you through entity level authentication in GraphQL and how it could be achieved with Tailcall."}),"\n",(0,n.jsx)(t.h2,{id:"what-is-authentication",children:"What is Authentication?"}),"\n",(0,n.jsx)(t.p,{children:"Authentication is the process of verifying a user's identity before granting access to data. In most modern applications, some information, such as a list of products in an e-commerce application, is accessible to all users without requiring identification. However, personal data, like a user's order history, is accessible to the user who owns that information. Verifying a user's identity to access such personal data is known as authentication."}),"\n",(0,n.jsx)(t.p,{children:"The primary reasons for implementing authentication in an application include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Protecting User-Specific Data"})," Ensuring that data belonging to a user is not accessible by others."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Security"})," The ability to block users based on certain criteria necessitates identifying them."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Customized User Experiences"})," Delivering personalized experiences based on a user's identity."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Authentication can be implemented using credential validation mechanisms, such as:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#basic-authentication",children:"Basic Auth"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#jwt-authentication",children:"JWT"})}),"\n",(0,n.jsx)(t.li,{children:"OAuth"}),"\n",(0,n.jsx)(t.li,{children:"API Key"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"entity-level-authentication-in-graphqql",children:"Entity Level Authentication in GraphqQL"}),"\n",(0,n.jsx)(t.p,{children:"Entity level authentication in GraphQL refers to applying authentication logic to specific entities or types within your GraphQL schema, rather than at the API entry point or resolver level for individual queries or mutations. This approach allows you to control access to particular data types or fields based on the user's authentication status, enabling a more granular and flexible security model."}),"\n",(0,n.jsx)(t.p,{children:"Advantages of this approach:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Flexibility"}),": Tailors security measures to precisely fit the needs of your application, enhancing the protection of sensitive data."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Scalability"}),": Facilitates extending security policies to new entities and fields as your schema expands."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Customization"}),": Enables implementing different authentication mechanisms for distinct entities based on their security requirements."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"graphql-authentication",children:"GraphQL Authentication"}),"\n",(0,n.jsx)(t.p,{children:"Tailcall provides a straightforward way to implement entity level authentication in your GraphQL schema. By leveraging custom directives, you can define which entities or fields require authentication to access their data. Tailcall supports multiple authentication providers, such as Basic Auth and JWT, allowing you to choose the authentication mechanism that best suits your application's requirements.\nto know more about how to use it, read the following articles:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#basic-authentication",children:"Basic Auth"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#jwt-authentication",children:"JWT"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"graphql-configuration",children:"GraphQL Configuration"}),"\n",(0,n.jsx)(t.p,{children:"Enabling support for authentication in Tailcall could be done in two steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["With the help of ",(0,n.jsxs)(t.a,{href:"/tailcallhq.github.io/docs/tailcall-dsl-graphql-custom-directives#link-directive",children:[(0,n.jsx)(t.code,{children:"@link"})," directive"]})," connect multiple authentication files as you need for different provides. To connect it use either ",(0,n.jsx)(t.a,{href:"/tailcallhq.github.io/docs/tailcall-dsl-graphql-custom-directives#htpasswd",children:(0,n.jsx)(t.code,{children:"Htpasswd"})})," or ",(0,n.jsx)(t.a,{href:"/tailcallhq.github.io/docs/tailcall-dsl-graphql-custom-directives#jwks",children:(0,n.jsx)(t.code,{children:"Jwks"})})," link type"]}),"\n",(0,n.jsxs)(t.li,{children:["Mark that some type of field requires authentication to be fetched with the help of ",(0,n.jsxs)(t.a,{href:"/tailcallhq.github.io/docs/tailcall-dsl-graphql-custom-directives#protected-directive",children:[(0,n.jsx)(t.code,{children:"@protected"})," directive"]})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Your config could look like this now:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:'schema\n  @server(port: 8000)\n  #highlight-start\n  @link(id: "auth-basic", type: Htpasswd, src: "htpasswd")\n  @link(id: "auth-jwt", type: Jwks, src: "jwks.json") {\n  #highlight-end\n\n  query: Query\n  mutation: Mutation\n}\n\ntype Query {\n  posts: [Post]\n    @http(url: "http://jsonplaceholder.typicode.com/posts")\n  user(id: Int!): User\n    @http(\n      url: "http://jsonplaceholder.typicode.com/users/{{.args.id}}"\n    )\n}\n\ntype Mutation {\n  user(id: Int!): User\n    @http(\n      url: "http://jsonplaceholder.typicode.com/users/{{.args.id}}"\n    )\n}\n\n#highlight-start\ntype User @protected {\n  #highlight-end\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n  phone: String\n  website: String\n}\n\ntype Post {\n  id: Int!\n  userId: Int!\n  title: String!\n  #highlight-start\n  body: String! @protected\n  #highlight-end\n  user: User\n    @http(\n      url: "http://jsonplaceholder.typicode.com/users/{{.value.userId}}"\n    )\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["In that case the whole ",(0,n.jsx)(t.code,{children:"User"})," type and ",(0,n.jsx)(t.code,{children:"Post.body"})," are marked as protected and therefore requiring authentication to resolve its content. That means following points:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["any query for ",(0,n.jsx)(t.code,{children:"Post.body"})," will require authentication"]}),"\n",(0,n.jsxs)(t.li,{children:["any query for any field of ",(0,n.jsx)(t.code,{children:"User"})," will require authentication"]}),"\n",(0,n.jsxs)(t.li,{children:["any field that resolves to ",(0,n.jsx)(t.code,{children:"User"})," type will require authentication"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For more info about possible configuration for available providers read articles for ",(0,n.jsx)(t.a,{href:"#basic-authentication",children:"Basic Auth"})," and ",(0,n.jsx)(t.a,{href:"#jwt-authentication",children:"JWT"})]}),"\n",(0,n.jsx)(t.h2,{id:"making-test-requests",children:"Making test requests"}),"\n",(0,n.jsx)(t.p,{children:"Now let's try to access some data from the example above. Start the graphql server with provided config and use graphQL playground that should be opened automatically in your browser."}),"\n",(0,n.jsxs)(t.p,{children:["If you execute the query that don't have any ",(0,n.jsx)(t.code,{children:"@protected"})," fields like"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"{\n  posts {\n    title\n  }\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Then the data for this will be resolved as usual without providing any additional info. showing the list of posts with their titles:\n",(0,n.jsx)(t.img,{alt:"unprotected.png",src:i(8896).A+"",width:"2992",height:"1686"}),"\nBut if you change the query to access protected data, then if you don't provide any authentication data, i.e. for query:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"{\n  posts {\n    body\n  }\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"You will get an authentication failure error stating that authentication parameters were not provided. e.g.:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "data": null,\n  "errors": [\n    {\n      "message": "Authentication Failure: Missing Authorization Header.",\n      "locations": [\n        {\n          "line": 3,\n          "column": 5\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"protected.png",src:i(17323).A+"",width:"2992",height:"1686"})}),"\n",(0,n.jsxs)(t.p,{children:["Now update the request by providing additional Authorization header. You can do in the Playground by navigating to the tab ",(0,n.jsx)(t.code,{children:"HTTP HEADERS"})," at the bottom by adding following header for Basic Auth:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "Authorization": "Basic dGVzdHVzZXIxOnBhc3N3b3JkMTIzs"\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Now after executing the request again you'll get the response for all the requested fields without any error.\n",(0,n.jsx)(t.img,{alt:"basic_auth.png",src:i(20185).A+"",width:"2992",height:"1686"})]}),"\n",(0,n.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,n.jsx)(t.h3,{id:"protected-type",children:"@protected Type"}),"\n",(0,n.jsxs)(t.p,{children:["If type is marked with ",(0,n.jsx)(t.code,{children:"@protected"})," then:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"attempt to request any field of that type will require authentication"}),"\n",(0,n.jsx)(t.li,{children:"attempt to request any field from other type that resolves to protected type will require authentication and the underlying IO operation won't be executed without it"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"mutation",children:"Mutation"}),"\n",(0,n.jsxs)(t.p,{children:["For mutation entity level authentication works similar to queries. But since mutation involves requests that changes external state you should be careful where do you specify ",(0,n.jsx)(t.code,{children:"@protected"})," directive because marking some nested field as protected doesn't prevent from executing the request to resolve the parent fields. I.e. following example is problematic:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:'schema {\n  query: Query\n  mutation: Mutation\n}\n\ntype Query {\n  user(id: Int!): User\n    @http(\n      url: "http://jsonplaceholder.typicode.com/users/{{.args.id}}"\n    )\n}\n\ntype Mutation {\n  user(id: Int!): User\n    @http(\n      url: "http://jsonplaceholder.typicode.com/users/{{.args.id}}"\n      method: POST\n    )\n}\n\ntype User {\n  id: Int!\n  name: String!\n  website: String @protected\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Here you can still execute the mutation without any authentication and fail on attempting to resolve ",(0,n.jsx)(t.code,{children:"website"})," field."]}),"\n",(0,n.jsx)(t.p,{children:"To resolve this issue, consider marking root fields as protected in case they require authentication, i.e.:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:'schema {\n  query: Query\n  mutation: Mutation\n}\n\ntype Query {\n  user(id: Int!): User\n    @http(\n      url: "http://jsonplaceholder.typicode.com/users/{{.args.id}}"\n    )\n}\n\ntype Mutation {\n  user(id: Int!): User\n    @http(\n      url: "http://jsonplaceholder.typicode.com/users/{{.args.id}}"\n      method: POST\n    )\n    @protected\n}\n\ntype User {\n  id: Int!\n  name: String!\n  website: String @protected\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"multiple-auth-providers",children:"Multiple auth providers"}),"\n",(0,n.jsx)(t.p,{children:"In case you linked multiple authentication files all of them will be used to execute validation process. In that case, by default, Tailcall will validate all of them in parallel and succeed if at least one of them succeed."}),"\n",(0,n.jsx)(t.h3,{id:"authentication-headers",children:"Authentication headers"}),"\n",(0,n.jsxs)(t.p,{children:["To validate authentication for user request the specific headers are used (like ",(0,n.jsx)(t.code,{children:"Authorization"})," header). In case auth is enabled for tailcall those headers will be also added to the ",(0,n.jsxs)(t.a,{href:"/tailcallhq.github.io/docs/tailcall-dsl-graphql-custom-directives#allowedheaders",children:[(0,n.jsx)(t.code,{children:"allowedHeaders"})," list"]})," and therefore they will be forwarded to the upstream requests implicitly."]}),"\n",(0,n.jsx)(t.h2,{id:"basic-authentication",children:"Basic Authentication"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Basic Authentication"})," is a straightforward authentication scheme that sends base64-encoded usernames and passwords in the HTTP Authorization header with each request. It's simple to implement but requires HTTPS to ensure security due to its lack of encryption."]}),"\n",(0,n.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.p,{children:["To be able to use Basic Authentication support you should have configured ",(0,n.jsx)(t.a,{href:"https://httpd.apache.org/docs/2.4/programs/htpasswd.html",children:(0,n.jsx)(t.code,{children:"htpasswd"})})," file that contains users credentials data."]}),"\n",(0,n.jsxs)(t.p,{children:["To generate this data you can use ",(0,n.jsx)(t.a,{href:"https://httpd.apache.org/docs/2.4/programs/htpasswd.html",children:"Apache tooling"})," itself or available ",(0,n.jsx)(t.a,{href:"https://hostingcanada.org/htpasswd-generator/",children:"web-tool"})]}),"\n",(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsx)(t.p,{children:"Since this file stores secure information make sure to hash the password you use with secure algorithms"})}),"\n",(0,n.jsx)(t.h3,{id:"basic-auth-graphql-configuration",children:"Basic Auth GraphQL Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["To use Basic Auth you should first include htpasswd file generated from ",(0,n.jsx)(t.a,{href:"#prerequisites",children:"Prerequisites"})," with the help of ",(0,n.jsxs)(t.a,{href:"/tailcallhq.github.io/docs/tailcall-dsl-graphql-custom-directives#htpasswd",children:[(0,n.jsx)(t.code,{children:"@link"})," directive"]}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["We can use that file as an example for it that has data for ",(0,n.jsx)(t.code,{children:"testuser:mypassword"})," credentials in encrypted format:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-plaintext",metastring:'title="htpasswd"',children:"testuser:$2y$10$wJ/mZDURcAOBIrswCAKFsO0Nk7BpHmWl/XuhF7lNm3gBAFH3ofsuu\n"})}),"\n",(0,n.jsxs)(t.p,{children:["After adding ",(0,n.jsx)(t.code,{children:"@link"})," you can use the ",(0,n.jsxs)(t.a,{href:"/tailcallhq.github.io/docs/tailcall-dsl-graphql-custom-directives#protected-directive",children:[(0,n.jsx)(t.code,{children:"@protected"})," directive"]})," to mark the fields that requiring success authentication to be requested."]}),"\n",(0,n.jsx)(t.p,{children:"The whole example could look like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:'schema\n  @server(port: 8000)\n  @link(id: "auth-basic", type: Htpasswd, src: "htpasswd") {\n  query: Query\n}\n\ntype Query {\n  user(id: Int!): User\n    @http(\n      url: "http://jsonplaceholder.typicode.com/users/{{.args.id}}"\n    )\n}\n\ntype User @protected {\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n  phone: String\n  website: String\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"making-test-request",children:"Making test request"}),"\n",(0,n.jsx)(t.p,{children:"Now you can run the example file with Tailcall and try to make a query for data with specifying credentials."}),"\n",(0,n.jsxs)(t.p,{children:["To make the request first create base64 encoded string from the ",(0,n.jsx)(t.code,{children:"testuser:mypassword"})," string and then append the result to the ",(0,n.jsx)(t.code,{children:"Authorization: Basic"})," header."]}),"\n",(0,n.jsx)(t.p,{children:"A request example with curl:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"curl --request POST \\\n  --url http://localhost:8000/graphql \\\n  --header 'Authorization: Basic dGVzdHVzZXI6bXlwYXNzd29yZA==' \\\n  --data '{\"query\":\"query {\\n\\tuser(id: 1) { name }\\n}\"}'\n"})}),"\n",(0,n.jsx)(t.p,{children:"or you can use the GraphQL Playground and add the header in the HTTP Headers section:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "Authorization": "Basic dGVzdHVzZXIyOm15cGFzc3dvcmQ="\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"with query:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"query {\n  user(id: 1) {\n    name\n  }\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"Executing such request should be resolved with the user and its name."}),"\n",(0,n.jsx)(t.h2,{id:"jwt-authentication",children:"JWT Authentication"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"JWT Authentication"})," uses digitally signed tokens to authenticate and transmit user information in a compact JSON format, allowing stateless and secure communication between clients and servers. It offers greater flexibility and security, supporting expiration times and custom data embedding within the token itself."]}),"\n",(0,n.jsx)(t.h3,{id:"prerequisites-1",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.p,{children:["To be able to use JWT authentication you should have configured ",(0,n.jsx)(t.a,{href:"https://supertokens.com/blog/understanding-jwks",children:(0,n.jsx)(t.code,{children:"JSON Web Key Sets"})})," (JWKS for short) file."]}),"\n",(0,n.jsxs)(t.p,{children:["To create this file you can use available web-tools like ",(0,n.jsx)(t.a,{href:"https://russelldavies.github.io/jwk-creator/",children:"JWK creator"})," in case you already have RSA key-pair or ",(0,n.jsx)(t.a,{href:"https://mkjwk.org",children:"mkjwk"})," if you don't."]}),"\n",(0,n.jsx)(t.h3,{id:"jwt-auth-graphql-configuration",children:"JWT Auth GraphQL Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["To use JWT you should first include JWKS file generated from ",(0,n.jsx)(t.a,{href:"#prerequisites",children:"Prerequisites"})," with the help of ",(0,n.jsxs)(t.a,{href:"/tailcallhq.github.io/docs/tailcall-dsl-graphql-custom-directives#jwks",children:[(0,n.jsx)(t.code,{children:"@link"})," directive"]}),"."]}),"\n",(0,n.jsx)(t.p,{children:"We can use that file as an example for it:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",metastring:'title="jwks.json"',children:'{\n  "keys": [\n    {\n      "kty": "RSA",\n      "use": "sig",\n      "alg": "RS256",\n      "kid": "I48qMJp566SSKQogYXYtHBo9q6ZcEKHixNPeNoxV1c8",\n      "n": "ksMb5oMlhJ_HzAebCuBG6-v5Qc4J111ur7Aux6-8SbxzqFONsf2Bw6ATG8pAfNeZ-USA3_T1mGkYTDvfoggXnxsduWV_lePZKKOq_Qp_EDdzic1bVTJQDad3CXldR3wV6UFDtMx6cCLXxPZM5n76e7ybPt0iNgwoGpJE28emMZJXrnEUFzxwFMq61UlzWEumYqW3uOUVp7r5XAF5jQ_1nQAnpHBnRFzdNPVb3E6odMGu3jgp8mkPbPMP16Fund4LVplLz8yrsE9TdVrSdYJThylRWn_BwvJ0DjUcp8ibJya86iClUlixAmBwR9NdStHwQqHwmMXMKkTXo-ytRmSUobzxX9T8ESkij6iBhQpmDMD3FbkK30Y7pUVEBBOyDfNcWOhholjOj9CRrxu9to5rc2wvufe24VlbKb9wngS_uGfK4AYvVyrcjdYMFkdqw-Mft14HwzdO2BTS0TeMDZuLmYhj_bu5_g2Zu6PH5OpIXF6Fi8_679pCG8wWAcFQrFrM0eA70wD_SqD_BXn6pWRpFXlcRy_7PWTZ3QmC7ycQFR6Wc6Px44y1xDUoq3rH0RlZkeicfvP6FRlpjFU7xF6LjAfd9ciYBZfJll6PE7zf-i_ZXEslv-tJ5-30-I4Slwj0tDrZ2Z54OgAg07AIwAiI5o4y-0vmuhUscNpfZsGAGhE",\n      "e": "AQAB"\n    }\n  ]\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["After adding ",(0,n.jsx)(t.code,{children:"@link"})," you can use the ",(0,n.jsxs)(t.a,{href:"/tailcallhq.github.io/docs/tailcall-dsl-graphql-custom-directives#protected-directive",children:[(0,n.jsx)(t.code,{children:"@protected"})," directive"]})," to mark the fields that requiring success authentication to be requested."]}),"\n",(0,n.jsx)(t.p,{children:"The whole example could look like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:'schema\n  @server(port: 8000)\n  @link(id: "auth-jwks", type: Jwks, src: "jwks.json") {\n  query: Query\n}\n\ntype Query {\n  user(id: Int!): User\n    @http(\n      url: "http://jsonplaceholder.typicode.com/users/{{.args.id}}"\n    )\n}\n\ntype User @protected {\n  id: Int!\n  name: String!\n  username: String!\n  email: String!\n  phone: String\n  website: String\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"making-test-request-1",children:"Making test request"}),"\n",(0,n.jsx)(t.p,{children:"Now you can run the example file with Tailcall and try to make a query for data with specifying credentials."}),"\n",(0,n.jsxs)(t.p,{children:["To make the request first obtain JWT token compatible with JWKS file you've linked before (if you've used the example ",(0,n.jsx)(t.code,{children:"jwks.json"})," file from above then you can use the token from the example below)."]}),"\n",(0,n.jsx)(t.p,{children:"An request example with curl:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"curl --request POST \\\n  --url http://localhost:8000/graphql \\\n  --header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ikk0OHFNSnA1NjZTU0tRb2dZWFl0SEJvOXE2WmNFS0hpeE5QZU5veFYxYzgifQ.eyJleHAiOjIwMTkwNTY0NDEuMCwiaXNzIjoibWUiLCJzdWIiOiJ5b3UiLCJhdWQiOlsidGhlbSJdfQ.cU-hJgVGWxK3-IBggYBChhf3FzibBKjuDLtq2urJ99FVXIGZls0VMXjyNW7yHhLLuif_9t2N5UIUIq-hwXVv7rrGRPCGrlqKU0jsUH251Spy7_ppG5_B2LsG3cBJcwkD4AVz8qjT3AaE_vYZ4WnH-CQ-F5Vm7wiYZgbdyU8xgKoH85KAxaCdJJlYOi8mApE9_zcdmTNJrTNd9sp7PX3lXSUu9AWlrZkyO-HhVbXFunVtfduDuTeVXxP8iw1wt6171CFbPmQJU_b3xCornzyFKmhSc36yvlDfoPPclWmWeyOfFEp9lVhQm0WhfDK7GiuRtaOxD-tOvpTjpcoZBeJb7bSg2OsneyeM_33a0WoPmjHw8WIxbroJz_PrfE72_TzbcTSDttKAv_e75PE48Vvx0661miFv4Gq8RBzMl2G3pQMEVCOm83v7BpodfN_YVJcqZJjVHMA70TZQ4K3L4_i9sIK9jJFfwEDVM7nsDnUu96n4vKs1fVvAuieCIPAJrfNOUMy7TwLvhnhUARsKnzmtNNrJuDhhBx-X93AHcG3micXgnqkFdKn6-ZUZ63I2KEdmjwKmLTRrv4n4eZKrRN-OrHPI4gLxJUhmyPAHzZrikMVBcDYfALqyki5SeKkwd4v0JAm87QzR4YwMdKErr0Xa5JrZqHGe2TZgVO4hIc-KrPw' \\\n  --data '{\"query\":\"query {\\n\\tuser(id: 1) { name }\\n}\"}'\n"})}),"\n",(0,n.jsx)(t.p,{children:"Executing such request should be resolved with the user and its name."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},20185:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/basic_auth-fd877fb87d0d5675cf444462fbca9b8f.png"},17323:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/protected-028599e5f2ac20319c300887fc81a427.png"},8896:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/unprotected-e268ce8ee42e2477703ea89d8dc93a10.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>l});var n=i(96540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);