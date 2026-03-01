import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <h1 className={styles.topHeading}>Mobile Legends Hero Library</h1>
      <h3 className={styles.bottomHeading}>Моя библиотека героев MLBB</h3>
    </>
  )
}
