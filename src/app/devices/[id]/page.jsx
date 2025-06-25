"use client"

import styles from './page.module.css';
const dummyData = [
    { id: '1', name: 'Camera-1', ip: '192.168.1.10', status: 'Up', lastUp: '2025-05-19 08:00' },
    { id: '2', name: 'Camera-2', ip: '192.168.1.11', status: 'Down', lastUp: '2025-05-18 23:45' },
    { id: '3', name: 'Server-1', ip: '192.168.1.20', status: 'Up', lastUp: '2025-05-19 07:50' },
    { id: '4', name: 'Router', ip: '192.168.1.1', status: 'Up', lastUp: '2025-05-19 07:55' },
    { id: '5', name: 'Switch', ip: '192.168.1.2', status: 'Up', lastUp: '2025-05-19 07:48' },
    { id: '6', name: 'Camera-3', ip: '192.168.1.12', status: 'Down', lastUp: '2025-05-18 22:15' },
];

export default function DevicePage({ params }) {
    const device = dummyData[params.id];

    if (!device) {
        return <p style={{ color: 'red' }}>Device not found.</p>;
    }
    return (
        <div className={styles.containter}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Device Name:</td>
                        <td>Ip Address:</td>
                        <td>Status:</td>
                        <td>CPU:</td>
                        <td>Memory:</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{device.name}</td>
                        <td>{device.ip}</td>
                        <td>{device.status}</td>
                        <td>{device.cpu}</td>
                        <td>{device.memory}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
