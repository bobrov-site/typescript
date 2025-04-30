type StatusData = 'ok' | 'loading' | 'error'

type Page = 'home' | 'about' | 'contact'

type PageStatus = `${Page}-${StatusData}` //  "home-ok" | "home-loading" | "home-error" | "about-ok" | "about-loading" | "about-error" | "contact-ok" | "contact-loading" | "contact-error"

