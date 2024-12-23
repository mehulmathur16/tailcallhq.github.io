"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[688],{76577:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"graphql-react-client","title":"GraphQL in React: 5 Best Approaches for Data Fetching.","description":"Apollo Client and Urql provide comprehensive solutions for large-scale applications, while the React Query combinations offer more flexibility.","source":"@site/graphql/graphql-react-client.md","sourceDirName":".","slug":"/graphql-react-client","permalink":"/tailcallhq.github.io/graphql/graphql-react-client","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1720416762000,"frontMatter":{"title":"GraphQL in React: 5 Best Approaches for Data Fetching.","description":"Apollo Client and Urql provide comprehensive solutions for large-scale applications, while the React Query combinations offer more flexibility.","sidebar_label":"GraphQL with React","slug":"graphql-react-client"},"sidebar":"graphql","previous":{"title":"GraphQL vs REST","permalink":"/tailcallhq.github.io/graphql/graphql-vs-rest-api-comparison"},"next":{"title":"CTOs Guide","permalink":"/tailcallhq.github.io/graphql/cto-guide"}}');var s=r(74848),t=r(28453);const l={title:"GraphQL in React: 5 Best Approaches for Data Fetching.",description:"Apollo Client and Urql provide comprehensive solutions for large-scale applications, while the React Query combinations offer more flexibility.",sidebar_label:"GraphQL with React",slug:"graphql-react-client"},a=void 0,o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"1. Apollo Client: The Comprehensive Solution",id:"1-apollo-client-the-comprehensive-solution",level:3},{value:"Getting started with Apollo Client",id:"getting-started-with-apollo-client",level:4},{value:"2. Urql: The Lightweight Contender",id:"2-urql-the-lightweight-contender",level:3},{value:"To use Urql",id:"to-use-urql",level:4},{value:"3. React Query + GraphQL Request: The Flexible Duo",id:"3-react-query--graphql-request-the-flexible-duo",level:3},{value:"4. React Query + Axios: Leveraging a Popular HTTP Client",id:"4-react-query--axios-leveraging-a-popular-http-client",level:3},{value:"5. React Query + Fetch API: The Minimalist Approach",id:"5-react-query--fetch-api-the-minimalist-approach",level:3},{value:"Detailed Comparison Table",id:"detailed-comparison-table",level:2},{value:"Caching Capabilities",id:"caching-capabilities",level:3},{value:"Error Handling",id:"error-handling",level:2},{value:"1. Apollo Client",id:"1-apollo-client",level:3},{value:"2. Urql",id:"2-urql",level:3},{value:"React Query (applies to all React Query examples)",id:"react-query-applies-to-all-react-query-examples",level:3},{value:"Common Issues and Resolutions",id:"common-issues-and-resolutions",level:2},{value:"1. Apollo Client",id:"1-apollo-client-1",level:3},{value:"2. Urql",id:"2-urql-1",level:3},{value:"3. React Query (all combinations)",id:"3-react-query-all-combinations",level:3},{value:"Use Cases for Each Method",id:"use-cases-for-each-method",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"React developers often need to fetch data from GraphQL APIs. This comprehensive guide explores five effective methods for querying GraphQL data in React applications, using the SpaceX GraphQL API to demonstrate fetching and displaying data about recent space missions. We'll cover full-featured client libraries to lightweight solutions, providing a detailed comparison table and specific use cases for each method."}),"\n",(0,s.jsx)(n.h3,{id:"1-apollo-client-the-comprehensive-solution",children:"1. Apollo Client: The Comprehensive Solution"}),"\n",(0,s.jsx)(n.p,{children:"Apollo Client is the most feature-rich GraphQL library for React, widely adopted for its robust data fetching, built-in caching, and integrated state management."}),"\n",(0,s.jsx)(n.h4,{id:"getting-started-with-apollo-client",children:"Getting started with Apollo Client"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Install dependencies"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install @apollo/client graphql\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Set up the Apollo Provider and client"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import {\n  ApolloProvider,\n  ApolloClient,\n  InMemoryCache,\n} from "@apollo/client"\n\nconst client = new ApolloClient({\n  uri: "https://api.spacex.land/graphql/",\n  cache: new InMemoryCache(),\n})\n\nReactDOM.render(\n  <ApolloProvider client={client}>\n    <App />\n  </ApolloProvider>,\n  rootElement,\n)\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["Use the ",(0,s.jsx)(n.code,{children:"useQuery"})," hook to fetch data"]}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import {useQuery, gql} from "@apollo/client"\n\nconst LAUNCHES_QUERY = gql`\n  {\n    launchesPast(limit: 10) {\n      id\n      mission_name\n    }\n  }\n`\n\nfunction SpaceXLaunches() {\n  const {data, loading, error} = useQuery(LAUNCHES_QUERY)\n\n  if (loading) return "Loading..."\n  if (error) return <pre>{error.message}</pre>\n\n  return (\n    <ul>\n      {data.launchesPast.map((launch) => (\n        <li key={launch.id}>{launch.mission_name}</li>\n      ))}\n    </ul>\n  )\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-urql-the-lightweight-contender",children:"2. Urql: The Lightweight Contender"}),"\n",(0,s.jsx)(n.p,{children:"Urql provides a streamlined alternative to Apollo, with a smaller bundle size, simpler setup process, and optional caching."}),"\n",(0,s.jsx)(n.h4,{id:"to-use-urql",children:"To use Urql"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Install dependencies"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install urql graphql\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Set up the Urql Provider and client"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import {createClient, Provider} from "urql"\n\nconst client = createClient({\n  url: "https://api.spacex.land/graphql/",\n})\n\nReactDOM.render(\n  <Provider value={client}>\n    <App />\n  </Provider>,\n  rootElement,\n)\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["Implement data fetching with the ",(0,s.jsx)(n.code,{children:"useQuery"})," hook"]}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import {useQuery} from "urql"\n\nconst LAUNCHES_QUERY = `\n  {\n    launchesPast(limit: 10) {\n      id\n      mission_name\n    }\n  }\n`\n\nfunction SpaceXLaunches() {\n  const [result] = useQuery({query: LAUNCHES_QUERY})\n  const {data, fetching, error} = result\n\n  if (fetching) return "Loading..."\n  if (error) return <pre>{error.message}</pre>\n\n  return (\n    <ul>\n      {data.launchesPast.map((launch) => (\n        <li key={launch.id}>{launch.mission_name}</li>\n      ))}\n    </ul>\n  )\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-react-query--graphql-request-the-flexible-duo",children:"3. React Query + GraphQL Request: The Flexible Duo"}),"\n",(0,s.jsx)(n.p,{children:"This combination pairs a lightweight GraphQL client with a powerful data-fetching library."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Install dependencies"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install react-query graphql-request\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Set up React Query's QueryClientProvider"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import {\n  QueryClient,\n  QueryClientProvider,\n} from "react-query"\n\nconst queryClient = new QueryClient()\n\nReactDOM.render(\n  <QueryClientProvider client={queryClient}>\n    <App />\n  </QueryClientProvider>,\n  rootElement,\n)\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Implement data fetching"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import {request, gql} from "graphql-request"\nimport {useQuery} from "react-query"\n\nconst endpoint = "https://api.spacex.land/graphql/"\nconst LAUNCHES_QUERY = gql`\n  {\n    launchesPast(limit: 10) {\n      id\n      mission_name\n    }\n  }\n`\n\nfunction SpaceXLaunches() {\n  const {data, isLoading, error} = useQuery(\n    "launches",\n    () => request(endpoint, LAUNCHES_QUERY),\n  )\n\n  if (isLoading) return "Loading..."\n  if (error) return <pre>{error.message}</pre>\n\n  return (\n    <ul>\n      {data.launchesPast.map((launch) => (\n        <li key={launch.id}>{launch.mission_name}</li>\n      ))}\n    </ul>\n  )\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4-react-query--axios-leveraging-a-popular-http-client",children:"4. React Query + Axios: Leveraging a Popular HTTP Client"}),"\n",(0,s.jsx)(n.p,{children:"Combines React Query with Axios for familiar HTTP handling."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Install dependencies"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install react-query axios\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Implement data fetching"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import axios from "axios"\nimport {useQuery} from "react-query"\n\nconst endpoint = "https://api.spacex.land/graphql/"\nconst LAUNCHES_QUERY = `\n  {\n    launchesPast(limit: 10) {\n      id\n      mission_name\n    }\n  }\n`\n\nfunction SpaceXLaunches() {\n  const {data, isLoading, error} = useQuery(\n    "launches",\n    () =>\n      axios\n        .post(endpoint, {query: LAUNCHES_QUERY})\n        .then((response) => response.data.data),\n  )\n\n  if (isLoading) return "Loading..."\n  if (error) return <pre>{error.message}</pre>\n\n  return (\n    <ul>\n      {data.launchesPast.map((launch) => (\n        <li key={launch.id}>{launch.mission_name}</li>\n      ))}\n    </ul>\n  )\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"5-react-query--fetch-api-the-minimalist-approach",children:"5. React Query + Fetch API: The Minimalist Approach"}),"\n",(0,s.jsx)(n.p,{children:"Utilizes the browser's Fetch API with React Query for a minimalistic approach."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Install React Query"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install react-query\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Implement data fetching"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import { useQuery } from "react-query";\n\nconst endpoint = "https://api.spacex.land/graphql/";\nconst LAUNCHES_QUERY = `\n  {\n    launchesPast(limit: 10) {\n      id\n      mission_name\n    }\n  }\n`;\n\nfunction SpaceXLaunches() {\n  the { data, isLoading, error } = useQuery("launches", () =>\n    fetch(endpoint, {\n      method: "POST",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify({ query: LAUNCHES_QUERY })\n    })\n      .then(response => {\n        if (!response.ok) throw new Error("Network response was not ok");\n        return response.json();\n      })\n      .then(result => result.data)\n  );\n\n  if (isLoading) return "Loading...";\n  if (error) return <pre>{error.message}</pre>;\n\n  return (\n    <ul>\n      {data.launchesPast.map((launch) => (\n        <li key={launch.id}>{launch.mission_name}</li>\n      ))}\n    </ul>\n  );\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"detailed-comparison-table",children:"Detailed Comparison Table"}),"\n",(0,s.jsx)(n.p,{children:"Here\u2019s a comparison table to help choose the right method based on specific needs:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Method"}),(0,s.jsx)(n.th,{children:"Bundle Size (minified + gzip)*"}),(0,s.jsx)(n.th,{children:"Learning Curve"}),(0,s.jsx)(n.th,{children:"Caching Capabilities"}),(0,s.jsx)(n.th,{children:"Community Support"}),(0,s.jsx)(n.th,{children:"Additional Features"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Apollo Client"}),(0,s.jsx)(n.td,{children:"~47.04 KB"}),(0,s.jsx)(n.td,{children:"Moderate"}),(0,s.jsx)(n.td,{children:"Extensive (InMemoryCache, customizable)"}),(0,s.jsx)(n.td,{children:"High"}),(0,s.jsx)(n.td,{children:"State management, optimistic UI updates"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Urql"}),(0,s.jsx)(n.td,{children:"~2.18 KB"}),(0,s.jsx)(n.td,{children:"Low"}),(0,s.jsx)(n.td,{children:"Moderate (Document caching)"}),(0,s.jsx)(n.td,{children:"Moderate"}),(0,s.jsx)(n.td,{children:"Extensible architecture"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"React Query + GraphQL Request"}),(0,s.jsx)(n.td,{children:"~13 KB + ~185.8 KB"}),(0,s.jsx)(n.td,{children:"Low"}),(0,s.jsx)(n.td,{children:"Basic (Managed by React Query)"}),(0,s.jsx)(n.td,{children:"Growing"}),(0,s.jsx)(n.td,{children:"Minimal overhead"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"React Query + Axios"}),(0,s.jsx)(n.td,{children:"~13 KB + ~13.2 KB"}),(0,s.jsx)(n.td,{children:"Low"}),(0,s.jsx)(n.td,{children:"Basic (Managed by React Query)"}),(0,s.jsx)(n.td,{children:"High"}),(0,s.jsx)(n.td,{children:"Familiar HTTP handling"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"React Query + Fetch API"}),(0,s.jsx)(n.td,{children:"~13 KB + ~152.4 KB"}),(0,s.jsx)(n.td,{children:"Low"}),(0,s.jsx)(n.td,{children:"Basic (Managed by React Query)"}),(0,s.jsx)(n.td,{children:"Moderate"}),(0,s.jsx)(n.td,{children:"Browser-native, minimal setup"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"(*) culled from *bundlephobia.com*"}),"\n",(0,s.jsx)(n.h3,{id:"caching-capabilities",children:"Caching Capabilities"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Apollo Client"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Normalized caching (stores entities by ID)"}),"\n",(0,s.jsx)(n.li,{children:"Automatic cache updates"}),"\n",(0,s.jsx)(n.li,{children:"Manual cache manipulation"}),"\n",(0,s.jsx)(n.li,{children:"Persistence and rehydration"}),"\n",(0,s.jsx)(n.li,{children:"Optimistic updates"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Urql"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Document caching (stores full query responses)"}),"\n",(0,s.jsx)(n.li,{children:"Customizable caching with exchangers"}),"\n",(0,s.jsx)(n.li,{children:"Persistence support"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"React Query"})," (applies to all React Query combinations):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Time-based caching"}),"\n",(0,s.jsx)(n.li,{children:"Stale-while-revalidate strategy"}),"\n",(0,s.jsx)(n.li,{children:"Manual cache manipulation"}),"\n",(0,s.jsx)(n.li,{children:"Persistence and rehydration"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,s.jsx)(n.p,{children:"Proper error handling is crucial for creating robust GraphQL applications. This section provides a detailed discussion on error handling for each client, including code examples for different types of errors and guidance on displaying user-friendly error messages."}),"\n",(0,s.jsx)(n.h3,{id:"1-apollo-client",children:"1. Apollo Client"}),"\n",(0,s.jsxs)(n.p,{children:["Apollo Client provides detailed error information through the ",(0,s.jsx)(n.code,{children:"error"})," property returned by the ",(0,s.jsx)(n.code,{children:"useQuery"})," hook. It distinguishes between GraphQL errors and network errors."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import {useQuery, gql} from "@apollo/client"\n\nconst LAUNCHES_QUERY = gql`\n  {\n    launchesPast(limit: 10) {\n      id\n      mission_name\n    }\n  }\n`\n\nfunction SpaceXLaunches() {\n  const {data, loading, error} = useQuery(LAUNCHES_QUERY)\n\n  if (loading) return "Loading..."\n  if (error) {\n    return <ErrorDisplay error={error} />\n  }\n\n  // Render data...\n}\n\nfunction ErrorDisplay({error}) {\n  // Function to generate a user-friendly error message\n  const getUserFriendlyErrorMessage = (error) => {\n    if (error.networkError) {\n      return "Unable to reach the server. Please check your internet connection and try again."\n    }\n    if (error.graphQLErrors.length > 0) {\n      // You might want to customize this based on specific error codes or messages\n      return "There was an issue processing your request. Please try again later."\n    }\n    return "An unexpected error occurred. Please try again."\n  }\n\n  return (\n    <div className="error-container">\n      <h2>Oops! Something went wrong</h2>\n      <p>{getUserFriendlyErrorMessage(error)}</p>\n      {process.env.NODE_ENV !== "production" && (\n        <details>\n          <summary>Technical Details</summary>\n          {error.graphQLErrors.map(\n            ({message, locations, path}, index) => (\n              <div key={index}>\n                <p>GraphQL error: {message}</p>\n                <p>Location: {JSON.stringify(locations)}</p>\n                <p>Path: {JSON.stringify(path)}</p>\n              </div>\n            ),\n          )}\n          {error.networkError && (\n            <p>\n              Network error: {error.networkError.message}\n            </p>\n          )}\n        </details>\n      )}\n    </div>\n  )\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"This example demonstrates how to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Display a user-friendly error message based on the type of error"}),"\n",(0,s.jsx)(n.li,{children:"Show technical details only in non-production environments"}),"\n",(0,s.jsx)(n.li,{children:"Handle both GraphQL and network errors"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-urql",children:"2. Urql"}),"\n",(0,s.jsxs)(n.p,{children:["Urql provides error information through the ",(0,s.jsx)(n.code,{children:"error"})," property in the result object."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import {useQuery} from "urql"\n\nconst LAUNCHES_QUERY = `\n  {\n    launchesPast(limit: 10) {\n      id\n      mission_name\n    }\n  }\n`\n\nfunction SpaceXLaunches() {\n  const [result] = useQuery({query: LAUNCHES_QUERY})\n  const {data, fetching, error} = result\n\n  if (fetching) return "Loading..."\n  if (error) {\n    return <ErrorDisplay error={error} />\n  }\n\n  // Render data...\n}\n\nfunction ErrorDisplay({error}) {\n  const getUserFriendlyErrorMessage = (error) => {\n    if (error.networkError) {\n      return "Unable to reach the server. Please check your internet connection and try again."\n    }\n    if (error.graphQLErrors.length > 0) {\n      // Customize based on specific error types if needed\n      return "There was an issue processing your request. Please try again later."\n    }\n    return "An unexpected error occurred. Please try again."\n  }\n\n  return (\n    <div className="error-container">\n      <h2>Oops! Something went wrong</h2>\n      <p>{getUserFriendlyErrorMessage(error)}</p>\n      {process.env.NODE_ENV !== "production" && (\n        <details>\n          <summary>Technical Details</summary>\n          {error.graphQLErrors.map(\n            (graphQLError, index) => (\n              <div key={index}>\n                <p>GraphQL error: {graphQLError.message}</p>\n                {graphQLError.locations && (\n                  <p>\n                    Location:{" "}\n                    {JSON.stringify(graphQLError.locations)}\n                  </p>\n                )}\n                {graphQLError.path && (\n                  <p>\n                    Path:{" "}\n                    {JSON.stringify(graphQLError.path)}\n                  </p>\n                )}\n              </div>\n            ),\n          )}\n          {error.networkError && (\n            <p>\n              Network error: {error.networkError.message}\n            </p>\n          )}\n        </details>\n      )}\n    </div>\n  )\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"react-query-applies-to-all-react-query-examples",children:"React Query (applies to all React Query examples)"}),"\n",(0,s.jsxs)(n.p,{children:["React Query provides error information through the ",(0,s.jsx)(n.code,{children:"error"})," property returned by the ",(0,s.jsx)(n.code,{children:"useQuery"})," hook."]}),"\n",(0,s.jsx)(n.p,{children:"When using React Query with GraphQL Request, you need to handle errors from both libraries. This approach requires more manual error handling but offers fine-grained control."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import {useQuery} from "react-query"\nimport {request, gql} from "graphql-request"\n\nconst endpoint = "https://api.spacex.land/graphql/"\nconst LAUNCHES_QUERY = gql`\n  {\n    launchesPast(limit: 10) {\n      id\n      mission_name\n    }\n  }\n`\n\nfunction SpaceXLaunches() {\n  const {data, isLoading, error} = useQuery(\n    "launches",\n    async () => {\n      try {\n        return await request(endpoint, LAUNCHES_QUERY)\n      } catch (error) {\n        // GraphQL Request wraps GraphQL errors in a ClientError\n        if (error.response) {\n          throw new Error(\n            JSON.stringify(error.response.errors),\n          )\n        } else {\n          // Network error\n          throw new Error(`Network error: ${error.message}`)\n        }\n      }\n    },\n  )\n\n  if (isLoading) return "Loading..."\n  if (error) {\n    return <ErrorDisplay error={error} />\n  }\n\n  // Render data...\n}\n\nfunction ErrorDisplay({error}) {\n  const getUserFriendlyErrorMessage = (error) => {\n    try {\n      const parsedError = JSON.parse(error.message)\n      if (Array.isArray(parsedError)) {\n        // GraphQL errors\n        return "There was an issue processing your request. Please try again later."\n      }\n    } catch {\n      // Network error or other non-GraphQL error\n      return "Unable to reach the server. Please check your internet connection and try again."\n    }\n    return "An unexpected error occurred. Please try again."\n  }\n\n  return (\n    <div className="error-container">\n      <h2>Oops! Something went wrong</h2>\n      <p>{getUserFriendlyErrorMessage(error)}</p>\n      {process.env.NODE_ENV !== "production" && (\n        <details>\n          <summary>Technical Details</summary>\n          <pre>{error.message}</pre>\n        </details>\n      )}\n    </div>\n  )\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"common-issues-and-resolutions",children:"Common Issues and Resolutions"}),"\n",(0,s.jsx)(n.h3,{id:"1-apollo-client-1",children:"1. Apollo Client"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Issue"}),": Cache inconsistencies ",(0,s.jsx)(n.strong,{children:"Resolution"}),": Use ",(0,s.jsx)(n.code,{children:"refetchQueries"})," option when mutating data or implement cache update functions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Issue"}),": Overfeching data ",(0,s.jsx)(n.strong,{children:"Resolution"}),": Utilize fragment colocation and implement proper query splitting."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-urql-1",children:"2. Urql"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Issue"}),": Stale data after mutations ",(0,s.jsx)(n.strong,{children:"Resolution"}),": Use the ",(0,s.jsx)(n.code,{children:"cache-and-network"})," fetch policy or implement manual cache updates."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Issue"}),": SSR hydration mismatches ",(0,s.jsx)(n.strong,{children:"Resolution"}),": Ensure consistent query variables between server and client, or use the ",(0,s.jsx)(n.code,{children:"ssrExchange"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-react-query-all-combinations",children:"3. React Query (all combinations)"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Issue"}),": Stale data displayed briefly before refetch ",(0,s.jsx)(n.strong,{children:"Resolution"}),": Adjust ",(0,s.jsx)(n.code,{children:"staleTime"})," and ",(0,s.jsx)(n.code,{children:"cacheTime"})," options to fine-tune caching behavior."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Issue"}),": Unnecessary refetches on component remount ",(0,s.jsx)(n.strong,{children:"Resolution"}),": Implement proper query keys and adjust ",(0,s.jsx)(n.code,{children:"refetchOnMount"})," option."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"use-cases-for-each-method",children:"Use Cases for Each Method"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Apollo Client"}),": Best for large-scale applications needing complex state management and data synchronization."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Urql"}),": Suitable for medium-sized projects where simplicity and performance are prioritized."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"React Query + GraphQL Request"}),": Ideal for projects requiring high flexibility with minimal GraphQL-specific setup."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"React Query + Axios"}),": Preferred when developers are already familiar with Axios and need robust HTTP capabilities."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"React Query + Fetch API"}),": Optimal for projects that require a minimalistic approach with no additional dependencies."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"By understanding the distinct features and use cases of each method, developers can select the most appropriate GraphQL fetching technique for their React projects. This guide aims to equip developers with the knowledge to efficiently integrate GraphQL data fetching into their applications, regardless of scale or complexity."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var i=r(96540);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);