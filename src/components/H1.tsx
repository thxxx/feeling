import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import styled from 'styled-components/native'

type H1Props = {
  children: ReactNode
  color?: string
}

const H1 = ({ children, color }: H1Props) => {
  return (
    <View>
      <H1Text color={color ? color : 'black'}>{children}</H1Text>
    </View>
  )
}

export default React.memo(H1)

const H1Text = styled.Text<{ color: string }>`
  font-size: 22px;
  font-weight: 700;
  color: ${({ color }) => color};
  padding: 15px 0px;
`
