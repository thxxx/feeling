import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { Dispatch, SetStateAction, useState } from 'react'
import Modal from 'react-native-modal'
import { Emotion } from '@utils/emotionList'
import { supabase } from '@src/lib/supabase'
import { useUserStore } from '@src/store/userStore'
import styled from 'styled-components/native'

type ModalProps = {
  isVisible: boolean
  emotion: Emotion | undefined
  setIsVisible: Dispatch<SetStateAction<boolean>>
}

const ModalContainer = ({ isVisible, emotion, setIsVisible }: ModalProps) => {
  const [sentence, setSentence] = useState('')
  const { uid } = useUserStore()

  const onSubmit = async () => {
    try {
      const { error } = await supabase.from('emotions').insert({
        id: 1,
        emotion: 'Denmark',
        created_at: new Date(),
        uid: uid,
        sentence: sentence,
      })
      console.log(error)
      setSentence('')
      setIsVisible(false)
    } catch {}
  }

  return (
    <Modal isVisible={isVisible} onBackdropPress={() => setIsVisible(false)}>
      <View style={styles.view}>
        <Text>{emotion}</Text>
        <TextInput value={sentence} onChangeText={(e) => setSentence(e)} />
      </View>
    </Modal>
  )
}

export default ModalContainer

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
})
