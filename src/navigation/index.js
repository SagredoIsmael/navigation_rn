import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './stack'
import isArray from 'lodash/isArray'
import size from 'lodash/size'

export const navigationRef = React.createRef()


const NavigationWrapper = ({ screens, headerCommonsOptions }) =>
  isArray(screens) && size(screens) > 0 &&
  < NavigationContainer ref={navigationRef}>
    <StackNavigator screens={screens} headerCommonsOptions={headerCommonsOptions} />
  </NavigationContainer >


export default NavigationWrapper

