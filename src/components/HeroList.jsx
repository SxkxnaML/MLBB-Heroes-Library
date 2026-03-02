import HeroCard from './HeroCard'
import heroes from '../data/data'
import styles from './HeroList.module.css'

export default function HeroList() {
  return (
    <div className={styles.grid}>
      {heroes.map((el) => (
        <HeroCard hero={el} key={el.id} />
      ))}
    </div>
  )
}
