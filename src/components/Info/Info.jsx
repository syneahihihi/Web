import React from 'react'
import MainLayout from '@components/Layout/Layout.jsx'
import InfoCard from './InfoCard.jsx'
import { dataInfo } from './constants.jsx'
import styles from './styles.module.scss'

function Info() {
  return (
    <div className={styles.section}>
      <MainLayout>
        <div className={styles.container}>
          {dataInfo.map((item) => {
            return <InfoCard key={item.title} title={item.title} description={item.description} src={item.src} />
          })}
        </div>
      </MainLayout>
    </div>
  )
}

export default Info
