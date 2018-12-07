import React from 'react'

class Add extends React.Component {
    state = {
        inputOne: false,
        inputTwo: false,
        result: false
    }

    inputOneChangeHandler = event => {
        this.setState({
            inputOne: parseInt(event.target.value),
            result: (parseInt(event.target.value) + this.state.inputTwo)
        })
    }

    inputTwoChangeHandler = event => {
        this.setState({
            inputTwo: parseInt(event.target.value),
            result: (this.state.inputOne + parseInt(event.target.value))
        })
    }

    render() {
        return (
            <div>
                <h1>Result: {this.state.result}</h1>
                <input
                    onChange={this.inputOneChangeHandler}
                />
                <input
                    onChange={this.inputTwoChangeHandler}
                />
            </ div>
        )
    }
}

export default Add