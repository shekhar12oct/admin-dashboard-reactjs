import React from 'react';

const DynamicTable = ({ data, headers }) => {
  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div
      style={{
        overflow: 'auto',
        height: '80vh',
        border: '1px solid white',
        borderRadius: '10px',
      }}
    >
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                style={{
                  border: '1px solid #ccc',
                  padding: '8px',
                  backgroundColor: '#f2f2f2',
                }}
              >
                {capitalizeFirstLetter(header)} {/* Capitalizing header */}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td
                  key={colIndex}
                  style={{ border: '1px solid #ccc', padding: '8px' }}
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
