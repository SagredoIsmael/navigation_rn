import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import isArray from 'lodash/isArray'
import map from 'lodash/map'
import size from 'lodash/size'

const Stack = createStackNavigator()


const NavigationWrapper = ({ screen, headerCommonsOptions }) =>
  < NavigationContainer >
    <Stack.Navigator initialRouteName={screen.name} screenOptions={headerCommonsOptions && headerCommonsOptions}>
      <Stack.Screen name={screen.name} component={screen.component} options={screen.options} />
    </Stack.Navigator>
  </NavigationContainer >


export default NavigationWrapper