"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6798],{68425:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"what-is-graphql","title":"What is GraphQL?: A Simple Introduction","description":"GraphQL is a specification which defines query language for your API and a server-side runtime for executing queries using a type system you define for your data.","source":"@site/graphql/what-is-graphql.md","sourceDirName":".","slug":"/what-is-graphql","permalink":"/graphql/what-is-graphql","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1719568858000,"frontMatter":{"title":"What is GraphQL?: A Simple Introduction","sidebar_label":"What is GraphQL?","description":"GraphQL is a specification which defines query language for your API and a server-side runtime for executing queries using a type system you define for your data.","slug":"what-is-graphql","image":"/images/graphql/graphql-over-http.png"},"sidebar":"graphql","previous":{"title":"Problem Statement","permalink":"/graphql/problem-statement"},"next":{"title":"Schema and Types","permalink":"/graphql/schemas-and-types"}}');var r=a(74848),i=a(28453);const n={title:"What is GraphQL?: A Simple Introduction",sidebar_label:"What is GraphQL?",description:"GraphQL is a specification which defines query language for your API and a server-side runtime for executing queries using a type system you define for your data.",slug:"what-is-graphql",image:"/images/graphql/graphql-over-http.png"},o=void 0,h={},d=[{value:"GraphQL over HTTP",id:"graphql-over-http",level:2},{value:"Client Side",id:"client-side",level:3},{value:"Server Side",id:"server-side",level:3},{value:"Client-Server Interaction:",id:"client-server-interaction",level:3},{value:"GraphQL Adoption",id:"graphql-adoption",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"Is GraphQL frontend or backend?",id:"is-graphql-frontend-or-backend",level:3},{value:"Is GraphQL an API Gateway?",id:"is-graphql-an-api-gateway",level:3},{value:"Is GraphQL a Database?",id:"is-graphql-a-database",level:3},{value:"Is GraphQL better than REST?",id:"is-graphql-better-than-rest",level:3},{value:"How can I convert my REST APIs to GraphQL?",id:"how-can-i-convert-my-rest-apis-to-graphql",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s,{children:[(0,r.jsx)("meta",{property:"og:type",content:"article"}),(0,r.jsx)("title",{children:"What is GraphQL?: A Simple Introduction"})]}),"\n",(0,r.jsx)(t.p,{children:"Due to the rise of mobile devices, the internet is now accessed by a variety of devices, not just web browsers. With the increase in types of internet users, the days of simply pulling data from databases and rendering it on web pages are over. Now, we need to consider how to retrieve data from databases and display it on mobile devices, smartwatches, smart TVs, and even refrigerators."}),"\n",(0,r.jsx)(t.p,{children:"Today, we expect app developers to create rich, complex user interfaces that are accessible on a variety of devices, aiming to make the user experience as memorable as possible."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"Client asking for things it needs from servers",src:a(24680).A+"",width:"1602",height:"791"}),"\n",(0,r.jsx)(t.em,{children:"The client requests specific data from various APIs, knowing which data comes from each source and is responsible for combining the data into the desired format."})]}),"\n",(0,r.jsxs)(t.p,{children:["To cater to these diverse needs, we need a more flexible way to interact with APIs. This is where ",(0,r.jsx)(t.a,{href:"/graphql",children:(0,r.jsx)(t.strong,{children:"GraphQL"})})," comes in."]}),"\n",(0,r.jsx)(t.h2,{id:"graphql-over-http",children:"GraphQL over HTTP"}),"\n",(0,r.jsx)(t.h3,{id:"client-side",children:"Client Side"}),"\n",(0,r.jsx)(t.p,{children:"GraphQL is a query language for your APIs. It gives clients the capability to ask for exactly what they need without worrying about where to get it from."}),"\n",(0,r.jsxs)(t.p,{children:["Instead of making traditional ",(0,r.jsx)(t.code,{children:"GET"}),", ",(0,r.jsx)(t.code,{children:"POST"}),", ",(0,r.jsx)(t.code,{children:"PUT"}),", and ",(0,r.jsx)(t.code,{children:"DELETE"})," requests to different endpoints, GraphQL needs only one endpoint to interact, typically using the ",(0,r.jsx)(t.code,{children:"POST"})," method. The client sends queries in the body of the ",(0,r.jsx)(t.code,{children:"POST"})," request. The request will look something like this:\n",(0,r.jsx)(t.img,{alt:"Sample request",src:a(22525).A+"",width:"1032",height:"633"}),"\n",(0,r.jsx)(t.em,{children:"The query is sent as a string inside a JSON object."})]}),"\n",(0,r.jsx)(t.h3,{id:"server-side",children:"Server Side"}),"\n",(0,r.jsxs)(t.p,{children:["On the server side, It is a ",(0,r.jsx)(t.strong,{children:"runtime"}),' that understands these "queries," fetches data from various data sources, bundles it in the shape that the client requested, and sends it back in an HTTP response.\n',(0,r.jsx)(t.img,{alt:"Sample response",src:a(3537).A+"",width:"1032",height:"633"}),"\n",(0,r.jsxs)(t.em,{children:["The response object is inside the ",(0,r.jsx)(t.code,{children:"data"})," key of the JSON object."]})]}),"\n",(0,r.jsx)(t.p,{children:"The GraphQL server is responsible for exposing the schema, which is a strongly typed contract between the client and the server. It defines what queries clients can make, what types of data can be fetched, and what mutations can be performed."}),"\n",(0,r.jsx)(t.p,{children:"For GraphQL, the origin of the data is irrelevant\u2014it could come from a database, a microservice, or even a RESTful API. In essence, GraphQL is not concerned with the source of the data."}),"\n",(0,r.jsxs)(t.p,{children:["Check out the diagram below to get a better understanding of how GraphQL is used in your stack.\n",(0,r.jsx)(t.img,{alt:"GraphQL over HTTP",src:a(94137).A+"",width:"2102",height:"735"})]}),"\n",(0,r.jsx)(t.h3,{id:"client-server-interaction",children:"Client-Server Interaction:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["The client sends a query to the server. Note that the query is not in JSON format, but it looks like the shape of the JSON data the client needs. So when the ",(0,r.jsx)(t.code,{children:"POST"})," request is made, the query is sent as a string inside a JSON object."]}),"\n",(0,r.jsx)(t.li,{children:"The server receives the JSON object, extracts the query string from it, parses the query to check for proper syntax, and validates it against the Schema (the contract between the client and the server)."}),"\n",(0,r.jsx)(t.li,{children:"Based on the query, the server fetches the data from the data sources and bundles it in the JSON object in the shape that the client requested."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"graphql-adoption",children:"GraphQL Adoption"}),"\n",(0,r.jsx)(t.p,{children:"Due to this flexibility, the adoption of GraphQL has been increasing rapidly. There are many implementations available in various languages like JavaScript, Python, Ruby, Java, Rust, and more."}),"\n",(0,r.jsxs)(t.p,{children:['Starting off as a "hobbyist" stack, It has now been adopted by many big companies like Netflix, GitHub, Twitter, Pinterest, Shopify, and ',(0,r.jsx)(t.a,{href:"https://landscape.graphql.org/card-mode?category=graph-ql-adopter&grouping=category",children:"more"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,r.jsx)(t.h3,{id:"is-graphql-frontend-or-backend",children:"Is GraphQL frontend or backend?"}),"\n",(0,r.jsx)(t.p,{children:"GraphQL has two parts: the client-side and the server-side. On the client side, It is a query language that allows you to ask for the data you need. On the server side, It is a runtime for executing those queries using a type system you define for your data."}),"\n",(0,r.jsx)(t.h3,{id:"is-graphql-an-api-gateway",children:"Is GraphQL an API Gateway?"}),"\n",(0,r.jsx)(t.p,{children:"GraphQL is not an API Gateway. However, it can be used as a layer between your client and your existing APIs to provide a more flexible and efficient way to interact with your data."}),"\n",(0,r.jsx)(t.h3,{id:"is-graphql-a-database",children:"Is GraphQL a Database?"}),"\n",(0,r.jsx)(t.p,{children:"GraphQL is not a database. It is a query language for your API and a server-side runtime for executing queries using a type system you define for your data. It can be used to query data from databases, REST/gRPC APIs, and other data sources."}),"\n",(0,r.jsx)(t.h3,{id:"is-graphql-better-than-rest",children:"Is GraphQL better than REST?"}),"\n",(0,r.jsx)(t.p,{children:"It depends on your use case. Since there is more efficiency associated with working with GraphQL, development is much faster with it than with REST."}),"\n",(0,r.jsx)(t.h3,{id:"how-can-i-convert-my-rest-apis-to-graphql",children:"How can I convert my REST APIs to GraphQL?"}),"\n",(0,r.jsxs)(t.p,{children:["You can use tools like Tailcall, which is the simplest way to convert your REST APIs to GraphQL APIs. You can find more details ",(0,r.jsx)(t.a,{href:"https://tailcall.run/docs",children:"here"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},24680:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/gql-client-7d3dc4ae441dffbecf3b097ea6de2c06.png"},94137:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/graphql-over-http-8374c7843ced4d93c796eba8109abea7.png"},22525:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/graphql-request-1b120537ffbe8bf1856a0d3af842fbc8.png"},3537:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/graphql-response-87d8673b6ade502bf5bccffd4b081596.png"},28453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>o});var s=a(96540);const r={},i=s.createContext(r);function n(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);