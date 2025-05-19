'use client';

import { useRouter } from 'next/navigation';
import styles from './DeviceTable.module.css';

const devices = [
    { id: '1', name: 'Camera-1', ip: '192.168.1.10', status: 'Up', lastUp: '2025-05-19 08:00' },
    { id: '2', name: 'Camera-2', ip: '192.168.1.11', status: 'Down', lastUp: '2025-05-18 23:45' },
    { id: '3', name: 'Server-1', ip: '192.168.1.20', status: 'Up', lastUp: '2025-05-19 07:50' },
    { id: '4', name: 'Router', ip: '192.168.1.1', status: 'Up', lastUp: '2025-05-19 07:55' },
    { id: '5', name: 'Switch', ip: '192.168.1.2', status: 'Up', lastUp: '2025-05-19 07:48' },
    { id: '6', name: 'Camera-3', ip: '192.168.1.12', status: 'Down', lastUp: '2025-05-18 22:15' },
];

export default function DeviceTable() {
    const router = useRouter();

    const handleClick = (id) => {
        router.push(`/devices/${id}`);
    };

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Device Name</th>
                        <th>IP Address</th>
                        <th>Status</th>
                        <th>Last Up</th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map((device) => (
                        <tr key={device.id} onClick={() => handleClick(device.id)} className={styles.row}>
                            <td>{device.name}</td>
                            <td>{device.ip}</td>
                            <td className={device.status === 'Up' ? styles.statusUp : styles.statusDown}>
                                {device.status}
                            </td>
                            <td>{device.lastUp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
