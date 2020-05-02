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
        height: '70vh',
        paddingBottom: '10vh',
        minHeight: '700px'
      },
      [screenSize.smartphone]: {
        height: '60vh',
        paddingBottom: '5vh',
        minHeight: '400px'
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
      [screenSize.smartphoneLandscape]: {
        left: '38%'
      },
      [screenSize.smartphone]: {
        left: '38%'
      }
    },

    speechBubbleContainer: {
      display: 'inline-grid',
      gridTemplateColumns: '1',
      gridTemplateRows: 'auto 20px',
      position: 'absolute',
      top: '10%',
      right: '35%',
      fontSize: '0.9vw',
      [screenSize.tablet]: {
        fontSize: '1.2vw',
        top: '30%',
        right: '40%'
      },
      [screenSize.smartphoneLandscape]: {
        fontSize: '1.5vw',
        top: '35%',
        right: '37%'
      },
      [screenSize.smartphone]: {
        display: 'none'
      }
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
      width: '20px',
      position: 'relative',
      right: '-70%'
    },

    captionContainer: {
      width: '100%',
      height: '100%',
      display: 'block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      [screenSize.smartphoneLandscape]: {
        left: '38%'
      },
      [screenSize.smartphone]: {
        left: '38%'
      }
    },

    captionBlock: {
      fontSize: '0.9vw',
      [screenSize.tablet]: {
        fontSize: '1.2vw'
      },
      [screenSize.smartphoneLandscape]: {
        fontSize: '1.5vw'
      },
      [screenSize.smartphone]: {
        fontSize: '2.2vw'
      }
    },

    lineOne: {
      display: 'inline-block',
      position: 'absolute',
      top: '-50%',
      right: '-2%',
      width: '200%',
      height: '200%',
    },

    lineTwo: {
      display: 'inline-block',
      position: 'absolute',
      top: '-50%',
      right: '0%',
      width: '200%',
      height: '200%',
      [screenSize.tablet]: {
        top: '-80%'
      },
      [screenSize.smartphoneLandscape]: {
        top: '-80%'
      },
      [screenSize.smartphone]: {
        top: '-80%'
      }
    },

    lineThree: {
      display: 'inline-block',
      position: 'absolute',
      top: '-45%',
      right: '0%',
      width: '200%',
      height: '200%',
      [screenSize.tablet]: {
        top: '-12%',
        right: '78%'
      },
      [screenSize.smartphoneLandscape]: {
        top: '-12%',
        right: '78%'
      },
      [screenSize.smartphone]: {
        top: '-12%',
        right: '78%'
      }
    },

    lineFour: {
      display: 'inline-block',
      position: 'absolute',
      top: '-50%',
      right: '0%',
      width: '200%',
      height: '200%',
    },

    bananaPeel: {
      display: 'inline-block',
      position: 'absolute',
      top: '82%',
      right: '0%',
      width: '23%',
      height: '25%',
      [screenSize.smartphoneLandscape]: {
        width: '40%',
        top: '81%',
        right: '-17%'
      },
      [screenSize.smartphone]: {
        width: '42%',
        top: '79%',
        right: '-19%'
      }
    },

    pineappleShootApex:{
      display: 'inline-block',
      position: 'absolute',
      top: '63%',
      right: '-0%',
      width: '15%',
      height: '25%',
      [screenSize.tablet]: {
        top: '102%',
        right: '78%'
      },
      [screenSize.smartphoneLandscape]: {
        top: '101%',
        right: '78%'
      },
      [screenSize.smartphone]: {
        width: '35%',
        top: '99%',
        right: '57%'
      }
    },

    totalBanana:{
      display: 'inline-block',
      position: 'absolute',
      bottom: '51%',
      right: '51%',
      width: '25%',
      height: '25%',
      textAlign: 'center',
      [screenSize.tablet]: {
        bottom: '84%'
      },
      [screenSize.smartphoneLandscape]: {
        bottom: '87%'
      },
      [screenSize.smartphone]: {
        bottom: '100%'
      }
    },

    bananaFlesh:{
      display: 'inline-block',
      position: 'absolute',
      top: '14%',
      right: '69%',
      width: '25%',
      height: '25%',
      [screenSize.smartphoneLandscape]: {
        width: '40%',
        top: '13%',
        right: '54%'
      },
      [screenSize.smartphone]: {
        width: '65%',
        top: '11%',
        right: '28%'
      }

    }
  })
