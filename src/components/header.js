import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'

export default () => {
  const data = useStaticQuery (
    graphql `
      query getHeaderData {
        contentfulHeader {
          foregroundImage {
            file {
              url
            }
          }
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
    <header className={css(headerStyles.container)}>
      <img
        className={css(headerStyles.backimg)}
        src={data.contentfulHeader.backgroundImage.file.url}>
      </img>
      <img
        className={css(headerStyles.topimg)}
        src={data.contentfulHeader.foregroundImage.file.url}>
      </img>
    </header>
  )
}

  const headerStyles = StyleSheet.create({

    container: {
      display: 'grid',
      width: '100vw',
      height: '65vh',
      gridTemplateColumns: '1fr 10fr 1fr',
      gridTemplateRows: '1fr 6fr 1fr',
      background: 'black',
      overflow: 'hidden'
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

    topimg: {
      height: '100%',
      gridColumnStart: '2',
      gridColumnEnd: '3',
      gridRowStart: '2',
      gridRowEnd: '3',
      placeSelf: 'center',
      zIndex: '30'
    }
    
  })
