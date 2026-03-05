import RoleSelect from '../RoleSelect/RoleSelect'
import styles from './HeroSearch.module.css'

export default function HeroSearch({
  value,
  setSearchHero,
  heroRole,
  setSelectRole,
}) {
  return (
    <div className={styles.searchWrap}>
      <input
        className={styles.searchInput}
        type="text"
        value={value}
        placeholder="Поиск героя"
        onChange={(e) => setSearchHero(e.target.value)}
      />
      <RoleSelect heroRole={heroRole} setHeroRole={setSelectRole} />
    </div>
  )
}
