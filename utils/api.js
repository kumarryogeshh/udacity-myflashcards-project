import { AsyncStorage } from 'react-native'
import { formatCardResults, CARD_STORAGE_KEY } from './_card'

export function getDecks () {
  return AsyncStorage.getItem(CARD_STORAGE_KEY)
    .then(formatCardResults)
}

export function getDeck (key) {
  return AsyncStorage.getItem(CARD_STORAGE_KEY)
    .then(formatCardResults)
}

export function submitEntry ({ card, key }) {
  return AsyncStorage.mergeItem(CARD_STORAGE_KEY, JSON.stringify({
    [key]: card
  }))
}

export function removeEntry (key) {
  return AsyncStorage.getItem(CARD_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(data))
    })
}
