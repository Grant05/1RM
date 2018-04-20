import { StyleSheet } from 'react-native'
import { Colors } from '../../Assets/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.grey,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
    padding: 5
  }
})

export default styles
