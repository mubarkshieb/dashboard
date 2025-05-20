import styles from "./page.module.css";
import Middlesection from "@/Components/MiddleSection/Middlesection";

export default function Home() {
  return (
    <div className={styles.contaier}>
      <div className={styles.middlesection}>
        <div className={styles.content}>
          <Middlesection />
        </div>
      </div>
    </div>
  );
}
