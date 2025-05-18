import React from 'react';
import styles from './Middlesection.module.css';
import DeviceTable from '../DeviceTable/DeviceTable';
import Charts from '../Charts/Charts';
import StatusCard from '../StatuCards/StatusCard';

const Middlesection = () => {
    return (
        <div className={styles.containter}>
            <StatusCard />
            <Charts />
            <DeviceTable />
        </div>
    )
}

export default Middlesection