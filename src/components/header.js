import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'
import { screenSize } from "./styles/styles"
import navicon from '../images/Banananas_navbar_logo.png'

export default () => {
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

  const [mainPage, setMainPage] = useState(null);

  function isMainpage(bool){
    setMainPage(bool)
  }
  console.log(mainPage)

  return(
    <div className={css(headerStyles.background)}>
      <div className={css(headerStyles.container)}>
        <div className={css(headerStyles.navicon)}>
          <img
            className={css(headerStyles.logo)}
            src={navicon}>
          </img>
        </div>
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
      width: '95vw',
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
        height: '65vh',
        minHeight: '300px'
      }
    },

    navicon: {
      opacity: '0.6',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '50',
      position: 'absolute',
      backgroundColor: '#222a2e',
      left: '4vw',
      top: '4vw',
      width: '15vw',
      borderRadius: '15px',
      ':hover': {
        opacity: '1',
        cursor: 'pointer'
      }
    },

    logo: {
      padding: '1vw',
      marginBottom: '0'
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
