import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60)
      }
    } else {
      timeLeft = { days: 0, hours: 0, mins: 0, secs: 0 }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className={styles.timerContainer}>
      <div className={styles.box}>
        <span className={styles.number}>{timeLeft.days ?? 0}</span>
        <span className={styles.label}>Days</span>
      </div>
      <div className={styles.box}>
        <span className={styles.number}>{timeLeft.hours ?? 0}</span>
        <span className={styles.label}>Hours</span>
      </div>
      <div className={styles.box}>
        <span className={styles.number}>{timeLeft.mins ?? 0}</span>
        <span className={styles.label}>Mins</span>
      </div>
      <div className={styles.box}>
        <span className={styles.number}>{timeLeft.secs ?? 0}</span>
        <span className={styles.label}>Secs</span>
      </div>
    </div>
  )
}

export default CountdownTimer
