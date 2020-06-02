import React, { useState, useContext } from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import { GlobalContext } from '../context/GlobalContext'
import { StyleSheet, css } from 'aphrodite'
import { screenSize } from './styles/styles'
import navicon from '../images/Banananas_navbar_logo.png'
import { FaChevronCircleLeft } from 'react-icons/fa'

export default () => {

  const { mainPage } = useContext(GlobalContext)

  const data = useStaticQuery (
    graphql `
      query getHeaderData {
        contentfulHeader {
          foregroundImage {
            file {
              url
            }
          }
          backgroundImage {
            file {
              url
            }
          }
        }
      }
    `
  )

  const placeBackButton = () => {
    if (!mainPage) {
      return(
        <div className={css(headerStyles.navicon)}>
          <Link
            to='/'
            className={css(headerStyles.back)}>
              <FaChevronCircleLeft className={css(headerStyles.icon)}/>
          </Link>
        </div>
      )
    }
  }

  return(
    <div className={css(headerStyles.background)}>
      <div className={css(headerStyles.container)}>
          {placeBackButton()}
        <img
          className={css(headerStyles.backimg)}
          src={data.contentfulHeader.backgroundImage.file.url}>
        </img>
        <img
          className={css(headerStyles.topimg)}
          src={data.contentfulHeader.foregroundImage.file.url}>
        </img>
      </div>
    </div>
  )
}

  const headerStyles = StyleSheet.create({

    background: {
      display: 'flex',
      background: '#f2f6f7'
    },

    container: {
      margin: '0 auto',
      marginTop: '2vw',
      display: 'grid',
      width: '93vw',
      height: '45vh',
      gridTemplateColumns: '1fr 10fr 1fr',
      gridTemplateRows: '1fr 6fr 1fr',
      background: 'black',
      overflow: 'hidden',
      minHeight: '400px',
      borderRadius: '10px',
      boxShadow: '2.5px 5px 30px #888888',
      [screenSize.tablet] : {
        height: '60vh'
      },
      [screenSize.smartphoneLandscape] : {
        height: '55vh'
      },
      [screenSize.smartphone] : {
        height: '60vh',
      }
    },

    navicon: {
      opacity: '1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '50',
      position: 'absolute',
      backgroundColor: '#222a2e',
      left: '4vw',
      top: '4vw',
      width: '3.5vw',
      borderRadius: '15px',
      ':hover': {
          cursor: 'pointer',
          background: 'linear-gradient(to right, #136a8a, #267871)'
      },
    },

    back: {
      userSelect: 'none',
      fontSize: '1.8vw',
      display: 'flex',
      padding: '0.5vw',
      justifyContent: 'center',
      color: 'white',
      ':focus': {
        outline: 'none'
      },
    },

    backimg: {
      height: '100%',
      minHeight: '200px',
      minWidth: '200px',
      width: '100%',
      gridColumnStart: '1',
      gridColumnEnd: '4',
      gridRowStart: '1',
      gridRowEnd: '4',
      objectFit: 'cover',
      opacity: '0.3',
      pointerEvents: 'none',
      userSelect: 'none'
    },

    topimg: {
      paddingTop: '4%',
      height: '30vh',
      minHeight: '200px',
      gridColumnStart: '2',
      gridColumnEnd: '3',
      gridRowStart: '2',
      gridRowEnd: '3',
      placeSelf: 'center',
      zIndex: '2',
      pointerEvents: 'none',
      userSelect: 'none',
    }

  })
