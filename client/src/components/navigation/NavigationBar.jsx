import React, { Component } from 'react'
import { Bootstrap, Navbar, Nav, NavItem } from 'react-bootstrap'
import NavigationLink from './NavigationLink'

const links = [
  { text: 'All', to: '/', exact: true },
  { text: 'By Authors', to: '/authors'},
  { text: 'By Genre', to: '/genres'}
]

class NavigationBar extends Component {
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Home Library
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {links.map((link) => (
              <NavigationLink key={link.to} {...link} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar