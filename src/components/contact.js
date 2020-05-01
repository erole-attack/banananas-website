import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'
import { useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export default () => {
  const data = useStaticQuery(
    graphql `
      query getContactData {
        contentfulContact {
          title
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
        {data.contentfulContact.title.toUpperCase()}
      </h1>
      <div dangerouslySetInnerHTML={
        { __html: data.contentfulContact.contactInfo.childMarkdownRemark.html}
      }/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="name"
          placeholder="naam"
          ref={register({
            validate: value => value !== "admin" || "Nice try!"
          })}
        />
        {errors.username && errors.username.message}

        <input
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
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
        />

        <input
          name="message"
          placeholder="bericht"
        />
        {errors.phone && errors.phone.message}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

const contactStyles = StyleSheet.create({

  container: {
    width: '100vw',
    height: '100vh',
    background: '#f7f7f7',
    overflow: 'hidden',
  }

})
