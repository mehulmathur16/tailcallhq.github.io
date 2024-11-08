"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5684],{9199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(74848),s=t(28453);const r={title:"GraphQL over HTTP/2",description:"Boost web performance and secure your communications by utilizing HTTP/2 with Tailcall GraphQL.",slug:"graphql-http2-guide-tailcall",sidebar_label:"HTTP/2"},a=void 0,l={id:"http2",title:"GraphQL over HTTP/2",description:"Boost web performance and secure your communications by utilizing HTTP/2 with Tailcall GraphQL.",source:"@site/docs/http2.md",sourceDirName:".",slug:"/graphql-http2-guide-tailcall",permalink:"/tailcallhq.github.io/docs/graphql-http2-guide-tailcall",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/http2.md",tags:[],version:"current",lastUpdatedAt:1729657116e3,frontMatter:{title:"GraphQL over HTTP/2",description:"Boost web performance and secure your communications by utilizing HTTP/2 with Tailcall GraphQL.",slug:"graphql-http2-guide-tailcall",sidebar_label:"HTTP/2"},sidebar:"docs",previous:{title:"Custom Resolvers",permalink:"/tailcallhq.github.io/docs/graphql-javascript-customization"},next:{title:"Telemetry",permalink:"/tailcallhq.github.io/docs/graphql-telemetry-guide"}},o={},c=[{value:"SSL",id:"ssl",level:2},{value:"Configuration",id:"configuration",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.cloudflare.com/en-in/learning/performance/http2-vs-http1.1/",children:"HTTP/2"})," represents a significant advancement in web protocols, offering enhancements such as multiplexing, header compression, and streamlined connection handling, all designed to improve web performance."]}),"\n",(0,i.jsx)(n.p,{children:"Tailcall enables support for HTTP/2 for both server (ingress) and client (egress) operations, facilitating the protocol's adoption for both incoming and outgoing server requests. For egress, there is no special setting that's required, Tailcall will automatically upgrade the connection to HTTP/2 whenever possible. To configure ingress properly, you need to provide the following settings"}),"\n",(0,i.jsx)(n.h2,{id:"ssl",children:"SSL"}),"\n",(0,i.jsxs)(n.p,{children:["For Tailcall to serve GraphQL over HTTP/2 we need to first enable SSL for which we need to generate a certificate and a key. To generate the required certificates (cert.pem and key.pem) ",(0,i.jsx)(n.a,{href:"https://www.openssl.org/source/",children:"OpenSSL"})," is a widely used option. Here are the steps to get started with SSL:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Install OpenSSL"}),": Download and install OpenSSL from its official ",(0,i.jsx)(n.a,{href:"https://www.openssl.org/source/",children:"website"})," if it's not already installed on your system."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Generate Private Key"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"openssl genrsa -out key.pem 2048\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This creates a 2048-bit RSA private key, storing it in a file named ",(0,i.jsx)(n.code,{children:"key.pem"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Generate Certificate Signing Request (CSR)"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"openssl req -new -key key.pem -out csr.pem\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You will be prompted to provide information for the certificate, such as the Common Name (CN), organization details, and locality. This information is embedded into the CSR, saved in a file named ",(0,i.jsx)(n.code,{children:"csr.pem"}),". This file can be used to request a certificate from a Certificate Authority (CA) or generate a self-signed certificate."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"http2-csr.png",src:t(47927).A+"",width:"2488",height:"2096"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Generate Self-Signed Certificate"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem\n"})}),"\n",(0,i.jsx)(n.p,{children:'This generates a self-signed certificate valid for 365 days using the CSR from step 3 and the private key from step 2. The validity period can be adjusted by changing the number of days (-days). A "Signature ok" prompt confirms the successful creation.'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"http/2-cert.png",src:t(76581).A+"",width:"2440",height:"480"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Cleanup Intermediate Files"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"rm csr.pem\n"})}),"\n",(0,i.jsx)(n.p,{children:"After using the CSR to generate the self-signed certificate (cert.pem), the CSR file (csr.pem) becomes redundant. This step removes intermediate files created during the certificate generation process."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Use self-signed certificates for HTTP/2 configurations in development environments. While they enable convenient HTTPS testing locally, in production, always opt for certificates issued by trusted Certificate Authorities."})}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["Once the certificate and key are generated we can link them with our main configuration using the ",(0,i.jsx)(n.a,{href:"/tailcallhq.github.io/docs/tailcall-dsl-graphql-custom-directives#link-directive",children:"@link"})," directive, to enable HTTPS."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  #highlight-start\n  @link(type: "Cert", src: "./cert.pem")\n  @link(type: "Key", src: "./key.pem") {\n  #highlight-end\n  query: Query\n  mutation: Mutation\n}\n\ntype Query {\n  posts: [Post]\n    @http(url: "https://jsonplaceholder.typicode.com/posts")\n}\n\ntype User {\n  id: Int!\n  name: String!\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Once HTTPS is enabled we set the version to ",(0,i.jsx)(n.code,{children:"HTTP2"})," for the server:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema\n  @link(type: "Cert", src: "./cert.pem")\n  @link(type: "Key", src: "./key.pem")\n  #highlight-start\n  @server(version: HTTP2) {\n  #highlight-end\n  query: Query\n  mutation: Mutation\n}\n\ntype Query {\n  posts: [Post]\n    @http(url: "https://jsonplaceholder.typicode.com/posts")\n}\n\ntype User {\n  id: Int!\n  name: String!\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["That's pretty much all that's required. Now you can go ahead and ",(0,i.jsx)(n.a,{href:"/tailcallhq.github.io/docs/#starting-the-graphql-server",children:"launch"})," your server as usual."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"INFO File read: ./jsonplaceholder.graphql ... ok\nINFO N + 1 detected: 0\nINFO \ud83d\ude80 Tailcall launched at [0.0.0.0:8000] over HTTP/2.0\nINFO \ud83c\udf0d Playground: https://tailcall.run/playground/?u=http://127.0.0.1:8000/graphql\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},76581:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/http2-cert-fdac76aeb0510c07dae9d4e8c10c6a45.png"},47927:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/http2-csr-1a5ea7f6a080681e62163fde79650116.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);