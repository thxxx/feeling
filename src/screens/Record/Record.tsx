import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styled from 'styled-components/native'
import { emotions, randomColor, Emotions } from '@utils/emotionList'
import { ScreenProps } from '@screens/screen-props'
import H1 from '@components/H1'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  runOnUI,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'

type RecordScreenProps = ScreenProps<'Record'>

type ContextType = {
  translateX: number
  translateY: number
}

const BOX_HEIGHT = 180
const BOX_WIDTH = 180
const BOX_MARGIN = 6
const NUM_COLS = 6

const Record: React.FC<RecordScreenProps> = ({ navigation }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false)
  const [emo, setEmo] = useState<Emotions>()

  const valueX = useSharedValue(0)
  const valueY = useSharedValue(0)

  const clickBox = (item: Emotions) => {
    setEmo(item)
    setIsButtonVisible(true)
    // setIsOpen(true)
  }

  const ii = (cx: number, ex: number) => {
    setIsButtonVisible((prev) => !prev)
    // 박스 바운더리를 넘을 때 한번만 실행되게 할 수는 없을까?
  }

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translateX = valueX.value
      context.translateY = valueY.value
    },
    onActive: (event, context) => {
      valueX.value = event.translationX + context.translateX
      valueY.value = event.translationY + context.translateY
      if (
        valueX.value % 100 > -10 &&
        valueX.value % 100 < 10 &&
        (event.translationX > 3 || event.translationX < -3)
      )
        runOnJS(ii)(valueY.value, valueX.value)
    },
    onEnd: (event, context) => {},
  })

  const _renderItem = (item: Emotions, idx: number) => {
    const rowIndex = parseInt(idx / NUM_COLS)
    const nowCenterRight = -valueX.value + BOX_WIDTH * (NUM_COLS / 2)
    const nowCenterTop = -valueY.value + BOX_HEIGHT * 2
    const rightFromTL = idx - rowIndex * NUM_COLS
    const topFromTL = rowIndex * BOX_HEIGHT + BOX_HEIGHT / 2

    const isCenter =
      nowCenterRight - BOX_WIDTH / 2 < (rightFromTL + 0.5) * BOX_WIDTH &&
      (rightFromTL + 0.5) * BOX_WIDTH < nowCenterRight + BOX_WIDTH / 2 &&
      nowCenterTop - BOX_HEIGHT / 2 < topFromTL &&
      topFromTL < nowCenterTop + BOX_HEIGHT / 2

    return (
      <Box
        isCenter={isCenter}
        selected={item.emotion === emo?.emotion}
        bg={item.color}
        onPress={() => clickBox(item)}
      >
        <BoxText>
          {item.emotion}
          {parseInt(idx / NUM_COLS) * BOX_HEIGHT + BOX_HEIGHT / 2}
        </BoxText>
      </Box>
    )
  }

  const AsStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: valueX.value,
      },
      {
        translateY: valueY.value,
      },
    ],
  }))

  return (
    <HomeContainer>
      {isButtonVisible && (
        <RecordButton
          onPress={() => {
            emo &&
              navigation.navigate('Write', {
                emotion: emo,
              })
            // setIsOpen(true)
          }}
        >
          <Text>{emo?.emotion}</Text>
          <Text>{emo?.explanation}</Text>
        </RecordButton>
      )}
      <H1 color='white'>오늘 하루는 어떠셨나요?</H1>
      {/* <EmotionsBoxs>
        {emotions && emotions.map((item) => _renderItem(item))}
      </EmotionsBoxs> */}
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <EmotionsBoxs style={[AsStyle]}>
          {emotions && emotions.map((item, idx) => _renderItem(item, idx))}
        </EmotionsBoxs>
      </PanGestureHandler>
    </HomeContainer>
  )
}

export default React.memo(Record)

const RecordButton = styled.TouchableOpacity`
  border-radius: 112px;
  background-color: white;
  padding: 12px 35px;
  min-height: 90px;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  bottom: 20px;
  z-index: 3;
  width: 100%;
`

const HomeContainer = styled.View`
  background-color: #0a0a0a;
  position: relative;
  flex-direction: column;
  padding: 0px 12px;
  // min-height: 1000px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const EmotionsBox = styled.FlatList`
  flex-direction: row;
  height: 200px;
  flex: 1;
  width: 100%;
`
const EmotionsBoxs = styled(Animated.View)`
  flex-direction: row;
  height: 200px;
  flex: 1;
  width: 300%;
  flex-wrap: wrap;
`

const Box = styled.Pressable<{
  bg: string
  selected: boolean
  isCenter: boolean
}>`
  flex: 1;
  min-width: ${BOX_WIDTH}px;
  height: ${BOX_HEIGHT}px;
  margin: ${BOX_MARGIN}px;
  font-size: 19px;
  font-weight: 800;
  background-color: ${({ bg }) => bg};
  color: #eeeeee;
  filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.4));
  border: 1.5px solid
    ${({ selected }) =>
      selected ? 'rgb(120, 120, 120)' : 'rgba(255,255,255,0.8)'};
  border-radius: 12px;
  transition-delay: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const BoxText = styled.Text`
  font-weight: 700;
  color: rgba(245, 245, 245, 1);
`
