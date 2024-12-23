"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[189],{46876:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"faq","title":"Frequently Asked Questions","description":"Get answers to the most frequently asked questions about Tailcall, including performance, features, installation, and more.","source":"@site/graphql/faq.md","sourceDirName":".","slug":"/faq","permalink":"/graphql/faq","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1725624440000,"frontMatter":{"title":"Frequently Asked Questions","description":"Get answers to the most frequently asked questions about Tailcall, including performance, features, installation, and more.","slug":"faq"},"sidebar":"graphql","previous":{"title":"Directives","permalink":"/graphql/graphql-directives"}}');var r=a(74848),s=a(28453);const i={title:"Frequently Asked Questions",description:"Get answers to the most frequently asked questions about Tailcall, including performance, features, installation, and more.",slug:"faq"},o="Frequently Asked Questions",l={},c=[{value:"Performance",id:"performance",level:2},{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Trivia",id:"trivia",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"})}),"\n",(0,r.jsxs)(n.p,{children:["Here are answers to some of the most frequently asked questions. If you don't see what you're looking for, please feel free to ",(0,r.jsx)(n.a,{href:"https://discord.com/invite/kRZBPpkgwq",children:"contact us"}),"!"]}),"\n",(0,r.jsx)(n.h2,{id:"performance",children:"Performance"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"What sort of throughput and latency can we expect?"})}),"\n",(0,r.jsxs)(n.p,{children:["Check out our ",(0,r.jsx)(n.a,{href:"https://github.com/tailcallhq/graphql-benchmarks",children:"benchmarks page"})," for detailed information."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"What is the maximum capacity that Tailcall can manage effectively?"})}),"\n",(0,r.jsx)(n.p,{children:"Tailcall is designed to scale horizontally and can handle billions of requests per second."}),"\n",(0,r.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"I use REST APIs. How can I use Tailcall if I don\u2019t currently use GraphQL?"})}),"\n",(0,r.jsx)(n.p,{children:"You can use Tailcall in two ways:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["You can use Tailcall to build a GraphQL server atop your existing REST APIs and Tailcall's ",(0,r.jsx)(n.code,{children:"@http"})," directive. And you can replace your REST APIs with GraphQL over time."]}),"\n",(0,r.jsxs)(n.li,{children:["In case you don't want to use GraphQL, Tailcall has a directive called ",(0,r.jsx)(n.code,{children:"@rest"})," that lets you use the composition capabilities of GraphQL without needing you to adopt GraphQL for your endpoints. This directive makes Tailcall GraphQL queries and mutations available as REST endpoints."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Can Tailcall generate GraphQL from gRPC APIs?"})}),"\n",(0,r.jsxs)(n.p,{children:["Absolutely! Tailcall automatically generates GraphQL configurations from REST, gRPC, and existing GraphQL configuration files. We even support a hybrid integration of REST and gRPC. You can learn more about generating GraphQL configuration from gRPC APIs ",(0,r.jsx)(n.a,{href:"https://tailcall.run/docs/graphql-grpc-tailcall/",children:"here"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Is authentication built-in with Tailcall? If yes, how?"})}),"\n",(0,r.jsxs)(n.p,{children:["Yes, Tailcall offers a simple way to add entity-level authentication to your GraphQL schema. You can read more about it ",(0,r.jsx)(n.a,{href:"https://tailcall.run/docs/field-level-access-control-graphql-authentication/",children:"here"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Does Tailcall work with HTTP/2?"})}),"\n",(0,r.jsx)(n.p,{children:"Yes, Tailcall supports HTTP/2 for both server (ingress) and client (egress) operations, enabling the protocol for incoming and outgoing server requests. For egress, no special settings are needed Tailcall will automatically upgrade the connection to HTTP/2 whenever possible."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Do you follow the Federation specification?"})}),"\n",(0,r.jsx)(n.p,{children:"Yes, our subgraph is fully compatible with the Federation specification."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Are you going to have a control plan like Apollo or Cosmo that has a self-hosted solution?"})}),"\n",(0,r.jsxs)(n.p,{children:["Yes, it\u2019s in the works! Please ",(0,r.jsx)(n.a,{href:"https://discord.com/invite/kRZBPpkgwq",children:"contact us"})," to get more details."]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"What observability integrations do you support?"})}),"\n",(0,r.jsx)(n.p,{children:"Tailcall integrates with Apollo Studio, Data Dog, New Relic, and Honeycomb for telemetry."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Where can I deploy Tailcall apps?"})}),"\n",(0,r.jsx)(n.p,{children:"Tailcall is built using Rust and when you compile Rust, it gets compiled to an executable. You can then run the binary from anywhere - including your own self-hosted server!\nYou can also run them as serverless functions through supported platforms like AWS Lambda. Each of these deployment methods have their own tradeoffs. You can also deploy Tailcall apps on Kubernetes, Docker, or any other container orchestration platform.\nTailcall can also be compiled to WebAssembly and run in the browser/js based server ."}),"\n",(0,r.jsx)(n.h2,{id:"trivia",children:"Trivia"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Why did you start Tailcall?"})}),"\n",(0,r.jsx)(n.p,{children:"Tailcall was inspired by our experiences at Dream11, a fast-growing fantasy sports platform with over 200 million users. As the platform grew rapidly, we needed to make frequent UI changes and maintain type safety on the backend. We adopted GraphQL on the frontend\u2019s recommendation, which reduced our workload, but as the platform expanded, infrastructure costs skyrocketed. Handwriting GraphQL servers also became cumbersome and error-prone."}),"\n",(0,r.jsxs)(n.p,{children:["We developed a Domain Specific Language (DSL) to address GraphQL\u2019s performance issues and other concerns, which helped us cut infrastructure costs by 90%. Our key takeaway was that APIs should be independently built and operated, and GraphQL should be used as a client-side abstraction closer to the client, not the server. This knowledge shaped the way we architected Tailcall today! You can read more about our GraphQL journey at Dream11 ",(0,r.jsx)(n.a,{href:"https://tailcall.run/blog/dream11-graphql-case-study/",children:"here"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"What specific problem does Tailcall solve and for whom? Who is your ideal customer?"})}),"\n",(0,r.jsx)(n.p,{children:"Tailcall is perfect for growing companies that need efficient API management and are currently using REST APIs. Imagine you have a REST API and run an e-commerce store. The UI must make three separate requests:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"One to get the list of products."}),"\n",(0,r.jsx)(n.li,{children:"Another to get the seller details for each product."}),"\n",(0,r.jsx)(n.li,{children:"A third to get the reviews for each product and calculate the average rating."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Manual Composition"}),": The UI is responsible for combining product data with seller names and calculating the average rating."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Over-fetching"}),": REST endpoints may return unnecessary fields, leading to over-fetching of data that the UI does not need."]}),"\n",(0,r.jsx)(n.p,{children:"With GraphQL, a single query can be crafted to fetch exactly what the UI needs in one request. The GraphQL schema defines the relationships, simplifying data retrieval. However, setting this up usually involves writing backend code."}),"\n",(0,r.jsx)(n.p,{children:"Tailcall takes it a step further, enabling you to build an efficient GraphQL server using only a configuration file\u2014no code required. This significantly speeds up the development process."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Is GraphQL dead? Why do you use GraphQL when so many in the industry think it\u2019s dead?"})}),"\n",(0,r.jsx)(n.p,{children:"Handwriting GraphQL can solve certain problems but also introduces new challenges. While manual GraphQL might fade away, combining GraphQL with a powerful runtime like Tailcall has a bright future!"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"We already have a GraphQL API ready and don't have a reason to change. Why should we use Tailcall?"})}),"\n",(0,r.jsxs)(n.p,{children:["While GraphQL is great for querying, manually writing backend code introduces complexity and potential errors. Tailcall simplifies this by letting you build a fast GraphQL server with just a configuration file, greatly speeding up your development. We encourage you to ",(0,r.jsx)(n.a,{href:"https://tailcall.run/docs/",children:"try it"})," out, and if you have questions, we\u2019re here to help!"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"What does the name Tailcall mean?"})}),"\n",(0,r.jsx)(n.p,{children:'Our name was inspired by "tail call optimization" (TCO), a concept in programming that perfectly reflects our mission to optimize performance and turbocharge developers\' productivity!'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"I am ready for Tailcall. What next?"})}),"\n",(0,r.jsxs)(n.p,{children:["Awesome! Check out our ",(0,r.jsx)(n.a,{href:"https://tailcall.run/docs/",children:"Getting Started"})," page to begin your journey. For any questions or to chat with us, join us on ",(0,r.jsx)(n.a,{href:"https://discord.com/invite/kRZBPpkgwq",children:"Discord"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var t=a(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);