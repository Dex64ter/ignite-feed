import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src="./public/images/ignite-simbol.svg" alt="Símbolo do ignite" />
      <strong>Ignite Feed</strong>
    </header>
  )
}
