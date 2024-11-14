import React, {useCallback, useEffect, useState} from "react"
import {useCookies} from "react-cookie"
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
  const [cookies, setCookie] = useCookies(["userConsent"])
  const [showCookieConsentModal, setShowCookieConsentModal] = useState(false)

  // Check for existing consent in cookies on initial render
  useEffect(() => {
    if (!cookies.userConsent) {
      // Show modal if no consent cookie exists
      setShowCookieConsentModal(true)
    }
  }, [cookies])

  const handleCookieConsentModalClose = useCallback(() => {
    setShowCookieConsentModal(false)
  }, [])

  // Function to handle consent acceptance and save in cookies
  const onAccept = useCallback(() => {
    const consentData = {accepted: true}
    setCookie("userConsent", JSON.stringify(consentData), {maxAge: 30 * 24 * 60 * 60}) // 30 days expiry
    handleCookieConsentModalClose()
  }, [setCookie])

  // Function to handle consent acceptance and save in cookies
  const onDeny = useCallback(() => {
    const consentData = {accepted: false}
    setCookie("userConsent", JSON.stringify(consentData), {maxAge: 30 * 24 * 60 * 60}) // 30 days expiry
    handleCookieConsentModalClose()
  }, [setCookie])

  const onPartialAccept = (selectedPreferences: String[]) => {
    const consentData = {
      accepted: true,
      preferences: selectedPreferences,
    }
    setCookie("userConsent", JSON.stringify(consentData), {maxAge: 30 * 24 * 60 * 60})
    handleCookieConsentModalClose()
  }

  return (
    <>
      <CookieConsentModal
        open={showCookieConsentModal}
        onClose={handleCookieConsentModalClose}
        onAccept={onAccept}
        onDeny={onDeny}
        onPartialAccept={onPartialAccept}
      />
      <GlobalHead isCookieConsentAccepted={Boolean(cookies.userConsent)} />
      <Layout {...props} />
    </>
  )
}
