import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'

export default () => ( <
  StaticQuery query = {graphql `
    query getAboutData {
      allContentfulAbout(limit: 1) {
        edges {
          node {
            title
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
}
  `
  }
  render = {
    data => (
        data.allContentfulAbout.edges.map(edge =>
            <div className={css(aboutStyles.container)}>
                <div className={css(aboutStyles.grid)}>
                    <h1 className={css(aboutStyles.title)}>
                        {edge.node.title.toUpperCase()}
                    </h1>
                    <div
                      className={css(aboutStyles.description)}
                      dangerouslySetInnerHTML={
                        { __html: edge.node.description.childMarkdownRemark.html}
                      }
                    />
                </div>
            </div>
        ))
    }
    />
  )

  const aboutStyles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '35vh',
    },

    grid: {
      display: 'grid',
      width: '60%',
      height: '70%',
      gridTemplateColumns: '1',
      gridTemplateRows: '40% 60%',
    },

    title: {

    }


  })
