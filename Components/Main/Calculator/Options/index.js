import React from 'react'
import { View, Text, TouchableHighlight, Picker, Switch } from 'react-native'

// CSS
import styles from './styles'
import { Colors } from '../../../Assets/styles'

// Helpers
import formulas from '../../formula'

class Options extends React.Component {
  state = {
    picker: false
  }

  togglePicker = () => {
    this.setState({ picker: !this.state.picker })
  }

  getUnits () {
    return this.props.currentUnits ? 'lbs' : 'kg'
  }

  render () {
    const { getMaxTotal, currentFormula, changeFormula, changeUnits, currentUnits } = this.props

    return (
      <View style={styles.row}>
        <View style={styles.row}>
          <Text style={styles.text}>Max total: {getMaxTotal}{this.getUnits()}</Text>

          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Picker
              selectedValue={currentFormula}
              mode='dropdown'
              style={{ color: '#fff', width: 80 }}
              itemTextStyle={styles.pickerText}
              itemStyle={styles.pickerText}
              onValueChange={(itemValue) => {
                changeFormula(itemValue)
              }}
            >
              {
                Object.keys(formulas).map(formula => (
                  <Picker.Item
                    label={formula}
                    value={formula}
                    style={styles.pickerText}
                    key={formula}
                  />
                ))
              }
            </Picker>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 5 }}>
            <Switch
              onValueChange={changeUnits}
              onTintColor={Colors.blue}
              value={currentUnits}
            />
            <Text style={styles.text}>
              <Text style={currentUnits && styles.highlight}>
                lbs
              </Text> or <Text style={!currentUnits && styles.highlight}>
                kg
              </Text>
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Options
