import HeroCard from '../HeroCard/HeroCard'
import styles from './HeroList.module.css'

export default function HeroList({ heroes }) {
  return heroes.length > 0 ? (
    <div className={styles.grid}>
      {heroes.map((el) => (
        <HeroCard hero={el} key={el.id} />
      ))}
    </div>
  ) : (
    <div className={styles.heroesNotFound}>Heroes not found</div>
  )
}
