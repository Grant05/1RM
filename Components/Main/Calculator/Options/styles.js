import { StyleSheet } from 'react-native'
import { Colors } from '../../../Assets/styles'

const styles = StyleSheet.create({
  row: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: Colors.grey
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    padding: 10
  },
  pickerText: {
    color: '#fff'
  },
  highlight: {
    color: Colors.blue
  }
})

export default styles
