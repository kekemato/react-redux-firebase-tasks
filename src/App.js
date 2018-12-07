import React, { Component } from 'react'
import Counter from './Counter'
import PassingProps from './PassingProps'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
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
