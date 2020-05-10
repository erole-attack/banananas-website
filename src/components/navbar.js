import React, { useEffect } from "react"
import scrollTo from 'gatsby-plugin-smoothscroll'
import useScrollPosition from '@react-hook/window-scroll'
import { StyleSheet, css } from 'aphrodite'
import { screenSize } from './styles/styles'
import { FaHome, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

export default () => {

  const scrollY = useScrollPosition(60 /*fps*/)

  useEffect(() => {
    const timeout = setTimeout(() => {
      document.getElementById("navbar").style.opacity = "1"
    }, 500);
    document.getElementById("navbar").style.opacity = "0.2"
    return () => clearTimeout(timeout)

  },[scrollY]);

  return (
    <nav className={css(navbarStyles.container)} id='navbar'>
      <ul className={css(navbarStyles.sectionWrapper)}>
        <li>
          <button
            className={css(navbarStyles.button, navbarStyles.icon)}
            onClick={() => scrollTo('#___gatsby')}>
              <FaHome/>
          </button>
        </li>
        <li>
          <button
            className={css(navbarStyles.button)}
            onClick={() => scrollTo('#diensten')}>
              DIENSTEN
          </button>
        </li>
        <li>
          <button
            className={css(navbarStyles.button)}
            onClick={() => scrollTo('#werk')}>
              WERK
          </button>
        </li>
        <li>
          <button
            className={css(navbarStyles.button)}
            onClick={() => scrollTo('#team')}>
              TEAM
          </button>
        </li>
        <li>
          <button
            className={css(navbarStyles.button)}
            onClick={() => scrollTo('#contact')}>
              CONTACT
          </button>
        </li>
      </ul>
      <ul className={css(navbarStyles.socialWrapper)}>
        <li>
          <button
            className={css(navbarStyles.button, navbarStyles.icon, navbarStyles.facebook)}
            onClick={() => window.open('https://www.facebook.com/banananas.net/')}>
              <FaFacebookF/>
          </button>
        </li>
        <li>
          <button
            className={css(navbarStyles.button, navbarStyles.icon, navbarStyles.linkedIn)}
            onClick={() => window.open('https://www.linkedin.com/company/banananas/?originalSubdomain=nl')}>
              <FaLinkedinIn/>
          </button>
        </li>
      </ul>

    </nav>
  )
}

const navbarStyles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    display: 'flex',
    zIndex: '3000',
    position: 'fixed',
    margin: '0 auto',
    width: '80vw',
    height: '4vw',
    bottom: '1.4vw',
    left: '0',
    right: '0',
    transition: 'opacity 1.2s ease',
    ':hover': {
      opacity: '1'
    }
  },

  sectionWrapper: {
    borderRadius: '50px',
    margin: '0 auto',
    padding: '1vw',
    width: '32vw',
    backgroundColor: 'rgba(40, 50, 55, 1)',
    justifyContent: 'center',
    display: 'flex'
  },

  socialWrapper: {
    borderRadius: '50px',
    padding: '1vw',
    marginTop: '0',
    marginBottom: '0',
    width: '8vw',
    backgroundColor: 'rgba(40, 50, 55, 1)',
    justifyContent: 'center',
    display: 'flex'
  },

  button: {
    height: '2vw',
    marginLeft: '0.5vw',
    marginRight: '0.5vw',
    borderRadius: '5px',
    boxShadow: '2px 5px 18px #101213',
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
  },

  icon: {
    fontSize: '1.4vw',
    padding: '5px 10px',
  },

  facebook: {
    background: '#3b5998'
  },

  linkedIn: {
    background: '#0e76a8'
  }

})
