import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from 'react-router-dom'

// CSS
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'))

registerServiceWorker()
