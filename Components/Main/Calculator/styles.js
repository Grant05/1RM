import { StyleSheet } from 'react-native'
import { Colors } from '../../Assets/styles'

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'column',
    padding: 10,
    backgroundColor: Colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  row: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 15,
    // borderColor: Colors.blue,
    borderRadius: 5,
    shadowColor: '#F5F5F5',
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.47
  },
  col: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingRight: 10,
    paddingLeft: 10
  },
  text: {
    flex: 1,
    textAlign: 'center',
    padding: 5,
    borderRadius: 3
  },
  max: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    padding: 5,
    color: Colors.orange
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    padding: 5,
    borderRadius: 3,
    color: Colors.blue,
    // borderColor: Colors.grey,
    // borderWidth: 2,
    // borderRadius: 5
  }
})

export default styles
