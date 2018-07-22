import {AsyncStorage} from 'react-native'

export const DECK_STORAGE_KEY = 'flashcards:decks'
export const DECK_NOTIFICATION_KEY = 'flashcards:notifications'

// Added mock data to avoid a boring application
function setMockData() {

    let mockData = {
        React: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    };

    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(mockData));

    return mockData;
}

export function deckSetup(decks) {
    return decks === null
        ? setMockData()
        : JSON.parse(decks);
}