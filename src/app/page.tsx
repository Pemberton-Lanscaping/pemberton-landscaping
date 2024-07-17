import Image from "next/image";
import styles from "./page.module.css";
import logoImg from "../../public/pemberton-landscaping-logo.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src={logoImg}
          alt="Pemberton Landscaping Logo"
          width={200}
          height={200}
          unoptimized
          priority
        />
      </div>
    </main>
  );
}
