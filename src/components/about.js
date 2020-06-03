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
      margin: '0 auto',
      backgroundColor: '#f2f6f7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '22vw',
      overflow: 'hidden',
      minHeight: '280px',
      paddingBottom: '5vw',
      [screenSize.tablet]: {
        height: '40vh',
        flexDirection: 'column',
        minHeight: '320px',
      },
      [screenSize.smartphoneLandscape]: {
        height: '45vh',
        flexDirection: 'column',
        minHeight: '340px',
      },
      [screenSize.smartphone]: {
        height: '40vh',
        flexDirection: 'column',
        minHeight: '400px',
      }
    },

    title: {
      [screenSize.tablet]: {
        marginTop: '5%'
      },
      [screenSize.smartphoneLandscape]: {
        marginTop: '6vw'
      },
      [screenSize.smartphone]: {
        marginTop: '10vw'
      }
    },

    grid: {
      marginLeft: '2vw',
      display: 'flex',
      width: '55%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      [screenSize.tablet]: {
        margin: '0 auto',
        width: '80%',
      },
      [screenSize.smartphoneLandscape]: {
        margin: '0 auto',
        width: '90%',
      },
      [screenSize.smartphone]: {
        marginLeft: '0',
        width: '95%',
      }
    },

    description: {
      fontSize: '1.2vw',
      backgroundColor:'white',
      padding: '3%',
      borderRadius: '5px',
      [screenSize.tablet]: {
        fontSize: '12pt',
        lineHeight: '16pt'
      },
      [screenSize.smartphoneLandscape]: {
        fontSize: '12pt',
        lineHeight: '16pt'
      },
      [screenSize.smartphone]: {
        fontSize: '12pt',
        lineHeight: '16pt'
      }
    }

  })
