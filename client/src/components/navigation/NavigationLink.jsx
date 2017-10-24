import React from 'react'
import { Link, Route } from 'react-router-dom'

function NavigationLink(props) {
  return (
    <Route path={props.to} exact={props.exact} children={({ match }) => (
      <li role="presentation" className={match ? 'active' : ''}>
        <Link to={props.to}>{props.text}</Link>
      </li>
    )}/>
  )
}

export default NavigationLink