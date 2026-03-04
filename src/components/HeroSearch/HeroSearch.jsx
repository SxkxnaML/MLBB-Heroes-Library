import styles from './HeroSearch.module.css'

export default function HeroForm({ value, setInputData }) {
  return (
    <div className={styles.searchWrap}>
      <input
        className={styles.searchInput}
        type="text"
        value={value}
        placeholder="Поиск героя"
        onChange={(e) => setInputData(e.target.value)}
      />
    </div>
  )
}
