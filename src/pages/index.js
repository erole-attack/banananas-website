import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import About from "../components/about"
import Services from "../components/services"
import Concept from "../components/concept"
import Quotes from "../components/quotes"
import Work from "../components/work"


import Nav from "../components/nav"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Header/>
    <About/>
    <Services/>
    <Concept/>
    <Quotes/>
    <Work/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
