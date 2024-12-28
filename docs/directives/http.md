---
title: "@http"
description: The @http directive indicates a field or node relies on a REST API.
slug: ../http-directive
---

The `@http` directive enables GraphQL fields to be resolved using REST API endpoints, simplifying the integration of external data sources.

## `@http` Directive Definition

```graphql title="Directive Definition" showLineNumbers
directive @http(
  url: String!
  method: Method
  query: [InputKeyValue!]
  body: JSON
  headers: [InputKeyValue!]
  batchKey: [String!]
  onRequest: String
  onResponseBody: String
  select: JSON
  dedupe: Boolean
) on FIELD_DEFINITION
```

## Example: Basic Usage of `@http`

```graphql showLineNumbers
type Query {
  users: [User]
    @http(url: "https://jsonplaceholder.typicode.com/users")
}
```

In this example, adding the `@http` directive to the `users` field of the `Query` type indicates reliance on a REST API for the `users` field. The [url](#url) argument specifies the REST API's url, which is `https://jsonplaceholder.typicode.com/users` in this scenario. Querying the `users` field prompts the GraphQL server to issue a GET request to `https://jsonplaceholder.typicode.com/users`.

## Directive Arguments

### url

The `url` parameter defines the API endpoint. It can also contain dynamic segments with Mustache templates for variable substitution:

```graphql showLineNumbers
type Query {
  user(id: ID!): User
    @http(
      url: "https://jsonplaceholder.typicode.com/users/{{.args.id}}"
    )
}
```

### method

Specifies the HTTP method for the request. Defaults to `GET` if not specified:

```graphql showLineNumbers
type Mutation {
  createUser(input: UserInput!): User
    @http(
      method: "POST"
      url: "https://jsonplaceholder.typicode.com/users"
    )
}
```

### query

Represents the API call's query parameters, either as a static object or with dynamic parameters using Mustache templates. These parameters append to the URL.

```graphql showLineNumbers
type Query {
  userPosts(id: ID!): [Post]
    @http(
      url: "https://jsonplaceholder.typicode.com/posts"
      query: [
        {
          key: "userId"
          value: "{{.args.id}}"
          skipEmpty: false
        }
      ]
    )
}
```

#### Query Fields:

1. **key** : Represents the name of the query parameter.
2. **value** : A string literal or a mustache template representing the value of query parameter.
3. **skipEmpty** : When set to `true` the query parameter is skipped if the value of the parameter is null, defaults to false.

:::important
When `batchKey` is present, Tailcall considers the first `query` parameter to be the batch query key, so remember to adjust the order of the items accordingly.
:::

### body

Defines the API call's body, necessary for methods like POST or PUT. Pass it as a static object or use Mustache templates for variable substitution from the GraphQL variables.

```graphql showLineNumbers
type Mutation {
  createUser(input: UserInput!): User
    @http(
      method: "POST"
      url: "https://jsonplaceholder.typicode.com/users"
      body: "{{.args.input}}"
    )
}
```

In the example above, the `createUser` mutation sends a POST request to `/users`, with the input object converted to JSON and included in the request body.

### headers

Customizes the HTTP request headers made by the `@http` directive. Specify a key-value map of header names and values.

For instance:

```graphql showLineNumbers
type Mutation {
  createUser(input: UserInput!): User
    @http(
      url: "https://jsonplaceholder.typicode.com/users"
      headers: [{key: "X-Server", value: "Tailcall"}]
    )
}
```

In this example, a request to `/users` will include a HTTP header `X-Server` with the value `Tailcall`.

You can make use of mustache templates to provide dynamic values for headers, derived from the arguments or [context] provided in the request. For example:

[context]: /docs/graphql-resolver-context-tailcall

```graphql showLineNumbers
type Mutation {
  users(name: String): User
    @http(
      url: "https://jsonplaceholder.typicode.com/users"
      headers: [
        {key: "X-Server", value: "Tailcall"}
        {key: "User-Name", value: "{{.args.name}}"}
      ]
    )
}
```

In this scenario, the `User-Name` header's value will dynamically adjust according to the `name` argument passed in the request.

### batchKey

Groups data requests into a single call, enhancing efficiency. Refer to our [n + 1 guide](../N+1.md) for more details.

:::important
When `batchKey` is present, Tailcall considers the first `query` parameter to be the batch query key, so remember to adjust the order of the items accordingly. Whereas, the last item from `batchKey` is used to instruct which field is the ID of an object. In case that the returned result is a nested property `batchKey` can be used as a path to extract and group the items for the returned result.
:::

```graphql showLineNumbers
type Post {
  id: Int!
  name: String!
  userId: Int!
  user: User
    @http(
      url: "https://jsonplaceholder.typicode.com/users"
      query: [{key: "user_id", value: "{{.value.userId}}"}]
      batchKey: ["users", "id"]
    )
}
```

- `query: {key: "user_id", value: "{{.value.userId}}"}]`: Instructs Tailcall CLI to generate a URL aligning the user id with `userId` from the parent `Post`, compiling a single URL for a batch of posts, such as `/users?user_id=1&user_id=2&user_id=3...user_id=10`, consolidating requests into one.

### onRequest

The `onRequest` property accepts a string value representing the remote function to be called every time an HTTP request is initiated. Typically the remote function is defined in a linked JavaScript worker file.

:::note
For defining a request middleware globally for all requests, refer to the [upstream config documentation](../config/upstream.md#onrequest).
:::

```graphql showLineNumbers
type Query {
  userPosts(id: ID!): [Post]
    @http(
      url: "https://jsonplaceholder.typicode.com/posts"
      query: [{key: "userId", value: "{{.args.id}}"}]
      onRequest: "someFunctionName"
    )
}
```

### onResponseBody

This hook allows you to intercept and modify the response body from upstream services before it's processed by Tailcall. Like [onRequest](#onrequest), it accepts a string value representing a middleware function defined in a JavaScript file. This function can be used to transform or validate the response data.

```graphql showLineNumbers
type Query {
  user(id: Int!): User
    @http(
      url: "https://jsonplaceholder.typicode.com/users/{{.args.id}}"
      onResponseBody: "onResponse"
    )
}
```

### select

You can use `select` with mustache syntax to re-construct the directives
response to the desired format. This is useful when data are deeply
nested or want to keep specific fields only from the response.

- EXAMPLE 1: if we have a call that returns `{ "user": { "items": [...],
... } ... }` we can use `"{{.user.items}}"`, to extract the `items`.
- EXAMPLE 2: if we have a call that returns `{ "foo": "bar", "fizz": {
"buzz": "eggs", ... }, ... }` we can use `{ foo: "{{.foo}}", buzz:
"{{.fizz.buzz}}" }`

```graphql showLineNumbers
type Query {
  userCompany(id: Int!): Company
    @http(
      url: "https://jsonplaceholder.typicode.com/users/{{.args.id}}"
      select: "{{.company}}"
    )
  userDetails(id: Int!): UserDetails
    @http(
      url: "https://jsonplaceholder.typicode.com/users/{{.args.id}}"
      select: {
        id: "{{.id}}"
        city: "{{.address.city}}"
        phone: "{{.phone}}"
      }
    )
}
```

### dedupe

A boolean flag, if set to `true`, will enable deduplication of IO operations to enhance performance. This flag prevents duplicate IO requests from being executed concurrently, reducing resource load. If not specified, this feature defaults to `false`.

```graphql showLineNumbers
@http(
  url: "https://jsonplaceholder.typicode.com/users/"
  dedupe: true
)
```

## Batching with POST Requests

In some cases, your batch API might use a POST request that accepts a list of items for processing. Tailcall can batch these requests similarly to how it handles GET requests, but instead of sending the input in query parameters, it sends them in the request body.

### Mechanism

When Tailcall receives multiple POST requests that share the same endpoint but have different parameters, it:

1. Collects these requests
2. Transforms them into a single POST request with an array of objects in the body
3. Sends this consolidated request to the upstream service
4. Maps the responses back to individual results

### Configuration

To enable batching, configure your schema as follows:

```graphql
type Query {
  posts: [Post]
    @http(url: "https://jsonplaceholder.typicode.com/posts")
}

type Post {
  id: ID!
  name: String!
  user: User!
    @http(
      url: "https://jsonplaceholder.typicode.com/users"
      method: POST
      body: {
        userId: "{{.value.userId}}"
        staticValue: "static"
      }
      batchKey: ["userId"]
    )
}

type User {
  id: ID!
  name: String!
}
```

In this example, the `posts` query fetches a list of posts, and the `user` field fetches user details for each post. The `batchKey` parameter groups the user requests into a single POST request, enhancing efficiency.

Let's say your GraphQL query needs to fetch user details for multiple posts:

```graphql
query {
  posts {
    id
    name
    user {
      id
      name
    }
  }
}
```

The posts endpoint returns:

```json
[
  {
    "id": 1,
    "name": "post-1",
    "userId": 1
  },
  {
    "id": 2,
    "name": "post-2",
    "userId": 2
  }
]
```

Instead of making separate POST requests for each user, Tailcall will batch them into a single request:

```bash
POST https://jsonplaceholder.typicode.com/users
Content-Type: application/json
Body:
[
  {
    "userId": 1,
    "staticValue": "static"
  },
  {
    "userId": 2,
    "staticValue": "static"
  }
]
```

### Current Limitations

- Currently, supports only one dynamic parameter per batched request
- All requests in a batch must share the same endpoint and method
- The dynamic parameter must be referenced using the `{{.value.fieldName}}` syntax

## Combining Multiple Directives

The `@http` directive can be used in combination with other [resolvable directives](../directives.md#resolvable-directives), with results merged deeply. This allows for powerful and flexible resolver configurations.

For more details, see [Directives Documentation](../directives.md).
