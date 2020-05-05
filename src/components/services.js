import React from 'react'
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'
import { screenSize } from "./styles/styles"

export default () => {
  const data = useStaticQuery(
    graphql `
      query getServicesData {
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

  const trimServiceBlockText = (path) =>{
    const serviceBlockText = path.slice(0,100).split(" ")
    const popped = serviceBlockText.pop()
    return serviceBlockText.join(" ").concat(' ...')
  }

  return(
    <div className={css(servicesStyles.container)}>
      <div className={css(servicesStyles.grid)}>
        {data.allContentfulServices.edges.map(edge =>
          <div className={css(servicesStyles.serviceBlock)}>
            <img src={edge.node.servicesIcon.file.url}
              className={css(servicesStyles.icons)}
            />
            <h2 className={css(servicesStyles.title)}>
              {edge.node.title.toUpperCase()}
            </h2>
            <div
              className={css(servicesStyles.description)}
              dangerouslySetInnerHTML={
                { __html: trimServiceBlockText(edge.node.description.childMarkdownRemark.html)}
              }
            />
            <Link to="/page-2/" type="button" className={css(servicesStyles.button)}>LEES MEER</Link>
          </div>
        )}
      </div>
    </div>
  )
}

const servicesStyles = StyleSheet.create({

  container: {
    width: '100vw',
    height: '50vh',
    background: '#101213',
    overflow: 'hidden',
    color: 'white',
    margin: '0 auto',
    minHeight: '400px',
    [screenSize.tablet]: {
      height: '160vh',
      width: '70vw',
      minHeight: '1200px'
    },
    [screenSize.smartphoneLandscape]: {
      height: '160vh',
      width: '80vw',
      minHeight: '1000px'
    },
    [screenSize.smartphone]: {
      height: '160vh',
      minWidth: '60%',
      minHeight: '1200px',
      background: '#101213',
    }
  },

  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    margin: '0 auto',
    [screenSize.tablet]: {
      width: '60%'
    },
    [screenSize.smartphoneLandscape]: {
      width: '90%'
    },
    [screenSize.smartphone]: {
      width: '90%'
    }
  },

  serviceBlock: {
    display: 'grid',
    width: '20vw',
    height: '40vh',
    minHeight: '280px',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '30% 25% 30% 15%',
    marginLeft: '35px',
    marginRight: '35px',
    [screenSize.tablet]: {
      width: '30vw',
      minHeight: '340px',
    },
    [screenSize.smartphoneLandscape]: {
      width: '50vw'
    },
    [screenSize.smartphone]: {
      background: '#101213',
      padding: '20px',
      width: '85vw'
    }
  },

  icons: {
    height: '7.5vw',
    placeSelf: 'center',
    gridRowStart: '1',
    gridRowEnd: '2',
    pointerEvents: 'none',
    userSelect: 'none',
    [screenSize.tablet]: {
      height: '90px'
    },
    [screenSize.smartphoneLandscape]: {
      height: '80px'
    },
    [screenSize.smartphone]: {
      height: '80px'
    }
  },

  title: {
    placeSelf: 'center',
    gridRowStart: '2',
    gridRowEnd: '3'
  },

  description: {
    gridRowStart: '3',
    gridRowEnd: '4',
    textAlign: 'center'
  },

  button: {
    placeSelf: 'center',
    gridRowStart: '4',
    gridRowEnd: '5',
    backgroundColor: '#252526',
    border: 'none',
    color: 'white',
    padding: '10px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    ':hover': {
        cursor: 'pointer',
        backgroundColor: '#fae73c',
        color: '#252526'
    },
    ':active': {
      backgroundColor: '#5b8e15',
      color: 'white'
    }
  }

})
