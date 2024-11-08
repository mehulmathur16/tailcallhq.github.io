"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3166],{91556:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var n=t(74848),i=t(28453);const r={title:"The truth about scaling Automatic Persisted Queries",authors:[{name:"Tushar Mathur",title:"CEO @ Tailcall | Love to talk about programming, scale, distributed systems and building high performance systems.",url:"https://github.com/tusharmath",image_url:"https://avatars.githubusercontent.com/u/194482?v=4"}],description:"Learn about the limitations and potential scaling issues that accompany Automatic Persisted Queries (APQ).",image:"/images/blog/apq-cover.png",hide_table_of_contents:!0,slug:"the-truth-about-scaling-automatic-persisted-queries",canonical_url:"https://tailcall.hashnode.dev/the-truth-about-scaling-automatic-persisted-queries"},a=void 0,l={permalink:"/blog/the-truth-about-scaling-automatic-persisted-queries",source:"@site/blog/automatic-persisted-queries-2023-08-11.md",title:"The truth about scaling Automatic Persisted Queries",description:"Learn about the limitations and potential scaling issues that accompany Automatic Persisted Queries (APQ).",date:"2023-08-11T00:00:00.000Z",tags:[],readingTime:6.025,hasTruncateMarker:!0,authors:[{name:"Tushar Mathur",title:"CEO @ Tailcall | Love to talk about programming, scale, distributed systems and building high performance systems.",url:"https://github.com/tusharmath",image_url:"https://avatars.githubusercontent.com/u/194482?v=4",imageURL:"https://avatars.githubusercontent.com/u/194482?v=4"}],frontMatter:{title:"The truth about scaling Automatic Persisted Queries",authors:[{name:"Tushar Mathur",title:"CEO @ Tailcall | Love to talk about programming, scale, distributed systems and building high performance systems.",url:"https://github.com/tusharmath",image_url:"https://avatars.githubusercontent.com/u/194482?v=4",imageURL:"https://avatars.githubusercontent.com/u/194482?v=4"}],description:"Learn about the limitations and potential scaling issues that accompany Automatic Persisted Queries (APQ).",image:"/images/blog/apq-cover.png",hide_table_of_contents:!0,slug:"the-truth-about-scaling-automatic-persisted-queries",canonical_url:"https://tailcall.hashnode.dev/the-truth-about-scaling-automatic-persisted-queries"},unlisted:!1,prevItem:{title:"GraphQL Conf 2023",permalink:"/blog/graphql-conf-2023"},nextItem:{title:"Unraveling the Challenges of BFF Federation",permalink:"/blog/unraveling-the-challenges-of-bff-federation"}},o={authorsImageUrls:[void 0]},h=[{value:"The Problem",id:"the-problem",level:3},{value:"Large Queries",id:"large-queries",level:4},{value:"Legacy Infrastructure",id:"legacy-infrastructure",level:4},{value:"Solution: Persisted Queries (PQ)",id:"solution-persisted-queries-pq",level:3},{value:"Definition and Benefits",id:"definition-and-benefits",level:4},{value:"Application with CDNs",id:"application-with-cdns",level:4},{value:"<strong>Latency Reduction</strong>",id:"latency-reduction",level:5},{value:"<strong>Security Enhancements</strong>",id:"security-enhancements",level:5},{value:"Problem",id:"problem",level:4},{value:"Automatic Persisted Queries (APQs)",id:"automatic-persisted-queries-apqs",level:3},{value:"APQs vs PQs",id:"apqs-vs-pqs",level:4},{value:"How APQs Work",id:"how-apqs-work",level:4},{value:"Problems with APQs",id:"problems-with-apqs",level:3},{value:"Thundering Herd Problem",id:"thundering-herd-problem",level:4},{value:"Cache Limitations",id:"cache-limitations",level:4},{value:"Security Concerns",id:"security-concerns",level:4},{value:"Possible Solution",id:"possible-solution",level:3},{value:"Conclusion",id:"conclusion",level:3}];function c(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Persisted queries are often hailed as a solution to several challenges in GraphQL related to network performance, caching, and maintenance. However, they may not always be the silver bullet they appear to be. This post delves into the concept of persisted queries (PQ) and automatic persisted queries (APQ), highlighting the limitations and potential scaling issues that accompany these technologies."}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("link",{rel:"canonical",href:"https://tailcall.hashnode.dev/the-truth-about-scaling-automatic-persisted-queries"}),(0,n.jsx)("title",{children:"The truth about scaling Automatic Persisted Queries"})]}),"\n",(0,n.jsx)(s.h3,{id:"the-problem",children:"The Problem"}),"\n",(0,n.jsx)(s.h4,{id:"large-queries",children:"Large Queries"}),"\n",(0,n.jsx)(s.p,{children:"Clients send queries to a GraphQL server as HTTP requests that include the query as the body. When these queries become large, they can lead to increased latency and network usage, degrading client performance."}),"\n",(0,n.jsx)(s.p,{children:"For example, a normal GraphQL query might look like this:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" \\\n  --data \'{"query": "{ largeQuery { field1 field2 ... } }"}\' \\\n  http://your-graphql-server.com/graphql\n'})}),"\n",(0,n.jsx)(s.p,{children:"Each GraphQL query is parsed every time the server receives it. If it's large, the parsing can take a significant amount of time, increasing latency even further."}),"\n",(0,n.jsx)(s.h4,{id:"legacy-infrastructure",children:"Legacy Infrastructure"}),"\n",(0,n.jsx)(s.p,{children:"Existing CDN infrastructure is designed to cache only GET calls. To make a GraphQL request, one must make a POST call. This limits the usage of CDNs for caching purposes."}),"\n",(0,n.jsx)(s.h3,{id:"solution-persisted-queries-pq",children:"Solution: Persisted Queries (PQ)"}),"\n",(0,n.jsx)(s.h4,{id:"definition-and-benefits",children:"Definition and Benefits"}),"\n",(0,n.jsx)(s.p,{children:"To enhance network performance for large query strings, GraphQL server supports Persisted Queries (PQ). A PQ is a GraphQL query cached server-side, identified by its SHA-256 hash. Clients send this identifier instead of the query, dramatically reducing request sizes (without affecting response), saving parsing time, and enabling GET calls instead of POST."}),"\n",(0,n.jsx)(s.p,{children:"A PQ request might look like this:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'curl -X GET -H "Content-Type: application/json" \\\n  --data-urlencode \'extensions={"persistedQuery":{"version":1,"sha256Hash":"<SHA 256>"}}\' \\\n  http://your-graphql-server.com/graphql\n'})}),"\n",(0,n.jsx)(s.h4,{id:"application-with-cdns",children:"Application with CDNs"}),"\n",(0,n.jsx)(s.p,{children:"Using the PQ link automatically sends short hashed queries as GET requests, enabling CDNs to serve them."}),"\n",(0,n.jsx)(s.h5,{id:"latency-reduction",children:(0,n.jsx)(s.strong,{children:"Latency Reduction"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"No Parsing Overhead"}),": Since the query isn't sent to the server, the parsing stage, which can be computationally expensive, is eliminated. This saves valuable server processing time, directly reducing client latency."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Network Efficiency"}),": By transmitting only the hash instead of the full query, the request size is dramatically reduced, leading to faster network transmission and lower latency."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h5,{id:"security-enhancements",children:(0,n.jsx)(s.strong,{children:"Security Enhancements"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Control Over Allowed Queries"}),': The server can start with a finite set of "allowed" queries, ensuring that unauthorized or unoptimized GraphQL requests cannot be made. This control is a significant safeguard for production environments, preventing potential abuse or inefficiencies.']}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Reduction in Attack Surface"}),": By limiting the queries to a pre-defined set, the risk of malicious queries is reduced, enhancing the security profile of the application."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"problem",children:"Problem"}),"\n",(0,n.jsx)(s.p,{children:"While PQs provide remarkable benefits, they are not without challenges:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Schema Rigidity"}),": If you aim to keep the schema open and queries dynamic, supporting any possible query becomes complex."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Maintenance of Cached Queries"}),": Managing the cache of allowed queries and keeping them in sync with evolving client needs can become a maintenance burden, especially in a fast-changing environment."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"automatic-persisted-queries-apqs",children:"Automatic Persisted Queries (APQs)"}),"\n",(0,n.jsx)(s.h4,{id:"apqs-vs-pqs",children:"APQs vs PQs"}),"\n",(0,n.jsx)(s.p,{children:"APQs are a supposed improvement over PQs. In a PQ setup, the server runs with a known set of queries, meaning client changes require server updates. This has implications for maintenance costs, particularly in supporting multiple versions of queries and making a server deployment for every change in the client query. APQs were introduced to overcome these challenges."}),"\n",(0,n.jsx)(s.h4,{id:"how-apqs-work",children:"How APQs Work"}),"\n",(0,n.jsx)(s.p,{children:"The APQ process is a two-step approach:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Hash Request"}),": The client sends a request with the hash of the query. If the server recognizes the hash, it returns the corresponding response:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'curl -X GET -H "Content-Type: application/json" \\\n  --data-urlencode \'extensions={"persistedQuery":{"version":1,"sha256Hash":"<SHA 256>"}}\' \\\n  http://your-graphql-server.com/graphql\n'})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Full Query Request"}),": If the server does not recognize the hash, it returns an error. The client then sends a new request that includes both the hash and the full query string:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'curl --get http://localhost:4000/graphql \\\n  --header \'content-type: application/json\' \\\n  --data-urlencode \'{"query": "{ largeQuery { field1 field2 ... } }"}\' \\\n  --data-urlencode \'extensions={"persistedQuery":{"version":1,"sha256Hash":"<HASH>"}}\'\n'})}),"\n",(0,n.jsx)(s.p,{children:"The server parses the full query, caches it for future use, and returns the GraphQL response. Subsequent requests use the hash."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["This process optimizes network performance while allowing flexibility in the queries that can be run. You can read more about APQ ",(0,n.jsx)(s.a,{href:"https://www.apollographql.com/docs/apollo-server/performance/apq/",children:"here"})]}),"\n",(0,n.jsx)(s.h3,{id:"problems-with-apqs",children:"Problems with APQs"}),"\n",(0,n.jsx)(s.h4,{id:"thundering-herd-problem",children:"Thundering Herd Problem"}),"\n",(0,n.jsx)(s.p,{children:"Consider a situation where a server has just been deployed or restarted, and the cache is empty. Now, multiple clients send hash requests for queries that are not yet cached."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Massive Error Responses"}),": Since the cache is empty, the server returns errors for all hash requests, signaling the clients to send the full query strings."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Simultaneous Full Query Requests"}),": All clients now simultaneously send full query requests, causing a sudden surge in demand."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Server Strain"}),": The server must parse and cache each unique query, placing significant strain on its resources. This can lead to increased latency and even server failure if the demand is too high."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Repeated Pattern"}),": If the server struggles to cache the queries quickly enough, the clients may continue to receive errors and retry the full query requests, perpetuating the problem."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"In an environment with many clients and dynamically changing queries, the system can become vulnerable to sudden surges in demand. This vulnerability can undermine the performance benefits APQs are designed to provide, leading to potential system instability."}),"\n",(0,n.jsx)(s.h4,{id:"cache-limitations",children:"Cache Limitations"}),"\n",(0,n.jsx)(s.p,{children:"Queries are typically cached in memory, requiring cache warmup on each instance, hindering deployment on server-less solutions. An alternative could be using a centralized cache, but it typically nullifies performance gains due to serialization, deserialization, and IO call overhead."}),"\n",(0,n.jsx)(s.h4,{id:"security-concerns",children:"Security Concerns"}),"\n",(0,n.jsx)(s.p,{children:"Automatically persisting queries can cause memory leaks, as clients can send varying query combinations, exhausting server memory. Mitigation through cache size limits and eviction mechanisms may lead to frequent cache misses, leading to doubling request numbers."}),"\n",(0,n.jsx)(s.h3,{id:"possible-solution",children:"Possible Solution"}),"\n",(0,n.jsxs)(s.p,{children:["Persistent queries are a great improvement over regular queries. They clearly improve performance and are more secure. APQs on the other hand though try to give more flexibility they can become quite messy to deal with as you scale. One alternative that is significantly more effective, is to run GraphQL on Edge itself. Essentially write your own CDN layer that is smart enough to understand that it's a graphQL and deploy it on edge with caching and whatnot! This is hard, and that's exactly what ",(0,n.jsx)(s.a,{href:"https://tailcall.run",children:"Tailcall"})," helps solve."]}),"\n",(0,n.jsx)(s.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(s.p,{children:"Automatic persisted queries, while offering some advantages in network performance, reveal significant challenges when it comes to scaling. The complexities of caching, potential security risks, and the inherent problems with automatic persistence highlight that persisted queries may not be the one-size-fits-all solution they are often portrayed as."}),"\n",(0,n.jsx)(s.p,{children:"The question of whether to implement PQ or APQ must be approached with caution, taking into account the specific requirements and potential scalability issues of your system. While they may serve as a useful tool in certain scenarios, understanding the limitations and conducting thorough analysis is vital to avoid falling into the trap of a solution that doesn't truly scale. This blog post has aimed to shed light on these complexities, encouraging a more nuanced perspective on a topic that is often oversimplified."})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>l});var n=t(96540);const i={},r=n.createContext(i);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);