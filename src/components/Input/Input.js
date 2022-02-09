import { useState } from 'react'
import styles from './Input.module.css'
import Button from '../Button/Button'
import InputBox from '../UI/InputBox'

const Input = ({ AnswerList }) => {
  const [inputText, setInputText] = useState({
    username: '',
    age: '',
  })

  const inputTextHandler = e => {
    const { value, id } = e.target
    setInputText({
      ...inputText,
      [id]: value,
    })
  }

  console.log(inputText)

  const inputSubmitHandler = e => {
    e.preventDefault()
    if (
      inputText.username.trim().length === 0 ||
      inputText.age.trim().length === 0
    ) {
      setInputText({
        username: '',
        age: '',
      })
      return
    }
    AnswerList(inputText.username, inputText.age)
    setInputText({
      username: '',
      age: '',
    })
  }

  return (
    <InputBox className={styles['input-wrap']}>
      <form onSubmit={inputSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={inputText.username}
          onChange={inputTextHandler}
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="text"
          value={inputText.age}
          onChange={inputTextHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </InputBox>
  )
}

export default Input
