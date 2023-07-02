import { type StoreSchedulesType } from '../API/getStoreDetail'

interface Props {
  storeSchedules: StoreSchedulesType[]
}

export const dayOfTheWeek = (props: Props) => {
  const krDayArray: string[] = []
  props.storeSchedules.forEach((el) => {
    if (el.day === 'MONDAY') {
      krDayArray.push('월')
    }
    if (el.day === 'TUESDAY') {
      krDayArray.push('화')
    }
    if (el.day === 'WEDNESDAY') {
      krDayArray.push('수')
    }
    if (el.day === 'THURSDAY') {
      krDayArray.push('목')
    }
    if (el.day === 'FRIDAY') {
      krDayArray.push('금')
    }
    if (el.day === 'SATURDAY') {
      krDayArray.push('토')
    }
    if (el.day === 'SUNDAY') {
      krDayArray.push('일')
    }
  })
  return krDayArray
}
