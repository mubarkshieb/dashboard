import React from 'react'
import styles from "./Navbar.module.css";
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}><text>SMART</text><span>SOLUTIONS.</span></div>
        </div>
    )
}

export default Navbar