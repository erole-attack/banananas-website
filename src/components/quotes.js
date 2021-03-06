import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'
import Carousel from 'nuka-carousel'
import { screenSize } from "./styles/styles"
import quotationSign from'../images/left-quotation-sign.svg'

export default () => {
    const data = useStaticQuery(
      graphql `
        query getQuoteData {
          allContentfulQuotes(limit: 3) {
            edges {
              node {
                quote {
                  childMarkdownRemark {
                    html
                  }
                }
              source
              }
            }
          }
          contentfulHeader {
            backgroundImage {
              file {
                url
              }
            }
          }
        }
      `
    )

  return(
    <div className={css(quotesStyles.background)}>
      <div className={css(quotesStyles.container)}>
        <img
          className={css(quotesStyles.backimg)}
          src={data.contentfulHeader.backgroundImage.file.url}
        />
        <Carousel className={css(quotesStyles.wrapper)}
          autoplay = {true}
          swiping = {true}
          dragging = {true}
          wrapAround = {true}
          slidesToScroll = {'auto'}
          defaultControlsConfig={{
            nextButtonStyle: '',
            prevButtonStyle: '',
            pagingDotsStyle: {
              fill: 'white'
            }
          }}
        >
          {data.allContentfulQuotes.edges.map(edge =>
            <div className={css(quotesStyles.quoteContainer)}>
              <img
                src={quotationSign}
                className={css(quotesStyles.sign)}
              />
              <div className={css(quotesStyles.quote)}
                dangerouslySetInnerHTML={
                  {__html: edge.node.quote.childMarkdownRemark.html}
                }
              />
              <p className={css(quotesStyles.source)}>{edge.node.source !== null ? '- ' + edge.node.source : ""}</p>
            </div>
          )}
        </Carousel>
      </div>
    </div>
  )

}

const quotesStyles = StyleSheet.create({

  background: {
    display: 'flex',
    background: 'linear-gradient(0deg, #f2f6f7 70%, rgba(0,0,0,0) 30%)',
  },

  container: {
    margin: '0 auto',
    marginTop: '2%',
    display: 'grid',
    width: '90vw',
    height: '22vw',
    minHeight: '350px',
    gridTemplateColumns: '1fr 10fr 1fr',
    gridTemplateRows: '1fr 6fr 1fr',
    background: 'black',
    overflow: 'hidden',
    justifyItems: 'center',
    borderRadius: '25px',
    boxShadow: '2.5px 5px 30px #888888',
    zIndex: '500',
    [screenSize.smartphoneLandscape]: {
      marginTop: '6%'
    },
    [screenSize.smartphone]: {
      marginTop: '10%'
    }
  },

  backimg: {
    height: '100%',
    width: '100%',
    gridColumnStart: '1',
    gridColumnEnd: '4',
    gridRowStart: '1',
    gridRowEnd: '4',
    objectFit: 'cover',
    opacity: '0.3',
    pointerEvents: 'none',
    userSelect: 'none',
    marginBottom: '0'
  },

  wrapper: {
    textAlign: 'center',
    verticalAlign: 'middle',
    height: '100%',
    width: '80%',
    gridColumnStart: '2',
    gridColumnEnd: '3',
    gridRowStart: '2',
    gridRowEnd: '3',
    placeSelf: 'center',
    ':focus': {
      outline: 'none'
    },
    [screenSize.tablet]: {
      width: '100%',
      height: '90%'
    },
    [screenSize.smartphoneLandscape]: {
      width: '100%',
      height: '300px'
    },
    [screenSize.smartphone]: {
      width: '100%',
      height: '300px'
    }
  },

  quoteContainer: {
    height: '18vw',
    display: 'flex',
    flexWrap: 'wrap',
    [screenSize.tablet]: {
      width: '100%',
      height: '90%'
    },
    [screenSize.smartphoneLandscape]: {
      width: '110%',
      height: '100px'
    },
    [screenSize.smartphone]: {
      width: '110%',
      height: '100px'
    }
  },

  sign: {
    flexBasis: '100%',
    position: 'relative',
    left: '-39%',
    top: '20%',
    color: 'white',
    height: '2vw',
    pointerEvents: 'none',
    userSelect: 'none',
    [screenSize.tablet]: {
      height: '30px',
    },
    [screenSize.smartphoneLandscape]: {
      left: '-38%',
      height: '40px'
    },
    [screenSize.smartphone]: {
      left: '-38%',
      height: '40px'
    }
  },

  quote: {
    display: 'inline-block',
    height: '80%',
    zIndex: '30',
    color: 'white',
    flexBasis: '85%',
    fontSize: '1.4vw',
    marginLeft: '15%',
    marginRight: '15%',
    [screenSize.tablet]: {
      fontSize: '12pt',
      lineHeight: '14.5pt'
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '13pt',
      lineHeight: '18.5pt'
    },
    [screenSize.smartphone]: {
      fontSize: '13pt',
      lineHeight: '18.5pt'
    }
  },

  source: {
    flexBasis: '100%',
    position: 'relative',
    left: '20%',
    top: '-40%',
    color: 'white',
    alignSelf: 'center',
    fontSize: '1.1vw',
    [screenSize.tablet]: {
      fontSize: '10pt',
      top: '100px'
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '10pt',
      top: '-100px'
    },
    [screenSize.smartphone]: {
      fontSize: '10pt',
      top: '-100px'
    }
  }

})
