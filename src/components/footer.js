import React, { useContext } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { screenSize, titleTransform } from './styles/styles'
import { GlobalContext } from '../context/globalContext'

export default () => {

  const { mainPage } = useContext(GlobalContext)

  var curDate = new Date()

  return(
    <div className={css(contactStyles.background)}>
      <div className={mainPage ? css(contactStyles.mainContainer) : css(contactStyles.container)}>
        <p className={css(contactStyles.copyright)}>© {curDate.getFullYear()} Banananas. All rights reserved.</p>
      </div>
    </div>
  )
}

const contactStyles = StyleSheet.create({

  background: {
    display: 'flex',
    background: '#f2f6f7',
    paddingBottom: '3.5vw',
  },

  mainContainer: {
    background: '#181e21',
    borderRadius: '0 0 35px 35px',
    padding: '2%',
    width: '90vw',
    height: '4vw',
    margin: '0 auto',
    [screenSize.tablet]: {
      height: '6vw',
    },
    [screenSize.smartphoneLandscape]: {
      height: '8vw',
    },
    [screenSize.smartphone]: {
      height: '10vw',
    }
  },

  container: {
    display: 'flex',
    alignItems: 'center',
    background: '#181e21',
    borderRadius: '0 0 35px 35px',
    width: '74vw',
    height: '10vh',
    margin: '0 auto',
    [screenSize.tablet]: {
      width: '67vw'
    },
    [screenSize.smartphoneLandscape]: {
      width: '90vw'
    },
    [screenSize.smartphone]: {
      width: '93vw'
    }
  },

  copyright: {
    paddingLeft: '2vw',
    color: 'white',
    fontSize: '1vw',
    [screenSize.tablet]: {
      fontSize: '1.4vw'
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '1.7vw'
    },
    [screenSize.smartphone]: {
      fontSize: '2.6vw'
    }
  }

})
