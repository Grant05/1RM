import React from 'react'
import { StackNavigator } from 'react-navigation'

// Routes & Components
import MainLayout from './Components/Main'

const AppRouter = StackNavigator({
  Main: { screen: MainLayout }
})

export default AppRouter
