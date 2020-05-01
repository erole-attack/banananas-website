import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'
import lineOne from'../images/line-01.svg'
import lineTwo from'../images/line-02.svg'
import lineThree from'../images/line-03.svg'
import lineFour from'../images/line-04.svg'

export default () => {
  const data = useStaticQuery(
    graphql `
      query getBananaDats {
        contentfulConcept {
          banaanAnananas {
            file {
              url
            }
          }
          bananaPeel
          bananaPeelDescription {
            childMarkdownRemark {
              html
            }
          }
          pineappleShootApex
          pineappleShootApexDescription {
            childMarkdownRemark {
              html
            }
          }
          totalBanana
          totalBananaDescription {
            childMarkdownRemark {
              html
            }
          }
          bananaFlesh
          bananaFleshDescription {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    `
  )

  const banana = data.contentfulConcept

  const captions = [

    {
      lineStyle: conceptStyles.lineOne,
      src: lineOne,
      textStyle: conceptStyles.bananaPeel,
      title: banana.bananaPeel,
      html: banana.bananaPeelDescription.childMarkdownRemark.html
    },

    {
      lineStyle: conceptStyles.lineTwo,
      src: lineTwo,
      textStyle: conceptStyles.pineappleShootApex,
      title: banana.pineappleShootApex,
      html: banana.pineappleShootApexDescription.childMarkdownRemark.html
    },

    {
      lineStyle: conceptStyles.lineThree,
      src: lineThree,
      textStyle: conceptStyles.totalBanana,
      title: banana.totalBanana,
      html: banana.totalBananaDescription.childMarkdownRemark.html
    },

    {
      lineStyle: conceptStyles.lineFour,
      src: lineFour,
      textStyle: conceptStyles.bananaFlesh,
      title: banana.bananaFlesh,
      html: banana.bananaFleshDescription.childMarkdownRemark.html
    }

  ]
  
  return(
    <div className={css(conceptStyles.container)}>
      <div className={css(conceptStyles.content)}>
        <img
          className={css(conceptStyles.backimg)}
          src={data.contentfulConcept.banaanAnananas.file.url}>
        </img>
        <div className={css(conceptStyles.captionContainer)}>
          {captions.map(caption =>
            <div>
              <img
                className={css(caption.lineStyle)}
                src={caption.src}>
              </img>
              <div className={css(caption.textStyle)}>
                <h3>{caption.title}</h3>
                <div dangerouslySetInnerHTML={
                  { __html: caption.html}
                }/>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

  const conceptStyles = StyleSheet.create({

    container: {
      display: 'flex',
      width: '100vw',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },

    content: {
      position: 'relative',
      paddingBottom: '50%',
      position: 'absolute',
      width: '67%'
    },

    backimg: {
      width: '100%',
      display: 'block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },

    captionContainer: {
      width: '100%',
      height: '100%',
      display: 'block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'hidden'
    },

    lineOne: {
      display: 'inline-block',
      position: 'absolute',
      top: '-50%',
      right: '-2%',
      width: '200%',
      height: '200%',
      zIndex: '3000'
    },

    lineTwo: {
      display: 'inline-block',
      position: 'absolute',
      top: '-50%',
      right: '0%',
      width: '200%',
      height: '200%',
      zIndex: '3000'
    },

    lineThree: {
      display: 'inline-block',
      position: 'absolute',
      top: '-45%',
      right: '0%',
      width: '200%',
      height: '200%',
      zIndex: '3000'
    },

    lineFour: {
      display: 'inline-block',
      position: 'absolute',
      top: '-48%',
      right: '0%',
      width: '200%',
      height: '200%',
      zIndex: '3000'
    },

    bananaPeel: {
      fontSize: '75%',
      display: 'inline-block',
      position: 'absolute',
      top: '80%',
      right: '-2%',
      width: '25%',
      height: '25%',
      zIndex: '3000'
    },

    pineappleShootApex:{
      fontSize: '75%',
      display: 'inline-block',
      position: 'absolute',
      top: '60%',
      right: '-10%',
      width: '25%',
      height: '25%',
      zIndex: '3000'
    },

    totalBanana:{
      fontSize: '75%',
      display: 'inline-block',
      position: 'absolute',
      top: '20%',
      right: '50%',
      width: '25%',
      height: '25%',
      zIndex: '3000'
    },

    bananaFlesh:{
      fontSize: '75%',
      display: 'inline-block',
      position: 'absolute',
      top: '10%',
      right: '70%',
      width: '25%',
      height: '25%',
      zIndex: '3000'
    }
  })
