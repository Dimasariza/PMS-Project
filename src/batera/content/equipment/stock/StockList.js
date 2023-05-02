import { Card } from '@mui/material';
import StockTable from './StockTable';
import { subDays } from 'date-fns';
import { useState } from 'react';

function StockList() {
  const [stockList, setScheduledJobList] = useState([
    {
      equipmentCode: '41040-10190',
      category: 'Oil Filter',
      equipment: 'Element Kit',
      department: 'Engine',
      statusPart: 'On Board',
    },
    {
      equipmentCode: 'F4202-16000',
      category: 'Oil Filter',
      equipment: 'Gasket',
      department: 'Engine',
      statusPart: 'Borrowing',
    },
    {
      equipmentCode: '35740-02100',
      category: 'Oil System',
      equipment: 'Cartridge Assembly',
      department: 'Engine',
      statusPart: 'Oredering',
    },
    {
      equipmentCode: '41062-02103',
      category: 'Fuel Filter',
      equipment: 'Cartridge',
      department: 'Engine',
      statusPart: 'On Board',
    },
    {
      equipmentCode: '41040-10190',
      category: 'Oil Filter',
      equipment: 'Element Kit',
      department: 'Engine',
      statusPart: 'Ordering',
    },
  ]);

  return (
    <Card>
      <StockTable stockList={stockList} />
    </Card>
  );
}

export default StockList;
