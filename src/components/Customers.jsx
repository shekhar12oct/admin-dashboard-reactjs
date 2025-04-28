import React from 'react';
import DynamicTable from '../customComponents/DynamicTable';
import { HEADERS, CUSTOMER_DATA } from '../constant/customerData';

const Customers = () => {
  return (
      <DynamicTable headers={HEADERS} data={CUSTOMER_DATA} />
  );
};

export default Customers;
