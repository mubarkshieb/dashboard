import React from "react";
import styles from "./Sidebar.module.css";
import { House, Settings, Search } from "lucide-react";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <div className={styles.house}>
          <Link href="/">
            <House />
          </Link>
        </div>
        <div className={styles.search}>
          <Link href="/search">
            <Search />
          </Link>
        </div>
        <div className={styles.settings}>
          <Link href="/settings">
            <Settings />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
