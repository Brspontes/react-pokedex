import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="Images/poke_logo.svg" alt="logo"/>
      </div>
    </header>
  )
}
