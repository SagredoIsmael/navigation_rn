import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import map from 'lodash/map'
import isArray from 'lodash/isArray'
import size from 'lodash/size'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator()


export default ({ route }) => {
  const tabs = route.params?.tabs
  const commonOptions = route.params?.commonOptions
  return (
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
  )
}



const TabIcon = ({ tabs, route }) =>
  map(tabs, tabScreen => {
    if (tabScreen.name == route.name && tabScreen.icon)
      return <Icon key={tabScreen.icon} name={tabScreen.icon} size={tabScreen.iconSize ? tabScreen.iconSize : 30}
        color={tabScreen.iconColor ? tabScreen.iconColor : 'black'} />
  })