---
title: "server"
description: The server configuration provides a comprehensive set of server settings.
slug: ../server-config
---

The `server` configuration is defined in a YAML file as follows:

```yaml title="Runtime Configuration" showLineNumbers
server:
  workers: 32
  port: 8000
  headers:
    cacheControl: true
    setCookies: true
    custom:
      - key: "X-Custom-Header"
        value: "custom-value"
    cors:
      allowCredentials: true
      allowHeaders: ["*"]
      allowMethods: ["*"]
      allowOrigins: ["*"]
      exposeHeaders: ["*"]
      maxAge: 600
      vary: ["Origin"]
  introspection: true
  queryValidation: false
  responseValidation: false
  globalResponseTimeout: 5000
  version: "HTTP1"
  cert: "./cert.pem"
  key: "./key.pem"
  showcase: false
  batchRequests: false
  routes:
    graphQL: "/graphql"
    status: "/status"
  enableFederation: false
  vars:
    - key: "apiKey"
      value: "YOUR_API_KEY_HERE"
```

The `server` configuration provides a comprehensive set of server configurations. It dictates server behavior and helps tune Tailcall for a range of use-cases.

The options and their details appear below.

## workers

Setting `workers` to `32` means that the GraphQL server will use 32 worker threads.

```yaml showLineNumbers
server:
  workers: 32
```

This example sets the `workers` to `32`, meaning the GraphQL server will use 32 worker threads.

## port

Setting the `port` to `8090` means that Tailcall will be accessible at `http://localhost:8000`.

```yaml showLineNumbers
server:
  port: 8090
```

This example sets the `port` to `8090`, making Tailcall accessible at `http://localhost:8090`.

:::tip
Always choose non-standard ports, avoiding typical ones like 80 or 8080. Make sure your chosen port is free.
:::

## headers

Allows intelligent configuration of the final response headers that's produced by Tailcall.

## cacheControl

Activating the `cacheControl` configuration directs Tailcall to send [Cache-Control] headers in its responses. The `max-age` value in the header matches the lowest of the values in the responses that Tailcall receives from its upstream. By default, this is `false`, which means Tailcall does not set any header.

[cache-control]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control

```yaml showLineNumbers
server:
  headers:
    cacheControl: true
```

## custom

The `custom` is an array of key-value pairs. These headers get added to the response of every request made to the server. This can be useful for adding headers like `Access-Control-Allow-Origin` to allow cross-origin requests, or some headers like `X-Allowed-Roles` for use by downstream services.

```yaml showLineNumbers
server:
  headers:
    custom:
      - key: "X-Allowed-Roles"
        value: "admin,user"
```

## experimental

When the `experimental` configuration is enabled, Tailcall can include headers starting with `X-` in its responses, which are sourced from its upstream. By default, this feature is disabled (`[]`), meaning Tailcall does not forward any such headers unless explicitly configured to do so.

```yaml showLineNumbers
server:
  headers:
    experimental:
      - "X-Experimental-Header"
```

## setCookies

Enabling the `setCookies` option instructs Tailcall to include `set-cookie` headers in its responses, which are obtained from the headers of upstream responses.

[set-cookie]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/set-cookie

```yaml showLineNumbers
server:
  headers:
    setCookies: true
```

## cors

The `cors` configuration allows you to enable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) on Tailcall. This is useful when you want to access Tailcall in the browser. Here is a simple configuration to get started with cors:

```yaml showLineNumbers
server:
  headers:
    cors:
      allowHeaders: ["*"]
      allowOrigins: ["*"]
```

The above setting will enable CORS on the server for all headers, origins & methods. You can further configure the cors settings to make it more secure with the following fields:

- `allowCredentials`: Indicates whether the server allows credentials (e.g., cookies, authorization headers) to be sent in cross-origin requests.
- `allowHeaders`: A list of allowed headers in cross-origin requests. This can be used to specify custom headers that are allowed to be included in cross-origin requests.
- `allowMethods`: A list of allowed HTTP methods in cross-origin requests. These methods specify the actions that are permitted in cross-origin requests.
- `allowOrigins`: A list of origins that are allowed to access the server's resources in cross-origin requests. An origin can be a domain, a subdomain, or even 'null' for local file schemes.
- `allowPrivateNetwork`: Indicates whether requests from private network addresses are allowed in cross-origin requests. Private network addresses typically include IP addresses reserved for internal networks.
- `exposeHeaders`: A list of headers that the server exposes to the browser in cross-origin responses. Exposing certain headers allows client-side code to access them in the response.
- `maxAge`: The maximum time (in seconds) that the client should cache preflight OPTIONS requests to avoid sending excessive requests to the server.
- `vary`: A list of header names that indicate the values of which might cause the server's response to vary, potentially affecting caching.

```yaml showLineNumbers
server:
  port: 8000
  hostname: "0.0.0.0"
  headers:
    cors:
      allowCredentials: false
      allowHeaders: ["Authorization"]
      allowMethods: ["POST", "GET", "OPTIONS"]
      allowOrigins: ["abc.xyz"]
      allowPrivateNetwork: true
      exposeHeaders: ["Content-Type"]
      maxAge: 360
      vary: ["Origin"]
```

