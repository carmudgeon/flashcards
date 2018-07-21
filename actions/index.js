import {saveDeckTitle} from "../utils/api";

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'

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

export function handleAddNewDeck(title) {
    return (dispatch) => {
        return saveDeckTitle(title)
            .then(dispatch(addDeck(title)))
    }
}