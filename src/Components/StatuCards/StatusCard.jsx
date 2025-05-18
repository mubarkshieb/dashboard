import React from "react";
import styles from "./Status.module.css";
import { HeartPulse, Server, Wifi, WifiOff } from "lucide-react";

export default function StatusCard() {
    const stats = {
        total: 120,
        online: 95,
        offline: 25,
        serverHealth: "Healthy",
    };

    return (
        <div className={styles.grid}>
            <div className={styles.card}>
                <Server className={`${styles.icon} ${styles.blue}`} />
                <div>
                    <p className={styles.label}>Total Devices</p>
                    <p className={styles.value}>{stats.total}</p>
                </div>
            </div>

            <div className={styles.card}>
                <Wifi className={`${styles.icon} ${styles.green}`} />
                <div>
                    <p className={styles.label}>Online Devices</p>
                    <p className={styles.value}>{stats.online}</p>
                </div>
            </div>

            <div className={styles.card}>
                <WifiOff className={`${styles.icon} ${styles.red}`} />
                <div>
                    <p className={styles.label}>Offline Devices</p>
                    <p className={styles.value}>{stats.offline}</p>
                </div>
            </div>

            <div className={styles.card}>
                <HeartPulse className={`${styles.icon} ${styles.purple}`} />
                <div>
                    <p className={styles.label}>Main Server Health</p>
                    <p className={styles.value}>{stats.serverHealth}</p>
                </div>
            </div>
        </div>
    );
}
