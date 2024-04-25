/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/*123test*/
import { useState } from 'react'
import { Button, Heading, Input } from '@chakra-ui/react'
import StartTimer from './components/Timer'

function App() {
  const { time, resetTimer, toggleTimer, toggleOffTimer } = StartTimer(0)
  const [value, setValue] = useState('')
  const handleChange = (event) => setValue(event.target.value)
  if (value == 'start') {
    toggleTimer()
  }
  if (value == 'stop') {
    toggleOffTimer()
  }
  return (
    <div>
      <Heading position="relative" left="px" top="225px">
        Time Passed: {time.toPrecision(4)}
      </Heading>
      <Button
        position="relative"
        top="250px"
        height="48px"
        width="100px"
        colorScheme="green"
        onClick={toggleTimer}
      >
        Start
      </Button>
      <Button
        position="relative"
        left="20px"
        top="250px"
        height="48px"
        width="100px"
        colorScheme="red"
        onClick={toggleOffTimer}
      >
        Stop
      </Button>
      <Button
        position="relative"
        left="40px"
        top="250px"
        height="48px"
        width="100px"
        colorScheme="gray"
        onClick={resetTimer}
      >
        Clear
      </Button>
      <Input
        onChange={handleChange}
        value={value}
        size="md"
        position="relative"
        top="275px"
      ></Input>
    </div>
  )
}

export default App
