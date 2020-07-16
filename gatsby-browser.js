import CustomLayout from "./src/components/layout/global"
export const wrapPageElement = CustomLayout

require("typeface-oswald")
require("typeface-orbitron")

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), 500)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(() => window.scrollTo(...(savedPosition || [0, 0])), 500)
  }
  return false
}
