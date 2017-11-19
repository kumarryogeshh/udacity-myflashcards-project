import { StyleSheet, Platform, Dimensions } from 'react-native'
let { height, width } = Dimensions.get('window')

import { gray, white, blue, mint, darkOrange } from './color'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    justifyContent: 'center'
  },
  loading: {
    flex: 1
  },
  list: {
    marginTop: (Platform.OS === 'ios') ? 30 : 0,
    backgroundColor: 'white'
  },
  content :{
    backgroundColor: 'white'
  },
  title: {
    fontSize: Math.floor(width / 12),
    paddingBottom: 20,
    color: blue
  },
  counts: {
    fontSize: Math.floor(width / 15),
    color:gray
  },
  detailWrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonText: {
    fontSize: Math.floor(width / 15),
    alignSelf: 'center',
    color: white
  },
  detailWrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: Math.floor(width / 15)
  },
  progressText: {
    fontSize: Math.floor(width / 18),
    marginTop: 15
  },
  quizCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Math.floor(width * 0.8),
    margin: 20,
    borderRadius: 8,
    borderWidth: 0
  },
  cardFace: {
    backgroundColor: darkOrange
  },
  cardBack: {
    backgroundColor: mint
  },
  hintText: {
    fontSize: Math.floor(width / 12),
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10
  },
})
