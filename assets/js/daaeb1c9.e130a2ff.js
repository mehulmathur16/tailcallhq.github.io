"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3059],{18006:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>h});var n=t(55337),a=t(74848),r=t(28453),s=t(97719);const o={title:"GraphQL and Microservices: A Match Made in Heaven?",description:"Is it really worth combining GraphQL with microservices or is it just a new shiny object with all the hype?",image:"/images/blog/graphql-match-microservices.png",authors:[{name:"Hunain Ahmed",title:"A freelance software developer, always working on something new and fascinating.",url:"https://github.com/hunxjunedo",image_url:"https://avatars.githubusercontent.com/u/89797440?v=4"},{name:"Jacob Gaffke",title:"Freelance web and game developer with experience in Rust, Godot and Web3.",url:"https://masterofgiraffe.com/",image_url:"https://masterofgiraffe.com/favicon.ico"}],hide_table_of_contents:!0,slug:"graphql-match-microservices",tags:["GraphQL","Microservices","API"],category:"Tutorial"},l=void 0,c={authorsImageUrls:[void 0,void 0]},h=[{value:"Introduction",id:"introduction",level:2},{value:"What Are Microservices?",id:"what-are-microservices",level:2},{value:"Example: Spotify",id:"example-spotify",level:3},{value:"What is GraphQL?",id:"what-is-graphql",level:2},{value:"Example: GitHub",id:"example-github",level:3},{value:"Combining GraphQL and Microservices",id:"combining-graphql-and-microservices",level:2},{value:"Benefits of Combining GraphQL and Microservices",id:"benefits-of-combining-graphql-and-microservices",level:3},{value:"Challenges of Combining GraphQL and Microservices",id:"challenges-of-combining-graphql-and-microservices",level:3},{value:"Example: Netflix",id:"example-netflix",level:3},{value:"Designing Scalable APIs with GraphQL and Microservices",id:"designing-scalable-apis-with-graphql-and-microservices",level:2},{value:"Example: Airbnb",id:"example-airbnb",level:3},{value:"Where Tailcall Comes In",id:"where-tailcall-comes-in",level:3},{value:"Security and Authentication with GraphQL and Microservices",id:"security-and-authentication-with-graphql-and-microservices",level:2},{value:"Major Concerns about Security:",id:"major-concerns-about-security",level:3},{value:"Example: Facebook",id:"example-facebook",level:3},{value:"Final Thoughts",id:"final-thoughts",level:2}];function d(e){const i={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.p,{children:"Is it really worth combining GraphQL with microservices or is it just a new shiny object with all the hype?"}),"\n","\n",(0,a.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(i.p,{children:["In the fast-changing land of software development, two concepts have been gathering momentum: ",(0,a.jsx)(i.strong,{children:"GraphQL"})," and ",(0,a.jsx)(i.strong,{children:"microservices"}),". While the latter helps businesses decompose their applications into small independent services, the former makes it possible for the clients of these services to request only data of interest. Each of these technologies address specific challenges inherent in building modern applications, and when combined, they offer a powerful toolkit for developers aiming to create efficient and robust APIs."]}),"\n",(0,a.jsx)(i.p,{children:"But is it really worth combining the two or is it just a new shiny object with all the hype? Is it really cost-efficient and time-saving or just an expensive thing for tech majors? Read on as I explore the challenges, features and considerations of using GraphQL with microservices. \ud83d\ude80"}),"\n",(0,a.jsx)(i.h2,{id:"what-are-microservices",children:"What Are Microservices?"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"independent scaling",src:t(27661).A+"",width:"1144",height:"654"})}),"\n",(0,a.jsxs)(i.p,{children:["Compared to traditional monolithic architecture, in which all the constituents of an application are usually closely integrated and interwoven, ",(0,a.jsx)(i.strong,{children:"microservices"})," present a very compelling option. Microservices really orient the technique of decomposition and isolation. Development, scaling, and deployment for every service can be independent. It provides high flexibility and a better developer experience."]}),"\n",(0,a.jsxs)(i.p,{children:["The three key characteristics of microservices are ",(0,a.jsx)(i.strong,{children:"scalability"}),", ",(0,a.jsx)(i.strong,{children:"flexibility"}),", and ",(0,a.jsx)(i.strong,{children:"maintainability"}),". The components of the system can be scaled as needed, and in terms of priority. Different languages and technologies can also be used to realize each service according to use cases appropriate for individual use, which can be developed and maintained independently by different teams. Cleanup will not only be in the debugging phase; it will also accelerate the development cycle, from which you can easily adapt and evolve your application over time."]}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"spotify logo",src:t(85972).A+"",width:"410",height:"123"})}),"\n",(0,a.jsx)(i.h3,{id:"example-spotify",children:"Example: Spotify"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Spotify"})," is a prime example of ",(0,a.jsx)(i.a,{href:"https://medium.com/codebase/microservices-architecture-at-spotify-beac905e9622",children:"successful microservice adoption"}),". To efficiently support millions of monthly users, Spotify restructured its application into microservices, resulting in impressive performance and scalability. These microservices likely handle various specialized tasks, such as:"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Recommending tracks based on a user\u2019s listening history."}),"\n",(0,a.jsx)(i.li,{children:"Identifying the genre and theme of each track."}),"\n",(0,a.jsx)(i.li,{children:"Personalizing playlists for users by combining insights from the recommendation and genre microservices."}),"\n",(0,a.jsx)(i.li,{children:"Delivering lyrics for tracks."}),"\n"]}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.a,{href:"https://tailcall.run/blog/graphql-microservices-migration/",children:"Read: Migrating To Microservices"}),"."]}),"\n",(0,a.jsx)(i.h2,{id:"what-is-graphql",children:"What is GraphQL?"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:(0,a.jsx)(i.a,{href:"https://tailcall.run/graphql/",children:"GraphQL"})})," was designed based on the concept of ",(0,a.jsx)(i.em,{children:"returning precisely what is asked for; no more, no less"}),". Open-sourced by Facebook in 2015, it fixes ancient issues of over-fetching and under-fetching that plagued REST APIs right from their very invention."]}),"\n",(0,a.jsxs)(i.p,{children:["It empowers the client with ",(0,a.jsx)(i.strong,{children:"flexibility"})," regarding which particular fields to request in any use case. This is possible due to the ",(0,a.jsx)(i.strong,{children:"strongly typed schema"})," that clearly defines the data structure of the API and specifies what it returns. Plus, subscriptions allow GraphQL to return ",(0,a.jsx)(i.strong,{children:"real-time data"}),", meeting demands of modern applications."]}),"\n",(0,a.jsx)(i.h3,{id:"example-github",children:"Example: GitHub"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"GitHub"})," is one of the ",(0,a.jsx)(i.a,{href:"https://docs.github.com/en/graphql/overview/about-the-graphql-api",children:"prominent adopters of GraphQL"}),". By implementing GraphQL, GitHub provides its users with a more flexible and efficient way to interact with its API. Developers can query for specific data, such as repositories, issues, and commits, all within a single request, enhancing the efficiency of their applications."]}),"\n",(0,a.jsx)(i.h2,{id:"combining-graphql-and-microservices",children:"Combining GraphQL and Microservices"}),"\n",(0,a.jsxs)(i.p,{children:["The true magic happens when ",(0,a.jsx)(i.strong,{children:"GraphQL"})," and ",(0,a.jsx)(i.strong,{children:"microservices"})," are combined. This pairing allows developers to harness the power of microservices while mitigating some of the complexities associated with them."]}),"\n",(0,a.jsx)(i.h3,{id:"benefits-of-combining-graphql-and-microservices",children:"Benefits of Combining GraphQL and Microservices"}),"\n",(0,a.jsxs)(i.p,{children:["By design, GraphQL has made optimization of ",(0,a.jsx)(i.strong,{children:"data retrieval"})," and parallel resolutions intrinsic to the system. ",(0,a.jsx)(i.strong,{children:"Error management"})," is also much smoother because of the automatic process of partial resolutions and formation of response as a whole. Further, due to ",(0,a.jsx)(i.strong,{children:"flexibility"})," and clear ownership, GraphQL makes it possible for clients to fetch data from different microservices. This grants extra control to the clients while communicating with microservices."]}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.em,{children:"fetching data from multiple microservices using Tailcall:"})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-graphql",children:'type Query {\n  tracks: TrackData!\n    @grpc(\n      url: "https://example.com"\n      method: "tracks.trackService.listTracks"\n    )\n}\n\ntype Track {\n  id: ID!\n  title: String!\n  audioUrl: String!\n  reactions: [Reaction]\n    @http(\n      url: "https://example.com/tracks/{{.value.id}}/reactions"\n    )\n  lyrics: [Lyric]\n    @grpc(\n      url: "https://example.com"\n      body: "{{.value.id}}"\n      method: "tracks.trackService.getLyrics"\n    )\n}\n\ntype TrackData {\n  track: [Track]!\n}\n\ntype Reaction {\n  emoji: String!\n  count: Int!\n}\n\ntype Lyric {\n  text: String!\n  timestampSecond: Int!\n}\n'})}),"\n",(0,a.jsx)(i.h3,{id:"challenges-of-combining-graphql-and-microservices",children:"Challenges of Combining GraphQL and Microservices"}),"\n",(0,a.jsxs)(i.p,{children:["Sometimes, it's a pathway to ",(0,a.jsx)(i.strong,{children:"overengineering"})," for an application. You could end up writing long, sprawling schemas and queries for things you could have implemented in a few lines of code in REST. It can bring in unnecessary ",(0,a.jsx)(i.strong,{children:"complexity"})," and make it harder for another developer to implement something else in the app."]}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"n + 1 problem",src:t(19018).A+"",width:"3000",height:"1509"})}),"\n",(0,a.jsxs)(i.p,{children:["Another well-known challenge is the ",(0,a.jsx)(i.strong,{children:"N+1 problem"}),": this happens when a GraphQL query requesting nested data provokes plural sequential calls to a microservice, often due to a poorly designed schema. Fortunately, Tailcall has a solution to this problem built into the box, thus making your development easier and more efficient. ",(0,a.jsx)(i.a,{href:"https://tailcall.run/docs/graphql-n-plus-one-problem-solved-tailcall/#n1-in-graphql-using-tailcall",children:"Read How"}),"."]}),"\n",(0,a.jsx)(i.h3,{id:"example-netflix",children:"Example: Netflix"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Netflix"})," is a prime example of a company that ",(0,a.jsx)(i.a,{href:"https://netflixtechblog.com/rebuilding-netflix-video-processing-pipeline-with-microservices-4e5e6310e359",children:"successfully implemented microservices"}),", transforming its monolithic application into a more scalable, fault-tolerant, and efficient system. By adopting this architecture, Netflix enables each service, such as user profiles, content delivery, and recommendations, to operate independently while seamlessly integrating to provide a cohesive user experience. This approach allows Netflix to scale services based on demand, with resource-intensive microservices like content recommendations being scaled more aggressively than less demanding ones, such as age-group rating calculations."]}),"\n",(0,a.jsx)(i.h2,{id:"designing-scalable-apis-with-graphql-and-microservices",children:"Designing Scalable APIs with GraphQL and Microservices"}),"\n",(0,a.jsxs)(i.p,{children:["Designing scalable APIs that leverage both ",(0,a.jsx)(i.strong,{children:"GraphQL"})," and ",(0,a.jsx)(i.strong,{children:"microservices"})," requires careful planning and adherence to certain principles."]}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Schema Design:"})," Begin with a robust, well-defined schema that accurately represents your data and services. A modular schema is crucial, as it allows your application to grow and evolve without causing disruptions. Ensure that the schema is flexible enough to accommodate new features and changes as your application scales."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Service Orchestration:"})," To manage the complexity of multiple microservices, implement a service orchestration layer that coordinates communication between the GraphQL server and underlying services. This layer should handle essential tasks such as load balancing, caching, and fallback mechanisms to ensure seamless interactions and maintain API performance under varying loads."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Caching:"})," Utilize effective caching strategies at both the GraphQL and microservice levels to enhance performance. Caching reduces the need for repeated data retrieval, lowering latency and improving the user experience. Consider using in-memory caches for frequently accessed data and implement cache invalidation strategies to ensure data consistency."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Monitoring and Logging:"})," Comprehensive monitoring and logging are vital for tracking API performance, identifying potential bottlenecks, and quickly resolving issues. Implementing detailed logging with tools like OpenTelemetry provides valuable insights into the behavior of your API, helping you maintain high availability and optimize performance over time."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Security:"})," With ",(0,a.jsx)(i.strong,{children:"Tailcall's"})," ",(0,a.jsx)(i.a,{href:"https://tailcall.run/docs/field-level-access-control-graphql-authentication/",children:"built-in auth"})," and ",(0,a.jsx)(i.a,{href:"https://tailcall.run/docs/protected-directive",children:"@protected"})," directive, you can add auth functionality and make fields protected with just a few lines of code - which is intelligent enough to protect any query that indirectly resolves to that field:"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-graphql",children:"type Reaction @protected {\n  emoji: String!\n  count: Int!\n}\n"})}),"\n",(0,a.jsxs)(i.ol,{start:"6",children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Strong Typing:"})," Nothing can be more painful than having to work with a poorly-typed GraphQL schema where you had ",(0,a.jsx)(i.code,{children:"email"})," and ",(0,a.jsx)(i.code,{children:"url"})," as ",(0,a.jsx)(i.code,{children:"string"}),", but with handmade validation code. These omissions are a big mistake which could usher in potential errors and inconsistencies in handling your data. Instead, make full use of GraphQL's in-built scalars and custom types. It leverages these built-in scalars to ensure that fields are valid according to the expected data types, reducing the need for error-prone manual validation:"]}),"\n"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-graphql",children:'type Query {\n  findMyAccount(phone: PhoneNumber!): Account!\n    @http(\n      url: "https://example.com/accounts?phone={{.args.phone}}"\n    )\n}\ntype Account {\n  id: ID!\n  name: String!\n  email: String!\n}\n'})}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.a,{href:"https://tailcall.run/blog/graphql-schema/",children:"Read: Designing The Perfect GraphQL Schema"})}),"\n",(0,a.jsx)(i.h3,{id:"example-airbnb",children:"Example: Airbnb"}),"\n",(0,a.jsxs)(i.p,{children:["Airbnb successfully implemented scalable APIs ",(0,a.jsx)(i.a,{href:"https://www.infoq.com/news/2019/12/airbnb-graphql-migration/",children:"by combining GraphQL and microservices"}),". Airbnb\u2019s GraphQL layer acts as an abstraction over numerous microservices, allowing clients to retrieve data efficiently and consistently. By following the principles of schema design, service orchestration, and caching, Airbnb has built a robust platform that can scale with demand."]}),"\n",(0,a.jsx)(i.h3,{id:"where-tailcall-comes-in",children:"Where Tailcall Comes In"}),"\n",(0,a.jsxs)(i.p,{children:["When implementing a combination of GraphQL and microservices, the integration process can become complex, particularly when dealing with schema management, service orchestration, and security concerns. ",(0,a.jsx)(i.a,{href:"https://tailcall.run/graphql/",children:"Tools like Tailcall"})," can significantly simplify this process by providing a seamless integration layer that handles the intricacies of connecting GraphQL with various microservices. Tailcall enables developers to focus on building business logic rather than managing the underlying infrastructure, accelerating development and reducing potential errors."]}),"\n",(0,a.jsx)(s.A,{title:"Ready to build your next app with GraphQL?",subtitle:"Don\u2019t get left behind - Try Tailcall today",buttonText:"Get Started",backgroundImageSrc:"/icons/basic/bg-tailcall.svg"}),"\n",(0,a.jsx)(i.h2,{id:"security-and-authentication-with-graphql-and-microservices",children:"Security and Authentication with GraphQL and Microservices"}),"\n",(0,a.jsxs)(i.p,{children:["Security is a major concern when integrating ",(0,a.jsx)(i.strong,{children:"GraphQL"})," with ",(0,a.jsx)(i.strong,{children:"microservices"}),". Without proper safeguards, the powerful flexibility of GraphQL can lead to significant risks."]}),"\n",(0,a.jsx)(i.h3,{id:"major-concerns-about-security",children:"Major Concerns about Security:"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Query Complexity"}),": The superpower of GraphQL is letting clients create incredibly intricate and deeply nested queries. Sometimes, however, this becomes a nemesis. Imagine this: a bad user sending a query that is as deep as a rabbit hole, asking for endless amounts of data and gasping your server's breath. To keep things at hand and prevent your server from melting down, some ground rules should be created. Design query complexity analysis and set ",(0,a.jsx)(i.strong,{children:"depth limits"})," to make sure that queries are of manageable size; otherwise, they can overload your server. Have A Look:"]}),"\n"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-graphql",children:"query {\n  songs {\n    # Fetch all songs\n    author {\n      # For each song, fetch the author's details\n      songs {\n        # For each author, fetch their songs\n        author {\n          # For each song by the author, fetch the author's details again\n          comments # Retrieve the comments for each author\n        } # and this can go forever - until your server overloads\n      }\n    }\n  }\n}\n"})}),"\n",(0,a.jsxs)(i.ol,{start:"2",children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Authentication and Authorization"}),": If you need to protect your microservices, some strong security configuration is requisite. Every microservice should be armed with a guard at the level of authentication and authorization. But don't stop here. Scale up these security measures to the GraphQL layer. Next, it will help you set up solid authentication strategies and fine-grained access controls right in your GraphQL schema. Think of this as having a bouncer at your door to make sure only the proper users get access to the proper data."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Exposure of Data"}),": GraphQL's introspection and flexible queries can sometimes be a two-edged sword. Unless properly controlled, sensitive information may slip out and unintentionally be exposed. Implement strict field-level access control that guides how data can be queried and by whom to keep your data safe and sound. ",(0,a.jsx)(i.a,{href:"https://tailcall.run/blog/graphql-introspection-security/#the-security-implications-of-introspection",children:"Read: How is Introspection a Hidden Treasure for Attackers"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"example-facebook",children:"Example: Facebook"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Facebook"}),", the creator of GraphQL, ",(0,a.jsx)(i.a,{href:"https://engineering.fb.com/2020/05/08/web/facebook-redesign/",children:"has implemented robust security measures to protect its API"}),". Query complexity analysis, rate limiting, and other strict authentication protocols are all part of Facebook's efforts to secure the platform. Read: Securing your GraphQL API"]}),"\n",(0,a.jsx)(i.h2,{id:"final-thoughts",children:"Final Thoughts"}),"\n",(0,a.jsxs)(i.p,{children:["In conclusion, while exploring these technologies can be exciting and straightforward for some, it can also lead to significant challenges or even career setbacks if approached without proper preparation. Always conduct thorough research and planning before diving into GraphQL. To make the process easier and more secure, consider ",(0,a.jsx)(i.a,{href:"https://tailcall.run/docs/",children:"using tools like Tailcall"})," to streamline integration and fully unlock your API's potential. See you next time! \ud83d\ude04"]})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},97719:(e,i,t)=>{t.d(i,{A:()=>p});var n,a=t(96540),r=t(3528),s=t(10737),o=t(75957),l=t(22375);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},c.apply(null,arguments)}const h=e=>{let{title:i,titleId:t,...r}=e;return a.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:740,height:190,fill:"none",viewBox:"0 0 740 190","aria-labelledby":t},r),i?a.createElement("title",{id:t},i):null,n||(n=a.createElement("g",{fill:"#CECECF"},a.createElement("path",{d:"M51.336 186.568q-12.906 0-21.071-7.902-7.902-8.165-7.902-21.598V83.32h-32.66V55.927h32.66V15.365H55.55v40.562h35.821V83.32h-35.82v67.954q0 7.9 7.374 7.901h25.286v27.393zM151.438 190.255q-13.96 0-25.022-4.741-11.062-5.004-17.647-14.223-6.321-9.481-6.321-22.915 0-13.432 6.321-22.388 6.585-9.218 17.911-13.696 11.589-4.74 26.339-4.741h35.82v-7.375q0-9.218-5.794-15.013-5.795-6.058-18.437-6.058-12.38 0-18.438 5.795-6.057 5.53-7.901 14.486l-30.553-10.272q3.16-10.008 10.008-18.174 7.112-8.428 18.701-13.433 11.852-5.267 28.709-5.267 25.812 0 40.826 12.906 15.013 12.905 15.013 37.401v48.727q0 7.9 7.375 7.901h10.535v27.393h-22.124q-9.746 0-16.067-4.741t-6.321-12.643v-.263h-5.005q-1.053 3.16-4.741 8.428-3.687 5.004-11.589 8.955t-21.598 3.951m5.795-26.865q13.96 0 22.651-7.639 8.955-7.9 8.955-20.807v-2.634h-33.45q-9.219 0-14.486 3.951t-5.268 11.062 5.531 11.589q5.53 4.478 16.067 4.478M252.612 186.568V55.928h33.187v130.64zm16.594-145.917q-8.955 0-15.277-5.795-6.057-5.794-6.058-15.277 0-9.48 6.058-15.276 6.322-5.795 15.277-5.795 9.219 0 15.276 5.795 6.058 5.794 6.058 15.277 0 9.48-6.058 15.276t-15.276 5.795M312.039 186.568V2.196h33.187v184.372zM432.836 190.255q-18.964 0-34.504-7.901-15.276-7.902-24.232-22.915t-8.955-36.348v-3.687q0-21.335 8.955-36.348t24.232-22.915q15.54-7.9 34.504-7.901 18.7 0 32.134 6.584 13.433 6.585 21.597 18.174 8.429 11.326 11.063 25.812l-32.134 6.848q-1.053-7.9-4.741-14.223-3.687-6.321-10.535-10.008-6.585-3.688-16.594-3.688-10.008 0-18.174 4.478-7.901 4.214-12.642 12.906-4.478 8.429-4.478 20.807v2.634q0 12.38 4.478 21.071 4.74 8.428 12.642 12.906 8.166 4.215 18.174 4.215 15.013 0 22.652-7.639 7.901-7.9 10.008-20.544l32.134 7.638q-3.425 13.96-11.853 25.549-8.164 11.327-21.597 17.91-13.434 6.585-32.134 6.585M555.822 190.255q-13.96 0-25.022-4.741-11.062-5.004-17.647-14.223-6.321-9.481-6.321-22.915 0-13.432 6.321-22.388 6.585-9.218 17.911-13.696 11.589-4.74 26.338-4.741h35.821v-7.375q0-9.218-5.794-15.013-5.795-6.058-18.437-6.058-12.38 0-18.438 5.795-6.057 5.53-7.901 14.486L512.1 89.114q3.16-10.008 10.008-18.174 7.112-8.428 18.701-13.433 11.853-5.267 28.709-5.267 25.812 0 40.826 12.906 15.013 12.905 15.013 37.401v48.727q0 7.9 7.375 7.901h10.535v27.393h-22.124q-9.746 0-16.067-4.741-6.322-4.741-6.322-12.643v-.263h-5.004q-1.053 3.16-4.741 8.428-3.687 5.004-11.589 8.955t-21.598 3.951m5.795-26.865q13.96 0 22.651-7.639 8.955-7.9 8.955-20.807v-2.634h-33.45q-9.22 0-14.486 3.951-5.268 3.95-5.268 11.062t5.531 11.589q5.53 4.478 16.067 4.478M656.996 186.568V2.196h33.187v184.372zM716.423 186.568V2.196h33.187v184.372z"}))))};var d=t(74848);const p=e=>{let{title:i,subtitle:t,buttonText:n,href:a}=e;return(0,d.jsx)("section",{className:"flex flex-col justify-center px-4 py-4 max-w-3xl mx-auto",children:(0,d.jsxs)("div",{className:"relative flex flex-col max-md:space-y-6 md:flex-row md:items-center p-8 bg-neutral-900 rounded-2xl overflow-hidden max-md:p-6",children:[(0,d.jsx)(h,{className:"absolute inset-0 w-full h-full object-cover opacity-5 z-0 max-w-none max-h-none"}),(0,d.jsxs)("div",{className:"relative z-10 flex flex-col flex-1 space-y-2.5 text-center max-md:text-left md:text-left",children:[(0,d.jsx)("h2",{className:"text-3xl font-bold leading-tight text-white sm:text-4xl",children:i}),(0,d.jsx)("p",{className:"text-base leading-relaxed text-zinc-400 sm:text-lg",children:t})]}),(0,d.jsx)("div",{className:"relative z-10 mt-6 max-md:w-full max-md:flex max-md:justify-center md:mt-0 md:ml-6 md:flex-shrink-0",children:(0,d.jsx)(r.A,{title:n,href:a||s.$.docs,theme:o.Sx.Tailcall,width:"auto",onClick:()=>(0,l.p8)("Blog","Click","Get Started")})})]})})}},3528:(e,i,t)=>{t.d(i,{A:()=>s});var n=t(28774),a=t(75957),r=(t(96540),t(74848));const s=e=>{let{title:i,Icon:t,theme:s,onClick:o,href:l,width:c="auto",disabled:h}=e;return(0,r.jsxs)(n.A,{to:l,onClick:o,className:`\n      group relative disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center gap-x-SPACE_03 hover:no-underline rounded-lg sm:rounded-xl h-12 sm:h-16 text-content-small font-bold sm:text-title-small cursor-pointer px-SPACE_06 py-SPACE_03 sm:px-SPACE_08 lg:px-SPACE_10 sm:py-SPACE_04 lg:py-SPACE_05\n      ${(()=>{switch(c){case"small":return"w-[228px]";case"medium":return"w-[300px]";case"large":return"w-[500px]";case"full":return"w-full";default:return"w-fit"}})()} \n      ${({[a.Sx.Light]:{classes:"border border-solid border-tailCall-border-dark-100 text-tailCall-dark-500 bg-transparent hover:text-tailCall-dark-500",gridClasses:""},[a.Sx.Dark]:{classes:"border-2 border-solid border-tailCall-border-dark-100 text-tailCall-light-100 bg-white hover:text-tailCall-light-100",gridClasses:""},[a.Sx.Gray]:{classes:"border-2 border-solid border-tailCall-light-100 text-tailCall-light-100 bg-transparent hover:text-tailCall-light-100",gridClasses:"hidden"},[a.Sx.Tailcall]:{classes:"bg-yellow-300 border border-solid text-tailCall-dark-500 bg-transparent hover:text-tailCall-dark-500",gridClasses:""}}[s]||{classes:"",styles:"",gridClasses:""}).classes??""} \n      ${h?"cursor-not-allowed opacity-20":""} `,children:[(d=s,d===a.Sx.Dark||d===a.Sx.Gray?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"lg:block rounded-md lg:rounded-lg absolute inset-0 w-full bg-tailCall-dark-500 group-hover:lg:scale-x-[0.98] group-hover:lg:scale-y-[0.95] transform transition-all ease-out duration-250"}),!h&&(0,r.jsx)("div",{className:"hidden lg:block button-grid-bg-section h-full w-full scale-90 opacity-0 group-hover:scale-[0.98] group-hover:opacity-100 transform transition-all ease-out duration-250"})]}):d!==a.Sx.Light||h?null:(0,r.jsx)("div",{className:"hidden lg:block button-grid-bg-section-dark h-full w-full scale-90 opacity-0 group-hover:scale-[1] group-hover:opacity-100 transform transition-all ease-out duration-250"})),t&&(0,r.jsx)(t,{className:"w-6 h-6 sm:w-7 sm:h-7 lg:h-8 lg:w-8 text-white z-[1]"}),i&&(0,r.jsxs)("span",{className:"z-20",children:[" ",i]})]});var d}},19018:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/n+1-issue-81f278d76d32c29bfeafbe72ea913ef9.png"},27661:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/scaling-3e4bd00fdccd6d0655cb5e2d3f7214a1.png"},85972:(e,i,t)=>{t.d(i,{A:()=>n});const n="data:image/png;base64,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"},28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>o});var n=t(96540);const a={},r=n.createContext(a);function s(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:i},e.children)}},55337:e=>{e.exports=JSON.parse('{"permalink":"/tailcallhq.github.io/blog/graphql-match-microservices","source":"@site/blog/graphql-and-ms-match-2024-08-18.md","title":"GraphQL and Microservices: A Match Made in Heaven?","description":"Is it really worth combining GraphQL with microservices or is it just a new shiny object with all the hype?","date":"2024-08-18T00:00:00.000Z","tags":[{"inline":true,"label":"GraphQL","permalink":"/tailcallhq.github.io/blog/tags/graph-ql"},{"inline":true,"label":"Microservices","permalink":"/tailcallhq.github.io/blog/tags/microservices"},{"inline":true,"label":"API","permalink":"/tailcallhq.github.io/blog/tags/api"}],"readingTime":9.46,"hasTruncateMarker":true,"authors":[{"name":"Hunain Ahmed","title":"A freelance software developer, always working on something new and fascinating.","url":"https://github.com/hunxjunedo","image_url":"https://avatars.githubusercontent.com/u/89797440?v=4","imageURL":"https://avatars.githubusercontent.com/u/89797440?v=4","socials":{},"key":null,"page":null},{"name":"Jacob Gaffke","title":"Freelance web and game developer with experience in Rust, Godot and Web3.","url":"https://masterofgiraffe.com/","image_url":"https://masterofgiraffe.com/favicon.ico","imageURL":"https://masterofgiraffe.com/favicon.ico","socials":{},"key":null,"page":null}],"frontMatter":{"title":"GraphQL and Microservices: A Match Made in Heaven?","description":"Is it really worth combining GraphQL with microservices or is it just a new shiny object with all the hype?","image":"/images/blog/graphql-match-microservices.png","authors":[{"name":"Hunain Ahmed","title":"A freelance software developer, always working on something new and fascinating.","url":"https://github.com/hunxjunedo","image_url":"https://avatars.githubusercontent.com/u/89797440?v=4","imageURL":"https://avatars.githubusercontent.com/u/89797440?v=4"},{"name":"Jacob Gaffke","title":"Freelance web and game developer with experience in Rust, Godot and Web3.","url":"https://masterofgiraffe.com/","image_url":"https://masterofgiraffe.com/favicon.ico","imageURL":"https://masterofgiraffe.com/favicon.ico"}],"hide_table_of_contents":true,"slug":"graphql-match-microservices","tags":["GraphQL","Microservices","API"],"category":"Tutorial"},"unlisted":false,"prevItem":{"title":"Lessons from the Frontlines: Our GraphQL Adventure at Dream11","permalink":"/tailcallhq.github.io/blog/dream11-graphql-case-study"},"nextItem":{"title":"Simplify your monolith to microservices migration using GraphQL","permalink":"/tailcallhq.github.io/blog/graphql-microservices-migration"}}')}}]);