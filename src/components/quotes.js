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
            {console.log(edge.node.source)}
            <p className={css(quotesStyles.source)}>{edge.node.source !== null ? '- ' + edge.node.source : ""}</p>
          </div>
        )}
      </Carousel>
    </div>
  )

}

const quotesStyles = StyleSheet.create({

  container: {
    marginTop: '50px',
    display: 'grid',
    width: '100vw',
    height: '45vh',
    minHeight: '450px',
    gridTemplateColumns: '1fr 10fr 1fr',
    gridTemplateRows: '1fr 6fr 1fr',
    background: 'black',
    overflow: 'hidden',
    justifyItems: 'center'
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
    userSelect: 'none'
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
      height: '100%'
    },
    [screenSize.smartphone]: {
      width: '100%',
      height: '100%'
    }
  },

  quoteContainer: {
    height: '30vh',
    minHeight: '250px',
    display: 'flex',
    flexWrap: 'wrap',
  },

  sign: {
    flexBasis: '100%',
    position: 'relative',
    left: '-38%',
    top: '20%',
    color: 'white',
    maxHeight: '3vw',
    pointerEvents: 'none',
    userSelect: 'none'
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
      fontSize: '2.4vw',
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '3.4vw'

    },
    [screenSize.smartphone]: {
      fontSize: '4.2vw'
    }
  },

  source: {
    flexBasis: '100%',
    position: 'relative',
    left: '20%',
    top: '-15%',
    color: 'white',
    alignSelf: 'center',
    fontSize: '1.1vw',
    [screenSize.tablet]: {
      fontSize: '1.4vw',
      top: '0%'
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '1.7vw',
      top: '20%'
    },
    [screenSize.smartphone]: {
      fontSize: '2.1vw',
      top: '20%',
    }
  }

})
