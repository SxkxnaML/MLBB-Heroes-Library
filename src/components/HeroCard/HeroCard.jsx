import styles from './HeroCard.module.css'
import { useState } from 'react'

export default function HeroCard({ hero }) {
  const [imageFailed, setImageFailed] = useState(false)

  const hasImg = Boolean(hero?.img)

  const name = hero?.name?.trim() ? hero.name : 'Unknown hero'

  const role = hero?.role?.trim() ? hero.role : 'Unknown role'

  return (
    <div className={styles.card}>
      {!hasImg || imageFailed ? (
        <div className={styles.heroPlaceholder}>No image</div>
      ) : (
        <img
          className={styles.heroImage}
          src={hero.img}
          alt={name}
          onError={() => setImageFailed(true)}
        />
      )}

      <h2 className={styles.heroName}>{name}</h2>
      <p className={styles.heroRole}>{role}</p>
    </div>
  )
}
