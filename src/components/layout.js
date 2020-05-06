import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import { StyleSheet, css } from 'aphrodite'

const Layout = ({ children }) => {
  return (
    <>
      <header>

      </header>
      <main>{children}</main>
      <footer>

      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
