import React from 'react'
import { StyleSheet, css } from 'aphrodite'

export default () => {

  var curDate = new Date()
  console.log(curDate.getFullYear())

  return(
    <div className={css(contactStyles.background)}>
      <div className={css(contactStyles.container)}>
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

  container: {
    background: '#181e21',
    borderRadius: '0 0 35px 35px',
    padding: '2%',
    width: '90vw',
    height: '6vh',
    margin: '0 auto'
  },

  copyright: {
    color: 'white',
    fontSize: '1vw'
  }

})
