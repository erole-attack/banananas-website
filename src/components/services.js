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
    <div className={css(servicesStyles.background)}>
      <div className={css(servicesStyles.container)}>
        <div className={css(servicesStyles.grid)}>
          {data.allContentfulServices.edges.map(edge =>
            <Link to="/page-2/" className={css(servicesStyles.serviceBlock)}>
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
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

const servicesStyles = StyleSheet.create({

  container: {
    width: '78vw',
    height: '40vh',
    background: '#283237',
    borderRadius: '15px',
    boxShadow: '2.5px 5px 30px #888888',
    overflow: 'hidden',
    color: 'white',
    margin: '0 auto',
    minHeight: '320px',
    [screenSize.tablet]: {
      height: '10vh',
      width: '85vw',
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

  background: {
    background: 'linear-gradient(0deg, rgba(0,0,0,0) 60%, #e4eef2 40%)'
  },

  grid: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    margin: '0 auto',
    [screenSize.tablet]: {
      flexWrap: 'nowrap',
      width: '90%'
    },
    [screenSize.smartphoneLandscape]: {
      width: '90%'
    },
    [screenSize.smartphone]: {
      width: '90%'
    }
  },

  serviceBlock: {
    marginTop: '0%',
    marginLeft: '2%',
    marginRight: '2%',
    padding: '2%',
    backgroundColor: '#222A2E',
    display: 'grid',
    borderRadius: '25px',
    width: '14vw',
    height: '27vh',
    minHeight: '190px',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '25% 15% 50% 10%',
    boxShadow: '5px 10px 18px #101213',
    outline: 'none',
    textDecoration: 'none',
    ':hover': {
        cursor: 'pointer',
        background: 'linear-gradient(to right, #136a8a, #267871)',
        ':nth-child(1n) > a': {
          fontSize: '1vw',
          color: 'yellow'
        },
      },
    ':link': {
      textDecoration: 'none',
      color: 'white'
    },
    [screenSize.tablet]: {
      marginLeft: '3%',
      marginRight: '3%',
      padding: '20px',
      borderRadius: '25px',
      gridTemplateRows: '40% 12% 39% 9%',
      height: '26vh',
      minHeight: '200px',
      outline: 'none'
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
    height: '4vw',
    placeSelf: 'center',
    gridRowStart: '1',
    gridRowEnd: '2',
    pointerEvents: 'none',
    userSelect: 'none',
    [screenSize.tablet]: {
      height: '90%'
    },
    [screenSize.smartphoneLandscape]: {
      height: '80px'
    },
    [screenSize.smartphone]: {
      height: '80px'
    }
  },

  title: {
    fontSize: '1.4vw',
    fontWeight: '300',
    placeSelf: 'center',
    gridRowStart: '2',
    gridRowEnd: '3',
    [screenSize.tablet]: {
      fontSize: '1.4vw',
    },
    [screenSize.smartphoneLandscape]: {
    },
    [screenSize.smartphone]: {
    }
  },

  description: {
    fontSize: '1vw',
    lineHeight: '1.2vw',
    gridRowStart: '3',
    gridRowEnd: '4',
    textAlign: 'center',
    [screenSize.tablet]: {
      fontSize: '1.2vw',
    },
    [screenSize.smartphoneLandscape]: {

    },
    [screenSize.smartphone]: {

    }
  },

  button: {
    placeSelf: 'center',
    gridRowStart: '4',
    gridRowEnd: '5',
    fontSize: '0.8vw',
    fontWeight: '800',
    border: 'none',
    color: 'white',
    padding: '10px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    ':hover': {
      cursor: 'pointer',
    },
    [screenSize.tablet]: {
      fontSize: '1vw'
    },
    [screenSize.smartphoneLandscape]: {
    },
    [screenSize.smartphone]: {
    }
  }

})
