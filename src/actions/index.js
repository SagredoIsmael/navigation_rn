import { CommonActions, DrawerActions, TabActions } from '@react-navigation/native'
import { navigationRef } from '../navigation/index'

export const navigate = (routeName, params = {}) => {
  navigationRef.current?.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params
    })
  )
}

export const goBack = () => {
  navigationRef.current?.dispatch(CommonActions.goBack())
}

export const reset = (routeName, params = {}) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      name: routeName,
      params: params
    })
  )
}

export const toggleDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer())
}

export const navigateInTabs = (tabName, params = {}) =>
  navigationRef.current?.dispatch(
    TabActions.jumpTo(
      tabName, params
    )
  )
