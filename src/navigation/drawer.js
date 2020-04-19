import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import TabNavigator from './tab'
import map from 'lodash/map'

const Drawer = createDrawerNavigator()

export default ({ screen, commonOptions }) => {
    const TabScreen = props => screen.tabs && <TabNavigator {...props}
      tabs={screen.tabs} commonOptions={commonOptions} />
  
    const DrawerItems = props => <CustomDrawerContent {...props} items={screen.drawerItems} />
  
    return (
      <Drawer.Navigator initialRouteName={screen.name} {...screen.drawerProps} drawerContent={screen.drawerItems && DrawerItems}>
        <Drawer.Screen name={screen.name} component={screen.tabs ? TabScreen : screen.component} />
      </Drawer.Navigator>
    )
  }

  const CustomDrawerContent = ({ items }) =>
  <DrawerContentScrollView >
    {map(items, drawerItem => 
      <DrawerItem key={drawerItem.label} {...drawerItem}/>
    )}
  </DrawerContentScrollView>