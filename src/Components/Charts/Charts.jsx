"use client"
import React from 'react';
import styles from './Chart.module.css';
import LineChart from './LineChart/LineChart'


const Charts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.chart1}><LineChart /></div>
            </div>
            <div className={styles.right}>
                <div className={styles.chart2}>2</div>
            </div>
        </div>
    )
}

export default Charts