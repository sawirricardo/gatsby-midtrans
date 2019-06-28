import React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  componentDidMount() {
    axios({
      url: "https://app.sandbox.midtrans.com/snap/v1/transactions",
      headers: {
        Accept: "application / json",
        "Content-Type": "application/ json",
      },
      auth: {
        username: "SB-Mid-server-bObe0On1pJGQ1o6-ONWafNIj",
        password: "",
      },
      method: "post",
      data: {
        transaction_details: {
          order_id: "ORDER-101",
          gross_amount: 10000,
        },
      },
    })
      .then(response => {
        console.log(response)
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
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage
