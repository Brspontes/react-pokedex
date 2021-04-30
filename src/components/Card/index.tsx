import styles from './styles.module.scss'
import { Pokemon } from '../../domain/entities/pokemon'

export function Card(pokemon: Pokemon) {

  function capitalize(str: string){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className={`${pokemon.types[0].type.name} ${styles.card}` }>
      <div className={styles.cardContent}>
        <img src={pokemon.urlImage} alt={`image ${pokemon.name}`}/>
        <h3 className={styles.title}>{capitalize(pokemon.name)}</h3>
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
