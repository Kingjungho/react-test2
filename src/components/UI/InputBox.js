import styles from './InputBox.module.css'

const InputBox = ({ children, className }) => {
  return <div className={`${styles.inputBox} ${className}`}>{children}</div>
}

export default InputBox
