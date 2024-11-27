"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[168],{3355:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scalar","title":"Simplifying GraphQL Scalars","description":"Explore GraphQL\'s core and Tailcall\'s custom scalars, including `Int`, `Float`, `String`, `Boolean`, `ID`, `Email`, and more, in our guide that simplifies data handling with clear definitions and examples. Enhance your applications with our comprehensive scalar support, designed for precise data validation and efficiency.","source":"@site/docs/scalar.md","sourceDirName":".","slug":"/graphql-scalars-guide","permalink":"/tailcallhq.github.io/docs/graphql-scalars-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/scalar.md","tags":[],"version":"current","lastUpdatedAt":1718176951000,"frontMatter":{"title":"Simplifying GraphQL Scalars","description":"Explore GraphQL\'s core and Tailcall\'s custom scalars, including `Int`, `Float`, `String`, `Boolean`, `ID`, `Email`, and more, in our guide that simplifies data handling with clear definitions and examples. Enhance your applications with our comprehensive scalar support, designed for precise data validation and efficiency.","slug":"graphql-scalars-guide","sidebar_label":"GraphQL Scalars"},"sidebar":"docs","previous":{"title":"REST on GraphQL","permalink":"/tailcallhq.github.io/docs/graphql-rest-integration"},"next":{"title":"Environment Variables","permalink":"/tailcallhq.github.io/docs/graphql-environment-variables"}}');var i=t(74848),n=t(28453);const s={title:"Simplifying GraphQL Scalars",description:"Explore GraphQL's core and Tailcall's custom scalars, including `Int`, `Float`, `String`, `Boolean`, `ID`, `Email`, and more, in our guide that simplifies data handling with clear definitions and examples. Enhance your applications with our comprehensive scalar support, designed for precise data validation and efficiency.",slug:"graphql-scalars-guide",sidebar_label:"GraphQL Scalars"},l=void 0,c={},d=[{value:"Default Scalars",id:"default-scalars",level:2},{value:"GraphQL Scalars",id:"graphql-scalars",level:2},{value:"Custom Scalars",id:"custom-scalars",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Valid Query Example",id:"valid-query-example",level:3},{value:"Invalid Query Example",id:"invalid-query-example",level:3}];function h(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:["The GraphQL specification includes default scalar types ",(0,i.jsx)(a.code,{children:"Int"}),", ",(0,i.jsx)(a.code,{children:"Float"}),", ",(0,i.jsx)(a.code,{children:"String"}),", ",(0,i.jsx)(a.code,{children:"Boolean"}),", and ",(0,i.jsx)(a.code,{children:"ID"}),". Although these scalars cover the majority of use cases, some applications need to support other atomic data types such as ",(0,i.jsx)(a.code,{children:"Date"})," or an ",(0,i.jsx)(a.code,{children:"Email"}),".\nTailcall provides these predefined scalars, with built-in validations, eliminating the need for you to do so."]}),"\n",(0,i.jsx)(a.h2,{id:"default-scalars",children:"Default Scalars"}),"\n",(0,i.jsx)(a.p,{children:"Here is a list of default scalars that are built into the GraphQL Spec:"}),"\n",(0,i.jsxs)(a.table,{children:[(0,i.jsx)(a.thead,{children:(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.th,{style:{textAlign:"right"},children:"Scalar"}),(0,i.jsx)(a.th,{children:"Description"}),(0,i.jsx)(a.th,{children:"Specification"})]})}),(0,i.jsxs)(a.tbody,{children:[(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{style:{textAlign:"right"},children:(0,i.jsx)(a.code,{children:"Int"})}),(0,i.jsxs)(a.td,{children:["A type representing non-fractional signed whole numbers. Values can range up to (2^",31," - 1)."]}),(0,i.jsx)(a.td,{children:(0,i.jsx)(a.a,{href:"https://spec.graphql.org/June2018/#sec-Int",children:"GraphQL Specification for Int"})})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{style:{textAlign:"right"},children:(0,i.jsx)(a.code,{children:"Float"})}),(0,i.jsx)(a.td,{children:"A type for signed double-precision floating-point numbers."}),(0,i.jsx)(a.td,{children:(0,i.jsx)(a.a,{href:"https://spec.graphql.org/June2018/#sec-Float",children:"GraphQL Specification for Float"})})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{style:{textAlign:"right"},children:(0,i.jsx)(a.code,{children:"String"})}),(0,i.jsx)(a.td,{children:"A sequence of UTF-8 characters, representing textual data."}),(0,i.jsx)(a.td,{children:(0,i.jsx)(a.a,{href:"https://graphql.org/learn/schema/#scalar-String",children:"GraphQL Specification for String"})})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{style:{textAlign:"right"},children:(0,i.jsx)(a.code,{children:"Boolean"})}),(0,i.jsxs)(a.td,{children:["A boolean type that represents ",(0,i.jsx)(a.code,{children:"true"})," or ",(0,i.jsx)(a.code,{children:"false"}),"."]}),(0,i.jsx)(a.td,{children:(0,i.jsx)(a.a,{href:"https://graphql.org/learn/schema/#scalar-Boolean",children:"GraphQL Specification for Boolean"})})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{style:{textAlign:"right"},children:(0,i.jsx)(a.code,{children:"ID"})}),(0,i.jsx)(a.td,{children:"A unique identifier, typically used to refetch an object or as a cache key."}),(0,i.jsx)(a.td,{children:(0,i.jsx)(a.a,{href:"https://graphql.org/learn/schema/#scalar-ID",children:"GraphQL Specification for ID"})})]})]})]}),"\n",(0,i.jsx)(a.h2,{id:"graphql-scalars",children:"GraphQL Scalars"}),"\n",(0,i.jsx)(a.p,{children:"These are the current set of custom scalars supported by Tailcall:"}),"\n",(0,i.jsxs)(a.table,{children:[(0,i.jsx)(a.thead,{children:(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.th,{style:{textAlign:"right"},children:"Scalar"}),(0,i.jsx)(a.th,{children:"Description"}),(0,i.jsx)(a.th,{children:"Specification"})]})}),(0,i.jsxs)(a.tbody,{children:[(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{style:{textAlign:"right"},children:(0,i.jsx)(a.code,{children:"Email"})}),(0,i.jsx)(a.td,{children:"A string that conforms to the email format as defined in the HTML specification, utilizing the Unicode character set."}),(0,i.jsx)(a.td,{children:(0,i.jsx)(a.a,{href:"https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address",children:"HTML Specification for Valid Email Addresses"})})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{style:{textAlign:"right"},children:(0,i.jsx)(a.code,{children:"PhoneNumber"})}),(0,i.jsx)(a.td,{children:"A string format adhering to the E.164 international standard, which outlines the numbering plan for the worldwide public switched telephone network (PSTN) and certain data networks."}),(0,i.jsx)(a.td,{children:(0,i.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/E.164",children:"E.164 International Numbering Plan"})})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{style:{textAlign:"right"},children:(0,i.jsx)(a.code,{children:"Date"})}),(0,i.jsx)(a.td,{children:"A string that represents dates and times in the Internet protocols, following the ISO 8601 standard via the Gregorian calendar."}),(0,i.jsx)(a.td,{children:(0,i.jsx)(a.a,{href:"https://datatracker.ietf.org/doc/html/rfc3339",children:"RFC 3339 Date and Time Internet Formats"})})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{style:{textAlign:"right"},children:(0,i.jsx)(a.code,{children:"Url"})}),(0,i.jsx)(a.td,{children:"A standardized format for Uniform Resource Identifiers (URI) that includes both the generic URI syntax and guidelines for resolving URI references, which may be in relative form."}),(0,i.jsx)(a.td,{children:(0,i.jsx)(a.a,{href:"https://www.ietf.org/rfc/rfc3986.txt",children:"RFC 3986 Uniform Resource Identifier"})})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{style:{textAlign:"right"},children:(0,i.jsx)(a.code,{children:"JSON"})}),(0,i.jsx)(a.td,{children:"A lightweight data interchange format based on the ECMAScript Programming Language Standard, designed for human-readable data representation."}),(0,i.jsx)(a.td,{children:(0,i.jsx)(a.a,{href:"https://datatracker.ietf.org/doc/html/rfc7159",children:"RFC 7159 The JavaScript Object Notation (JSON) Data Interchange Format"})})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{style:{textAlign:"right"},children:(0,i.jsx)(a.code,{children:"Empty"})}),(0,i.jsx)(a.td,{children:"A type that represents no value or is used as a placeholder in contexts where no other data is expected or returned. It's equivalent to unit or void in other programming languages."}),(0,i.jsx)(a.td,{})]})]})]}),"\n",(0,i.jsxs)(a.p,{children:["If none of the scalars make sense for your use case, consider opening an issue on the Tailcall ",(0,i.jsx)(a.a,{href:"https://github.com/tailcallhq/tailcall",children:"github repository"}),"."]}),"\n",(0,i.jsx)(a.h2,{id:"custom-scalars",children:"Custom Scalars"}),"\n",(0,i.jsx)(a.p,{children:"Apart from the pre-defined list of scalars, you can define your own custom scalars in your GraphQL schema like in the example below."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-graphql",children:'scalar AnyScalar\n\nschema @server(port: 8000, hostname: "localhost") {\n  query: Query\n}\n\ntype Query {\n  any(value: AnyScalar!): AnyScalar!\n    @expr(body: "{{.args.value}}")\n}\n'})}),"\n",(0,i.jsx)(a.admonition,{type:"important",children:(0,i.jsx)(a.p,{children:"Be aware that custom scalars don't have any validation and can be mapped to any data structure when using it."})}),"\n",(0,i.jsx)(a.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,i.jsx)(a.p,{children:"Let's try using these custom scalars in our GraphQL schema."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-graphql",children:'schema @server(port: 8000, hostname: "localhost") {\n  query: Query\n}\n\ntype Query {\n  email(value: Email!): Email!\n    @expr(body: "{{.args.value}}")\n}\n'})}),"\n",(0,i.jsx)(a.h3,{id:"valid-query-example",children:"Valid Query Example"}),"\n",(0,i.jsxs)(a.p,{children:["Here is an example of a valid query that passes the custom scalar validations:\n",(0,i.jsx)(a.img,{alt:"Valid Query",src:t(95432).A+"",width:"2992",height:"1686"})]}),"\n",(0,i.jsx)(a.h3,{id:"invalid-query-example",children:"Invalid Query Example"}),"\n",(0,i.jsxs)(a.p,{children:["And here is an example of an invalid query that fails the custom scalar validations as expected:\n",(0,i.jsx)(a.img,{alt:"Invalid Query",src:t(97267).A+"",width:"2992",height:"1686"})]})]})}function o(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},97267:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/invalid-d2b8b8e7e3b4d4bf41b00f2ca6461bf5.png"},95432:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/valid-aa1bed0569ffc2ff1309a0c13ed98e76.png"},28453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>l});var r=t(96540);const i={},n=r.createContext(i);function s(e){const a=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);