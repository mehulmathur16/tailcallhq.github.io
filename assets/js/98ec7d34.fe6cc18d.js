"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2964],{67974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"directives/cache","title":"@cache","description":"The @cache directive provides a protocol agnostic mechanism for caching the results of fields within a GraphQL schema.","source":"@site/docs/directives/cache.md","sourceDirName":"directives","slug":"/cache-directive","permalink":"/tailcallhq.github.io/docs/cache-directive","draft":false,"unlisted":false,"editUrl":"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/directives/cache.md","tags":[],"version":"current","lastUpdatedAt":1732308017000,"frontMatter":{"title":"@cache","description":"The @cache directive provides a protocol agnostic mechanism for caching the results of fields within a GraphQL schema.","slug":"../cache-directive"},"sidebar":"docs","previous":{"title":"@addField","permalink":"/tailcallhq.github.io/docs/addField-directive"},"next":{"title":"@call","permalink":"/tailcallhq.github.io/docs/call-directive"}}');var c=n(74848),s=n(28453);const r={title:"@cache",description:"The @cache directive provides a protocol agnostic mechanism for caching the results of fields within a GraphQL schema.",slug:"../cache-directive"},a=void 0,h={},l=[{value:"maxAge",id:"maxage",level:2},{value:"Usage",id:"usage",level:2},{value:"Cache Key",id:"cache-key",level:2}];function o(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:["The ",(0,c.jsx)(t.code,{children:"@cache"})," directive is defined as follows:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-graphql",metastring:'showLineNumbers title="Directive Definition"',children:'directive @cache(\n  """\n  Duration in milliseconds for which the value should be cached\n  """\n  maxAge: Int!\n) repeatable on FIELD_DEFINITION | OBJECT\n'})}),"\n",(0,c.jsxs)(t.p,{children:["The ",(0,c.jsx)(t.code,{children:"@cache"})," directive provides a protocol agnostic mechanism for caching the results of fields within a GraphQL schema. Like any other cache implementation, this feature is useful for optimizing performance by reducing the need to fetch data that doesn't change frequently."]}),"\n",(0,c.jsx)(t.h2,{id:"maxage",children:"maxAge"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-graphql",children:"@cache(maxAge: Int)\n"})}),"\n",(0,c.jsx)(t.p,{children:"This parameter is a non-zero unsigned integer specifying the duration, in milliseconds, that retains the cached value."}),"\n",(0,c.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,c.jsx)(t.p,{children:"Consider the following GraphQL schema example:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-graphql",children:'type Query {\n  posts: [Post]\n    @http(url: "https://jsonplaceholder.typicode.com/posts")\n}\n\ntype Post {\n  id: Int\n  title: String\n  userId: Int @cache(maxAge: 100)\n  user: User\n    @http(\n      url: "https://jsonplaceholder.typicode.com/user/{{.value.userId}}"\n    )\n    @cache(maxAge: 200)\n}\n\ntype User {\n  id: Int\n  name: String\n  email: String\n}\n'})}),"\n",(0,c.jsxs)(t.p,{children:["In this configuration, the system caches the result of the ",(0,c.jsx)(t.code,{children:"user"})," field due to its association with an HTTP resolver. But it does not cache the values of ",(0,c.jsx)(t.code,{children:"userId"})," and ",(0,c.jsx)(t.code,{children:"title"})," because they lack individual resolvers; the resolver for the ",(0,c.jsx)(t.code,{children:"posts"})," field retrieves their values, employing the ",(0,c.jsx)(t.code,{children:'@http(url: "https://jsonplaceholder.typicode.com/posts")'})," directive."]}),"\n",(0,c.jsxs)(t.p,{children:["Applying the ",(0,c.jsx)(t.code,{children:"@cache"})," directive at the type level affects all fields within that type. For example:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-graphql",children:'type Query {\n  posts: [Post]\n    @http(url: "https://jsonplaceholder.typicode.com/posts")\n}\n\ntype Post @cache(maxAge: 100) {\n  id: Int\n  title: String\n  userId: Int\n  user: User\n    @http(\n      url: "https://jsonplaceholder.typicode.com/user/{{.value.userId}}"\n    )\n}\n\ntype User {\n  id: Int\n  name: String\n  email: String\n}\n'})}),"\n",(0,c.jsxs)(t.p,{children:["You can simplify this configuration to show that applying the ",(0,c.jsx)(t.code,{children:"@cache"})," directive to a type means every field within that type inherits it:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-graphql",children:'type Query {\n  posts: [Post]\n    @http(url: "https://jsonplaceholder.typicode.com/posts")\n}\n\ntype Post {\n  id: Int @cache(maxAge: 100)\n  title: String @cache(maxAge: 100)\n  userId: Int @cache(maxAge: 100)\n  user: User\n    @http(\n      url: "https://jsonplaceholder.typicode.com/user/{{.value.userId}}"\n    )\n    @cache(maxAge: 100)\n}\n\ntype User {\n  id: Int\n  name: String\n  email: String\n}\n'})}),"\n",(0,c.jsxs)(t.p,{children:["Since the ",(0,c.jsx)(t.code,{children:"@cache"})," directive does not affect fields without resolvers, the effective configuration can be further reduced as follows:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-graphql",children:'type Query {\n  posts: [Post]\n    @http(url: "https://jsonplaceholder.typicode.com/posts")\n}\n\ntype Post {\n  id: Int\n  title: String\n  userId: Int\n  user: User\n    @http(\n      url: "https://jsonplaceholder.typicode.com/user/{{.value.userId}}"\n    )\n    @cache(maxAge: 100)\n}\n\ntype User {\n  id: Int\n  name: String\n  email: String\n}\n'})}),"\n",(0,c.jsxs)(t.p,{children:["When applying the ",(0,c.jsx)(t.code,{children:"@cache"})," directive both at the type level and on individual fields within that type, the field-level directive takes precedence:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-graphql",children:'type Query {\n  posts: [Post]\n    @http(url: "https://jsonplaceholder.typicode.com/posts")\n}\n\ntype Post @cache(maxAge: 200) {\n  id: Int\n  title: String\n  userId: Int\n  user: User\n    @http(\n      url: "https://jsonplaceholder.typicode.com/user/{{.value.userId}}"\n    )\n    @cache(maxAge: 100)\n}\n\ntype User {\n  id: Int\n  name: String\n  email: String\n}\n'})}),"\n",(0,c.jsxs)(t.p,{children:["Thus, in the configuration above, while all fields inherit the ",(0,c.jsx)(t.code,{children:"@cache(maxAge: 200)"})," directive at the type level, the ",(0,c.jsx)(t.code,{children:"user"})," field's explicit ",(0,c.jsx)(t.code,{children:"@cache(maxAge: 100)"})," directive takes precedence."]}),"\n",(0,c.jsx)(t.h2,{id:"cache-key",children:"Cache Key"}),"\n",(0,c.jsx)(t.p,{children:"The caching mechanism generates a hash based on information related to the applied query to serve as the cache key for the corresponding value."}),"\n",(0,c.jsxs)(t.p,{children:["For instance, the system caches the ",(0,c.jsx)(t.code,{children:"user"})," field in the following configuration, using the hash of the interpolated string ",(0,c.jsx)(t.code,{children:'"/user/{{.value.userId}}"'})," as the cache key. For example, if ",(0,c.jsx)(t.code,{children:"Post.userId"})," equals ",(0,c.jsx)(t.code,{children:"1"}),", the system generates the cache key by hashing the string ",(0,c.jsx)(t.code,{children:'"/users/1"'}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const c={},s=i.createContext(c);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);