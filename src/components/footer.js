import React, { useContext } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { GlobalContext } from '../context/GlobalContext'

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
    height: '6vh',
    margin: '0 auto'
  },

  container: {
    display: 'flex',
    alignItems: 'center',
    background: '#181e21',
    borderRadius: '0 0 35px 35px',
    width: '74vw',
    height: '10vh',
    margin: '0 auto'
  },

  copyright: {
    paddingLeft: '2vw',
    color: 'white',
    fontSize: '1vw'
  }

})
