import { Button, DatePicker, Flex } from 'antd';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Flex>
      <Button>Click me</Button>
      <DatePicker />
     </Flex>
    </>
  )
}

export default App
