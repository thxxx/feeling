import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '@src/lib/supabase'
import { EmotionType } from '@src/lib/Database'
import { useUserStore } from '@src/store/userStore'
import { ScreenProps } from '@screens/screen-props'
import styled from 'styled-components/native'
import DropDownPicker from 'react-native-dropdown-picker'
import { Emotion, Emotions } from '@utils/emotionList'

type HistoryScreenProps = ScreenProps<'History'>

enum PeriodType {
  WEEK = 'week',
  MONTH = 'month',
  TWOWEEKS = '2weeks',
  ALL = 'all',
  RECENT = 'recent',
}

const History: React.FC<HistoryScreenProps> = () => {
  const [allEmos, setAllEmos] = useState<EmotionType[]>()
  const [stats, setStats] = useState<any>()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    { label: '최근 일주일', value: PeriodType.WEEK },
    { value: PeriodType.TWOWEEKS, label: '최근 이주일' },
    { value: PeriodType.MONTH, label: '최근 한달' },
    { value: PeriodType.ALL, label: '전체' },
    { value: PeriodType.RECENT, label: '최신순' },
  ])
  const { uid } = useUserStore()

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    if (allEmos && allEmos.length > 0) {
      const oneWeekAgo = new Date()
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

      const twoWeekAgo = new Date()
      twoWeekAgo.setDate(oneWeekAgo.getDate() - 14)

      const filtered = allEmos.filter((doc) => {
        if (value === PeriodType.WEEK) {
          if (new Date(doc.created_at) >= oneWeekAgo) return doc
        } else if (value === PeriodType.TWOWEEKS) {
          return new Date(doc.created_at) >= twoWeekAgo
        } else if (value === PeriodType.MONTH) {
          return new Date(doc.created_at) >= twoWeekAgo
        } else if (value === PeriodType.ALL) {
          return true
        }
      })

      setAllEmos(filtered)
      makeStatics(filtered)
    }
    if (value === PeriodType.RECENT) init()
  }, [value])

  const init = async () => {
    const { data, error } = await supabase
      .from('emotions')
      .select()
      .eq('uid', uid)
    setAllEmos(data as any)
    makeStatics(data as any)
  }

  const makeStatics = (filtered: EmotionType[]) => {
    if (filtered && filtered.length > 0) {
      type Words = {
        [key: string]: number
      }
      const allKinds: Words = {}
      filtered.forEach((item) => {
        if (allKinds[item.emotion]) allKinds[item.emotion] += 1
        else allKinds[item.emotion] = 1
      })
      console.log(allKinds)
      setStats(allKinds)
    }
  }

  const returnStatics = () => {
    let boxes = []
    for (const key in Emotion) {
      if (stats && stats[Emotion[key]] && stats[Emotion[key]] > 0) {
        boxes.push(
          <StaticBox>
            <Text>
              {key} : {stats[Emotion[key]]}
            </Text>
          </StaticBox>
        )
      }
    }
    return boxes
  }

  return (
    <HistoryContainer>
      <View>
        <Text>내 감정 기록들</Text>
      </View>
      <View>
        <CustromDropdown
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          dropDownContainerStyle={{
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: 'rgba(0,0,0,0.1)',
            width: 200,
          }}
        />
        <Text>최근 일주일</Text>
      </View>
      {allEmos ? (
        <>
          {value === PeriodType.RECENT ? (
            <>
              {allEmos.map((item, index) => {
                return (
                  <CollectedEmotionView key={index}>
                    <Text>{item.emotion}</Text>
                    <Text>{item.sentence}</Text>
                    <Text>{item.date}</Text>
                  </CollectedEmotionView>
                )
              })}
            </>
          ) : (
            <View>{returnStatics()}</View>
          )}
        </>
      ) : (
        <Text>loading..</Text>
      )}
    </HistoryContainer>
  )
}

export default History

const HistoryContainer = styled.View`
  padding: 0px 12px;
`

const CollectedEmotionView = styled.View`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  border: 1px solid black;
  padding: 10px;
  margin: 4px 0px;
`
const CustromDropdown = styled(DropDownPicker)`
  border: 2px solid rgba(0, 0, 0, 0.1);
  width: 200px;
`

const StaticBox = styled.View`
  background-color: rgba(100, 0, 0, 0.2);
  margin: 4px;
  border-radius: 6px;
  padding: 12px;
`
