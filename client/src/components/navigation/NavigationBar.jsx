import React, { Component } from 'react'
import NavigationLink from './NavigationLink'

const links = ['All', 'By Authors', 'By Genre']

class NavigationBar extends Component {
  render () {
    return (
      <ul>
        {links.map(link => 
          (<NavigationLink text={link} />)
        )}
      </ul>
    )
  }
}

export default NavigationBar