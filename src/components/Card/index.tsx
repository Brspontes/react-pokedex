import styles from './styles.module.scss'

export function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png" alt="pokemon image"/>
        <h3 className={styles.title}>Nome Pokemon</h3>
        <div>
          <h3 className={styles.subtitle}>Types</h3>
          <ul className={styles.types}>
            <li>Grass</li>
            <li>Poison</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
