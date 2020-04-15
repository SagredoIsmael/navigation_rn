import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import isArray from 'lodash/isArray'
import map from 'lodash/map'
import size from 'lodash/size'

export { default as connectNavigation } from './HOC'
export const navigationRef = React.createRef()

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const StackNavigator = ({ screens, headerCommonsOptions }) =>
  <Stack.Navigator initialRouteName={screens[0].name} screenOptions={headerCommonsOptions && headerCommonsOptions}>
    {map(screens, itemScreen =>
      <Stack.Screen key={itemScreen.name} name={itemScreen.name} component={itemScreen.component} options={itemScreen.options} />
    )}
  </Stack.Navigator>


const DrawerNavigator = ({ screens, headerCommonsOptions }) =>{
  const StackScreen = props => <StackNavigator {...props} screens={screens} headerCommonsOptions={headerCommonsOptions} />
  return (
    <Drawer.Navigator initialRouteName={'DRAWER'}>
    <Drawer.Screen name={'DRAWER'} component={StackScreen} />
  </Drawer.Navigator>
  )
}
 
const NavigationWrapper = ({ hasDrawer, screens, headerCommonsOptions }) =>
  isArray(screens) && size(screens) > 0 &&
  < NavigationContainer ref={navigationRef}>
    {hasDrawer ?
      <DrawerNavigator screens={screens} headerCommonsOptions={headerCommonsOptions} />
      :
      <StackNavigator screens={screens} headerCommonsOptions={headerCommonsOptions} />
    }
  </NavigationContainer >

export default NavigationWrapper

