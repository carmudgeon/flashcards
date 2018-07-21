import { AsyncStorage } from 'react-native'
import {deckSetup, DECK_STORAGE_KEY} from './_decks';


export function getDecks() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then(deckSetup);
}

export function getDeck(id) {

}

export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [title]: {title : title, questions : []}
    }))
}

export function addCardToDeck({title, card}) {

}