import { View, Text, Pressable, TextInput } from 'react-native'
import React, { ReactNode, useState } from 'react'
import { ScreenProps } from '@screens/screen-props'
import styled from 'styled-components/native'
import { supabase } from '@src/lib/supabase'
import { useUserStore } from '@src/store/userStore'

type WriteScreenProps = ScreenProps<'Write'>

const activations = ['운동', '독서', '친구와 수다', '커피', '게임', '산책']

const Write = ({ navigation, route }: WriteScreenProps) => {
  const [sentence, setSentence] = useState('')
  const [actives, setActives] = useState<string[]>([])
  const { uid } = useUserStore()
  const { emotion } = route.params

  const onSubmit = async () => {
    try {
      console.log(uid)
      const now = new Date()
      const { error } = await supabase.from('emotions').insert({
        emotion: emotion.emotion,
        created_at: now,
        date:
          String(now.getFullYear()) +
          '/' +
          String(now.getMonth() + 1) +
          '/' +
          String(now.getDate()),
        uid: uid,
        sentence: sentence,
        activations: actives,
      })
      console.log(error)
      setActives([])
      setSentence('')
      navigation.goBack()
    } catch {}
  }

  return (
    <WriteContainer>
      <HeadContainer>
        <Pressable
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Text>뒤로</Text>
        </Pressable>
      </HeadContainer>
      <WriteText>{emotion.emotion}</WriteText>
      <WriteText>{emotion.explanation}</WriteText>
      <WriteLabel>오늘은 무슨 활동을 했나요?</WriteLabel>
      <ButtonContainer>
        {activations.map((item) => {
          return (
            <RadioButton
              key={item}
              onPress={() => {
                if (actives.includes(item)) {
                  const filtered = actives.filter((doc) => doc !== item)
                  setActives(filtered)
                } else {
                  setActives([...actives, item])
                }
              }}
              clicked={actives?.includes(item)}
            >
              {item}
            </RadioButton>
          )
        })}
      </ButtonContainer>
      <WriteLabel>왜 그런 감정을 느끼셨나요?</WriteLabel>
      <CustomInput value={sentence} onChangeText={(e) => setSentence(e)} />
      <SubmitButton onPress={onSubmit}>
        <Text>작성하기</Text>
      </SubmitButton>
    </WriteContainer>
  )
}

export default Write

const WriteLabel = styled.Text`
  color: white;
  text-align: left;
  width: 100%;
`

const WriteText = styled.Text`
  color: white;
`

const CustomInput = styled.TextInput`
  background: white;
  width: 100%;
  margin: 10px 0px;
`

const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  background-color: #03c988;
  border-radius: 6px;
  padding: 15px;
  justify-content: center;
  align-items: center;
`

const RadioButton = ({
  children,
  clicked,
  onPress,
}: {
  children: ReactNode
  clicked: boolean | undefined
  onPress: () => void
}) => {
  return (
    <RadioView clicked={clicked} onPress={onPress}>
      <RadioText>{children}</RadioText>
    </RadioView>
  )
}
const RadioView = styled.Pressable<{ clicked: boolean | undefined }>`
  border-radius: 12px;
  border: 1px solid white;
  background-color:${({ clicked }) => (clicked ? 'red' : 'blue')}
  padding: 10px;
  margin: 3px;
  display: flex;
`

const RadioText = styled.Text`
  color: white;
`

const HeadContainer = styled.View`
  height: 40px;
  color: white;
`

const WriteContainer = styled.View`
  background: #0a0a0a;
  min-height: 100%;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
`

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
`
