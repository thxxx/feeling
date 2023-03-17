import React, { useEffect } from 'react'
import RootNavigator from './navigations'
import { useUserStore } from './store/userStore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
// import RNBootSplash from 'react-native-bootsplash'

const App = () => {
  const { setUid } = useUserStore()

  useEffect(() => {
    init()
    // .finally(async () => {
    //   await RNBootSplash.hide({
    //     fade: true,
    //   })
    // })
  }, [])

  const init = async () => {
    const value = await AsyncStorage.getItem('uid')

    if (value) {
      setUid(value)
    } else {
      const newUid = await uuid.v4()
      await AsyncStorage.setItem('uid', newUid)
      console.log('그럼 일로와서 저장', newUid)
      setUid(newUid)
    }
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RootNavigator />
    </GestureHandlerRootView>
  )
}

export default App
