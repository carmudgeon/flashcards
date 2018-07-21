export const LIST_DECKS = 'LIST_DECK'



export function listDecks (decks) {
    return {
        type: LIST_DECKS,
        decks,
    }
}