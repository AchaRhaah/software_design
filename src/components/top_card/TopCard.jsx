import React from 'react'
import styles from './styles.module.css'
import PrimaryButton from '../primaryBtn/PrimaryButton'

const TopCard = ({text, buttonText, buttonDisabled}) => {

  return (
    <div className={`${styles.topCard}`}>
        <p className={`${styles.text}`}>
            {text}
        </p>
        <div className={`${styles.btnWrapper}`}>
            <PrimaryButton text={buttonText} disabled={buttonDisabled} />
        </div>
    </div>
  )
}

export default TopCard;