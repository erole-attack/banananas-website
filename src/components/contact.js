import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'
import { useForm } from 'react-hook-form'

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

        <input
          name="phone"
          placeholder="telefoonnummer"
          ref={register({
            validate: value =>
            /^((\+|00)32\s?|0)4(60|[789]\d)(\s?\d{2}){3}$/.test(value) ||
            /^((\+|00)32\s?|0)(\d\s?\d{3}|\d{2}\s?\d{2})(\s?\d{2}){2}$/.test(value)
          })}
        />
        {errors.phone && errors.phone.message}

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
