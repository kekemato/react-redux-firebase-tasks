import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
    state = {
        counterValue: this.props.startValue
    }

    incHandler = () => {
        this.setState({ counterValue: this.state.counterValue + 1 })
    }

    decHandler = () => {
        this.setState({ counterValue: this.state.counterValue - 1 })
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.counterValue}
                </h1>
                <button
                    onClick={this.incHandler}
                >
                    +
                </button>
                <button
                    onClick={this.decHandler}
                >
                    -
                </button>
            </div>
        )
    }
}

Counter.defaultProps = {
    startValue: 3
}

Counter.propTypes = {
    startValue: PropTypes.number
}

export default Counter