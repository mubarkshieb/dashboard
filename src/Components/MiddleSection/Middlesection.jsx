import React from 'react';
import styles from './Middlesection.module.css';
import DeviceTable from '../DeviceTable/DeviceTable';
import Charts from '../Charts/Charts';

const Middlesection = () => {
    return (
        <div className={styles.containter}>
            <Charts />
            <DeviceTable />
        </div>
    )
}

export default Middlesection