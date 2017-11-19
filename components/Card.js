import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Platform } from 'react-native'
import FlipCard from 'react-native-flip-card'
import styles from '../utils/styles'
import { blue } from '../utils/color'

class Card extends Component {

  state = {
    showAnswer: false
  }

  constructor(props){
    super(props);
    this.state = {
      showAnswer: false
    }
  }

  componentWillReceiveProps () {
    this.setState({showAnswer: false})
  }

  render(){
    const { data } = this.props
    const { showAnswer } = this.state
    
    return (
      <View style={styles.container}>
        <FlipCard flip={showAnswer}
          perspective={Platform.OS === 'ios' ? 0 : 800}
          style={{borderWidth: 0}}
          friction={8}
          flipHorizontal={true}
          flipVertical={false}>
          <View style={[styles.quizCard, styles.cardFace]}>
            <Text style={styles.hintText}>
              {data.question + '?'}
            </Text>
          </View>
          <View style={[styles.quizCard, styles.cardBack]}>
            <Text style={styles.hintText}>
              {data.answer}
            </Text>
          </View>
        </FlipCard>
      </View>
    )
  }
}

export default Card
