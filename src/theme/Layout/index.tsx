import React, {useEffect} from "react"
import Layout from "@theme-original/Layout"
import type LayoutType from "@theme/Layout"
import type {WrapperProps} from "@docusaurus/types"
import GlobalHead from "@site/src/components/shared/GlobalHead"
import CookieConsentModal from "@site/src/components/shared/CookieConsentModal/CookieConsentModal"
import {useCookieConsentManager} from "@site/src/utils/hooks/useCookieConsentManager"

type Props = WrapperProps<typeof LayoutType>

export default function LayoutWrapper(props: Props): JSX.Element {
  const {
    showCookieConsentModal,
    openCookieConsentModal,
    closeCookieConsentModal,
    onAccept,
    onDeny,
    onPartialAccept,
    cookieConsent,
  } = useCookieConsentManager()

  useEffect(() => {
    if (!cookieConsent) {
      openCookieConsentModal()
    }
  }, [cookieConsent])

  return (
    <>
      <CookieConsentModal
        open={showCookieConsentModal}
        onClose={closeCookieConsentModal}
        onAccept={onAccept}
        onDeny={onDeny}
        onPartialAccept={onPartialAccept}
      />
      <GlobalHead isCookieConsentAccepted={Boolean(cookieConsent?.accepted)} preferences={cookieConsent?.preferences} />
      <Layout {...props} />
    </>
  )
}
