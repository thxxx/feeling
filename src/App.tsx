import React, { useEffect } from 'react'
import RootNavigator from './navigations'
import { useUserStore } from './store/userStore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'

const App = () => {
  const { setUid } = useUserStore()

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const value = await AsyncStorage.getItem('uid')
    console.log('밸류를 얻음', value)
    if (value) {
      setUid(value)
    } else {
      const newUid = await uuid.v4()
      await AsyncStorage.setItem('uid', newUid)
      console.log('그럼 일로와서 저장', newUid)
      setUid(newUid)
    }
  }
  return <RootNavigator />
}

export default App
