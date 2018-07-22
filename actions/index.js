import {addCardToDeck, saveDeckTitle} from "../utils/api";

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveDecks (decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function addDeck (deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function addQuestion (title, question) {
    return {
        type: ADD_QUESTION,
        deck: title,
        question: question
    }
}

export function handleAddNewDeck(title) {
    return (dispatch) => {
        return saveDeckTitle(title)
            .then(dispatch(addDeck(title)))
    }
}

export function handleAddNewQuestion(title, question) {
    return (dispatch) => {
        return addCardToDeck({title, question})
            .then(dispatch(addQuestion(title, question)))
    }
}