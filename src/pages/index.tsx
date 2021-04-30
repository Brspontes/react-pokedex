import { Card } from '../components/Card'
import styles from '../styles/home.module.scss'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <Card />
      </div>
    </div>
  )
}
