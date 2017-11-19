import React, { Component } from 'react'
import { KeyboardAvoidingView, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { red } from '../utils/color'
import styles from '../utils/styles'


class AddDeckScreen extends Component {

  state = {
    deckTitle: ''
  }

  constructor(props){
    super(props);
    this.state = {
      deckTitle: ''
    }
  }

  submit = () => {
    // valid
    let _valid = this.valid()
    if (!_valid.result) {
      Alert.alert(
        'ATTENTION',
        'Please Enter A Title For Your Deck',
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
    const { deckTitle } = this.state
    const { navigation } = this.props
    saveDeckTitle({
      title: deckTitle
    }).then(res => res.data)
      .then(res => {
        if (res) {
          this.setState({
            deckTitle: ''
          })
          res = res[Object.keys(res)]
          //updateTargetDeck(res)
          navigation.navigate('DeckDetail', {
            id: res.id,
            title: res.title
          })
        }
      })
  }

  valid = () => {
    const { deckTitle } = this.state
    if (!deckTitle) {
      return {
        result: false,
        focus: 'deckTitleEl'
      }
    }
    return {
      result: true
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.hintText}>What's the title</Text>
        <Text style={styles.hintText}>of your new</Text>
        <Text style={styles.hintText}>Deck?</Text>
        <TextInput style={styles.textInput}
          autoCapitalize='sentences'
          autoCorrect={false}
          placeholder='Deck Title'
          ref={(el) => {
            this.deckTitleEl = el
          }}
          value={this.state.deckTitle}
          onChangeText={val => this.setState({deckTitle: val})}
          maxLength={20} />
        <TouchableOpacity onPress={this.submit}>
          <View style={[styles.button, {backgroundColor: red, marginTop: 20}]}>
            <Text style={styles.buttonText}>Create Deck</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default AddDeckScreen
