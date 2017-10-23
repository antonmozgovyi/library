import React, { Component } from 'react'
import { Bootstrap, Navbar, Nav, NavItem } from 'react-bootstrap'

const links = ['All', 'By Authors', 'By Genre']

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
              <NavItem>{link}</NavItem>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar