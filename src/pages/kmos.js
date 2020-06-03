import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Work from '../components/work'
import { screenSize } from "../components/styles/styles"

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
      <SEO title="KMO Dienstverlening"/>
      <Header/>
      <h1 className={css(kmoStyles.title)}>
        {KMO.node.title.toUpperCase()}
      </h1>
      <div className={css(kmoStyles.container)}>
        <div className={css(kmoStyles.grid)}>
          <div
            className={css(kmoStyles.description)}
            dangerouslySetInnerHTML={
              { __html: KMO.node.description.childMarkdownRemark.html}
            }
          />
        </div>
      </div>
      <Work/>
    </Layout>
  )
}

const kmoStyles = StyleSheet.create({

  container: {
    backgroundColor: '#f2f6f7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '15vw',
    overflow: 'hidden',
    minHeight: '180px',
    [screenSize.tablet]: {
      height: '25vw'
    },
    [screenSize.smartphoneLandscape]: {
      height: '35vw'
    },
    [screenSize.smartphone]: {
      height: '35vw'
    }
  },

  title: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f2f6f7',
    margin: '0',
    padding: '3vw',
    [screenSize.tablet]: {
      paddingTop: '5vw'
    },
    [screenSize.smartphoneLandscape]: {
      paddingTop: '5vw'
    },
    [screenSize.smartphone]: {
      paddingTop: '10vw'
    }
  },

  grid: {
    display: 'flex',
    width: '75%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    [screenSize.tablet]: {
      width: '80%',
    },
    [screenSize.smartphoneLandscape]: {
      width: '90%',
    },
    [screenSize.smartphone]: {
      width: '95%',
    }
  },

  description: {
    fontSize: '1.1vw',
    backgroundColor:'white',
    padding: '3%',
    borderRadius: '5px',
    [screenSize.tablet]: {
      fontSize: '1.6vw',
      lineHeight: '2.4vw'
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '2.1vw',
      lineHeight: '3vw'
    },
    [screenSize.smartphone]: {
      fontSize: '2.8vw',
      lineHeight: '4.2vw',
    }
  }

})
