import { Emotion } from '@utils/emotionList'

export interface Database {
  public: {
    Tables: {
      movies: {
        Row: {} // The data expected to be returned from a "select" statement.
        Insert: {} // The data expected passed to an "insert" statement.
        Update: {} // The data expected passed to an "update" statement.
      }
    }
  }
}

export type EmotionType = {
  id: number
  emotion: Emotion
  created_at: any
  uid: number | string
  sentence: string
  date: string
}
