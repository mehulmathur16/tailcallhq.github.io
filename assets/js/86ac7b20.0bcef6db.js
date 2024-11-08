"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7188],{64826:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=o(74848),n=o(28453);const i={title:"Data Dog Telemetry Integration",description:"Discover how to enhance application performance with our guide on enabling and analyzing telemetry data in Tailcall. Learn to configure observability support using OpenTelemetry for insights into logs, metrics, and traces, with practical integration examples for platforms like Honeycomb.io, New Relic, and Datadog.",slug:"graphql-data-dog-telemetry-tailcall",sidebar_label:"Data Dog"},r=void 0,s={id:"data-dog",title:"Data Dog Telemetry Integration",description:"Discover how to enhance application performance with our guide on enabling and analyzing telemetry data in Tailcall. Learn to configure observability support using OpenTelemetry for insights into logs, metrics, and traces, with practical integration examples for platforms like Honeycomb.io, New Relic, and Datadog.",source:"@site/docs/data-dog.md",sourceDirName:".",slug:"/graphql-data-dog-telemetry-tailcall",permalink:"/tailcallhq.github.io/docs/graphql-data-dog-telemetry-tailcall",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/data-dog.md",tags:[],version:"current",lastUpdatedAt:1718205286e3,frontMatter:{title:"Data Dog Telemetry Integration",description:"Discover how to enhance application performance with our guide on enabling and analyzing telemetry data in Tailcall. Learn to configure observability support using OpenTelemetry for insights into logs, metrics, and traces, with practical integration examples for platforms like Honeycomb.io, New Relic, and Datadog.",slug:"graphql-data-dog-telemetry-tailcall",sidebar_label:"Data Dog"},sidebar:"docs",previous:{title:"Apollo Studio",permalink:"/tailcallhq.github.io/docs/integrate-apollo-studio-graphql-tailcall"},next:{title:"New Relic",permalink:"/tailcallhq.github.io/docs/graphql-newrelic-guide-telemetry"}},l={},c=[];function d(e){const t={a:"a",code:"code",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["This guide is based on the ",(0,a.jsx)(t.a,{href:"https://docs.datadoghq.com/getting_started/opentelemetry/?s=header#exploring-observability-data-in-datadog",children:"official doc"}),"."]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Go to ",(0,a.jsx)(t.a,{href:"https://www.datadoghq.com",children:"datadoghq.com"})]}),"\n",(0,a.jsx)(t.li,{children:"Login to your account (make sure you choose right region for your account on login)"}),"\n",(0,a.jsxs)(t.li,{children:["Go to ",(0,a.jsx)(t.code,{children:"Organization Settings -> API Keys"})," and copy the value of existing key or create a new one"]}),"\n",(0,a.jsxs)(t.li,{children:["Integration with datadog requires ",(0,a.jsx)(t.a,{href:"/tailcallhq.github.io/docs/graphql-telemetry-guide#opentelemetry-collector",children:"OpenTelemetry Collector"})," to be able to send data to. As an example we can use following config for the collector:","\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yml",children:'receivers:\n  otlp:\n    protocols:\n      grpc:\n        endpoint: 0.0.0.0:4317\nexporters:\n  logging:\n    verbosity: detailed\n  datadog:\n    traces:\n      span_name_as_resource_name: true\n    hostname: "otelcol"\n    api:\n      key: ${DATADOG_API_KEY}\n      # make sure to specify right datadog site based on\n      # https://docs.datadoghq.com/getting_started/site/\n      site: us5.datadoghq.com\nprocessors:\n  batch:\n  datadog/processor:\n  probabilistic_sampler:\n    sampling_percentage: 30\nservice:\n  pipelines:\n    traces:\n      receivers: [otlp]\n      processors: [batch, datadog/processor]\n      exporters: [datadog]\n    metrics:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [datadog]\n    logs:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [datadog]\n'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["Go to your GraphQL configuration and update it to:","\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:'schema\n  @telemetry(\n    export: {otlp: {url: "http://localhost:4317"}}\n  ) {\n  query: Query\n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.ol,{start:"5",children:["\n",(0,a.jsxs)(t.li,{children:["Set the api key you've copied before to the environment variable named ",(0,a.jsx)(t.code,{children:"DATADOG_API_KEY"})," and start Otel collector and tailcall with updated config"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Now make some requests to running service and wait a little bit until Datadog proceeds the data. After that you can go to ",(0,a.jsx)(t.code,{children:"APM -> Traces"}),", locate the span with name ",(0,a.jsx)(t.code,{children:"request"})," and click on it. You should see something like on screenshot below:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"datadog-trace",src:o(95418).A+"",width:"2099",height:"1248"})}),"\n",(0,a.jsxs)(t.p,{children:["To see metrics now go to ",(0,a.jsx)(t.code,{children:"Metrics -> Explorer"})," and search for metric you want to see. After updating the query you should see something like on example below:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"datadog-metrics",src:o(51530).A+"",width:"2097",height:"1245"})})]})}function g(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},51530:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/datadog-metrics-f0c118dc094cf52dc135bc293c8f3741.png"},95418:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/datadog-trace-8378639a88843a26c4381d923af2b01c.png"},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>s});var a=o(96540);const n={},i=a.createContext(n);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);