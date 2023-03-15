import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Emotions } from '@utils/emotionList'

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>

export type RootStackParamList = {
  Home: undefined
  Record: undefined
  History: undefined
  Write: {
    emotion: Emotions
  }
}
