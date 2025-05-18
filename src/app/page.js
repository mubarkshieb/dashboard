import Navbar from "@/Components/Navbar/Navbar";
import styles from "./page.module.css";
import SideBar from "@/Components/Sidebar/SideBar";
import Middlesection from "@/Components/MiddleSection/Middlesection";

export default function Home() {
  return (
    <div className={styles.contaier}>
      <Navbar />
      <div className={styles.middlesection}>
        <div className={styles.sidebar}>
          <SideBar />
        </div>
        <div className={styles.content}>
          <Middlesection />
        </div>
      </div>
    </div>
  );
}
