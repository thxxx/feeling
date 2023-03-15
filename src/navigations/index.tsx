import { createStackNavigator } from '@react-navigation/stack'
import History from '@screens/History/History'
import Home from '@screens/Home/Home'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Record from '@screens/Record/Record'
import Write from '@screens/Record/Write'

const Tab = createStackNavigator()

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name='History'
          component={History}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name='Record'
          component={Record}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name='Write'
          component={Write}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
