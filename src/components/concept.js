import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'
import lineOne from'../images/line-01.svg'
import lineTwo from'../images/line-02.svg'
import lineThree from'../images/line-03.svg'
import lineFour from'../images/line-04.svg'

export default () => ( <
  StaticQuery query = {graphql `
    query MyQuery {
        allContentfulConcept(limit: 1) {
          edges {
            node {
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
        }
      }
  `}

  render = {
    data => (
      data.allContentfulConcept.edges.map(edge =>
        <div className={css(conceptStyles.container)}>
            <div className={css(conceptStyles.content)}>
                <img
                  className={css(conceptStyles.backimg)}
                  src={edge.node.banaanAnananas.file.url}>
                </img>
                <div className={css(conceptStyles.captionContainer)}>
                    <img
                      className={css(conceptStyles.lineOne)}
                      src={lineOne}>
                    </img>
                    <div className={css(conceptStyles.bananaPeel)}>
                        <h3>{edge.node.bananaPeel}</h3>
                        <div
                          dangerouslySetInnerHTML={
                            { __html: edge.node.bananaPeelDescription.childMarkdownRemark.html}
                          }
                        />
                    </div>
                    <img
                      className={css(conceptStyles.lineTwo)}
                      src={lineTwo}>
                    </img>
                    <div className={css(conceptStyles.pineappleShootApex)}>
                        <h3>{edge.node.pineappleShootApex}</h3>
                        <div
                          dangerouslySetInnerHTML={
                            { __html: edge.node.pineappleShootApexDescription.childMarkdownRemark.html}
                          }
                        />
                    </div>
                    <img
                      className={css(conceptStyles.lineThree)}
                      src={lineThree}>
                    </img>
                    <div className={css(conceptStyles.totalBanana)}>
                        <h3>{edge.node.totalBanana}</h3>
                        <div
                          dangerouslySetInnerHTML={
                            { __html: edge.node.totalBananaDescription.childMarkdownRemark.html}
                          }
                        />
                    </div>
                    <img
                      className={css(conceptStyles.lineFour)}
                      src={lineFour}>
                    </img>
                    <div className={css(conceptStyles.bananaFlesh)}>
                        <h3>{edge.node.bananaFlesh}</h3>
                        <div
                          dangerouslySetInnerHTML={
                            { __html: edge.node.bananaFleshDescription.childMarkdownRemark.html}
                          }
                        />
                    </div>
                </div>
            </div>
        </div>
      )
    )
  }
/> )

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
      width: '67%',
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
