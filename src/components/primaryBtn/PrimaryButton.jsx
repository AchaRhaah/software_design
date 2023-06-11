import React from 'react';
import styles from './btn.module.css'

const PrimaryButton = ({ onClick, text, disabled}) => {
  return (
    <button onClick={onClick} className={styles.btnContainer} disabled={disabled}>
      {text}
    </button>
  )
}

export default PrimaryButton
