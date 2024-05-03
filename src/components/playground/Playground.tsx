import React, {useEffect, useState} from "react"
import {GraphiQL} from "graphiql"
import {isValidURL} from "@site/src/utils"
import "graphiql/graphiql.css"
import "../../css/graphiql.css"
import {type FetcherParams, FetcherOpts} from "@graphiql/toolkit"

const useDebouncedValue = (inputValue: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [inputValue, delay])

  return debouncedValue
}

const Playground = () => {
  const apiEndpointParam = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("u")
  const initialApiEndpoint =
    (typeof apiEndpointParam === "string" && isValidURL(apiEndpointParam) && new URL(apiEndpointParam)) || ""
  const [apiEndpoint, setApiEndpoint] = useState<URL | string>(
    initialApiEndpoint !== "" ? new URL(initialApiEndpoint) : ""
  )
  const [inputValue, setInputValue] = useState<string>(initialApiEndpoint.toString())
  const [editorLoaded, setEditorLoaded] = useState(false)

  const debouncedApiEndpoint = useDebouncedValue(inputValue, 500)
  const apiEndpointInputClasses = `border border-solid border-tailCall-border-light-500 rounded-lg font-space-grotesk h-11 w-[100%]
    p-SPACE_04 text-content-small outline-none focus:border-x-tailCall-light-700`

  useEffect(() => {
    if (document.getElementsByClassName("graphiql-container")) {
      setEditorLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (isValidURL(debouncedApiEndpoint)) {
      setApiEndpoint(new URL(debouncedApiEndpoint))
    }
  }, [debouncedApiEndpoint])

  const graphQLFetcher = async (graphQLParams: FetcherParams, opts?: FetcherOpts) => {
    if (apiEndpoint.toString().trim() === "") {
      return Promise.resolve({})
    }

    const response = await fetch(apiEndpoint.toString(), {
      method: "post",
      headers: {"Content-Type": "application/json", ...opts?.headers},
      body: JSON.stringify(graphQLParams),
    })
    return await response.json()
  }

  if(!editorLoaded) {
    return <div style={{height: '100vh'}}></div>
  }

  return (
    <>
      {typeof window !== "undefined" && (
        <div className="mt-SPACE_06">
          <div className="flex px-SPACE_04">
            <input
              name="api-endpoint"
              type="url"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={apiEndpointInputClasses}
              placeholder="API Endpoint"
            />
          </div>
          <div className="flex my-SPACE_03">
            <GraphiQL fetcher={graphQLFetcher}>
              <GraphiQL.Logo>
                <></>
              </GraphiQL.Logo>
            </GraphiQL>
          </div>
        </div>
      )}
    </>
  )
}

export default Playground
