import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import About from "../components/about"
import Services from "../components/services"
import Concept from "../components/concept"


import Nav from "../components/nav"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <Header/>
    <About/>
    <Services/>
    <Concept/>
  </div>
)

export default IndexPage
