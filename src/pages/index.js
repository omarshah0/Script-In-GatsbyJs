import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="demo-3">
        <h1>Gaoqing Yang's Project</h1>
        <main>
          <div className="content">
            <canvas
              className="scene scene--full"
              id="scene"
              style={{ width: "1000px", height: "1000px" }}
            ></canvas>
          </div>
        </main>
      </section>
    </Layout>
  )
}

export default IndexPage
