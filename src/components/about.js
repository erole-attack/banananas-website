import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'

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
        <h1 className={css(aboutStyles.title)}>
          {data.contentfulAbout.title.toUpperCase()}
        </h1>
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
      height: '35vh'
    },

    grid: {
      display: 'grid',
      width: '60%',
      height: '70%',
      gridTemplateColumns: '1',
      gridTemplateRows: '40% 60%'
    }

  })
