import React, { Component } from 'react'
import { KeyboardAvoidingView, View, Text, TouchableOpacity, TextInput, Alert, Dimensions } from 'react-native'

import styles from '../utils/styles'
import { red } from '../utils/color'
import { addCardToDeck } from '../utils/api'

let { height, width } = Dimensions.get('window')

class AddCardScreen extends Component {

  state = {
    question: '',
    answer: ''
  }

  constructor(props){
    super(props);
    this.state = {
      question: '',
      answer: ''
    }
  }

  submit = () => {
    // valid
    let _valid = this.valid()
    if (!_valid.result) {
      Alert.alert(
        'ATTENSION',
        `Please Enter ${_valid.info.toUpperCase()} For Your Card`,
        [
          {
            text: 'OK',
            onPress: () => {
              this[_valid.focus].focus()
            }
          },
        ],
        { cancelable: false }
      )
      return
    }
    // prepare data to submit
    const { question, answer } = this.state
    let card = { question, answer }
    const { navigation } = this.props
    const { id } = navigation.state.params
    
    addCardToDeck({
      id,
      card
    }).then(res => res.data)
    .then(res => {
      if (res) {
        this.setState({
          question: '',
          answer: ''
        })

        navigation.navigate('DeckDetail', {
            id: res.id,
            title: res.title
        })
      }
    })
  }

  valid = () => {
    const { question, answer } = this.state
    if (!question) {
      return {
        result: false,
        info: 'question',
        focus: 'questionEl'
      }
    }
    if (!answer) {
      return {
        result: false,
        info: 'answer',
        focus: 'answerEl'
      }
    }
    return {
      result: true
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.hintText}>Enter your question</Text>
        <TextInput
          ref={(el) => {
            this.questionEl = el
          }}
          style={[styles.textInput, {width: Math.floor(width * 0.8)}]}
          value={this.state.question}
          onChangeText={val => this.setState({question: val})}
          maxLength={100} />
        <Text style={styles.hintText}>Enter your answer</Text>
        <TextInput
          ref={(el) => {
            this.answerEl = el
          }}
          style={[styles.textInput, {width: Math.floor(width * 0.8)}]}
          value={this.state.answer}
          onChangeText={val => this.setState({answer: val})}
          maxLength={100} />
        <TouchableOpacity onPress={this.submit}>
          <View style={[styles.button, {backgroundColor: red}]}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default AddCardScreen
