import { AsyncStorage } from 'react-native'
import { timeToString } from './helpers'

export const CARD_STORAGE_KEY = 'MobileFlashCards:card'

function setDummyData () {
  let dummyData = {}
  const timestamp = Date.now()

  var default = [{
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
    {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  ]

  let dummyData = {}
  const timestamp = Date.now()

  for (let i = 0; i < 2; i++) {
    const time = timestamp + i * 24 * 60 * 60 * 1000
    const strTime = timeToString(time)

    dummyData[strTime] = default[i]

  }

  AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(dummyData))

  return dummyData
}
