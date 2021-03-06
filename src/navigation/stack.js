import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerNavigator from './drawer'
import TabNavigator from './tab'
import map from 'lodash/map'

const Stack = createStackNavigator()

export default ({ screens, headerCommonsOptions }) =>
  <Stack.Navigator initialRouteName={screens[0].name} screenOptions={headerCommonsOptions && headerCommonsOptions}>
    {map(screens, itemScreen => {
      const DrawerScreen = () => itemScreen.hasDrawer && <DrawerNavigator
        screen={itemScreen} commonOptions={itemScreen.tabCommonOptions} />

      const TabScreen = () => itemScreen.tabs && <TabNavigator
        tabs={itemScreen.tabs} commonOptions={itemScreen.tabCommonOptions} />

      return <Stack.Screen key={itemScreen.name} name={itemScreen.name}
        component={itemScreen.hasDrawer ? DrawerScreen : itemScreen.tabs ? TabScreen : itemScreen.component}
        options={itemScreen.options} />
    })}
  </Stack.Navigator>