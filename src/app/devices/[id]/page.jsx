const dummyData = {
    '1': { name: 'Camera-1', ip: '192.168.1.10', pingType: 'ICMP', snmpItems: ['Uptime', 'Latency'] },
    '2': { name: 'Camera-2', ip: '192.168.1.11', pingType: 'SNMP', snmpItems: ['Packet Loss', 'CPU Temp'] },
};

export default function DevicePage({ params }) {
    const device = dummyData[params.id];

    if (!device) {
        return <p style={{ color: 'red' }}>Device not found.</p>;
    }
    return (
        <div style={{ padding: '20px' }}>
            <h1>Device Details</h1>
            <p><strong>Name:</strong> {device.name}</p>
            <p><strong>IP:</strong> {device.ip}</p>
            <p><strong>Ping Type:</strong> {device.pingType}</p>
            <p><strong>SNMP Items:</strong></p>
            <ul>
                {device.snmpItems.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
