import styles from './styles.module.scss'
import CountdownTimer from '@components/CountdownTimer/CountdownTimer.jsx'
import Button from '@components/Button/Button.jsx'

function CountdownBanner() {
  const { container, containerTimer, title } = styles
  const targetDate = '2026-12-31T00:00:00'

  return (
    <div className={container}>
      <div className={containerTimer}>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <div>
        <p className={title}>The Classics Make A Comeback</p>
        <div>
          <Button content="Buy now" />
        </div>
      </div>
    </div>
  )
}

export default CountdownBanner
