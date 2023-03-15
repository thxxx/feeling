import { Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import H1 from '@components/H1'
import { ScreenProps } from '@screens/screen-props'

type HomeScreenProps = ScreenProps<'Home'>

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <HomeContainer>
      <H1 color='white'>홈 화면</H1>
      <ButtonContainer>
        <NaviButton
          onPress={() => {
            navigation.navigate('Record')
          }}
        >
          <Text>기록하기</Text>
        </NaviButton>
        <NaviButton
          onPress={() => {
            navigation.navigate('History')
          }}
        >
          <Text>기록보기</Text>
        </NaviButton>
      </ButtonContainer>
    </HomeContainer>
  )
}

export default Home

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
`

const HomeContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #0a0a0a;
`

const NaviButton = styled.TouchableOpacity`
  padding: 12px;
  background: #03c988;
  margin: 10px;
  border-radius: 6px;
`
