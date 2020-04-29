import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'

export default () => ( <
  StaticQuery query = {
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
  }
  render = {
    data => (
        <div className={css(servicesStyles.container)}>
            <div className={css(servicesStyles.grid)}>
                {data.allContentfulServices.edges.map(edge =>
                    <div className={css(servicesStyles.serviceBlock)}>
                        <img src={edge.node.servicesIcon.file.url}
                          className={css(servicesStyles.icons)}/>
                        <h2 className={css(servicesStyles.title)}>
                            {edge.node.title.toUpperCase()}
                        </h2>
                        <div
                          className={css(servicesStyles.description)}
                          dangerouslySetInnerHTML={
                            { __html: edge.node.description.childMarkdownRemark.html.slice(0,90).concat(' ...')}
                          }
                        />
                        <button type="button" className={css(servicesStyles.button)}>Lees meer</button>
                    </div>
                )}
            </div>
        </div>
      )
    }
/>)

const servicesStyles = StyleSheet.create({
  container: {
    width: '100vw',
    height: '45vh',
    background: '#101213',
    overflow: 'hidden',
    color: 'white'
  },

  icons: {
    height: '100px',
    placeSelf: 'center',
    gridRowStart: '1',
    gridRowEnd: '2'
  },

  title: {
    placeSelf: 'center',
    gridRowStart: '2',
    gridRowEnd: '3'
  },

  description: {
    placeSelf: 'center',
    gridRowStart: '3',
    gridRowEnd: '4'
  },

  button: {
    placeSelf: 'center',
    gridRowStart: '4',
    gridRowEnd: '5'
  },

  grid: {
    display: 'grid',
    width: '75%',
    height: '100%',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr',
    columnGap: '30px',
    margin: '0 auto',
  },

  serviceBlock: {
    display: 'grid',
    placeSelf: 'center',
    height: '80%',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '40% 25% 25% 10%',
  }
})
