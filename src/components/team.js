import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'

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
    <div>
      <h1>
        {data.contentfulTeam.title.toUpperCase()}
      </h1>
      <p dangerouslySetInnerHTML={
        { __html: data.contentfulTeam.description.childMarkdownRemark.html}
      }/>
      <div className={css(teamStyles.wrapper)}>
        {data.contentfulTeam.members.map(member =>
          <div className={css(teamStyles.container)}>
            <img className={css(teamStyles.image)} src={member.file.url}/>
            <div className={css(teamStyles.overlay)}>
              <p className={css(teamStyles.overlayText)}>{member.title}</p>
              <p className={css(teamStyles.overlayText)}>{member.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const teamStyles = StyleSheet.create({

  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    overflow: 'hidden',
    padding: '15px'
  },

  container: {
    position: 'relative',
    display: 'grid',
    width: '240px',
    height: '360px',
    padding: '10px',
    gridTemplateColumns: '1fr 10fr 1fr',
    gridTemplateRows: '1fr 6fr 1fr',
    justifyContent: 'center',
    ':hover': {
      ':nth-child(1n) > div': {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        opacity: '1'
      }
    }
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
    placeSelf: 'center',
    height: '90%',
    width: '90%',
    gridColumnStart: '1',
    gridColumnEnd: '4',
    gridRowStart: '1',
    gridRowEnd: '4',
    opacity: '0'
  },

  overlayText: {
    color: 'white',
  }

})
