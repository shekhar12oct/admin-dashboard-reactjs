import React from 'react';

const summaryData = [
  { title: 'Total Users', value: 1280 },
  { title: 'Active Subscriptions', value: 432 },
  { title: 'Monthly Revenue', value: '$12,450' },
  { title: 'Pending Reports', value: 18 },
];

const reportLogs = [
  { id: 1, date: '2025-04-01', user: 'John Doe', status: 'Resolved' },
  { id: 2, date: '2025-04-03', user: 'Alice Smith', status: 'Pending' },
  { id: 3, date: '2025-04-05', user: 'Mark Lee', status: 'Escalated' },
  { id: 4, date: '2025-04-07', user: 'Emily Clark', status: 'Resolved' },
];

const Reports = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.pageTitle}>Admin Reports</h1>

      <div style={styles.cardGrid}>
        {summaryData.map((item, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.cardValue}>{item.value}</p>
          </div>
        ))}
      </div>

      <div style={styles.tableSection}>
        <h2 style={styles.sectionTitle}>Recent Report Logs</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>#</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>User</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {reportLogs.map((log) => (
              <tr key={log.id}>
                <td style={styles.td}>{log.id}</td>
                <td style={styles.td}>{log.date}</td>
                <td style={styles.td}>{log.user}</td>
                <td style={styles.td}>{log.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
  },
  pageTitle: {
    fontSize: '28px',
    marginBottom: '20px',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  cardTitle: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '10px',
  },
  cardValue: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#333',
  },
  tableSection: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  sectionTitle: {
    fontSize: '20px',
    marginBottom: '15px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    textAlign: 'left',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #ccc',
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #eee',
  },
};

export default Reports;
