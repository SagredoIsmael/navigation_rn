import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import isArray from 'lodash/isArray'
import map from 'lodash/map'
import size from 'lodash/size'
import Icon from 'react-native-vector-icons/MaterialIcons'

export { default as connectNavigation } from './HOC'
export const navigationRef = React.createRef()

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

const NavigationWrapper = ({ hasDrawer, screens, headerCommonsOptions }) =>
  isArray(screens) && size(screens) > 0 &&
  < NavigationContainer ref={navigationRef}>
    {hasDrawer ?
      <DrawerNavigator screens={screens} headerCommonsOptions={headerCommonsOptions} />
      :
      <StackNavigator screens={screens} headerCommonsOptions={headerCommonsOptions} />
    }
  </NavigationContainer >


const StackNavigator = ({ screens, headerCommonsOptions }) =>
  <Stack.Navigator initialRouteName={screens[0].name} screenOptions={headerCommonsOptions && headerCommonsOptions}>
    {map(screens, itemScreen => {
      const TabScreen = props => itemScreen.tabs && <TabNavigator {...props}
        tabs={itemScreen.tabs} commonOptions={itemScreen.tabCommonOptions} />
      return <Stack.Screen key={itemScreen.name} name={itemScreen.name}
        component={itemScreen.tabs ? TabScreen : itemScreen.component} options={itemScreen.options} />
    })}
  </Stack.Navigator>


const DrawerNavigator = ({ screens, headerCommonsOptions }) => {
  const StackScreen = props => <StackNavigator {...props} screens={screens} headerCommonsOptions={headerCommonsOptions} />
  return (
    <Drawer.Navigator initialRouteName={'DRAWER' + screens[0].name}>
      <Drawer.Screen name={'DRAWER' + screens[0].name} component={StackScreen} />
    </Drawer.Navigator>
  )
}


const TabNavigator = ({ tabs, commonOptions }) =>
  isArray(tabs) && size(tabs) > 0 &&
  <Tab.Navigator tabBarOptions={commonOptions}
    screenOptions={({ route }) => {
      const TabIconWithProps = props => <TabIcon {...props} route={route} tabs={tabs} />
      return ({
        tabBarIcon: TabIconWithProps
      })
    }}>
    {map(tabs, tabScreen =>
      <Tab.Screen key={tabScreen.name} name={tabScreen.name} component={tabScreen.component} />
    )}
  </Tab.Navigator>

const TabIcon = ({ tabs, route }) =>
  map(tabs, tabScreen => {
    if (tabScreen.name == route.name && tabScreen.icon)
      return <Icon key={tabScreen.icon} name={tabScreen.icon} size={tabScreen.iconSize ? tabScreen.iconSize : 30}
        color={tabScreen.iconColor ? tabScreen.iconColor : 'black'} />
  })

export default NavigationWrapper

