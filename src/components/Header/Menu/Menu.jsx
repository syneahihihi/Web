import React from 'react'
import styles from '../styles.module.scss'


function Menu({ content, href } ) {
  return (
    <div className={styles.containerMenu}>
      <a className={styles.menu} href={href}>{content}</a>
    </div>
  )
}

export default Menu
