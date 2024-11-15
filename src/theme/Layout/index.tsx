import React, {useCallback, useEffect, useState} from "react"
import Layout from "@theme-original/Layout"
import type LayoutType from "@theme/Layout"
import type {WrapperProps} from "@docusaurus/types"
import GlobalHead from "@site/src/components/shared/GlobalHead"
import CookieConsentModal from "@site/src/components/shared/CookieConsentModal/CookieConsentModal"
import {useCookieConsent} from "@site/src/utils/hooks/useCookieConsent"

type Props = WrapperProps<typeof LayoutType>

export default function LayoutWrapper(props: Props): JSX.Element {
  const {getCookieConsent, setCookieConsent} = useCookieConsent()
  const [showCookieConsentModal, setShowCookieConsentModal] = useState(false)
  const cookieConsent = getCookieConsent()

  // Check for existing consent in cookies on initial render
  useEffect(() => {
    if (!cookieConsent) {
      // Show modal if no consent cookie exists
      setShowCookieConsentModal(true)
    }
  }, [cookieConsent])

  const handleCookieConsentModalClose = useCallback(() => {
    setShowCookieConsentModal(false)
  }, [])

  const onAccept = useCallback(() => {
    const consentData = {accepted: true}
    setCookieConsent(consentData)
    handleCookieConsentModalClose()
  }, [setCookieConsent])

  const onDeny = useCallback(() => {
    const consentData = {accepted: false}
    setCookieConsent(consentData)
    handleCookieConsentModalClose()
  }, [setCookieConsent])

  const onPartialAccept = useCallback(
    (selectedPreferences: string[]) => {
      const consentData = {
        accepted: true,
        preferences: selectedPreferences,
      }
      setCookieConsent(consentData)
      handleCookieConsentModalClose()
    },
    [setCookieConsent],
  )

  return (
    <>
      <CookieConsentModal
        open={showCookieConsentModal}
        onClose={handleCookieConsentModalClose}
        onAccept={onAccept}
        onDeny={onDeny}
        onPartialAccept={onPartialAccept}
      />
      <GlobalHead isCookieConsentAccepted={Boolean(cookieConsent?.accepted)} preferences={cookieConsent?.preferences} />
      <Layout {...props} />
    </>
  )
}
