import React, {useCallback, useState} from "react"
import Layout from "@theme-original/Layout"
import type LayoutType from "@theme/Layout"
import type {WrapperProps} from "@docusaurus/types"
import GlobalHead from "@site/src/components/shared/GlobalHead"
import CookieConsentModal from "@site/src/components/shared/CookieConsentModal/CookieConsentModal"

type Props = WrapperProps<typeof LayoutType>

interface CookieConsent {
  accepted: boolean
  preferences?: []
}

export default function LayoutWrapper(props: Props): JSX.Element {
  const [showCookieConsentModal, setShowCookieConsentModal] = useState(true)
  const [cookieConsent, setCookieConsent] = useState<CookieConsent>({
    accepted: false,
  })

  const handleCookieConsentModalClose = useCallback(() => {
    setShowCookieConsentModal(false)
  }, [])

  const onAccept = useCallback(() => {
    setCookieConsent({
      accepted: true,
    })
  }, [])

  return (
    <>
      <CookieConsentModal open={showCookieConsentModal} onClose={handleCookieConsentModalClose} onAccept={onAccept} />
      <GlobalHead isCookieConsentAccepted={cookieConsent.accepted} />
      <Layout {...props} />
    </>
  )
}
