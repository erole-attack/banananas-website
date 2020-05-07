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
            <LazyLoad height={200}>
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
    <div className={css(workStyles.background)}>
      <div className={css(workStyles.heading)}>
        <h1 className={css(workStyles.title)}>
          {titleTransform(data.contentfulWork)}
        </h1>
        <div className={css(workStyles.buttons)}>
          <button className={css(workStyles.button)} onClick={ () => toggleFilter('all') }>{filter === "all" ? <strong>TOON ALLES</strong> : <span>TOON ALLES</span>}</button>
          <button className={css(workStyles.button)} onClick={ () => toggleFilter(1) }>{filter === 1 ? <strong>KMO'S</strong> : <span>KMO'S</span>}</button>
          <button className={css(workStyles.button)} onClick={ () => toggleFilter(2) }>{filter === 2 ? <strong>UITGEVERIJEN</strong> : <span>UITGEVERIJEN</span>}</button>
        </div>
      </div>
      <div className={css(workStyles.wrapper)}>
        {filterPhotos()}
      </div>
    </div>
  )
}


const workStyles = StyleSheet.create({

  background: {
    position:'relative',
    zIndex: '1',
    background: '#f2f6f7',
  },

  heading: {
    paddingTop: '3%',
    paddingBottom: '2%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    marginRight: '4vw',
  },

  buttons: {
    padding: '0.5%',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    border: 'none',
    color: 'white',
    backgroundColor: '#222A2E',
    padding: '10px 32px',
    borderRadius: '5px',
    boxShadow: '5px 5px 9px #bdc7c9',
    margin: '5px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    ':hover': {
        cursor: 'pointer',
        background: 'linear-gradient(to right, #136a8a, #267871)'
    },
  },

  wrapper: {
    background: 'white',
    borderRadius: '15px',
    display: 'flex',
    flexWrap: 'wrap',
    placeContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    width: '74vw',
    paddingTop: '1.2vw',
    paddingBottom: '1.5vw',
    overflow: 'hidden'
  },

  container: {
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    gridTemplateColumns: '100%',
    gridTemplateRows: '100%',
    position: 'relative',
    width: '22vw',
    height: '14.5vw',
    overflow: 'hidden',
    margin: '1vw',
    borderRadius: '5px',
    boxShadow: '5px 10px 18px #bcccd6',
    ':hover': {
      ':nth-child(1n) > div': {
        backgroundColor: '#222A2E',
        opacity: '1'
      },
      ':nth-child(1n) > img': {
        minWidth: '130%'
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
    transition: 'min-width 0.4s ease',
    minWidth: '100%',
    opacity: '1',
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '2'
  },

  overlay: {
    alignSelf: 'end',
    textAlign: 'center',
    width: '100%',
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '2',
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
    fontSize: '1vw',
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
