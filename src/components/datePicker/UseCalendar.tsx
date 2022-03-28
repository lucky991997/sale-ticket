import { useState } from 'react'

const daysArr = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']

const monthsArr = [
  'Tháng 1',
  'Tháng 2',
  'Tháng 3',
  'Tháng 4',
  'Tháng 5',
  'Tháng 6',
  'Tháng 7',
  'Tháng 8',
  'Tháng 9',
  'Tháng 10',
  'Tháng 11',
  'Tháng 12',
]

const useCalendar = () => {
  //step 1 : setup tháng vs day
  const days = daysArr
  const months = monthsArr
  // step 2 : date now trong ô input
  const today = new Date()
  const todayFormat = `${today.getDate()}-${
    today.getMonth() + 1}-${today.getFullYear()}`

  //step3 : calendarrow
  const [selectedDate, setSelectedDate] = useState(today)
  const daysInWeek = [1, 2, 3, 4, 5, 6, 0]
    // step3-1:  last day in month
  const selectedMonthLastDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
  0
  )
    // step 3-2 : last day in prev month
  const prevMonthLastDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    0
  )

  // step 3-3: day in month: 1 tháng có bao nhiêu ngày
  const daysInMonth = selectedMonthLastDate.getDate()


  // step 3-4: get first day in month : starting 0 -> Sunday

  const firstDayInMonth = new Date( selectedDate.getFullYear(), selectedDate.getMonth(),1).getDay()


  const startingPoint = daysInWeek.indexOf(firstDayInMonth) + 1


  //step 3-5
  let prevMonthStartingPoint =
    prevMonthLastDate.getDate() - daysInWeek.indexOf(firstDayInMonth) + 1
 
  let currentMonthCounter = 1
  let nextMonthCounter = 1
  const rows = 6
  const cols = 7

  const calendarRows: any = {}

  
  for (let i = 1; i < rows ; i++) {
    for (let j = 1; j < cols + 1; j++) {
     
     
      if (!calendarRows[i]) {
        calendarRows[i] = []
      }


      if (i === 1) {
        if (j < startingPoint) {
          calendarRows[i] = [...calendarRows[i],
            {
              classes: 'in-prev-month',
              date: `${prevMonthStartingPoint}-${ selectedDate.getMonth() === 0 ? 12 : selectedDate.getMonth()
              }-${
                selectedDate.getMonth() === 0
                  ? selectedDate.getFullYear() - 1
                  : selectedDate.getFullYear()
              }`,
              value: prevMonthStartingPoint,
            },
          ]
          prevMonthStartingPoint++
        } else {
          calendarRows[i] = [
            ...calendarRows[i],
            {
              classes: '',
              date: `${currentMonthCounter}-${
                selectedDate.getMonth() + 1
              }-${selectedDate.getFullYear()}`,
              value: currentMonthCounter,
            },
          ]
          currentMonthCounter++
        }
      } else if (i > 1 && currentMonthCounter < daysInMonth + 1) {
        calendarRows[i] = [
          ...calendarRows[i],
          {
            classes: '',
            date: `${currentMonthCounter}-${
              selectedDate.getMonth() + 1
            }-${selectedDate.getFullYear()}`,
            value: currentMonthCounter,
          },
        ]
        currentMonthCounter++
      } else {
        calendarRows[i] = [
          ...calendarRows[i],
          {
            classes: 'in-next-month',
            date: `${nextMonthCounter}-${
              selectedDate.getMonth() + 2 === 13
                ? 1
                : selectedDate.getMonth() + 2
            }-${
              selectedDate.getMonth() + 2 === 13
                ? selectedDate.getFullYear() + 1
                : selectedDate.getFullYear()
            }`,
            value: nextMonthCounter,
          },
        ]
        nextMonthCounter++
      }
    }
  }
  

  //step 4: getPrevMonth 
  const getPrevMonth = () => {
    setSelectedDate(
      (prevValue) => new Date(prevValue.getFullYear(), prevValue.getMonth() - 1)
    )
  }
  //step 5: getNextMonth
  const getNextMonth = () => {
    setSelectedDate(
      (prevValue) =>
        new Date(prevValue.getFullYear(), prevValue.getMonth() + 1)
    )
  }

  return {
    days,
    months,
    todayFormat,
    calendarRows,
    selectedDate,
    getPrevMonth,
    getNextMonth,
  }
}

export default useCalendar
