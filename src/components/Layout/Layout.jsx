import React from 'react'
import styles from './styles.module.scss'

function MyLayout({ children }) {
const { wrapLayout, container } = styles

  return (
    <main className={wrapLayout}>
      <div className={container}>
        {children}
      </div>
    </main>
  )
}

export default MyLayout
