import styles from './styles.module.scss'

function AdvanceHeadling({ headline, title, headlineDes }) {
  return (
    <div className={styles.container}>
      {headline && <div className={styles.headline}>{headline}</div>}
      {title && <div className={styles.title}>{title}</div>}
      {headlineDes && (
        <div className={styles.headlineDes}>
          {typeof headlineDes === 'string' ? (
            <p>{headlineDes}</p>
          ) : (
            headlineDes
          )}
        </div>
      )}
    </div>
  )
}

export default AdvanceHeadling
