import styles from './RoleSelect.module.css'

export default function RoleSelect({ heroRole, setHeroRole }) {
  return (
    <div className={styles.selectWrap}>
      <select
        className={styles.select}
        value={heroRole}
        onChange={(e) => setHeroRole(e.target.value)}
      >
        <option value="All"> All </option>
        <option value="Assassin"> Assassin </option>
        <option value="Tank"> Tank </option>
        <option value="Mage"> Mage </option>
        <option value="Marksman"> Marksman </option>
        <option value="Fighter"> Fighter </option>
        <option value="Support"> Support </option>
      </select>
    </div>
  )
}
