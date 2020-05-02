import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'
import { screenSize, titleTransform } from "./styles/styles"

export default () => {
  const data = useStaticQuery(
    graphql `
      query getAboutData {
        contentfulAbout {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    `
  )

  return(
    <div className={css(aboutStyles.container)}>
      <div className={css(aboutStyles.grid)}>
        {titleTransform(data.contentfulAbout)}
        <div
          className={css(aboutStyles.description)}
          dangerouslySetInnerHTML={
          { __html: data.contentfulAbout.description.childMarkdownRemark.html}
          }
        />
      </div>
    </div>
  )
}

  const aboutStyles = StyleSheet.create({

    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '35vh',
      overflow: 'hidden',
      minHeight: '300px',
      [screenSize.tablet]: {
        height: '40vh'
      },
      [screenSize.smartphoneLandscape]: {
        height: '45vh'
      },
      [screenSize.smartphone]: {
        height: '50vh',
        minHeight: '400px'
      }
    },

    grid: {
      display: 'grid',
      width: '60%',
      height: '70%',
      gridTemplateColumns: '1',
      gridTemplateRows: '40% 60%',
      justifyItems: 'center',
      textAlign: 'center',
      [screenSize.smartphone]: {
        width: '80%',
      }
    },

  })
