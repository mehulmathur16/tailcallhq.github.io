import React, {useState} from "react"
import styles from "./styles.module.css"
import clsx from "clsx"

interface CookieConsentModalProps {
  open: boolean
  onAccept: () => void
  onClose?: () => void
}

interface ConsentOption {
  text: string
  onClick?: () => void
}

const CookieConsentModal: React.FC<CookieConsentModalProps> = ({open, onAccept, onClose}) => {
  const consentOptions: Array<ConsentOption> = [
    {
      text: "Accept All",
      onClick: onAccept,
    },
    {
      text: "Manage Settings",
      onClick: () => undefined,
    },
    {
      text: "Deny",
    },
  ]

  return (
    <>
      {open ? (
        <div className={clsx("p-4 bg-black", styles.cookieConsentModal)}>
          <div className="relative p-2 border border-solid border-tailCall-border-light-600">
            <div
              className={clsx(
                "flex flex-col items-center justify-center py-8 px-16 gap-5 font-space-mono border border-solid border-tailCall-border-light-600",
                styles.bodyContainer,
              )}
            >
              <div className="flex flex-col items-center justify-center p-3 gap-2 text-center">
                <img src={require("@site/static/images/cookie-consent/cookie.png").default} height={54} width={54} />
                <span className="text-title-medium text-tailCall-light-300">We Value Your Privacy</span>
                <span className="text-content-small text-tailCall-light-300">
                  Our website uses some cookies and records your IP address for the purposes of accessibility, security,
                  and managing your access to the telecommunication network. You can disable data collection and cookies
                  by changing your browser settings, but it may affect how this website functions, Learn more.
                </span>
              </div>
              <div className="flex gap-6">
                {consentOptions.map((btn: ConsentOption, index: number) => {
                  return (
                    <span
                      key={index}
                      className={clsx(
                        "py-1 px-3 text-title-medium bg-tailCall-dark-400 border border-solid border-tailCall-dark-300 cursor-pointer",
                        styles.consentOption,
                      )}
                      onClick={() => {
                        if (btn.onClick) btn.onClick()
                        if (onClose) onClose()
                      }}
                    >
                      {btn.text}
                    </span>
                  )
                })}
              </div>
            </div>
            <span
              className={clsx("absolute px-2 text-title-medium text-tailCall-light-300 bg-black", styles.modalHeading)}
            >
              Cookie Settings
            </span>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default CookieConsentModal
