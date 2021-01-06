// Import React so that you can use JSX in HeadComponents
const React = require("react")

const BodyComponents = [
  <script src="/js/demo.js"></script>,
  <script src="/js/three.min.js"></script>,
  <script src="/js/perlin.js"></script>,
  <script src="/js/TweenMax.min.js"></script>,
]

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents(BodyComponents)
}
