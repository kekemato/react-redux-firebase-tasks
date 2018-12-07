import React from 'react'
import { connect } from 'react-redux'
import { inputOneChangeAction, inputTwoChangeAction } from './state/add';

const Add = props => (
    <div>
        <h1>Result: {props._inputOne + props._inputTwo || 'Wprowadź liczby'}</h1>
        <input
            type='number'
            onChange={props._inputOneChangeAction}
        />
        <input
            type='number'
            onChange={props._inputTwoChangeAction}
        />
    </ div>
)
const mapStateToProps = state => ({
    _inputOne: state.add.inputOne,
    _inputTwo: state.add.inputTwo
})

const mapDispatchToProps = dispatch => ({
    _inputOneChangeAction: event => dispatch(inputOneChangeAction(parseInt(event.target.value))),
    _inputTwoChangeAction: event => dispatch(inputTwoChangeAction(parseInt(event.target.value)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Add)