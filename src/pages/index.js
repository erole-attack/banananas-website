import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import About from '../components/about'
import Services from '../components/services'
import Concept from '../components/concept'
import Quotes from '../components/quotes'
import Work from '../components/work'
import Team from '../components/team'
import Contact from '../components/contact'
import SEO from '../components/seo'

const IndexPage = () => (
    <Layout>
      <SEO title="BANANANAS heet u welkom!" />
      <Header mainPage={() => true}/>
      <About/>
      <Services/>
      <Concept/>
      <Quotes/>
      <Work/>
      <Team/>
      <Contact/>
    </Layout>
)

export default IndexPage
