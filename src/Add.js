import React from 'react'
import { connect } from 'react-redux'
import { inputOneChangeHandler, inputTwoChangeHandler } from './state/add';

const Add = props => (
    <div>
        <h1>Result: {props._result}</h1>
        <input
            onChange={props._inputOneChangeHandler}
        />
        <input
            onChange={props._inputTwoChangeHandler}
        />
    </ div>
)
const mapStateToProps = state => ({
    _result: state.add.result
})

const mapDispatchToProps = dispatch => ({
    _inputOneChangeHandler: event => dispatch(inputOneChangeHandler(parseInt(event.target.value))),
    _inputTwoChangeHandler: event => dispatch(inputTwoChangeHandler(parseInt(event.target.value)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Add)