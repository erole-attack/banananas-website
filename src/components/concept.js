import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'
import { screenSize } from "./styles/styles"
import lineOne from'../images/line-01.svg'
import lineTwo from'../images/line-02.svg'
import lineThree from'../images/line-03.svg'
import lineFour from'../images/line-04.svg'
import speechBubbleIndicator from '../images/speechbubble-indicator.svg'

export default () => {
  const data = useStaticQuery(
    graphql `
      query getBananaDats {
        contentfulConcept {
          speechBubble
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
          <div className={css(conceptStyles.speechBubbleContainer)}>
            <div className={css(conceptStyles.speechBubbleTextArea)}>
             {data.contentfulConcept.speechBubble.toUpperCase()}
            </div>
            <img
              className={css(conceptStyles.speechBubbleIndicator)}
              src={speechBubbleIndicator}>
            </img>
          </div>
          {captions.map(caption =>
            <div className={css(conceptStyles.captionBlock)}>
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
      minHeight: '800px',
      overflow: 'hidden',
      [screenSize.tablet]: {
        height: '80vh',
        paddingBottom: '15vh',
        minHeight: '750px'
      },
      [screenSize.smartphoneLandscape]: {
        display: 'none'
      },
      [screenSize.smartphone]: {
        display: 'none'
      }
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

    speechBubbleContainer: {
      display: 'inline-grid',
      gridTemplateColumns: '1',
      gridTemplateRows: 'auto 20px',
      position: 'absolute',
      top: '10%',
      right: '35%',
      fontSize: '0.9vw'
    },

    speechBubbleTextArea: {
      display: 'inline-block',
      textAlign: 'center',
      verticalAlign: 'middle',
      padding: '1.3vw',
      color: 'white',
      backgroundColor: '#0c0803',
      borderRadius: '12px'
    },

    speechBubbleIndicator: {
      color: '#0c0803',
      width: '1.6vw',
      position: 'relative',
      right: '-70%',
      top: '-1%'
    },

    captionContainer: {
      width: '100%',
      height: '100%',
      display: 'block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },

    captionBlock: {
      fontSize: '0.9vw'
    },

    lineOne: {
      display: 'inline-block',
      position: 'absolute',
      top: '19%',
      right: '82%',
      width: '30%',
      height: '30%',
      userSelect: 'none'
    },

    lineTwo: {
      display: 'inline-block',
      position: 'absolute',
      top: '11.5%',
      right: '37%',
      width: '53%',
      height: '53%',
      userSelect: 'none'
    },

    lineThree: {
      display: 'inline-block',
      position: 'absolute',
      top: '50%',
      right: '9%',
      width: '18%',
      height: '18%',
      userSelect: 'none'
    },

    lineFour: {
      display: 'inline-block',
      position: 'absolute',
      top: '76%',
      right: '25%',
      width: '24%',
      height: '24%',
      userSelect: 'none'
    },

    bananaPeel: {
      display: 'inline-block',
      position: 'absolute',
      top: '82.5%',
      right: '0%',
      width: '23%',
      height: '25%'
    },

    pineappleShootApex:{
      display: 'inline-block',
      position: 'absolute',
      top: '63%',
      right: '-0%',
      width: '15%',
      height: '25%'
    },

    totalBanana:{
      display: 'inline-block',
      position: 'absolute',
      bottom: '51%',
      right: '51%',
      width: '25%',
      height: '25%',
      textAlign: 'center'
    },

    bananaFlesh:{
      display: 'inline-block',
      position: 'absolute',
      top: '14%',
      right: '69%',
      width: '25%',
      height: '25%'
    }

  })
