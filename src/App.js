import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/activities">Activities</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/activities" component={About} />
      <Route path="/login" component={Topics} />
    </div>
  </Router>
)

export default App
