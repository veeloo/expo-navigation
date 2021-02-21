import { createStackNavigator } from 'react-navigation-stack'
import { crateAppcontainer, createAppContainer } from 'react-navigation'

import Home from '../components/Home'
import About from '../components/About'

const screens = {
    Home : {
        screen : Home
    },
    About : {
        screen : About
    }
}

const RootStack = createStackNavigator(screens)

export default createAppContainer(RootStack)