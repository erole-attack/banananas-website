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
      query getUitgeverijData {
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

  const uitgeverij = data.allContentfulServices.edges[2]

  return(
    <Layout>
      <SEO title="Uitgeverij Dienstverlening"/>
      <Header/>
      <h1 className={css(uitgeverijStyles.title)}>
        {uitgeverij.node.title.toUpperCase()}
      </h1>
      <div className={css(uitgeverijStyles.container)}>
        <div className={css(uitgeverijStyles.grid)}>
          <div
            className={css(uitgeverijStyles.description)}
            dangerouslySetInnerHTML={
              { __html: uitgeverij.node.description.childMarkdownRemark.html}
            }
          />
        </div>
      </div>
      <Work/>
    </Layout>
  )
}

const uitgeverijStyles = StyleSheet.create({

  container: {
    backgroundColor: '#f2f6f7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '15vw',
    overflow: 'hidden',
    minHeight: '180px',
    [screenSize.tablet]: {
      height: '40vh'
    },
    [screenSize.smartphoneLandscape]: {
      height: '45vh'
    },
    [screenSize.smartphone]: {
      backgroundColor: '#101213',
      color: 'white',
      height: '35vh',
      minHeight: '200px'
    }
  },

  title: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f2f6f7',
    margin: '0',
    padding: '3vw'
  },

  grid: {
    marginLeft: '2vw',
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
      fontSize: '2.2vw',
      lineHeight: '3.8vw',
      color: '#E1E1E1',
    }
  }

})
