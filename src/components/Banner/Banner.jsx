import styles from './styles.module.scss'
import MyButton from '@components/Button/Button.jsx'

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>SHIRTS</h1>
        <p>THAT DEFINE YOU</p>
        <MyButton content="SHOP NOW" />
      </div>
    </div>
  )
}

export default Banner
