import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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
    <div className={css(teamStyles.container)}>
      <div className={css(teamStyles.headContainer)}>
        <h1 className={css(teamStyles.title)}>
          {titleTransform(data.contentfulTeam)}
        </h1>
        <div className={css(teamStyles.description)}
          dangerouslySetInnerHTML={
          { __html: data.contentfulTeam.description.childMarkdownRemark.html}
        }/>
      </div>
      <div className={css(teamStyles.wrapper)}>
        {data.contentfulTeam.members.map(member =>
          <div className={css(teamStyles.imageContainer)}>
            <img className={css(teamStyles.image)} src={member.file.url}/>
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

  title: {
    margin: '20px 0 30px 0'
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: '500px',
    paddingBottom: '70px',
    [screenSize.smartphone]: {
      paddingBottom: '0px'
    }
  },

  headContainer: {
    position: 'relative',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60vw',
    height: '25vh',
    overflow: 'hidden',
    minHeight: '200px',
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
    height: '60%',
  },

  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '8px',
    width: '95vw',
    overflow: 'hidden',
    padding: '15px'
  },

  imageContainer: {
    position: 'relative',
    display: 'grid',
    width: '16vw',
    height: '24vw',
    padding: '0.5vw',
    gridTemplateColumns: '100%',
    gridTemplateRows: '10% 80% 10%',
    justifyContent: 'center',
    ':hover': {
      ':nth-child(1n) > div': {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
    placeSelf: 'end center',
    height: '8vw',
    width: '12vw',
    marginBottom: '1.5vw',
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
    flexBasis: '100%',
    fontSize: '0.9vw',
    textAlign: 'center',
    color: 'white',
    '@media only screen and (min-width: 680px) and (max-width: 960px)': {
      fontSize: '20pt',
    },
    '@media only screen and (min-width: 200px) and (max-width: 680px)': {
      fontSize: '16pt',
    },
  },

  overlayText: {
    flexBasis: '100%',
    fontSize: '1.4vw',
    textAlign: 'center',
    color: 'white',
    '@media only screen and (min-width: 680px) and (max-width: 960px)': {
      fontSize: '30pt',
    },
    '@media only screen and (min-width: 200px) and (max-width: 680px)': {
      fontSize: '24pt',
    },
  }

})
