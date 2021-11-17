// Import React so that you can use JSX in HeadComponents
const React = require("react")

const BodyComponents = [
  <script src="/js/demo.js"></script>,
  <script dangerouslySetInnerHtml={{
  `SevenroomsWidget.init({
      venueId: "mysweetliberty",
      triggerId: "sr-res-root",
      type: "reservations",
    })`
  }}></script>,
]

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents(BodyComponents)
}
