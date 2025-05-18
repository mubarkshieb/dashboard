import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './DeviceTable.module.css'

function createData(deviceName, ipAddress, deviceStatus, lastUp) {
    return { deviceName, ipAddress, deviceStatus, lastUp };
}

const rows = [
    createData('cam_1', '192.168.1.155', 'Up', '0:44:13'),
    createData('cam_2', '192.168.1.59', 'Up', '1:40'),
    createData('cam_3', '192.168.1.232', 'down', '1Day,5Hours'),
    createData('cam_5', '192.168.1.115', 'Up', '5 Hours'),
    createData('cam_10', '192.168.1.15', 'Up', '2Days'),
];
const DeviceTable = () => {

    return (
        <div className={styles.container}>
            <TableContainer sx={{ borderRadius: 3, overflow: 'hidden' }} component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Device Name</TableCell>
                            <TableCell align="right">IP Address</TableCell>
                            <TableCell align="right">Device Status</TableCell>
                            <TableCell align="right">last up</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.ipAddress}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.deviceName}
                                </TableCell>
                                <TableCell align="right">{row.ipAddress}</TableCell>
                                <TableCell align="right">{row.deviceStatus}</TableCell>
                                <TableCell align="right">{row.lastUp}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default DeviceTable