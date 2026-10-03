import React from 'react'
import styles from './styles.module.scss'

function MyButton({content}) {
  return (
    <div>
      <button className={styles.btn}>{content}</button>
    </div>
  )
}

export default MyButton
