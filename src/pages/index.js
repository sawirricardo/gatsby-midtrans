import React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  componentDidMount() {}

  handleMidtrans() {
    axios("http://localhost:3000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        productName: "hello World Cap",
        grossAmount: 200000,
      },
    })
      .then(res => {
        console.log(res)
        window.open(res.data, "_blank")
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <button onClick={this.handleMidtrans}>Midtrans</button>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage
