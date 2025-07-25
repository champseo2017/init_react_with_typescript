import { Button, DatePicker, Flex } from 'antd';
import './App.css';

function App() {
  const unusedVariable = 'I will cause a lint error';
  return (
    <>
      <Flex>
        <Button>Click me</Button>
        <DatePicker />
      </Flex>
    </>
  );
}

export default App;
