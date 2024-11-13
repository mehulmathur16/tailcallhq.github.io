import React from "react"
import Head from "@docusaurus/Head"
import {reb2bScriptContent} from "@site/src/constants"

interface GlobalHeadProps {
  isCookieConsentAccepted?: boolean
  preferences?: String[]
}

const GlobalHead: React.FC<GlobalHeadProps> = ({isCookieConsentAccepted = false}) => {
  const injectAnalyticsScripts = () => {
    return (
      <>
        <script
          async
          src="https://tag.clearbitscripts.com/v1/pk_498a76355e253f5c7f4e7c7bed78748e/tags.js"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <script type="text/javascript">{reb2bScriptContent}</script>
      </>
    )
  }

  return <Head>{isCookieConsentAccepted ? injectAnalyticsScripts() : <></>}</Head>
}

export default GlobalHead
