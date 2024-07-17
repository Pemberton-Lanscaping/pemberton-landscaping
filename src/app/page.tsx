import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/pemberton-landscaping-logo.png"
          alt="Pemberton Landscaping Logo"
          width={200}
          height={200}
          priority
        />
      </div>
    </main>
  );
}
