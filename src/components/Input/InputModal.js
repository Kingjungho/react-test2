import Button from '../Button/Button'
import styles from './InputModal.module.css'
import InputBox from '../UI/InputBox'

const InputModal = ({ title, content, modalHandler }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={modalHandler} />
      <InputBox className={styles['modal']}>
        <div className={styles['modal-wrap']}>
          <div className={styles['modal-header']}>
            <h2>{title}</h2>
          </div>
          <div className={styles['modal-desc']}>
            <p>{content}</p>
          </div>
          <footer className={styles.actions}>
            <Button type="submit" onClick={modalHandler}>
              Okey
            </Button>
          </footer>
        </div>
      </InputBox>
    </>
  )
}

export default InputModal
