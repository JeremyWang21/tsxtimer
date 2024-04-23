/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */
import { useCallback, useEffect, useRef, useState } from 'react'

function StartTimer(initialValue) {
  const [time, setTimer] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  let timerStatus: boolean = false

  const closeTimer = useCallback(() => {
    if (timerRef?.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const toggleTimer = useCallback(() => {
    if (!timerStatus) {
      timerRef.current = setInterval(() => setTimer((t) => t + 0.001), 1)
      timerStatus = true
    }
  }, [])

  const toggleOffTimer = useCallback(() => {
    if (timerStatus) {
      closeTimer()
      timerStatus = false
    }
  }, [])

  const resetTimer = useCallback(() => {
    if (!timerStatus) {
      setTimer(initialValue)
    }
  }, [])

  useEffect(() => {
    setTimer(initialValue)
  }, [])

  return { time, toggleTimer, resetTimer, toggleOffTimer }
}

export default StartTimer
