import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Work from '../components/work'

export default () => {
  const data = useStaticQuery(
    graphql `
      query getKMOData {
        allContentfulServices(limit: 3) {
          edges {
            node {
              title
              subtitle
              description {
                childMarkdownRemark {
                  html
                }
              }
              servicesIcon {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `
  )

  const KMO = data.allContentfulServices.edges[0]

  return(
    <Layout>
      <SEO title="Page two" />
      <Header mainPage={() => false}/>
      <div
        dangerouslySetInnerHTML={
          { __html: KMO.node.description.childMarkdownRemark.html}
        }
      />
      <Work/>
    </Layout>
  )
}
