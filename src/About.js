import React from 'react'
import ReactDOM from 'react-dom'
import Markdown from 'react-markdown'
import { StyleSheet, css } from 'aphrodite';

import { useContentfulData } from '../useContentfulData'

const About = () => {
  //get Contentful content_type Data with ID 'about'
const [aboutData, loading] = useContentfulData('about')

  return (
    <div>
      {aboutData[0] === undefined ? (<h1>Loading data ...</h1>)
        : (
            <div className={css(aboutStyles.container)}>
              <div className={css(aboutStyles.grid)}>
                <h1 className={css(aboutStyles.title)}>{aboutData[0].fields.title.toUpperCase()}</h1>
                {/*Markdown to HTML*/}
                <Markdown className={css(aboutStyles.description)} escapeHtml={true} source={aboutData[0].fields.description}/>
              </div>
            </div>
        )}
    </div>
  )
}

const aboutStyles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '35vh',
  },

  grid: {
    display: 'grid',
    width: '60%',
    height: '70%',
    gridTemplateColumns: '1',
    gridTemplateRows: '40% 60%',
  },

  title: {

  },

  description: {

  }

})

export default About
