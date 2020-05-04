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
    <div className={css(contactStyles.container)}>
      <h1 className={css(contactStyles.title)}>
        {titleTransform(data.contentfulContact)}
      </h1>
      <div className={css(contactStyles.wrapper)}>
        <div className={css(contactStyles.columnOne)}>
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
              placeholder="naam"
              ref={register({
                validate: value => value !== "admin" || "Nice try!"
              })}
            />
            {errors.username && errors.username.message}

            <input
              className={css(contactStyles.inputEmail)}
              name="email"
              placeholder="email"
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
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
            />

            <input
              className={css(contactStyles.inputMessage)}
              name="message"
              placeholder="bericht"
            />
            {errors.phone && errors.phone.message}

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

const contactStyles = StyleSheet.create({

  container: {
    width: '100vw',
    height: '100vh',
    minHeight: '600px',
    background: '#f7f7f7',
    overflow: 'hidden',
  },

  title: {
    margin: '40px 0 30px 0'
  },

  wrapper: {
    display: 'flex',
    height: '70vh',
    margin: '8vw'
  },

  columnOne: {
    flexBasis: "25%"
  },

  columnTwo: {
    flexBasis: "35%",
    width: '100%',
    height: '100%'
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
    fontSize: '2.1vh',
    lineHeight: '3.4vh'
  },

  columnThree: {
    flexBasis: "40%"
  },

  form: {
    width: '100%',
    height: '80%',
    display: 'flex',
    flexWrap: 'wrap',
  },

  inputName: {
    flexBasis: '100%',
    border: 'none',
    height: '5vh',
    fontSize: '2vh',
    paddingLeft: '15px',
  },

  inputEmail: {
    flexBasis: '100%',
    border: 'none',
    height: '5vh',
    fontSize: '2vh',
    paddingLeft: '15px',
  },

  inputPhone: {
    flexBasis: '100%',
    border: 'none',
    height: '5vh',
    fontSize: '2vh',
    paddingLeft: '15px',
  },

  inputMessage: {
    flexBasis: '100%',
    border: 'none',
    height: '20vh',
    fontSize: '2vh',
    paddingLeft: '15px',
  }

})
