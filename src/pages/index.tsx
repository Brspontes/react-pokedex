import { GetStaticProps } from 'next'
import { Card } from '../components/Card'
import { Pokemon, Region } from '../domain/entities/pokemon'
import { pokemonGetAll } from '../services/pokemonService'
import styles from '../styles/home.module.scss'

interface HomeProps {
  pokemons: Pokemon[]
}

export default function Home({ pokemons }: HomeProps) {
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        {
          pokemons.map(pokemon => (
            <Card key={pokemon.name} {...pokemon}/>
          ))
        }
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await pokemonGetAll(Region.hoen)
  return {
    props: {
      pokemons: response
    }
  }
}
