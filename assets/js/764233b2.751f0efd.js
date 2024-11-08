"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5564],{37572:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var a=i(74848),n=i(28453);const s={title:"GraphQL vs REST vs gRPC - an unfair comparison",authors:[{name:"Tushar Mathur",title:"CEO @ Tailcall | Love to talk about programming, scale, distributed systems and building high performance systems.",url:"https://github.com/tusharmath",image_url:"https://avatars.githubusercontent.com/u/194482?v=5"}],description:"Understand what makes GraphQL different from REST and gRPC.",image:"/images/blog/gql-vs-rest-vs-grpc-cover.png",hide_table_of_contents:!0,slug:"graphql-vs-rest-vs-grpc",canonical_url:"https://tailcall.hashnode.dev/graphql-vs-rest-vs-grpc"},r=void 0,o={permalink:"/tailcallhq.github.io/blog/graphql-vs-rest-vs-grpc",source:"@site/blog/graphql-vs-rest-vs-grpc-2024-03-30.md",title:"GraphQL vs REST vs gRPC - an unfair comparison",description:"Understand what makes GraphQL different from REST and gRPC.",date:"2024-03-30T00:00:00.000Z",tags:[],readingTime:3.815,hasTruncateMarker:!0,authors:[{name:"Tushar Mathur",title:"CEO @ Tailcall | Love to talk about programming, scale, distributed systems and building high performance systems.",url:"https://github.com/tusharmath",image_url:"https://avatars.githubusercontent.com/u/194482?v=5",imageURL:"https://avatars.githubusercontent.com/u/194482?v=5"}],frontMatter:{title:"GraphQL vs REST vs gRPC - an unfair comparison",authors:[{name:"Tushar Mathur",title:"CEO @ Tailcall | Love to talk about programming, scale, distributed systems and building high performance systems.",url:"https://github.com/tusharmath",image_url:"https://avatars.githubusercontent.com/u/194482?v=5",imageURL:"https://avatars.githubusercontent.com/u/194482?v=5"}],description:"Understand what makes GraphQL different from REST and gRPC.",image:"/images/blog/gql-vs-rest-vs-grpc-cover.png",hide_table_of_contents:!0,slug:"graphql-vs-rest-vs-grpc",canonical_url:"https://tailcall.hashnode.dev/graphql-vs-rest-vs-grpc"},unlisted:!1,prevItem:{title:"Writing a GraphQL Backend by Hand is Long Gone",permalink:"/tailcallhq.github.io/blog/writing-a-graphql-backend-by-hand-is-long-gone"},nextItem:{title:"GraphQL Conf 2023",permalink:"/tailcallhq.github.io/blog/graphql-conf-2023"}},c={authorsImageUrls:[void 0]},h=[];function l(e){const t={a:"a",img:"img",p:"p",...(0,n.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s,{children:[(0,a.jsx)("link",{rel:"canonical",href:"https://tailcall.hashnode.dev/graphql-vs-rest-vs-grpc"}),(0,a.jsx)("title",{children:"GraphQL vs REST vs gRPC - an unfair comparison"})]}),"\n",(0,a.jsx)(t.p,{children:"Since its inception, GraphQL has steadily gained popularity, often finding itself at the center of comparisons with other data query and manipulation languages such as REST and gRPC. The internet is replete with articles debating the merits and demerits of each, with some even questioning the viability of GraphQL. However, this discourse misses a crucial point: the unique strengths of GraphQL. This article aims to illuminate the distinct advantages GraphQL offers, particularly in addressing a common but complex challenge known as impedance mismatch."}),"\n",(0,a.jsx)(t.p,{children:"Impedance mismatch refers to the discordance between the capabilities of an existing API and the ideal features required for a specific use case. From the perspective of a platform engineer, the goal is to develop APIs that cater to a broad range of needs. Yet, crafting a unique API for every conceivable requirement is neither practical nor efficient. Consequently, engineers often end up creating generalized APIs. However, as a consumer, you might find these APIs lacking in some respects while being superfluous in others. Furthermore, as your needs evolve, so does your notion of the ideal API, exacerbating this mismatch. Herein lies the brilliance of GraphQL: it offers a framework for structuring data exposure and queries that significantly mitigates this issue."}),"\n",(0,a.jsxs)(t.p,{children:["The GraphQL specification introduces the concept of viewing data as a graph composed of nodes, which represent domain entities for a business, interconnected by relationships that define their interactions. For instance, in the development of a social network, a user entity might have the ability to create a post, which in turn could receive comments, illustrating the interconnected nature of data entities.\n",(0,a.jsx)(t.img,{alt:"Image Demonstrating a graph of entities",src:i(76381).A+"",width:"2259",height:"1320"})]}),"\n",(0,a.jsxs)(t.p,{children:['With the data conceptualized as a graph, GraphQL advocates for a method of querying that allows for precise data retrieval. This selective querying capability enables developers to request exactly the data they need, distinguishing GraphQL from REST and gRPC which aren\'t truly a "queryable". The precision of GraphQL extends to the granularity of specifying individual fields within entities, facilitating extremely efficient and targeted queries.\n',(0,a.jsx)(t.img,{alt:"Image Demonstrating a relations between entities",src:i(68461).A+"",width:"2259",height:"1324"})]}),"\n",(0,a.jsx)(t.p,{children:'Notably, the GraphQL specification does not prescribe any specific data storage methodologies but focuses on the manner in which data is queried, hence the designation "Graph Query Language." This approach allows for queries tailored to specific requirements, such as obtaining posts by the current user along with comments on those posts. By enabling precise data queries, GraphQL helps in avoiding the inefficiencies associated with over-fetching or under-fetching data, thereby enhancing overall system performance.'}),"\n",(0,a.jsx)(t.p,{children:"The impedance mismatch is not solely a technical issue pertaining to the differences in API schemas. It extends into the realm of development processes as well. GraphQL significantly ameliorates this aspect by allowing the consumers of an API to begin their work even before the actual API is fully implemented. This is made possible through the agreement on a schema upfront. By decoupling the dependency between the consumer and the provider of the API, GraphQL facilitates a more efficient and flexible development process."}),"\n",(0,a.jsxs)(t.p,{children:["Comparing GraphQL with REST or gRPC on this front might not do justice to their distinct objectives. REST and gRPC are primarily designed as lightweight RPC protocols, not specifically to address impedance mismatch for which a full fledged query language is more suitable. A more apt comparison would be with OpenAPI, which also allows for API composition. However, OpenAPI's capabilities in fine-tuning what an API delivers are somewhat ",(0,a.jsx)(t.a,{href:"https://swagger.io/specification/#composition-and-inheritance-polymorphism",children:"constrained"})," compared to GraphQL's flexible querying capabilities."]}),"\n",(0,a.jsx)(t.p,{children:"Beyond the technical resolution of impedance mismatch, GraphQL addresses a critical business problem: the inefficiency in software development that arises from this gap between actual and ideal APIs. This inefficiency leads to developers spending excessive time on API orchestration\u2014time that could be better spent on core application development. They find themselves constantly writing, revising, and optimizing APIs and their orchestration, as well as managing the fallout from breaking changes. By leveraging GraphQL, developers can significantly reduce these frictions, streamlining the development process and enhancing productivity. In essence, GraphQL not only solves a technical problem but also delivers substantial business value by enabling more efficient and flexible software development practices."}),"\n",(0,a.jsxs)(t.p,{children:["GraphQL offers an excellent developer experience for API consumption with its intuitive query language that allows for retrieving deeply nested data independently of the upstream source. However, it does have some limitations. At ",(0,a.jsx)(t.a,{href:"https://tailcall.run",children:"Tailcall"}),", we are dedicated to making GraphQL more accessible and easier to work with."]}),"\n",(0,a.jsx)(t.p,{children:"If you like what you just read, please do subscribe and share on twitter and linkedin \ud83d\ude4f"})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},76381:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/entity-graph-577dea9c85b99c5bb8c38f308ebdc1ed.png"},68461:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/entity-relation-d36a01608eb2ca42343d4a0210632050.png"},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var a=i(96540);const n={},s=a.createContext(n);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);