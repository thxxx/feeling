export enum Emotion {
  HAPPY = '행복해요',
  SAD = '무기력해요',
  GOOD = '기뻐요',
  BAD = '후회되는 하루에요',
  SMILE = '웃음이 나요',
}

export type Emotions = {
  emotion: Emotion
  id: number
  explanation: string
}

export const emotions: Emotions[] = [
  {
    emotion: Emotion.HAPPY,
    explanation: '느껴지는 순수한 행복',
    id: 0,
  },
  {
    emotion: Emotion.SMILE,
    explanation: '웃음이 나는 느낌',
    id: 1,
  },
  {
    emotion: Emotion.BAD,
    explanation: '안좋은 기분 너무 막연',
    id: 2,
  },
  {
    emotion: Emotion.SAD,
    explanation: '슬픔을 의미해요',
    id: 3,
  },
  {
    emotion: Emotion.GOOD,
    explanation: '그냥 기분이 좋아요',
    id: 4,
  },
]

export const randomColor = [
  '#DF7857',
  '#2C3333',
  '#0E8388',
  '#3F497F',
  '#F7C04A',
  '#BE6DB7',
  '#3A98B9',
  '#FFF1DC',
  '#FFB84C',
  '#183A1D',
  '#BAD7E9',
]
