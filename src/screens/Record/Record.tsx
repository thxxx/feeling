import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styled from 'styled-components/native'
import { emotions, randomColor, Emotions } from '@utils/emotionList'
import ModalContainer from '@components/ModalContainer'
import { ScreenProps } from '@screens/screen-props'
import H1 from '@components/H1'
import { TouchableOpacity } from 'react-native-gesture-handler'

type RecordScreenProps = ScreenProps<'Record'>

const numColumns = 3

const Record: React.FC<RecordScreenProps> = ({ navigation }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [emo, setEmo] = useState<Emotions>()

  const clickBox = (item: Emotions) => {
    setEmo(item)
    setIsButtonVisible(true)
    // setIsOpen(true)
  }

  const _renderItem = ({ item, index }: { item: Emotions; index: number }) => {
    return (
      <Box
        selected={item.emotion === emo}
        bg={randomColor[index]}
        onPress={() => clickBox(item)}
      >
        <BoxText>{item.emotion}</BoxText>
      </Box>
    )
  }

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
      {/* <TouchableOpacity
        onPress={() => {
          setIsButtonVisible(false)
        }}
      >
        <Text style={{ color: 'white' }}>없애기</Text>
      </TouchableOpacity> */}
      <EmotionsBox
        numColumns={numColumns}
        // horizontal={true}
        data={emotions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderItem}
      />
      <ModalContainer
        isVisible={isOpen}
        emotion={emo?.emotion}
        setIsVisible={setIsOpen}
      />
    </HomeContainer>
  )
}

export default Record

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

const Box = styled.Pressable<{ bg: string; selected: boolean }>`
  flex: 1;
  width: 120px;
  height: 100px;
  font-size: 19px;
  font-weight: 800;
  background-color: ${({ bg }) => bg};
  color: #eeeeee;
  filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.4));
  margin: 3px;
  border: 1.5px solid
    ${({ selected }) => (selected ? 'rgb(120, 120, 120)' : '')};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const BoxText = styled.Text`
  font-weight: 700;
  color: rgba(245, 245, 245, 1);
`
