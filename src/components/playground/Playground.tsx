import React, {useEffect, useState} from "react"
import {createGraphiQLFetcher} from "@graphiql/toolkit"
import {GraphiQL} from "graphiql"
import {isValidURL} from "@site/src/utils"
import "graphiql/graphiql.css"

type PlaygroundProps = {
  defaultApiEndpoint: URL
}

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

const Playground: React.FC<PlaygroundProps> = ({defaultApiEndpoint}) => {
  const apiEndpointParam =
    typeof window !== "undefined" && new URLSearchParams(window.location.search).get("apiEndpoint")
  const initialApiEndpoint =
    (typeof apiEndpointParam === "string" && isValidURL(apiEndpointParam) && new URL(apiEndpointParam)) ||
    defaultApiEndpoint
  const [apiEndpoint, setApiEndpoint] = useState<URL>(new URL(initialApiEndpoint))
  const [inputValue, setInputValue] = useState<string>(initialApiEndpoint.toString())

  const debouncedApiEndpoint = useDebouncedValue(inputValue, 500)
  const apiEndpointInputClasses = `border border-solid border-tailCall-border-light-500 rounded-lg font-space-grotesk h-11 w-[100%]
    p-SPACE_04 text-content-small outline-none focus:border-x-tailCall-light-700`

  useEffect(() => {
    if (isValidURL(debouncedApiEndpoint)) {
      setApiEndpoint(new URL(debouncedApiEndpoint))
    }

    if (typeof window !== "undefined") {
      // Update URL query parameter
      const url = new URL(window.location.href)
      url.searchParams.set("apiEndpoint", debouncedApiEndpoint)
      window.history.replaceState(null, "", url.toString())
    }
  }, [debouncedApiEndpoint])

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
            <GraphiQL fetcher={createGraphiQLFetcher({url: apiEndpoint.toString()})} />
          </div>
        </div>
      )}
    </>
  )
}

export default Playground
