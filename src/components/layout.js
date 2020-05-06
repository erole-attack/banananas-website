import React from "react"
import PropTypes from "prop-types"
import * as Scroll from 'react-scroll'
import "./layout.css"
import Logo from '../images/Banananas_navbar_logo.png'
import { ReactNavbar } from 'react-responsive-animate-navbar'
import { StyleSheet, css } from 'aphrodite'

const Layout = ({ children }) => {
  return (
    <>
      <header className={css(layoutStyles.navbar)}>
        <ReactNavbar
          logo= {Logo}
          color="#101213"
          menu={[
            { name: "DIENSTEN", to: "/" },
            { name: "WERK", to: "/articles" },
            { name: "TEAM", to: "/about" },
            { name: "CONTACT", to: "/contact" },
          ]}
          social={[
            {
              name: "Linkedin",
              url: "https://www.linkedin.com/company/banananas/?originalSubdomain=nl",
              icon: ["fab", "linkedin-in"],
            },
            {
              name: "Facebook",
              url: "https://www.facebook.com/banananas.net/",
              icon: ["fab", "facebook-f"],
            }
          ]}
        />
      </header>
      <main>{children}</main>
      <footer>

      </footer>
    </>
  )
}

const layoutStyles = StyleSheet.create({

  navbar: {
    ':nth-child(1n) > div > div': {
      width: '100vw',
      maxHeight: '60px',
      paddingRight: '50px',
      color: 'black'
    },
    ':nth-child(1n) > div > div > div > a > div': {
      display: 'flex',
      justifyItems: 'center',
      alignItems: 'center'
    },
    ':nth-child(1n) > div > div > div > a > div > img': {
      marginLeft: '100px',
      marginBottom: '0',
      width: '175px',
      height: '22px'
    }
  }

})

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
