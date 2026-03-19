import styles from "./page.module.css";
import SecretButton from "./SecretButton";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Mini site secret</h1>
          <p>Clique sur le bouton pour afficher la valeur de MON_TEXTE_SECRET.</p>
        </div>
        <SecretButton />
      </main>
    </div>
  );
}
