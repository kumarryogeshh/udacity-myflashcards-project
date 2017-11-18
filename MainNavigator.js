import React, { Component } from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'

import AddCardScreen from './screens/AddCardScreen'
import AddDeckScreen from './screens/AddDeckScreen'
import DeckDetailScreen from './screens/DeckDetailScreen'
import DeckListScreen from './screens/DeckListScreen'
import QuizScreen from './screens/QuizScreen'

import { white } from './utils/color'
import styles from './utils/styles'

const Home = TabNavigator({
  DeckList: {
    screen: DeckListScreen,
    navigationOptions: {
      tabBarLabel: 'DECKS'
    }
  },
  AddDeck: {
    screen: AddDeckScreen,
    navigationOptions: {
      tabBarLabel: 'NEW DECK'
    }
  }
})

export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  DeckDetail: {
    path: 'deckDetail/:id',
    screen: DeckDetailScreen,
    navigationOptions: ({navigation}) => ({
      headerTintColor: white,
      headerStyle: styles.header,
      //title: navigation.state.params.title
      title: 'DeckDetailScreen'
    })
  },
  AddCard: {
    path: 'addCard/:id',
    screen: AddCardScreen,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: styles.header,
      title: 'Add Card'
    }
  },
  Quiz: {
    path: 'quiz/:id',
    screen: QuizScreen,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: styles.header,
      title: 'Quiz'
    }
  }
})
