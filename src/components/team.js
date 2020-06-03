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
    height: '15vw',
    overflow: 'hidden',
    minHeight: '18vw',
    textAlign: 'center',
    [screenSize.tablet]: {
      flexDirection: 'column-reverse',
      minHeight: '300px',
    },
    [screenSize.smartphoneLandscape]: {
      flexDirection: 'column-reverse',
      minHeight: '300px',
    },
    [screenSize.smartphone]: {
      width: '93vw',
      flexDirection: 'column-reverse',
      minHeight: '350px',
    }
  },

  description: {
    marginRight: '3%',
    width: '80%',
    fontSize: '1.1vw',
    backgroundColor: 'white',
    padding: '1vw',
    borderRadius: '5px',
    [screenSize.tablet]: {
      fontSize: '14pt',
      lineHeight: '18pt',
      paddingLeft: '20vw',
      paddingRight: '20vw',
      marginRight: '0%',
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '14pt',
      lineHeight: '18pt',
      paddingLeft: '5vw',
      paddingRight: '5vw',
      marginRight: '0%',
      marginTop: '4%'
    },
    [screenSize.smartphone]: {
      fontSize: '14pt',
      lineHeight: '18pt',
      width: '93%',
      marginRight: '0%',
      marginTop: '4%'
    }
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
    [screenSize.tablet]: {
      width: '16vw',
      height: 'auto',
      marginRight: '1%',
      marginLeft: '1%',
    },
    [screenSize.smartphoneLandscape]: {
      width: '66.6vw',
      height: 'auto',
    },
    [screenSize.smartphone]: {
      width: '90vw',
      height: 'auto',
    }
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
    [screenSize.tablet]: {
      height: '6vw',
    },
    [screenSize.smartphoneLandscape]: {
      height: '24vw',
    },
    [screenSize.smartphone]: {
      height: '30vw',
    }
  },

  overlayTitle: {
    fontSize: '0.9vw',
    textAlign: 'center',
    margin: '0 auto',
    color: 'white',
    [screenSize.tablet]: {
      fontSize: '1.2vw',
      padding: '0.4vw'
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '4.3vw',
      padding: '2.4vw'
    },
    [screenSize.smartphone]: {
      fontSize: '5vw',
      padding: '3.8vw'
    }
  },

  overlayText: {
    fontSize: '1.4vw',
    textAlign: 'center',
    margin: '0 auto',
    color: 'white',
    [screenSize.tablet]: {
      fontSize: '1.8vw',
      padding: '0.4vw'
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '6.7vw',
      padding: '2.4vw'
    },
    [screenSize.smartphone]: {
      fontSize: '7.8vw',
      padding: '3.8vw'
    }
  }

})
