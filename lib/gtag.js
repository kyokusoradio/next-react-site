export const GA_MESUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url) => {
  window.SVGAnimatedAngle("config", GA_MESUREMENT_ID, {
    page_path: url,
  })
}