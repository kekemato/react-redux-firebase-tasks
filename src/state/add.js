const INPUT_ONE_CHANGE = 'INPUT_ONE_CHANGE'
const INPUT_TWO_CHANGE = 'INPUT_TWO_CHANGE'

const INITIAL_STATE = {
    inputOne: 0,
    inputTwo: 0,
}

export const inputOneChangeAction = number => ({
    type: INPUT_ONE_CHANGE,
    number
})

export const inputTwoChangeAction = number => ({
    type: INPUT_TWO_CHANGE,
    number
})

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUT_ONE_CHANGE:
        return {
            ...state,
            inputOne: action.number || 0,
        }
        case INPUT_TWO_CHANGE:
        return {
            ...state,
            inputTwo: action.number || 0,
        }
        default:
        return state
    }
}