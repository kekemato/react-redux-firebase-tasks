import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Counter from './Counter'
import PassingProps from './PassingProps'
import './App.css'
import Navigation from './Navigation/Navigation'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Navigation
              title="React tasks"
              keyChildProp="to">
              <Link
                to='/'
                className='link'
              >
                <MenuItem
                  primaryText='Home'
                >
                </MenuItem>
              </Link>
              <Link
                to='"/counter"'
                className='link'
              >
                <MenuItem
                  primaryText='Counter'
                >
                </MenuItem>
              </Link>
              <Link
                to='/passing-props'
                className='link'
              >
                <MenuItem
                  primaryText='Passing Props'
                >
                </MenuItem>
              </Link>
              <Link
                to='/counter-with-start-value'
                className='link'
              >
                <MenuItem
                  primaryText='Counter with start value 15'
                >
                </MenuItem>
              </Link>
            </Navigation>
          </div>
          <Route path="/" exact={true} component={Counter} />
          <Route path="/counter" component={Counter} />
          <Route path="/passing-props" component={() => <PassingProps
            passingValue={5}
            passingFun={() => alert('bu!')}
          />
          }
          />
          <Route path="/counter-with-start-value" component={() => <Counter
            startValue={15}
          />
          }
          />
        </div>
      </Router>
    )
  }
}

export default App
