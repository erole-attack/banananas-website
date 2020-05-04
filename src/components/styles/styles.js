import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const screenSize = {
  smartphone: '@media only screen and (max-width: 479px)',
  smartphoneLandscape: '@media only screen and (min-width:480px) and (max-width: 767px)',
  tablet: '@media only screen and (min-width: 768px) and (max-width: 991px)',
  desktop: '@media only screen and (min-width: 992px)'
}

const titleTransform = (dataLocation) => {
  const titleSplit = dataLocation.title
  .toUpperCase()
  .split(" ")

  const newTitle = titleSplit.map(word => {
    if(word === "BANANANAS")
        return <strong className={css(titleStyles.words)}>
                {word}
              </strong>
    return <span className={css(titleStyles.words)}>{word}</span>
  })

  return <div className={css(titleStyles.container)}>{newTitle}</div>
}

const titleStyles = StyleSheet.create({

  container: {
    display: 'flex',
    justifyContent: 'center',
  },

  words: {
    fontSize: '4Vh',
    padding: '5px'
  }

})


export { screenSize, titleTransform }
