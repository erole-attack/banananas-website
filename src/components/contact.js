import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'
import { useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { screenSize, titleTransform } from "./styles/styles"
import speechBubbleIndicator from '../images/speechbubble-indicator.svg'
import monkey from'../images/monkey.png'

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
    <div className={css(contactStyles.container)}>
      <h1 className={css(contactStyles.title)}>
        {titleTransform(data.contentfulContact)}
      </h1>
      <div className={css(contactStyles.wrapper)}>
        <div className={css(contactStyles.columnOne)}>
          <img
            className={css(contactStyles.monkey)}
            src={monkey}>
          </img>
        </div>
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
  )
}

const contactStyles = StyleSheet.create({

  container: {
    display: 'grid',
    gridTemplateColumns: '5% auto 5%',
    gridTemplateRows: '18% auto',
    width: '100vw',
    height: '100vh',
    minHeight: '400px',
    background: '#f7f7f7',
    overflow: 'hidden',
  },

  title: {
    gridColumnStart: '2',
    gridColumnEnd: '3',
    gridRowStart: '1',
    gridRowEnd: '2'
  },

  wrapper: {
    display: 'flex',
    height: '100%',
    gridColumnStart: '2',
    gridColumnEnd: '3',
    gridRowStart: '2',
    gridRowEnd: '3',
  },

  columnOne: {
    display: 'flex',
    flexFlow: 'flex-reverse',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexBasis: "25%",
  },

  monkey: {
    width: '100%',
    marginBottom: '0'
  },

  columnTwo: {
    flexBasis: "35%",
    width: '100%',
    height: '100%',
  },

  speechBubbleContainer: {
    display: 'inline-grid',
    gridTemplateColumns: '1',
    gridTemplateRows: 'auto 1vh',
    fontSize: '1.6vw',
    marginBottom: '4.5vh'
  },

  speechBubbleTextArea: {
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'middle',
    padding: '2vw',
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

  contactInfo: {
    minHeight: '400px',
    fontSize: '2.1vh',
    lineHeight: '3.4vh'
  },

  columnThree: {
    minHeight: '400px',
    paddingTop: '6.5%',
    paddingBottom: '2%',
    flexBasis: "40%"
  },

  form: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },

  inputName: {
    flexBasis: '100%',
    border: 'none',
    height: '6vh',
    fontSize: '2vh',
    paddingLeft: '1vw',
  },

  inputEmail: {
    flexBasis: '100%',
    border: 'none',
    height: '6vh',
    fontSize: '2vh',
    paddingLeft: '1vw',
  },

  inputPhone: {
    flexBasis: '100%',
    height: '6vh',
    ':nth-child(1n) > input': {
      height: '100%',
      fontSize: '2vh',
      paddingLeft: '1vw',
    }
  },

  inputMessage: {
    flexBasis: '100%',
    border: 'none',
    height: '30vh',
    fontSize: '2vh',
    padding: '1vw',
    resize: 'none',
  },

  button: {
    backgroundColor: '#252526',
    border: 'none',
    color: 'white',
    padding: '10px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    ':hover': {
        cursor: 'pointer',
        backgroundColor: '#fae73c',
        color: '#252526'
    },
    ':active': {
      backgroundColor: '#5b8e15',
      color: 'white'
    }
  }

})
