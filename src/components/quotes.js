import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'
import Carousel from 'nuka-carousel'

export default () => ( <
    StaticQuery query = {
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
    }

    render = {
      data => (
        <div className={css(quotesStyles.container)}>
            <img
              className={css(quotesStyles.backimg)}
              src={data.contentfulHeader.backgroundImage.file.url}/>
            <Carousel className={css(quotesStyles.quoteContainer)}
              autoplay = {true}
              swiping = {true}
              framePadding = {'10vh'}
              dragging = {true}
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
                <div>
                <div className={css(quotesStyles.quote)}
                  dangerouslySetInnerHTML={
                    {__html: edge.node.quote.childMarkdownRemark.html}
                  }
                />
                <p>{edge.node.source}</p>
                </div>
              )}
            </Carousel>
        </div>
      )
    }
/>)

const quotesStyles = StyleSheet.create({
  container: {
    display: 'grid',
    width: '100vw',
    height: '45vh',
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
    opacity: '0.3'
  },

  quoteContainer: {
    textAlign: 'center',
    verticalAlign: 'middle',
    height: '100%',
    width: '100%',
    gridColumnStart: '2',
    gridColumnEnd: '3',
    gridRowStart: '2',
    gridRowEnd: '3',
    placeSelf: 'center',
  },

  quote: {
    height: '100%',
    width: '100%',
    zIndex: '30',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  }
})
