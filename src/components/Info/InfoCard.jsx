import React from 'react'
import styles from './styles.module.scss'

function InfoCard({ title, description ,src}) {
  return (
    <div className={styles.containerCard}>
      <img src={src} alt={title} />

      <div className={styles.containerContent}>
        <div className={styles.title}>{title}</div>
        <div className={styles.des}>{description}</div>
      </div>

    </div>
  )
}

export default InfoCard
