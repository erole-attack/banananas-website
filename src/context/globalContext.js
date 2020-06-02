import React, { createContext, useState, useEffect } from 'react'
import { StyleSheet, css } from 'aphrodite'

export const GlobalContext = createContext()

const Provider = props => {

  //filter options
  const [filter, setFilter] = useState('all')

  const setToKMOs = () => {
    setFilter(1)
  }

  const setToUitgeverijen = () => {
    setFilter(2)
  }

  const setToReclamebureaus = () => {
    setFilter(3)
  }

  const setToAll = () => {
    setFilter('all')
  }

  const changeWorkFilter = newPath => {
    switch(newPath) {
      case '/': return setFilter('all')
      case '/kmos': return setFilter(1)
      case '/uitgeverijen': return setFilter(2)
      case '/reclamebureaus': return setFilter(3)
    }
  }

  //header options
  const [mainPage, setMainPage] = useState(true)

  const checkMainpage = newPath => {
    console.log(newPath)
    newPath === '/' ? setMainPage(true) : setMainPage(false)
  }

  return (
    <GlobalContext.Provider value={{ filter, setToKMOs, setToUitgeverijen, setToReclamebureaus, setToAll, changeWorkFilter, mainPage, checkMainpage }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
);
