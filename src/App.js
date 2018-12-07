import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css'
import Navigation from './Navigation/Navigation'
import { routes } from './routes'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Navigation
              title="React tasks"
              keyChildProp="to">
              {routes.map(component =>
                <Link
                  to={component.path}
                  className='link'
                  key={component.key}
                >
                  <MenuItem
                    primaryText={component.label}
                  />
                </Link>
              )}
            </Navigation>
          </div>
          {routes.map(component =>
            <Route
              path={component.path}
              component={component.component}
              key={component.key}
              exact={component.exact ? component.exact : null}
            />
          )}
        </div>
      </Router>
    )
  }
}

export default App
