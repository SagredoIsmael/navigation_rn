import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import isArray from 'lodash/isArray'
import map from 'lodash/map'
import size from 'lodash/size'

const Stack = createStackNavigator()

const NavigationWrapper = ({ screens, headerCommonsOptions }) =>
  isArray(screens) && size(screens) > 0 &&
  < NavigationContainer >
    <Stack.Navigator initialRouteName={screens[0].name} screenOptions={headerCommonsOptions && headerCommonsOptions}>
      {map(screens, itemScreen =>
        <Stack.Screen key={itemScreen.name} name={itemScreen.name} component={itemScreen.component} options={itemScreen.options} />
      )}
    </Stack.Navigator>
  </NavigationContainer >


export default NavigationWrapper