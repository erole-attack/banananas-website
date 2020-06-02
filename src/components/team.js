import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import LazyLoad from 'react-lazyload'
import { StyleSheet, css } from 'aphrodite'
import { screenSize, titleTransform } from "./styles/styles"

export default () => {
  const data = useStaticQuery(
    graphql `
      query getTeamData {
        contentfulTeam {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          members {
            title
            description
            file {
              url
            }
          }
        }
      }
    `
  )

  return (
    <div className={css(teamStyles.container)} id='team'>
      <div className={css(teamStyles.headContainer)}>
        <div className={css(teamStyles.description)}
          dangerouslySetInnerHTML={
          { __html: data.contentfulTeam.description.childMarkdownRemark.html}
        }/>
        <h1 className={css(teamStyles.title)}>
          {titleTransform(data.contentfulTeam)}
        </h1>
      </div>
      <div className={css(teamStyles.wrapper)}>
        {data.contentfulTeam.members.map(member =>
          <div className={css(teamStyles.imageContainer)}>
            <LazyLoad offset={1000}>
              <img className={css(teamStyles.image)} src={member.file.url}/>
            </LazyLoad>
            <div className={css(teamStyles.overlay)}>
              <p className={css(teamStyles.overlayTitle)}>{member.title.toUpperCase()}</p>
              <p className={css(teamStyles.overlayText)}>{member.description.toUpperCase()}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const teamStyles = StyleSheet.create({

  container: {
    background: '#f2f6f7',
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: '500px',
    paddingBottom: '70px',
    [screenSize.smartphone]: {
      paddingBottom: '0px'
    }
  },

  headContainer: {
    paddingTop: '2%',
    paddingBottom: '0%',
    paddingLeft: '2%',
    paddingRight: '2%',
    position: 'relative',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70vw',
    height: '25vh',
    overflow: 'hidden',
    minHeight: '18vw',
    textAlign: 'center',
    '@media only screen and (min-width: 200px) and (max-width: 680px)': {
      width: '80vw',
      minHeight: '160px',
    },
    [screenSize.smartphone]: {
      marginBottom: '20px'
    }
  },

  description: {
    marginRight: '3%',
    width: '80%',
    fontSize: '1.1vw',
    backgroundColor: 'white',
    padding: '1vw',
    borderRadius: '5px'
  },

  wrapper: {
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95vw',
    overflow: 'hidden',
  },

  imageContainer: {
    paddingTop: '2.5%',
    paddingBottom: '2.5%',
    position: 'relative',
    marginRight: '0.5%',
    marginLeft: '0.5%',
    display: 'grid',
    width: '14vw',
    height: '21vw',
    gridTemplateColumns: '100%',
    gridTemplateRows: '10% 80% 10%',
    justifyContent: 'center',
    borderRadius: '10px',
    ':hover': {
      ':nth-child(1n) > div': {
        borderRadius: '0 0 10px 10px',
        background: '#222A2E',
        opacity: '1'
      },
      ':nth-child(1n) > div > p': {
        opacity: '1'
      }
    },
    '@media only screen and (min-width: 680px) and (max-width: 960px)': {
      width: '600px',
      height: '900px',
      padding: '10px'
    },
    '@media only screen and (min-width: 200px) and (max-width: 680px)': {
      width: '400px',
      height: '600px',
      padding: '10px'
    },
  },

  image: {
    boxShadow: '2.5px 2px 5px #bdc7c9',
    borderRadius: '10px',
    placeSelf: 'center',
    margin: '30px',
    gridColumnStart: '1',
    gridColumnEnd: '4',
    gridRowStart: '1',
    gridRowEnd: '4',
    objectFit: 'cover',
    height: '100%',
  },

  overlay: {
    paddingTop: '0.75vw',
    paddingBottom: '0.75vw',
    placeSelf: 'end center',
    height: '4vw',
    width: '100%',
    gridColumnStart: '1',
    gridColumnEnd: '4',
    gridRowStart: '1',
    gridRowEnd: '4',
    opacity: '0',
    '@media only screen and (min-width: 680px) and (max-width: 960px)': {
      height: '200px',
      width: '500px',
      marginBottom: '50px',
    },
    '@media only screen and (min-width: 200px) and (max-width: 680px)': {
      height: '200px',
      width: '300px',
      marginBottom: '50px',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      opacity: '1'
    },
  },

  overlayTitle: {
    fontSize: '0.9vw',
    textAlign: 'center',
    margin: '0 auto',
    color: 'white',
    '@media only screen and (min-width: 680px) and (max-width: 960px)': {
      fontSize: '20pt',
    },
    '@media only screen and (min-width: 200px) and (max-width: 680px)': {
      fontSize: '16pt',
    },
  },

  overlayText: {
    fontSize: '1.4vw',
    textAlign: 'center',
    margin: '0 auto',
    color: 'white',
    '@media only screen and (min-width: 680px) and (max-width: 960px)': {
      fontSize: '30pt',
    },
    '@media only screen and (min-width: 200px) and (max-width: 680px)': {
      fontSize: '24pt',
    },
  }

})
