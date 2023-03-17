export enum Emotion {
  HAPPY = '행복해요',
  GOOD = '기뻐요',
  SMILE = '웃음이 나요',
  FILL = '보람차요',
  SAD = '무기력해요',
  CONFUSE = '혼란스러워요',
  BAD = '후회되는 하루에요',
  UNSATISFY = '제 자신이 불만족스러워요',
}

export enum EmotionCategory {
  STR_POS = 'strong_positive',
  WEEK_POS = 'week_positive',
  NEGATIVE = 'negative',
  WONDERING = 'wondering',
}

export type Emotions = {
  emotion: Emotion
  explanation: string
  category: EmotionCategory
  color: string
}

export const emotions: Emotions[] = [
  {
    emotion: Emotion.HAPPY,
    category: EmotionCategory.STR_POS,
    explanation: '느껴지는 순수한 행복',
    color: 'rgba(180, 180, 0, 0.9)',
  },
  {
    emotion: Emotion.GOOD,
    category: EmotionCategory.STR_POS,
    explanation: '그냥 기분이 좋아요',
    color: 'rgba(180, 180, 0, 0.7)',
  },
  {
    emotion: Emotion.SMILE,
    category: EmotionCategory.WEEK_POS,
    explanation: '웃음이 나는 느낌',
    color: 'rgba(180, 0, 0, 0.9)',
  },
  {
    emotion: Emotion.FILL,
    category: EmotionCategory.WEEK_POS,
    explanation: '보람찬 하루를 보냈어요',
    color: 'rgba(180, 0, 0, 0.7)',
  },
  {
    emotion: Emotion.BAD,
    category: EmotionCategory.WONDERING,
    explanation: '안좋은 기분 너무 막연',
    color: 'rgba(0, 180, 180, 0.9)',
  },
  {
    emotion: Emotion.CONFUSE,
    category: EmotionCategory.WONDERING,
    explanation: '미래가 불분명해서 혼란스러워요',
    color: 'rgba(0, 180, 180, 0.7)',
  },
  {
    emotion: Emotion.SAD,
    category: EmotionCategory.NEGATIVE,
    explanation: '슬픔을 의미해요',
    color: 'rgba(0, 0, 180, 0.7)',
  },
  {
    emotion: Emotion.UNSATISFY,
    category: EmotionCategory.NEGATIVE,
    explanation: '오늘의 제 자신에게 실망스러워요',
    color: 'rgba(0, 0, 180, 0.9)',
  },
  // 아래부터는 복사

  {
    emotion: Emotion.HAPPY,
    category: EmotionCategory.STR_POS,
    explanation: '느껴지는 순수한 행복',
    color: 'rgba(180, 180, 0, 0.9)',
  },
  {
    emotion: Emotion.GOOD,
    category: EmotionCategory.STR_POS,
    explanation: '그냥 기분이 좋아요',
    color: 'rgba(180, 180, 0, 0.7)',
  },
  {
    emotion: Emotion.SMILE,
    category: EmotionCategory.WEEK_POS,
    explanation: '웃음이 나는 느낌',
    color: 'rgba(180, 0, 0, 0.9)',
  },
  {
    emotion: Emotion.FILL,
    category: EmotionCategory.WEEK_POS,
    explanation: '보람찬 하루를 보냈어요',
    color: 'rgba(180, 0, 0, 0.7)',
  },
  {
    emotion: Emotion.BAD,
    category: EmotionCategory.WONDERING,
    explanation: '안좋은 기분 너무 막연',
    color: 'rgba(0, 180, 180, 0.9)',
  },
  {
    emotion: Emotion.CONFUSE,
    category: EmotionCategory.WONDERING,
    explanation: '미래가 불분명해서 혼란스러워요',
    color: 'rgba(0, 180, 180, 0.7)',
  },
  {
    emotion: Emotion.SAD,
    category: EmotionCategory.NEGATIVE,
    explanation: '슬픔을 의미해요',
    color: 'rgba(0, 0, 180, 0.7)',
  },
  {
    emotion: Emotion.UNSATISFY,
    category: EmotionCategory.NEGATIVE,
    explanation: '오늘의 제 자신에게 실망스러워요',
    color: 'rgba(0, 0, 180, 0.9)',
  },
  {
    emotion: Emotion.HAPPY,
    category: EmotionCategory.STR_POS,
    explanation: '느껴지는 순수한 행복',
    color: 'rgba(180, 180, 0, 0.9)',
  },
  {
    emotion: Emotion.GOOD,
    category: EmotionCategory.STR_POS,
    explanation: '그냥 기분이 좋아요',
    color: 'rgba(180, 180, 0, 0.7)',
  },
  {
    emotion: Emotion.SMILE,
    category: EmotionCategory.WEEK_POS,
    explanation: '웃음이 나는 느낌',
    color: 'rgba(180, 0, 0, 0.9)',
  },
  {
    emotion: Emotion.FILL,
    category: EmotionCategory.WEEK_POS,
    explanation: '보람찬 하루를 보냈어요',
    color: 'rgba(180, 0, 0, 0.7)',
  },
  {
    emotion: Emotion.BAD,
    category: EmotionCategory.WONDERING,
    explanation: '안좋은 기분 너무 막연',
    color: 'rgba(0, 180, 180, 0.9)',
  },
  {
    emotion: Emotion.CONFUSE,
    category: EmotionCategory.WONDERING,
    explanation: '미래가 불분명해서 혼란스러워요',
    color: 'rgba(0, 180, 180, 0.7)',
  },
  {
    emotion: Emotion.SAD,
    category: EmotionCategory.NEGATIVE,
    explanation: '슬픔을 의미해요',
    color: 'rgba(0, 0, 180, 0.7)',
  },
  {
    emotion: Emotion.UNSATISFY,
    category: EmotionCategory.NEGATIVE,
    explanation: '오늘의 제 자신에게 실망스러워요',
    color: 'rgba(0, 0, 180, 0.9)',
  },
  {
    emotion: Emotion.HAPPY,
    category: EmotionCategory.STR_POS,
    explanation: '느껴지는 순수한 행복',
    color: 'rgba(180, 180, 0, 0.9)',
  },
  {
    emotion: Emotion.GOOD,
    category: EmotionCategory.STR_POS,
    explanation: '그냥 기분이 좋아요',
    color: 'rgba(180, 180, 0, 0.7)',
  },
  {
    emotion: Emotion.SMILE,
    category: EmotionCategory.WEEK_POS,
    explanation: '웃음이 나는 느낌',
    color: 'rgba(180, 0, 0, 0.9)',
  },
  {
    emotion: Emotion.FILL,
    category: EmotionCategory.WEEK_POS,
    explanation: '보람찬 하루를 보냈어요',
    color: 'rgba(180, 0, 0, 0.7)',
  },
  {
    emotion: Emotion.BAD,
    category: EmotionCategory.WONDERING,
    explanation: '안좋은 기분 너무 막연',
    color: 'rgba(0, 180, 180, 0.9)',
  },
  {
    emotion: Emotion.CONFUSE,
    category: EmotionCategory.WONDERING,
    explanation: '미래가 불분명해서 혼란스러워요',
    color: 'rgba(0, 180, 180, 0.7)',
  },
  {
    emotion: Emotion.SAD,
    category: EmotionCategory.NEGATIVE,
    explanation: '슬픔을 의미해요',
    color: 'rgba(0, 0, 180, 0.7)',
  },
  {
    emotion: Emotion.UNSATISFY,
    category: EmotionCategory.NEGATIVE,
    explanation: '오늘의 제 자신에게 실망스러워요',
    color: 'rgba(0, 0, 180, 0.9)',
  },
  {
    emotion: Emotion.HAPPY,
    category: EmotionCategory.STR_POS,
    explanation: '느껴지는 순수한 행복',
    color: 'rgba(180, 180, 0, 0.9)',
  },
  {
    emotion: Emotion.GOOD,
    category: EmotionCategory.STR_POS,
    explanation: '그냥 기분이 좋아요',
    color: 'rgba(180, 180, 0, 0.7)',
  },
  {
    emotion: Emotion.SMILE,
    category: EmotionCategory.WEEK_POS,
    explanation: '웃음이 나는 느낌',
    color: 'rgba(180, 0, 0, 0.9)',
  },
  {
    emotion: Emotion.FILL,
    category: EmotionCategory.WEEK_POS,
    explanation: '보람찬 하루를 보냈어요',
    color: 'rgba(180, 0, 0, 0.7)',
  },
  {
    emotion: Emotion.BAD,
    category: EmotionCategory.WONDERING,
    explanation: '안좋은 기분 너무 막연',
    color: 'rgba(0, 180, 180, 0.9)',
  },
  {
    emotion: Emotion.CONFUSE,
    category: EmotionCategory.WONDERING,
    explanation: '미래가 불분명해서 혼란스러워요',
    color: 'rgba(0, 180, 180, 0.7)',
  },
  {
    emotion: Emotion.SAD,
    category: EmotionCategory.NEGATIVE,
    explanation: '슬픔을 의미해요',
    color: 'rgba(0, 0, 180, 0.7)',
  },
  {
    emotion: Emotion.UNSATISFY,
    category: EmotionCategory.NEGATIVE,
    explanation: '오늘의 제 자신에게 실망스러워요',
    color: 'rgba(0, 0, 180, 0.9)',
  },
  {
    emotion: Emotion.HAPPY,
    category: EmotionCategory.STR_POS,
    explanation: '느껴지는 순수한 행복',
    color: 'rgba(180, 180, 0, 0.9)',
  },
  {
    emotion: Emotion.GOOD,
    category: EmotionCategory.STR_POS,
    explanation: '그냥 기분이 좋아요',
    color: 'rgba(180, 180, 0, 0.7)',
  },
  {
    emotion: Emotion.SMILE,
    category: EmotionCategory.WEEK_POS,
    explanation: '웃음이 나는 느낌',
    color: 'rgba(180, 0, 0, 0.9)',
  },
  {
    emotion: Emotion.FILL,
    category: EmotionCategory.WEEK_POS,
    explanation: '보람찬 하루를 보냈어요',
    color: 'rgba(180, 0, 0, 0.7)',
  },
  {
    emotion: Emotion.BAD,
    category: EmotionCategory.WONDERING,
    explanation: '안좋은 기분 너무 막연',
    color: 'rgba(0, 180, 180, 0.9)',
  },
  {
    emotion: Emotion.CONFUSE,
    category: EmotionCategory.WONDERING,
    explanation: '미래가 불분명해서 혼란스러워요',
    color: 'rgba(0, 180, 180, 0.7)',
  },
  {
    emotion: Emotion.SAD,
    category: EmotionCategory.NEGATIVE,
    explanation: '슬픔을 의미해요',
    color: 'rgba(0, 0, 180, 0.7)',
  },
  {
    emotion: Emotion.UNSATISFY,
    category: EmotionCategory.NEGATIVE,
    explanation: '오늘의 제 자신에게 실망스러워요',
    color: 'rgba(0, 0, 180, 0.9)',
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
