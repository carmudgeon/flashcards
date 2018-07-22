import {ADD_DECK, ADD_QUESTION, RECEIVE_DECKS} from '../actions'

function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS :
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK :
            return {
                ...state,
                [action.deck]: {title: action.deck, questions: []}
            }
        case ADD_QUESTION :
            return {
                ...state,
                [action.deck]: {
                    ...state[action.deck],
                    [action.deck]: {
                        ...[action.deck]['questions'],
                        questions : state[action.deck].questions.push(action.question)
                    }

                }
            }

        default :
            return state
    }
}

export default decks