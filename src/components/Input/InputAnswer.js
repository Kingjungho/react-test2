import styles from './InputAnswer.module.css'
import InputBox from '../UI/InputBox'
;


const InputAnswer = ({ inputText }) => {
  return (
    <InputBox className={styles['input-answer']}>
      <ul>
        {inputText.map((list, idx) => (
          <li key={idx}>{list.username} ({list.age} years old)</li>
        ))}
      </ul>
    </InputBox>
  )
}

export default InputAnswer
