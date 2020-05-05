import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import LazyLoad from 'react-lazyload'
import { StyleSheet, css } from 'aphrodite'
import { screenSize, titleTransform } from "./styles/styles"

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
            <LazyLoad height={400}>
              <img className={css(workStyles.image)} src={image.file.url}/>
            </LazyLoad>
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
            <LazyLoad height={400}>
              <img className={css(workStyles.image)} src={image.file.url}/>
            </LazyLoad>
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
      <h1 className={css(workStyles.title)}>
        {titleTransform(data.contentfulWork)}
      </h1>
      <div id="myBtnContainer" className={css(workStyles.buttons)}>
        <button className={css(workStyles.button)} onClick={ () => toggleFilter('all') }>{filter === "all" ? <strong>TOON ALLES</strong> : <span>TOON ALLES</span>}</button>
        <button className={css(workStyles.button)} onClick={ () => toggleFilter(1) }>{filter === 1 ? <strong>KMO'S</strong> : <span>KMO'S</span>}</button>
        <button className={css(workStyles.button)} onClick={ () => toggleFilter(2) }>{filter === 2 ? <strong>UITGEVERIJEN</strong> : <span>UITGEVERIJEN</span>}</button>
      </div>
      <div className={css(workStyles.wrapper)}>
        {filterPhotos()}
      </div>
    </div>
  )
}


const workStyles = StyleSheet.create({

  title: {
    margin: '40px 0 30px 0'
  },

  buttons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 0 30px 0'
  },

  button: {
    border: 'none',
    color: '#252526',
    backgroundColor: 'white',
    padding: '10px 32px',
    margin: '5px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    ':hover': {
        cursor: 'pointer',
        color: '#5b8e15'
    },
  },

  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    placeContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    width: '95vw',
    overflow: 'hidden'
  },

  container: {
    position: 'relative',
    display: 'grid',
    width: '27.5vw',
    height: '27.5vw',
    padding: '0.5vw',
    gridTemplateColumns: '100%',
    gridTemplateRows: '10% 80% 10%',
    placeContent: 'center',
    ':hover': {
      ':nth-child(1n) > div': {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        opacity: '1'
      }
    },
    [screenSize.tablet]: {
      width: '45vw',
      height: '45vw',
      padding: '1vw'
    },
    [screenSize.smartphoneLandscape]: {
      width: '40vw',
      height: '40vw',
      padding: '2vw'
    },
    [screenSize.smartphone]: {
      width: '90vw',
      height: '90vw',
      padding: '2.5vw',
    }
  },

  image: {
    placeSelf: 'center',
    margin: '30px',
    gridColumnStart: '1',
    gridColumnEnd: '4',
    gridRowStart: '1',
    gridRowEnd: '4',
    objectFit: 'cover',
    width: '100%',
  },

  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    placeSelf: 'center',
    height: '25vw',
    width: '25vw',
    gridColumnStart: '1',
    gridColumnEnd: '4',
    gridRowStart: '1',
    gridRowEnd: '4',
    opacity: '0',
    [screenSize.tablet]: {
      width: '42vw',
      height: '42vw'
    },
    [screenSize.smartphoneLandscape]: {
      width: '42vw',
      height: '42vw'
    },
    [screenSize.smartphone]: {
      width: '85vw',
      height: '85vw'
    }
  },

  overlayText: {
    fontSize: '2vw',
    color: 'white',
    [screenSize.tablet]: {
      fontSize: '20pt',
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '16pt',
    },
    [screenSize.smartphone]: {
      fontSize: '18pt',
    }
  }

})
