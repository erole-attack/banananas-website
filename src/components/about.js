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
      <span className={css(aboutStyles.title)}>
        {titleTransform(data.contentfulAbout)}
      </span>
      <div className={css(aboutStyles.grid)}>
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
      backgroundColor: '#e4eef2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '45vh',
      overflow: 'hidden',
      minHeight: '280px',
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
      [screenSize.tablet]: {
        display: 'none'
      },
    },

    grid: {
      display: 'flex',
      width: '65%',
      height: '100%',
      gridTemplateColumns: '1',
      gridTemplateRows: '100%',
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
      boxShadow: '2.5px 5px 30px #beccd1',
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
