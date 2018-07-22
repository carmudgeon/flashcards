import {AsyncStorage} from 'react-native'
import {deckSetup, DECK_STORAGE_KEY, DECK_NOTIFICATION_KEY} from './_decks';
import {Notifications, Permissions} from 'expo'

export function getDecks() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then(deckSetup);
}

export function getDeck(id) {

}

export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [title]: {title: title, questions: []}
    }))
}

export function addCardToDeck({title, question}) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then(data => {
        let decks = JSON.parse(data);
        debugger
        decks[title].questions.push({question: question.question, answer: question.answer})
        AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(decks))
    })
}


function createNotification() {
    return {
        title: 'Time to practice!',
        body: "👋 don't forget to review your decks on a daily basis!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function clearLocalNotification() {
    return AsyncStorage.removeItem(DECK_NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function setLocalNotification() {
    AsyncStorage.getItem(DECK_NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({status}) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate())
                            tomorrow.setHours(1)
                            tomorrow.setMinutes(48)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'minute',
                                }
                            )

                            AsyncStorage.setItem(DECK_NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}
