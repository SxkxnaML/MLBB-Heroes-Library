import styles from './HeroCard.module.css'
import { useState } from 'react'

export default function HeroCard({ hero }) {
  const [imageFailed, setImageFailed] = useState(false)

  const hasImg = Boolean(hero?.img)

  const name = hero?.name?.trim() ? hero.name : 'Unknown hero'

  const role = hero?.role?.trim() ? hero.role : 'Unknown role'

  return (
    <div>
      {!hasImg || imageFailed ? (
        <div className={styles.heroPlaceholder}>No image</div>
      ) : (
        <img
          className={styles.heroImage}
          src={hero.img}
          alt="#"
          onError={() => setImageFailed(true)}
        />
      )}

      <h2 className={styles.heroName}>{name}</h2>
      <h3 className={styles.heroRole}>{role}</h3>
    </div>
  )
}
