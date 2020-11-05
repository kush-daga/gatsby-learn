import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>I'm Kush, a fullstack dev!</h2>
      <p>
        <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
