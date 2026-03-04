import styles from './Header.module.css'
import logo from '../../assets/mlbb-logo.png'
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img className={styles.logo} src={logo} alt="mlbb-logo" />

          <div className={styles.textBox}>
            <h1 className={styles.topHeading}>Mobile Legends Hero Library</h1>
            <p className={styles.bottomHeading}>Моя библиотека героев MLBB</p>
          </div>
        </div>
      </div>
    </header>
  )
}
