import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './navbar'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>{children}</main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
