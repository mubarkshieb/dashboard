import React from 'react'
import styles from "./Navbar.module.css";
import { User } from 'lucide-react';
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}><text>SMART</text><span>SOLUTIONS.</span></div>
            <div className={styles.icons}>
                <User color="#ffffff" />
            </div>
        </div>
    )
}

export default Navbar