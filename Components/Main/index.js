import React from 'react'
import { View, StyleSheet } from 'react-native'

// Components
import Header from './Header'
import Calculator from './Calculator'

import { Colors } from '../Assets/styles'

class Main extends React.Component {
  state = {
    formula: 'Epley',
    freedom: true
  }

  changeFormula = (formula) => {
    this.setState({ formula })
  }

  changeUnits = () => {
    this.setState({ freedom: !this.state.freedom })
  }

  render () {
    return (
      <View style={style.main}>
        <Header />
        <Calculator
          currentFormula={this.state.formula}
          changeFormula={this.changeFormula}
          currentUnits={this.state.freedom}
          changeUnits={this.changeUnits}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.grey,
  }
})

export default Main
