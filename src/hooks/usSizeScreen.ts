import { useMediaQuery } from "hooks-ts"

export const useScreenSize = () => {
const isDesktop = useMediaQuery("(min-width:1280px)")
const isTablet = useMediaQuery("(min-width: 768px)")

return {isDesktop, isTablet}
}