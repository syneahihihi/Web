import styles from './styles.module.scss'

function MyFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.col}>
          <h3>MARSEILLE</h3>
          <p>Guaranteed quality and original fashion products for your lifestyle.</p>
        </div>
        <div className={styles.col}>
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h3>CUSTOMER SERVICE</h3>
          <ul>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Marseille Store. All rights reserved.
      </div>
    </footer>
  )
}

export default MyFooter
