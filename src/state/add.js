const INPUT_ONE_CHANGE_HANDLER = 'INPUT_ONE_CHANGE_HANDLER'
const INPUT_TWO_CHANGE_HANDLER = 'INPUT_TWO_CHANGE_HANDLER'

const INITIAL_STATE = {
    inputOne: false,
    inputTwo: false,
    result: false
}

export const inputOneChangeHandler = number => ({
    type: INPUT_ONE_CHANGE_HANDLER,
    number
})

export const inputTwoChangeHandler = number => ({
    type: INPUT_TWO_CHANGE_HANDLER,
    number
})

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUT_ONE_CHANGE_HANDLER:
        return {
            ...state,
            inputOne: action.number,
            result: action.number + state.inputTwo
        }
        case INPUT_TWO_CHANGE_HANDLER:
        return {
            ...state,
            inputTwo: action.number,
            result: action.number + state.inputOne
        }
        default:
        return state
    }
}