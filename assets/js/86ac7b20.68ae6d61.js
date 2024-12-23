"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7188],{96987:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"data-dog","title":"Data Dog Telemetry Integration","description":"Discover how to enhance application performance with our guide on enabling and analyzing telemetry data in Tailcall. Learn to configure observability support using OpenTelemetry for insights into logs, metrics, and traces, with practical integration examples for platforms like Honeycomb.io, New Relic, and Datadog.","source":"@site/docs/data-dog.md","sourceDirName":".","slug":"/graphql-data-dog-telemetry-tailcall","permalink":"/tailcallhq.github.io/docs/graphql-data-dog-telemetry-tailcall","draft":false,"unlisted":false,"editUrl":"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/data-dog.md","tags":[],"version":"current","lastUpdatedAt":1732465306000,"frontMatter":{"title":"Data Dog Telemetry Integration","description":"Discover how to enhance application performance with our guide on enabling and analyzing telemetry data in Tailcall. Learn to configure observability support using OpenTelemetry for insights into logs, metrics, and traces, with practical integration examples for platforms like Honeycomb.io, New Relic, and Datadog.","slug":"graphql-data-dog-telemetry-tailcall","sidebar_label":"Data Dog"},"sidebar":"docs","previous":{"title":"Apollo Studio","permalink":"/tailcallhq.github.io/docs/integrate-apollo-studio-graphql-tailcall"},"next":{"title":"New Relic","permalink":"/tailcallhq.github.io/docs/graphql-newrelic-guide-telemetry"}}');var l=t(74848),r=t(28453);const a={title:"Data Dog Telemetry Integration",description:"Discover how to enhance application performance with our guide on enabling and analyzing telemetry data in Tailcall. Learn to configure observability support using OpenTelemetry for insights into logs, metrics, and traces, with practical integration examples for platforms like Honeycomb.io, New Relic, and Datadog.",slug:"graphql-data-dog-telemetry-tailcall",sidebar_label:"Data Dog"},o=void 0,s={},c=[{value:"Steps to Integrate Datadog with Tailcall",id:"steps-to-integrate-datadog-with-tailcall",level:3},{value:"Viewing Data in Datadog",id:"viewing-data-in-datadog",level:3},{value:"Viewing Traces:",id:"viewing-traces",level:4},{value:"Viewing Metrics:",id:"viewing-metrics",level:4}];function d(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["This guide is based on the ",(0,l.jsx)(n.a,{href:"https://docs.datadoghq.com/getting_started/opentelemetry/?s=header#exploring-observability-data-in-datadog",children:"official doc"}),"."]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"steps-to-integrate-datadog-with-tailcall",children:"Steps to Integrate Datadog with Tailcall"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Log in to Datadog:"})}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Go to ",(0,l.jsx)(n.a,{href:"https://www.datadoghq.com",children:"datadoghq.com"}),"."]}),"\n",(0,l.jsx)(n.li,{children:"Log in to your account. Ensure you select the correct region for your account during login."}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Obtain an API Key:"})}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Navigate to ",(0,l.jsx)(n.code,{children:"Organization Settings -> API Keys"}),"."]}),"\n",(0,l.jsx)(n.li,{children:"Copy the value of an existing API key or create a new one."}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Set Up OpenTelemetry Collector:"})}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Integration with Datadog requires an ",(0,l.jsx)(n.a,{href:"https://docs.datadoghq.com/opentelemetry/collector_exporter/otel_collector_datadog_exporter/?tab=onahost",children:"OpenTelemetry Collector"})," to send data. Below is a sample configuration file:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yml",children:'receivers:\n  otlp:\n    protocols:\n      grpc:\n        endpoint: 0.0.0.0:4317\nexporters:\n  logging:\n    verbosity: detailed\n  datadog:\n    traces:\n      span_name_as_resource_name: true\n    hostname: "otelcol"\n    api:\n      key: ${DATADOG_API_KEY}\n      site: us5.datadoghq.com\nprocessors:\n  batch:\n  datadog/processor:\n  probabilistic_sampler:\n    sampling_percentage: 30\nservice:\n  pipelines:\n    traces:\n      receivers: [otlp]\n      processors: [batch, datadog/processor]\n      exporters: [datadog]\n    metrics:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [datadog]\n    logs:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [datadog]\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Start OpenTelemetry Collector:"}),"\nFollow these steps to start the collector:"]}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Download and Install:"}),"\nDownload the OpenTelemetry Collector from the ",(0,l.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-collector-releases/releases",children:"release page"}),". Select the appropriate version for your platform and install it."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Save the Configuration File:"}),"\nSave the configuration above to a file named ",(0,l.jsx)(n.code,{children:"otel-collector-config.yml"})," in your working directory."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Set the Environment Variable:"}),"\nReplace ",(0,l.jsx)(n.code,{children:"<your-api-key>"})," with the API key copied earlier:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"export DATADOG_API_KEY=<your-api-key>\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Run the Collector:"}),"\nStart the collector with:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"./otelcol --config otel-collector-config.yml\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Verify the Collector:"}),"\nConfirm that it is running by checking the terminal logs. It should indicate that the collector is listening on the ",(0,l.jsx)(n.code,{children:"OTLP"})," endpoint (",(0,l.jsx)(n.code,{children:"0.0.0.0:4317"}),")."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"5",children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Update Tailcall Configuration:"}),"\nAdd telemetry support to your Tailcall configuration as follows:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-graphql",children:'schema\n  @telemetry(\n    export: {otlp: {url: "http://localhost:4317"}}\n  ) {\n  query: Query\n}\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Set the Environment Variable for Tailcall:"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Ensure that the ",(0,l.jsx)(n.code,{children:"DATADOG_API_KEY"})," environment variable is set."]}),"\n",(0,l.jsx)(n.li,{children:"Start both the OpenTelemetry Collector and Tailcall with the updated configuration."}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"7",children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Send and Analyze Data:"})}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Make requests to the running service."}),"\n",(0,l.jsx)(n.li,{children:"Wait for Datadog to process the telemetry data."}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"viewing-data-in-datadog",children:"Viewing Data in Datadog"}),"\n",(0,l.jsx)(n.h4,{id:"viewing-traces",children:"Viewing Traces:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Navigate to ",(0,l.jsx)(n.code,{children:"APM -> Traces"})," in the Datadog dashboard."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Locate the span named ",(0,l.jsx)(n.code,{children:"request"})," and click on it."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"You should see details similar to the screenshot below:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"datadog-trace",src:t(95418).A+"",width:"2099",height:"1248"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"viewing-metrics",children:"Viewing Metrics:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Go to ",(0,l.jsx)(n.code,{children:"Metrics -> Explorer"})," in the Datadog dashboard."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Search for the desired metric."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Update the query to visualize data, as shown below:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"datadog-metrics",src:t(51530).A+"",width:"2097",height:"1245"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},51530:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/datadog-metrics-f0c118dc094cf52dc135bc293c8f3741.png"},95418:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/datadog-trace-8378639a88843a26c4381d923af2b01c.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const l={},r=i.createContext(l);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);