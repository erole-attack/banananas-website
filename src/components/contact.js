import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'
import { useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { screenSize, titleTransform } from "./styles/styles"
import speechBubbleIndicator from '../images/speechbubble-indicator.svg'

export default () => {
  const data = useStaticQuery(
    graphql `
      query getContactData {
        contentfulContact {
          title
          speechBubble
          contactInfo {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    `
  )

  const [value, setValue] = useState()
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = values => console.log(values)

  return(
    <div className={css(contactStyles.background)}>
      <div className={css(contactStyles.container)}>
        <h1 className={css(contactStyles.title)}>
          {titleTransform(data.contentfulContact)}
        </h1>
        <div className={css(contactStyles.wrapper)}>
          <div className={css(contactStyles.columnOne)}/>
          <div className={css(contactStyles.columnTwo)}>
            <div className={css(contactStyles.speechBubbleContainer)}>
              <div className={css(contactStyles.speechBubbleTextArea)}>
               {data.contentfulContact.speechBubble.toUpperCase()}
              </div>
              <img
                className={css(contactStyles.speechBubbleIndicator)}
                src={speechBubbleIndicator}>
              </img>
            </div>
            <div
              className={css(contactStyles.contactInfo)}
              dangerouslySetInnerHTML={
                { __html: data.contentfulContact.contactInfo.childMarkdownRemark.html}
              }
            />
          </div>
          <div className={css(contactStyles.columnThree)}>
            <form
              name='contact'
              className={css(contactStyles.form)}
              onSubmit={handleSubmit(onSubmit)} netlify>
              <input
                className={css(contactStyles.inputName)}
                name="name"
                placeholder="Naam"
                ref={register({
                  validate: value => value !== "admin" || "Nice try!"
                })}
              />
              {errors.username && errors.username.message}

              <input
                className={css(contactStyles.inputEmail)}
                name="email"
                placeholder="E-mail"
                ref={register({
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address"
                  }
                })}
              />
              {errors.email && errors.email.message}

              <PhoneInput
                className={css(contactStyles.inputPhone)}
                placeholder="Telefoonnummer"
                value={value}
                onChange={setValue}
              />
              {errors.phone && errors.phone.message}

              <textarea
                className={css(contactStyles.inputMessage)}
                name="message"
                placeholder="Bericht"
                ref={register({
                  required: "Required",
                })}
              />

              <button
                className={css(contactStyles.button)}
                type="submit">VERSTUREN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const contactStyles = StyleSheet.create({

  background: {
    display: 'flex',
    background: '#f2f6f7',
  },

  container: {
    margin: '0 auto',
    marginBottom: '2%',
    padding: '2%',
    display: 'grid',
    gridTemplateColumns: '5% auto 5%',
    gridTemplateRows: '18% auto',
    width: '90vw',
    height: '95vh',
    minHeight: '700px',
    borderRadius: '35px',
    background: 'linear-gradient(to right, #a8ff78, #78ffd6)',
    overflow: 'hidden',
    [screenSize.tablet]: {
      minHeight: '700px',
      gridTemplateColumns: '10% auto 10%',
    },
    [screenSize.smartphoneLandscape]: {
      minHeight: '700px',
      gridTemplateColumns: '10% auto 10%',
    },
    [screenSize.smartphone]: {
      minHeight: '850px',
      gridTemplateColumns: '2% auto 2%',
      gridTemplateRows: '10% auto',
    }
  },

  title: {
    gridColumnStart: '2',
    gridColumnEnd: '3',
    gridRowStart: '1',
    gridRowEnd: '2'
  },

  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
    gridColumnStart: '2',
    gridColumnEnd: '3',
    gridRowStart: '2',
    gridRowEnd: '3',
    [screenSize.smartphone]: {
      display: 'grid',
      gridTemplateColumns: '100%',
      gridTemplateRows: '30% 5% 65%',
    }
  },

  columnOne: {
    display: 'flex',
    flexBasis: "25%",
    [screenSize.tablet]: {
      display: 'none'
    },
    [screenSize.smartphoneLandscape]: {
      display: 'none'
    },
    [screenSize.smartphone]: {
      display: 'none'
    }
  },

  columnTwo: {
    flexBasis: "35%",
    width: '100%',
    height: '100%',
    [screenSize.tablet]: {
      flexBasis: "50%"
    },
    [screenSize.smartphoneLandscape]: {
      flexBasis: "50%"
    },
    [screenSize.smartphone]: {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      gridRowStart: '1',
      gridRowEnd: '2',
    }
  },

  speechBubbleContainer: {
    display: 'inline-grid',
    gridTemplateColumns: '1',
    gridTemplateRows: 'auto 1vh',
    fontSize: '1.6vw',
    marginBottom: '4.5vh',
    [screenSize.tablet]: {
      fontSize: '2.6vw'
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '3vw'
    },
    [screenSize.smartphone]: {

    }
  },

  speechBubbleTextArea: {
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'middle',
    padding: '2vw',
    color: 'white',
    backgroundColor: '#0c0803',
    borderRadius: '12px',
    [screenSize.smartphone]: {
      display: 'none'
    }
  },

  speechBubbleIndicator: {
    color: '#0c0803',
    width: '1.6vw',
    position: 'relative',
    right: '-70%',
    top: '-1%',
    [screenSize.smartphone]: {
      display: 'none'
    }
  },

  contactInfo: {
    minHeight: '400px',
    fontSize: '1.2vw',
    lineHeight: '1.8vw',
    [screenSize.tablet]: {
      fontSize: '14pt',
      lineHeight: '22pt',
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '12pt',
      lineHeight: '20pt',
    },
    [screenSize.smartphone]: {
      fontSize: '12pt',
      lineHeight: '20pt'
    }
  },

  columnThree: {
    minHeight: '450px',
    paddingTop: '5%',
    paddingBottom: '2%',
    flexBasis: "40%",
    [screenSize.tablet]: {
      paddingTop: '0',
      flexBasis: "50%",
    },
    [screenSize.smartphoneLandscape]: {
      paddingTop: '0',
      flexBasis: "50%",
    },
    [screenSize.smartphone]: {
      minHeight: '0px',
      paddingTop: '0',
      paddingBottom: '8%',
      gridRowStart: '3',
      gridRowEnd: '4'
    }
  },

  form: {
    width: '95%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },

  inputName: {
    borderRadius: '5px',
    flexBasis: '100%',
    border: 'none',
    height: '8%',
    fontSize: '1.1vw',
    paddingLeft: '1vw',
    [screenSize.tablet]: {
      fontSize: '1.4vw',
      paddingLeft: '1.2vw',
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '1.7vw',
      paddingLeft: '1.4vw',
    },
    [screenSize.smartphone]: {
      fontSize: '2.6vw',
      paddingLeft: '2vw'
    }
  },

  inputEmail: {
    borderRadius: '5px',
    flexBasis: '100%',
    border: 'none',
    height: '8%',
    fontSize: '1.1vw',
    paddingLeft: '1vw',
    [screenSize.tablet]: {
      fontSize: '1.4vw',
      paddingLeft: '1.2vw',
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '1.7vw',
      paddingLeft: '1.4vw',
    },
    [screenSize.smartphone]: {
      fontSize: '2.6vw',
      paddingLeft: '2vw'
    }
  },

  inputPhone: {
    flexBasis: '100%',
    height: '8%',
    ':nth-child(1n) > input': {
      height: '100%',
      fontSize: '1.1vw',
      paddingLeft: '1vw',
      [screenSize.tablet]: {
        fontSize: '1.4vw',
        paddingLeft: '1.2vw',
      },
      [screenSize.smartphoneLandscape]: {
        fontSize: '1.7vw',
        paddingLeft: '1.4vw',
      },
      [screenSize.smartphone]: {
        fontSize: '2.6vw',
        paddingLeft: '2vw'
      }
    }
  },

  inputMessage: {
    borderRadius: '5px',
    flexBasis: '100%',
    border: 'none',
    height: '50%',
    fontSize: '1.1vw',
    padding: '1vw',
    resize: 'none',
    [screenSize.tablet]: {
      fontSize: '1.4vw',
      paddingLeft: '1.2vw',
    },
    [screenSize.smartphoneLandscape]: {
      fontSize: '1.7vw',
      paddingLeft: '1.4vw',
    },
    [screenSize.smartphone]: {
      fontSize: '2.6vw',
      paddingLeft: '2vw'
    }
  },

  button: {
    borderRadius: '5px',
    boxShadow: '5px 5px 9px #50b36c',
    backgroundColor: '#222A2E',
    border: 'none',
    color: 'white',
    padding: '5px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    ':hover': {
        cursor: 'pointer',
        background: 'linear-gradient(to right, #136a8a, #267871)',
    },
    ':active': {
      backgroundColor: '#5b8e15',
      color: 'white'
    },
    [screenSize.smartphone]: {

    }
  }

})
