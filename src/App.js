import Input from './components/Input/Input'
import './App.css'
import InputAnswer from './components/Input/InputAnswer'
import { useState } from 'react'

function App() {
  const [addUser, setAddUser] = useState([])

  const inputAnswerList = (uName, uAge) => {
    setAddUser(prevUserList => [...prevUserList, { username: uName, age: uAge }])
  }

  return (
    <div className="entire">
      <Input AnswerList={inputAnswerList} />
      <InputAnswer inputText={addUser} />
    </div>
  )
}

export default App
