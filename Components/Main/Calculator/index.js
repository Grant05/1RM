import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { withFormik } from 'formik'
import Yup from 'yup'

// Components
import Options from './Options'

// CSS
import styles from './styles'

// Helpers
import formulas from '../formula'

const lifts = ['squat', 'bench', 'deadlift']

class Calculator extends React.Component {
  componentWillReceiveProps (newProps) {
    const { setFieldValue, values } = this.props

    if (!newProps.currentUnits && this.props.currentUnits) {
      // Convert lbs to KG
      lifts.forEach(lift => (
        setFieldValue(`${lift}Weight`, this.convertToKG(values[`${lift}Weight`]))
      ))
    }

    if (newProps.currentUnits && !this.props.currentUnits) {
      // Convert KG to lbs
      lifts.forEach(lift => (
        setFieldValue(`${lift}Weight`, this.convertToLBS(values[`${lift}Weight`]))
      ))
    }
  }

  convertToKG (lbs) {
    return Math.floor(lbs / 2.2046226218).toString()
  }

  convertToLBS (kg) {
    return Math.floor(kg * 2.2046226218).toString()
  }

  getMax = (liftType) => {
    const { currentFormula, values } = this.props

    const liftReps = values[`${liftType}Reps`]
    const liftWeight = values[`${liftType}Weight`]

    if (parseInt(liftReps, 10) === 1) {
      return liftWeight
    }

    return Math.round(formulas[currentFormula](liftReps, liftWeight))
  }

  getMaxTotal = () => {
    const { values } = this.props

    return parseInt(this.getMax('squat'), 10) + parseInt(this.getMax('deadlift'), 10) + parseInt(this.getMax('bench'), 10)
  }

  render () {
    const {
      currentFormula,
      changeFormula,
      currentUnits,
      changeUnits,
      values,
      errors,
      setFieldValue
    } = this.props

    console.log(values, 'VALUES')

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.col}>
            <View style={{ flex: 1, padding: 5 }} />

            <Text style={styles.text}>
              Weight
            </Text>

            <Text style={styles.text}>
              Reps
            </Text>

            <Text style={styles.text}>
              1RM
            </Text>
          </View>

          {
            lifts.map(lift => {
              return (
                <View style={styles.col} key={lift}>
                  <Text style={styles.text}>{lift[0].toUpperCase() + lift.substr(1)}</Text>

                  <TextInput
                    style={styles.textInput}
                    label='Weight'
                    onChangeText={(text) => setFieldValue(`${lift}Weight`, text)}
                    value={values[`${lift}Weight`]}
                    placeholder='Weight'
                  />

                  <TextInput
                    style={styles.textInput}
                    label='Reps'
                    onChangeText={(text) => setFieldValue(`${lift}Reps`, text)}
                    value={values[`${lift}Reps`]}
                    placeholder='Reps'
                  />

                  <Text style={styles.max}>
                    {Math.floor(this.getMax(lift))}
                  </Text>
                </View>
              )
            })
          }
        </View>

        <Options
          getMaxTotal={this.getMaxTotal()}
          changeFormula={changeFormula}
          currentFormula={currentFormula}
          currentUnits={currentUnits}
          changeUnits={changeUnits}
        />
      </View>
    )
  }
}

export default withFormik({
  validationSchema: Yup.object().shape({
    squatReps: Yup.number().truncate().required('Squat value required').positive().integer(),
    benchReps: Yup.number().truncate().required('Bench value required').positive('Not an integer').integer('Not an integer'),
    deadliftReps: Yup.number().truncate().required('Deadlift value required').positive('Not an integer').integer('Not an integer'),
    squatWeight: Yup.number().truncate().required('Squat value required').positive('Not an integer').integer('Not an integer'),
    benchWeight: Yup.number().truncate().required('Bench value required').positive('Not an integer').integer('Not an integer'),
    deadliftWeight:  Yup.number().truncate().required('Deadlift value required').positive('Not an integer').integer('Not an integer')
  }),
  mapPropsToValues: () => ({
    squatReps: '1',
    benchReps: '1',
    deadliftReps: '1',
    squatWeight: '100',
    benchWeight: '100',
    deadliftWeight: '100'
  }),
  displayName: 'CalculatorForm'
})(Calculator)
