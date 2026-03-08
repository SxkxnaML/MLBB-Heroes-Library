import { Link, useParams } from 'react-router-dom'
import heroes from '../../data/heroes.mock'
import styles from './HeroPage.module.css'

export default function HeroPage() {
  const { id } = useParams()

  const hero = heroes.find((item) => item.id === id)

  if (!hero) {
    return (
      <section className={styles.notFound}>
        <h1 className={styles.notFoundTitle}>Hero not found</h1>
        <p className={styles.notFoundText}>
          We could not find a hero with this id.
        </p>
        <Link to="/" className={styles.backLink}>
          Back to library
        </Link>
      </section>
    )
  }

  return (
    <section className={styles.heroPage}>
      <Link to="/" className={styles.backLink}>
        ← Back to library
      </Link>

      <div className={styles.heroLayout}>
        <div className={styles.imageBox}>
          <img className={styles.heroImage} src={hero.img} alt={hero.name} />
        </div>

        <div className={styles.infoBox}>
          <h1 className={styles.heroName}>{hero.name}</h1>
          <p className={styles.heroRole}>{hero.role}</p>

          <div className={styles.metaList}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Difficulty:</span>
              <span className={styles.metaValue}>{hero.difficulty}</span>
            </div>

            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Lane:</span>
              <span className={styles.metaValue}>{hero.lane}</span>
            </div>

            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Damage Type:</span>
              <span className={styles.metaValue}>{hero.damageType}</span>
            </div>
          </div>

          <p className={styles.description}>{hero.description}</p>
        </div>
      </div>
    </section>
  )
}
