import styles from './page.module.css'
import Title from "@/ui-elements/title/title";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Title>ILS Online</Title>
      </div>
    </main>
  )
}
