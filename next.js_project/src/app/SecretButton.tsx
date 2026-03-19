"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function SecretButton() {
  const [secret, setSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/secret", { method: "GET" });
      if (!response.ok) {
        throw new Error("Impossible de recuperer le texte secret.");
      }

      const data = (await response.json()) as { secret?: string };
      setSecret(data.secret ?? "Aucune valeur trouvee.");
    } catch {
      setError("Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.secretSection}>
      <button className={styles.primary} onClick={handleClick} type="button">
        {loading ? "Chargement..." : "Afficher le secret"}
      </button>

      {secret && <p className={styles.secretValue}>{secret}</p>}
      {error && <p className={styles.error}>{error}</p>}
    </section>
  );
}