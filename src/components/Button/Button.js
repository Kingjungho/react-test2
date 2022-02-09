import styles from './Button.module.css'

const Button = ({ children, type }) => {
  return (
    <button type={type || 'button'} className={styles.button} >
      {children}
    </button>
  )
}

export default Button
