import React from 'react'
import styles from "./Navbar.module.css";
import { User } from 'lucide-react';
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}><text>SMART</text><span>SOLUTIONS.</span></div>
            <User />
        </div>
    )
}

export default Navbar