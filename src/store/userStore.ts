import { Emotion } from '@utils/emotionList'
import { create } from 'zustand'

type UserStoreState = {
  uid: string | number[]
  emotion: Emotion
  setUid: (value: string | number[]) => void
  setEmotion: (value: Emotion) => void
}

export const useUserStore = create<UserStoreState>((set) => ({
  uid: '',
  emotion: Emotion.GOOD,
  setUid: (value: string | number[]) => {
    set(() => ({ uid: value }))
  },
  setEmotion: (value: Emotion) => {
    set(() => ({ emotion: value }))
  },
}))
