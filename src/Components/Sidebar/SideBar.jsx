import React from 'react';
import styles from './Sidebar.module.css';
import { House, Settings, Search } from 'lucide-react';

const SideBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.icons}>
                <div className={styles.house}>
                    <House />
                </div>
                <div className={styles.search}>
                    <Search />
                </div>
                <div className={styles.settings}>
                    <Settings />
                </div>
            </div>
        </div>
    )
}

export default SideBar