import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'

export default () => {
  const data = useStaticQuery(
    graphql `
      query getWorkData {
        contentfulWork {
          workImages {
            title
            file {
              url
            }
          }
          title
        }
      }
    `
  )

  const [filter, setFilter] = React.useState('all')

  const toggleFilter = (argument) => setFilter(argument)

  function filterPhotos(){

    if (filter !== 'all') {
      const newData = data.contentfulWork.workImages.filter(function (item) {
    	   return item.title.substring(
           item.title.lastIndexOf("{") + 1,
           item.title.lastIndexOf("}")
         ) == filter
      })
      return(
        newData.map(image =>
          <div className={css(workStyles.container)}>
            <img className={css(workStyles.image)} src={image.file.url}/>
            <div className={css(workStyles.overlay)}>
              <p className={css(workStyles.overlayText)}>{image.title.substr(0, image.title.indexOf('**{'))}</p>
            </div>
          </div>
        )
      )
    }

    else {
      return(
        data.contentfulWork.workImages.map(image =>
          <div className={css(workStyles.container)}>
            <img className={css(workStyles.image)} src={image.file.url}/>
            <div className={css(workStyles.overlay)}>
              <p className={css(workStyles.overlayText)}>{image.title.substr(0, image.title.indexOf('**{'))}</p>
            </div>
          </div>
        )
      )
    }
  }

  return (
    <div>
      <h1>
        {data.contentfulWork.title.toUpperCase()}
      </h1>
      <div id="myBtnContainer">
        <button onClick={ () => toggleFilter('all') }>TOON ALLES</button>
        <button onClick={ () => toggleFilter(1) }>KMO'S</button>
        <button onClick={ () => toggleFilter(2) }>UITGEVERIJEN</button>
      </div>
      <div className={css(workStyles.wrapper)}>
        {filterPhotos()}
      </div>
    </div>
  )
}


const workStyles = StyleSheet.create({

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
    width: '400px',
    height: '400px',
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
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }

})
