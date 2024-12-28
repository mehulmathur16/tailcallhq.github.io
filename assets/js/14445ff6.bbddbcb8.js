"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4921],{40279:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"config/upstream","title":"upstream","description":"The upstream configuration enables control over specific aspects of the upstream server connection.","source":"@site/docs/config/upstream.md","sourceDirName":"config","slug":"/upstream-configuration","permalink":"/docs/upstream-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/config/upstream.md","tags":[],"version":"current","lastUpdatedAt":1734952853000,"frontMatter":{"title":"upstream","description":"The upstream configuration enables control over specific aspects of the upstream server connection.","slug":"../upstream-configuration"},"sidebar":"docs","previous":{"title":"telemetry","permalink":"/docs/telemetry-config"},"next":{"title":"Getting Started","permalink":"/docs/tailcall-dsl-graphql-custom-directives"}}');var s=t(74848),a=t(28453);const r={title:"upstream",description:"The upstream configuration enables control over specific aspects of the upstream server connection.",slug:"../upstream-configuration"},l=void 0,o={},c=[{value:"poolIdleTimeout",id:"poolidletimeout",level:2},{value:"poolMaxIdlePerHost",id:"poolmaxidleperhost",level:2},{value:"keepAliveInterval",id:"keepaliveinterval",level:2},{value:"keepAliveTimeout",id:"keepalivetimeout",level:2},{value:"keepAliveWhileIdle",id:"keepalivewhileidle",level:2},{value:"proxy",id:"proxy",level:2},{value:"connectTimeout",id:"connecttimeout",level:2},{value:"timeout",id:"timeout",level:2},{value:"tcpKeepAlive",id:"tcpkeepalive",level:2},{value:"userAgent",id:"useragent",level:2},{value:"allowedHeaders",id:"allowedheaders",level:2},{value:"httpCache",id:"httpcache",level:2},{value:"Tips",id:"tips",level:2},{value:"batch",id:"batch",level:2},{value:"onRequest",id:"onrequest",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"upstream"})," configuration is defined as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="Runtime Configuration" showLineNumbers',children:'upstream:\n  poolIdleTimeout: 60\n  poolMaxIdlePerHost: 60\n  keepAliveInterval: 60\n  keepAliveTimeout: 60\n  keepAliveWhileIdle: false\n  proxy:\n    url: "http://localhost:3000"\n  connectTimeout: 60\n  timeout: 60\n  tcpKeepAlive: 60\n  userAgent: "Tailcall/1.0"\n  allowedHeaders:\n    - "Authorization"\n    - "X-Api-Key"\n  httpCache: 42\n  batch:\n    maxSize: 1000\n    delay: 10\n    headers:\n      - "X-Server"\n      - "Authorization"\n  onRequest: "someFunctionName"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"upstream"})," configuration enables control over specific aspects of the upstream server connection, including settings such as connection timeouts, keep-alive intervals, and more. The system applies default values if you do not specify them."]}),"\n",(0,s.jsx)(n.h2,{id:"poolidletimeout",children:"poolIdleTimeout"}),"\n",(0,s.jsx)(n.p,{children:"The connection pool waits for this duration in seconds before closing idle connections."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"upstream:\n  poolIdleTimeout: 60\n"})}),"\n",(0,s.jsx)(n.h2,{id:"poolmaxidleperhost",children:"poolMaxIdlePerHost"}),"\n",(0,s.jsx)(n.p,{children:"The max number of idle connections each host will maintain."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"upstream:\n  poolMaxIdlePerHost: 60\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keepaliveinterval",children:"keepAliveInterval"}),"\n",(0,s.jsx)(n.p,{children:"The time in seconds between each keep-alive message sent to maintain the connection."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"upstream:\n  keepAliveInterval: 60\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keepalivetimeout",children:"keepAliveTimeout"}),"\n",(0,s.jsx)(n.p,{children:"The time in seconds that the connection will wait for a keep-alive message before closing."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"upstream:\n  keepAliveTimeout: 60\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keepalivewhileidle",children:"keepAliveWhileIdle"}),"\n",(0,s.jsx)(n.p,{children:"A boolean value that determines whether to send keep-alive messages while the connection is idle."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"upstream:\n  keepAliveWhileIdle: false\n"})}),"\n",(0,s.jsx)(n.h2,{id:"proxy",children:"proxy"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"proxy"})," setting defines an intermediary server that routes upstream requests before they reach their intended endpoint. By specifying a proxy URL, you introduce a layer, enabling custom routing and security policies."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:'upstream:\n  proxy:\n    url: "http://localhost:3000"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In the provided example, we've set the proxy's ",(0,s.jsx)(n.code,{children:"url"}),' to "',(0,s.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),'". This configuration ensures that all requests aimed at the designated ',(0,s.jsx)(n.code,{children:"url"})," first go through this proxy. To illustrate, if the ",(0,s.jsx)(n.code,{children:"url"}),' is "',(0,s.jsx)(n.a,{href:"http://jsonplaceholder.typicode.com",children:"http://jsonplaceholder.typicode.com"}),'", any request targeting it initially goes to "',(0,s.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),'" before the proxy redirects it to its final destination.']}),"\n",(0,s.jsx)(n.h2,{id:"connecttimeout",children:"connectTimeout"}),"\n",(0,s.jsx)(n.p,{children:"The time in seconds that the connection will wait for a response before timing out."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"upstream:\n  connectTimeout: 60\n"})}),"\n",(0,s.jsx)(n.h2,{id:"timeout",children:"timeout"}),"\n",(0,s.jsx)(n.p,{children:"The max time in seconds that the connection will wait for a response."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"upstream:\n  timeout: 60\n"})}),"\n",(0,s.jsx)(n.h2,{id:"tcpkeepalive",children:"tcpKeepAlive"}),"\n",(0,s.jsx)(n.p,{children:"The time in seconds between each TCP keep-alive message sent to maintain the connection."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"upstream:\n  tcpKeepAlive: 60\n"})}),"\n",(0,s.jsx)(n.h2,{id:"useragent",children:"userAgent"}),"\n",(0,s.jsx)(n.p,{children:"The User-Agent header value for HTTP requests."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:'upstream:\n  userAgent: "Tailcall/1.0"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"allowedheaders",children:"allowedHeaders"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"allowedHeaders"})," configuration defines a set of whitelisted HTTP headers that can be forwarded to upstream services during requests.\nWithout specifying ",(0,s.jsx)(n.code,{children:"allowedHeaders"}),", the system will not forward any incoming headers to upstream services, offering an extra security layer but potentially limiting necessary data flow. Tailcall compares the provided whitelisted headers in a case-insensitive format."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:'upstream:\n  allowedHeaders:\n    - "Authorization"\n    - "X-Api-Key"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In the example above, the configuration for ",(0,s.jsx)(n.code,{children:"allowedHeaders"})," permits ",(0,s.jsx)(n.code,{children:"Authorization"})," and ",(0,s.jsx)(n.code,{children:"X-Api-Key"})," headers. Thus, requests with these headers will forward them to upstream services; the system ignores all others. This configuration ensures communication of the expected headers to dependent services, emphasizing security and consistency."]}),"\n",(0,s.jsx)(n.h2,{id:"httpcache",children:"httpCache"}),"\n",(0,s.jsxs)(n.p,{children:["When httpCache passed with value greater than 0 it directs Tailcall to use HTTP caching mechanisms, following the ",(0,s.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7234",children:"HTTP Caching RFC"})," to enhance performance by minimizing unnecessary data fetches. If left unspecified, this feature defaults to ",(0,s.jsx)(n.code,{children:"0"})," disabling the caching mechanism."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"upstream:\n  httpCache: 42\n"})}),"\n",(0,s.jsx)(n.h2,{id:"tips",children:"Tips"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use batching when other optimization techniques fail to resolve performance issues."}),"\n",(0,s.jsx)(n.li,{children:"Apply batching and thoroughly assess its impact."}),"\n",(0,s.jsx)(n.li,{children:"Understand that batching may make debugging more challenging."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"batch",children:"batch"}),"\n",(0,s.jsxs)(n.p,{children:["An object that specifies the batch settings, including ",(0,s.jsx)(n.code,{children:"maxSize"})," (the max size of the batch), ",(0,s.jsx)(n.code,{children:"delay"})," (the delay in milliseconds between each batch), and ",(0,s.jsx)(n.code,{children:"headers"})," (an array of HTTP headers that the batch will include)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:'upstream:\n  batch:\n    maxSize: 1000\n    delay: 10\n    headers:\n      - "X-Server"\n      - "Authorization"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"onrequest",children:"onRequest"}),"\n",(0,s.jsxs)(n.p,{children:["Similar to the ",(0,s.jsx)(n.a,{href:"/docs/http-directive",children:"@http"})," property, this accepts a string value representing a middleware function defined in a JavaScript file. It intercepts all outgoing HTTP requests from the server. This interceptor, written in JavaScript, can be used to modify outgoing requests and also generate artificial responses to customize the behavior of the GraphQL server."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:'upstream:\n  onRequest: "someFunctionName"\n  script:\n    type: Script\n    src: "path_to/worker.js"\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);