## vars

This configuration allows defining local variables for use during the server's operations. These variables are handy for storing constant configurations, secrets, or other shared information that operations might need.

```yaml showLineNumbers
server:
  vars:
    - key: "apiKey"
      value: "YOUR_API_KEY_HERE"
```

Then in your schema file:

```graphql showLineNumbers
type Query {
  externalData: Data
    @http(
      url: "https://jsonplaceholder.typicode.com/external-api/data"
      headers: [
        {
          key: "Authorization"
          value: "Bearer {{.vars.apiKey}}"
        }
      ]
    )
}
```

In the provided example, setting a variable named `apiKey` with a placeholder value of "YOUR_API_KEY_HERE" implies that whenever Tailcall fetches data from the `externalData` endpoint, it includes the `apiKey` in the Authorization header of the HTTP request.

:::tip
Local variables, like `apiKey`, are instrumental in securing access to external services or providing a unified place for configurations. Ensure that sensitive information stored this way is well protected and not exposed unintentionally, if your GraphQL configuration is publicly accessible.
:::

## introspection

This setting controls the server's allowance of introspection queries. Introspection, a core feature of GraphQL, allows clients to directly fetch schema information. This capability proves crucial for tools and client applications in comprehending the available types, fields, and operations. By default, the server enables this setting (`true`).

```yaml showLineNumbers
server:
  introspection: false
```

:::tip
Although introspection is beneficial during development and debugging stages, consider disabling it in production environments. Turning off introspection in live deployments can enhance security by preventing potential attackers from discerning the schema and any associated business logic or data structures.
:::

## queryValidation

The `queryValidation` configuration determines if the server checks incoming GraphQL queries against the defined schema. Each query check ensures it matches the schema, preventing errors from incorrect or malformed queries. In some situations, you might want to disable it, notably to **enhance server performance** at the cost of these checks. This defaults to `false` if not specified.

```yaml showLineNumbers
server:
  queryValidation: true
```

The example above sets `queryValidation` to `true`, enabling the validation phase for incoming queries.

:::tip
Enable this in the development environment to ensure the queries sent are correct and validated. In the production environment, consider disabling it for improved performance.
:::

## responseValidation

Tailcall can automatically infer the schema of the HTTP endpoints for you. This information can check responses received from the upstream services. Enabling this setting allows you to do that. If not specified, the default setting for `responseValidation` is `false`.

```yaml showLineNumbers
server:
  responseValidation: true
```

:::tip
Disabling this setting will offer major performance improvements, but at the potential expense of data integrity.
:::

## globalResponseTimeout

The `globalResponseTimeout` configuration sets the max duration a query can run before the server terminates it. Essentially, it acts as a safeguard against long-running queries that could strain resources or pose security concerns.

If not explicitly defined, there might be a system-specific or default value that applies.

```yaml showLineNumbers
server:
  globalResponseTimeout: 5000
```

In this given example, setting the `globalResponseTimeout` to `5000` milliseconds, or 5 seconds, means any query execution taking longer than this duration will be automatically terminated by

:::tip
Setting an appropriate response timeout in production environments is crucial. This optimizes resource use and serves as a security measure against potential denial-of-service attacks, where adversaries might run complex queries to exhaust server resources.
:::

## version

The server uses the HTTP version. If not specified, the default value is `HTTP1`. The available options are `HTTP1` and `HTTP2`.

```yaml showLineNumbers
server:
  version: "HTTP2"
```

## cert

The path to certificate(s) for running the server over HTTP2 (HTTPS). If not specified, the default value is `null`.

```yaml showLineNumbers
server:
  cert: "./cert.pem"
```

<!-- prefer to use standard extension libraries -->

:::tip
The certificate can be of any extension, but it's highly recommended to use standards (`pem`, `crt`, `key`).
:::

## key

The path to the key for running the server over HTTP2 (HTTPS). If not specified, the default value is `null`.

```yaml showLineNumbers
server:
  key: "./key.pem"
```

:::tip
The key can be of any extension, but it's highly recommended to use standards (`pem`, `crt`, `key`).
:::

## showcase

The `server` configurations's `showcase` option allows for hands-on experimentation with server configurations in a controlled environment. This feature simplifies the process of exploring and testing different settings.

```yaml showLineNumbers
server:
  showcase: true
```

## batchRequests

Batching in GraphQL combines requests into one, reducing server round trips.

```yaml showLineNumbers
server:
  port: 8000
  batchRequests: true
```

:::tip
Batching can improve performance but may introduce latency if one request in the batch takes longer. It also makes network traffic debugging harder.
:::

## routes

This optional field allows you to customize the server's endpoint paths, enabling you to override the default values for the GraphQL and status endpoints. If not specified, the following default paths will be used:

- graphQL: `/graphql`
- status: `/status`

```yaml showLineNumbers
server:
  routes:
    graphQL: "/tailcall-gql"
    status: "/health"
```

In this example, the GraphQL endpoint is changed to `/tailcall-gql` and the status endpoint to `/health`.

## enableFederation

A boolean flag, if set to `true` the Tailcall server will additionally act as federation subgraph. By default, it's disabled.

```yaml showLineNumbers
server:
  enableFederation: true
```
