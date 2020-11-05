import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Kush, a fullstack dev!</h2>
      <p>
        <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
