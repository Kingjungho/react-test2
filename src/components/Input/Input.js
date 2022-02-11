import { useState, useRef } from 'react'
import styles from './Input.module.css'
import Button from '../Button/Button'
import InputBox from '../UI/InputBox'
import InputModal from './InputModal'

const Input = ({ AnswerList }) => {
  const nameInput = useRef()
  const ageInput = useRef()

  // const [inputText, setInputText] = useState({
  //   username: '',
  //   age: '',
  // })
  const [modalShow, setModalShow] = useState()

  // const inputTextHandler = e => {
  //   const { value, id } = e.target
  //   setInputText({
  //     ...inputText,
  //     [id]: value,
  //   })
  // }

  const inputSubmitHandler = e => {
    e.preventDefault()
    const nameInputValue = nameInput.current.value
    const ageInputValue = ageInput.current.value
    if (
      nameInputValue.trim().length === 0 ||
      ageInputValue.trim().length === 0
    ) {
      // setInputText({
      //   username: '',
      //   age: '',
      // })
      setModalShow({
        title: 'Error!!',
        content: '작성란을 모두 채워주세요...😂',
      })
      return
    }
    AnswerList(nameInputValue, ageInputValue)
    // setInputText({
    //   username: '',
    //   age: '',
    // })
    nameInput.current.value = ''
    ageInput.current.value = ''
  }

  const modalHandler = () => {
    setModalShow(null)
  }

  return (
    <>
      {modalShow && (
        <InputModal
          title={modalShow.title}
          content={modalShow.content}
          modalHandler={modalHandler}
        />
      )}
      <InputBox className={styles['input-wrap']}>
        <form onSubmit={inputSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={inputText.username}
            // onChange={inputTextHandler}
            ref={nameInput}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="text"
            // value={inputText.age}
            // onChange={inputTextHandler}
            ref={ageInput}
          />
          <Button type="submit">Add User</Button>
        </form>
      </InputBox>
    </>
  )
}

export default Input
