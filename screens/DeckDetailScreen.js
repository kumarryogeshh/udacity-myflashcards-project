import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
//import { Button } from 'react-native-elements'


import { getDeck } from '../utils/api'
import styles from '../utils/styles'
import { red, orange, blue } from '../utils/color'

class DeckDetailScreen extends Component {
  state = {
    deckData: null
  }

  constructor(props){
    super(props);
    this.state = {
      deckData: null
    }
  }

  componentDidMount () {
    this.fetchDeckDetail()
  }

  fetchDeckDetail = () => {
    const { navigation } = this.props
    const { id } = navigation.state.params
    getDeck({ id })
      .then(res => res.data)
      .then(res => {
        this.setState({ deckData: res })
      })
  }

  goAddCard = () => {
    const { navigation } = this.props
    const { id } = navigation.state.params
    navigation.navigate('AddCard', {
      id
    })
  }

  goQuiz = () => {
    const { navigation } = this.props
    const { id } = navigation.state.params
    const { deckData } = this.state
    navigation.navigate('Quiz', {
      id,
      deckData
    })
  }

  render() {
    const { deckData } = this.state

    if (deckData === null) {
      return (
        <ActivityIndicator style={styles.loading}/>
      )
    }

    const _questions = deckData.questions

    return (
      <View style={styles.detailWrapper}>
        <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.title}>
              {deckData.title}
            </Text>
            <Text style={styles.counts}>
              {`${_questions.length} ${_questions.length > 1 ? 'cards' : 'card'}`}
            </Text>
        </View>
        <TouchableOpacity style={{flex: 1}} onPress={this.goAddCard}>
          <View style={[styles.button, {backgroundColor: blue}]}>
            <Text style={styles.buttonText}>
              Add Card
            </Text>
          </View>
        </TouchableOpacity>
        {
          _questions.length > 0 &&
          <TouchableOpacity style={{flex: 1}} onPress={this.goQuiz}>
            <View style={[styles.button, {backgroundColor: orange}]}>
              <Text style={styles.buttonText}>
                Start Quiz
              </Text>
            </View>
          </TouchableOpacity>
        }
      </View>
    )
  }
}

export default DeckDetailScreen
