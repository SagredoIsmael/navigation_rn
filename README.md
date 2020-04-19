
    ReactNative: Agile implementation of React Navigation with Stack, Tabs & Drawer (Android/iOS)


## 📖 Getting started

`$ yarn add @sagredoismael/navigation_rn`

or 

`$ npm i @sagredoismael/navigation_rn`

## **Prerequisite basic**
Installing dependencies into a bare React Native project

`$ yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view`

You can see all this dependencies in his documentation ('Getting started'): 
https://reactnavigation.org/docs/getting-started


## **Prerequisite for use icons in tabs**

You have to add this package to your project for use icons in tabs or custom drawer.

https://github.com/oblador/react-native-vector-icons  

Follow the instructions for linking in Android & iOS


## 💻 Basic usage (only stack)

```
import NavigationWrapper from '@sagredoismael/navigation_rn'

const AppWithNavigation = () =>
  <NavigationWrapper screens={screens} headerCommonsOptions={headerCommonsOptions} />

const screens = [  //MANDATORY
  {
    name: 'first',
    component: Screen1,
  }
]

const headerCommonsOptions = {
  gestureEnabled: true,
  cardOverlayEnabled: true,
  headerStyle: {
    backgroundColor: '#a86032',
  },
  headerTintColor: '#f5f0ed',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  /* ...all props: https://reactnavigation.org/docs/1.x/tab-navigator/ */
}

```


## 💻 Complete usage (with staks, drawer and/or tabs)

```
import NavigationWrapper from '@sagredoismael/navigation_rn'

const AppWithNavigation = () =>
  <NavigationWrapper screens={screens} headerCommonsOptions={headerCommonsOptions} />

  const screens = [  //MANDATORY
  {
    name: 'first',
    component: Screen1,
  },
  {
    name: 'second', //MANDATORY
    component: Screen2, //MANDATORY OR OPTIONAL IF ADD TABS
    hasDrawer: true, //OPTIONAL (default false),
    drawerProps: {  //OPTIONAL
      drawerPosition: "left",
      /* ...all props: https://reactnavigation.org/docs/drawer-navigator/ */
    },
    drawerItems: [  //OPTIONAL
      {
        label:"Profile",
        onPress: function(){console.log("press Profile")}
      },
      {
        label:"Help",
        onPress: function(){console.log("press Help")}
      }
      /* ...all props: https://reactnavigation.org/docs/drawer-navigator/ */
    ],
    tabs: [  //OPTIONAL
      {
        name: 'SCREEN1',  //MANDATORY
        component: Screen2, //MANDATORY
        icon: 'search', //OPTIONAL
        iconColor: 'blue', //OPTIONAL
        iconSize: 50, //OPTIONAL
      },
      {
        name: 'SCREEN2',
        component: Screen2,
        icon: 'insert-chart'
      },
      {
        name: 'SCREEN3',
        component: Screen3,
      }
    ],
    tabCommonOptions: { //OPTIONAL
      activeTintColor: '#a86032',
      inactiveTintColor: '#875535',
      activeBackgroundColor: '#f5f0ed',
      inactiveBackgroundColor: '#dbd3ce'
      /* ...all props: https://reactnavigation.org/docs/1.x/tab-navigator/ */
    },
  },
]

```


## 💻 Usage with actions (HOC)

```
import { connectNavigation } from '@sagredoismael/navigation_rn'


const SecondScreen = ({ goBack, toggleDrawer, navigateInTabs }) =>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red' }}>second</Text>
        <Button
            title="Go back"
            onPress={() => goBack()}
        />
        <Button
            title="Open Drawer"
            onPress={() => toggleDrawer()}
        />
         <Button
            title="Jump to Map tab"
            onPress={() => navigateInTabs('MAP')}
        />
    </View>

export default connectNavigation(SecondScreen)
```

## 💡 Props

- **For connect (HOC) (iOS & Android)**
        navigate,
        reset,
        goBack,
        toggleDrawer,
        openDrawer,
        closeDrawer,
        navigateInTabs

- **For navigation (iOS & Android)**

| Prop                   | Type                | Mandatory | Note                                             |
| ---------------------- | ------------------- | ------- | ------------------------------------------------ |
| `screens`     | `Array`            |   YES      | Specify all screens inside of the navigation |
| `headerCommonsOptions`                | `object`            |    NO     | Specify all props of header styles
| `All screen props`          | `object`            |    YES/NO     | Can see in the previous example what is mandatory or optional  |


## ✨ Credits
https://reactnavigation.org/docs/getting-started
https://github.com/oblador/react-native-vector-icons  

## 🤔 How to contribute
Have an idea? Found a bug? Please you can write me and I get you permission to the repo!

## 💫 Where is this library used?
If you are using this library in one of your projects, add it in this list below. ✨


## 📜 License
MIT license
