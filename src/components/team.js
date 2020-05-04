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
    margin: '40px 0 30px 0'
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: '500px',
    paddingBottom: '70px'
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
    minHeight: '160px',
    textAlign: 'center',
    '@media only screen and (min-width: 200px) and (max-width: 680px)': {
      width: '80vw',
      minHeight: '160px',
    },
  },

  description: {
    height: '60%',
  },

  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
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
    gridTemplateColumns: '20px auto 20px',
    gridTemplateRows: '50px auto 50px',
    justifyContent: 'center',
    ':hover': {
      ':nth-child(1n) > div': {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        opacity: '1'
      }
    },
    '@media only screen and (min-width: 300px) and (max-width: 960px)': {
      width: '600px',
      height: '900px',
      padding: '1vw',
    },
    '@media only screen and (min-width: 680px) and (max-width: 960px)': {
      width: '600px',
      height: '900px',
    },
    '@media only screen and (min-width: 200px) and (max-width: 680px)': {
      width: '400px',
      height: '600px',
    },
  },

  image: {
    placeSelf: 'center',
    margin: '30px',
    gridColumnStart: '1',
    gridColumnEnd: '4',
    gridRowStart: '1',
    gridRowEnd: '4'
  },

  overlay: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    placeSelf: 'end center',
    height: '40%',
    width: '100%',
    gridColumnStart: '2',
    gridColumnEnd: '3',
    gridRowStart: '2',
    gridRowEnd: '3',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    opacity: '0',
    '@media only screen and (min-width: 300px) and (max-width: 960px)': {
      opacity: '1'
    }
  },

  overlayTitle: {
    flexBasis: '100%',
    fontSize: '1.6vh',
    textAlign: 'center',
    color: 'white',
    '@media only screen and (min-width: 960px) and (max-width: 1160px)': {
      fontSize: '1.2vh'
    },
    '@media only screen and (min-width: 300px) and (max-width: 960px)': {
      fontSize: '2.6vh'
    }
  },

  overlayText: {
    flexBasis: '100%',
    fontSize: '2.6vh',
    textAlign: 'center',
    color: 'white',
    '@media only screen and (min-width: 960px) and (max-width: 1160px)': {
      fontSize: '1.8vh'
    },
    '@media only screen and (min-width: 300px) and (max-width: 960px)': {
      fontSize: '4.2vh'
    }
  }

})
