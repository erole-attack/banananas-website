import React, { useState, useEffect, useContext } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import LazyLoad from 'react-lazyload'
import { GlobalContext } from '../context/globalContext'
import { StyleSheet, css } from 'aphrodite'
import { screenSize, titleTransform } from './styles/styles'

export default () => {

  const { filter, setToKMOs, setToUitgeverijen, setToReclamebureaus, setToAll, changeWorkFilter, mainPage } = useContext(GlobalContext)

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

  useEffect(() => {
    changeWorkFilter(window.location.pathname)
  },[])

  const filterPhotos = () => {

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
            <LazyLoad offset={300}>
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
            <LazyLoad offset={300}>
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
    <div className={css(workStyles.background)} id='werk'>
      <div className={css(workStyles.heading)}>
        <h1 className={css(workStyles.title)}>
          {titleTransform(data.contentfulWork)}
        </h1>
        <div className={css(workStyles.buttons)}>
          <button className={filter == 'all' ? css(workStyles.active) : css(workStyles.button)} onClick={ setToAll }>
            {filter == 'all' ? <strong>TOON ALLES</strong> : <span>TOON ALLES</span>}
          </button>
          <button className={filter == 1 ? css(workStyles.active) : css(workStyles.button)} onClick={ setToKMOs }>
            {filter == 1 ? <strong>KMO'S</strong> : <span>KMO'S</span>}
          </button>
          <button className={filter == 2 ? css(workStyles.active) : css(workStyles.button)} onClick={ setToUitgeverijen }>
            {filter == 2 ? <strong>UITGEVERIJEN</strong> : <span>UITGEVERIJEN</span>}
          </button>
          <button className={filter == 3 ? css(workStyles.active) : css(workStyles.button)} onClick={ setToReclamebureaus }>
            {filter == 3 ? <strong>RECLAMEBUREAUS</strong> : <span>RECLAMEBUREAUS</span>}
          </button>
        </div>
      </div>
      <div className={mainPage ? css(workStyles.mainWrapper) : css(workStyles.wrapper)}>
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
    alignItems: 'center',
    [screenSize.tablet]: {
      flexDirection: 'column',
    },
    [screenSize.smartphoneLandscape]: {
      flexDirection: 'column',
    },
    [screenSize.smartphone]: {
      flexDirection: 'column',
    }
  },

  title: {
    marginRight: '4vw',
    [screenSize.smartphone]: {
      marginTop: '10%',
    }
  },

  buttons: {
    padding: '0.5%',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [screenSize.smartphoneLandscape]: {
      marginTop: '5%',
      marginBottom: '1%'
    },
    [screenSize.smartphone]: {
      marginTop: '5%',
      marginBottom: '4%'
    }
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
    [screenSize.tablet]: {
      fontSize: '1.4vw',
      padding: '1.1vw 3.5vw',
      margin: '0.5vw'
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '1.8vw',
      padding: '1.8vw 4.5vw',
      margin: '0.5vw'
    },
    [screenSize.smartphone]: {
      fontSize: '2vw',
      padding: '1.8vw 4.5vw',
      margin: '0.5vw'
    }
  },

  active: {
    border: 'none',
    color: 'white',
    background: 'linear-gradient(to right, #136a8a, #267871)',
    padding: '10px 32px',
    borderRadius: '5px',
    boxShadow: '5px 5px 9px #bdc7c9',
    margin: '5px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    [screenSize.tablet]: {
      fontSize: '1.4vw',
      padding: '1.1vw 3.5vw',
      margin: '0.5vw'
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '1.8vw',
      padding: '1.8vw 4.5vw',
      margin: '0.5vw'
    },
    [screenSize.smartphone]: {
      fontSize: '2vw',
      padding: '1.8vw 4.5vw',
      margin: '0.5vw'
    }
  },

  mainWrapper: {
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
    overflow: 'hidden',
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

  wrapper: {
    background: 'white',
    borderRadius: '15px 15px 0 0',
    display: 'flex',
    flexWrap: 'wrap',
    placeContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    width: '74vw',
    paddingTop: '1.2vw',
    paddingBottom: '1.5vw',
    overflow: 'hidden',
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
      width: '30vw',
      height: '20vw'
    },
    [screenSize.smartphoneLandscape]: {
      width: '41.5vw',
      height: '25vw'
    },
    [screenSize.smartphone]: {
      width: '86.5vw',
      height: '50vw',
      margin: '2.5vw'
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

    },
    [screenSize.smartphoneLandscape]: {

    },
    [screenSize.smartphone]: {

    }
  },

  overlayText: {
    fontSize: '1vw',
    color: 'white',
    [screenSize.tablet]: {
      fontSize: '12pt',
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '14pt',
    },
    [screenSize.smartphone]: {
      fontSize: '16pt',
    }
  }

})
