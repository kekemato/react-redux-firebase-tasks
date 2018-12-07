import React, { Component } from 'react'
import Counter from './Counter'
import PassingProps from './PassingProps'

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <PassingProps
          passingValue={5}
          passingFun={() => alert('bu!')}
        />
      </div>
    )
  }
}

export default App
