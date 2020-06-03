import React, { useContext }from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'
import { screenSize } from './styles/styles'

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

  const generateServiceBlock = param => {
    switch(param) {
      case "KMO's": return 'kmos'
      case 'Reclamebureaus': return 'reclamebureaus'
      case 'Uitgeverijen': return 'uitgeverijen'
    }
  }

  const trimServiceBlockText = (path) =>{
    const serviceBlockText = path.slice(0,100).split(" ")
    const popped = serviceBlockText.pop()
    return serviceBlockText.join(" ").concat(' ...')
  }

  return(
    <div className={css(servicesStyles.background)} id='diensten'>
      <div className={css(servicesStyles.container)}>
        <div className={css(servicesStyles.grid)}>
          {data.allContentfulServices.edges.map(edge =>
            <>
            <Link to={generateServiceBlock(edge.node.title)} className={css(servicesStyles.serviceBlock)}>
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
              <p className={css(servicesStyles.button)}>LEES MEER</p>
            </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

const servicesStyles = StyleSheet.create({

  container: {
    width: '68vw',
    height: '30vw',
    background: '#283237',
    borderRadius: '15px',
    boxShadow: '2.5px 5px 30px #888888',
    overflow: 'hidden',
    color: 'white',
    margin: '0 auto',
    [screenSize.tablet]: {
      height: '380px',
      width: '93vw',
    },
    [screenSize.smartphoneLandscape]: {
      height: '1300px',
      width: '65vw',
      padding: '25px'
    },
    [screenSize.smartphone]: {
      height: '1300px',
      width: '93vw',
      paddingTop: '12.5px',
      paddingBottom: '12.5px'
    }
  },

  background: {
    background: 'linear-gradient(0deg, rgba(0,0,0,0) 60%, #f2f6f7 40%)'
  },

  grid: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    [screenSize.smartphoneLandscape]: {
      flexWrap: 'wrap',
    },
    [screenSize.smartphone]: {
      flexWrap: 'wrap',
    }
  },

  serviceBlock: {
    marginLeft: '2%',
    marginRight: '2%',
    backgroundColor: '#222A2E',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: '25px',
    width: '14vw',
    height: '20vw',
    padding: '2vw',
    minHeight: '18vw',
    boxShadow: '5px 10px 18px #101213',
    outline: 'none',
    textDecoration: 'none',
    ':hover': {
        cursor: 'pointer',
        background: 'linear-gradient(to right, #136a8a, #267871)',
        ':nth-child(1n) > p': {
          fontSize: '1.2vw'
        },
    },
    ':link': {
      textDecoration: 'none',
      color: 'white'
    },
    [screenSize.tablet]: {
      marginLeft: '1.2vw',
      marginRight: '1.2vw',
      width: '180px',
      height: '270px',
      ':hover': {
          cursor: 'pointer',
          background: 'linear-gradient(to right, #136a8a, #267871)',
          ':nth-child(1n) > p': {
            fontSize: '12pt'
          },
      }
    },
    [screenSize.smartphoneLandscape]: {
      marginLeft: '1.2vw',
      marginRight: '1.2vw',
      width: '280px',
      height: '370px',
      ':hover': {
          cursor: 'pointer',
          background: 'linear-gradient(to right, #136a8a, #267871)',
          ':nth-child(1n) > p': {
            fontSize: '18pt'
          },
      }
    },
    [screenSize.smartphone]: {
      padding: '15px',
      marginLeft: '1.2vw',
      marginRight: '1.2vw',
      width: '280px',
      height: '370px',
      ':hover': {
          cursor: 'pointer',
          background: 'linear-gradient(to right, #136a8a, #267871)',
          ':nth-child(1n) > p': {
            fontSize: '18pt'
          },
      }
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
      height: '60px',
    },
    [screenSize.smartphoneLandscape]: {
      height: '80px'
    },
    [screenSize.smartphone]: {
      height: '80px'
    }
  },

  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: '1.4vw',
    fontWeight: '300',
    placeSelf: 'center',
    gridRowStart: '2',
    gridRowEnd: '3',
    [screenSize.tablet]: {
      fontSize: '13pt',
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '18pt',
    },
    [screenSize.smartphone]: {
      fontSize: '18pt',
    }
  },

  description: {
    color: '#d1dbde',
    fontSize: '1vw',
    lineHeight: '1.2vw',
    gridRowStart: '3',
    gridRowEnd: '4',
    textAlign: 'center',
    [screenSize.tablet]: {
      fontSize: '9pt',
      lineHeight: '12pt',
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '12pt',
      lineHeight: '16pt',
    },
    [screenSize.smartphone]: {
      fontSize: '11pt',
      lineHeight: '14pt',
    }
  },

  button: {
    transition: 'font-size 0.4s ease',
    placeSelf: 'center',
    gridRowStart: '4',
    gridRowEnd: '5',
    fontSize: '0.8vw',
    fontWeight: '800',
    border: 'none',
    color: 'white',
    margin: '0',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    ':hover': {
      cursor: 'pointer',
    },
    [screenSize.tablet]: {
      fontSize: '7pt',
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '12pt',
    },
    [screenSize.smartphone]: {
      fontSize: '12pt',
    }
  }

})
