import MyHeader from '@components/Header/Header.jsx'
import Banner from '@components/Banner/Banner.jsx'
import styles from './styles.module.scss'
function HomePage() {
  return (
    <div>
        <div className={styles.container}>
            <MyHeader />
            <Banner />
        </div>
    </div>
  )
}

export default HomePage
