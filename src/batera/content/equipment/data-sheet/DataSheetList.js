import { Card } from '@mui/material';
import DataSheetTable from './DataSheetTable';
import { subDays } from 'date-fns';
import { useState } from 'react';

function DataSheetList() {
  const [dataSheetList, setScheduledJobList] = useState([
    {
      dataSheetCode: '100',
      department: 'Machine',
      system: 'Fuel System',
      brand: 'Brand XX',
      component: 'Pump filter X',
      part: 'Gasket',
      maintenance: '1000',
    },
    {
      dataSheetCode: '100',
      department: 'Machine',
      system: 'Fuel System',
      brand: 'Brand XX',
      component: 'Pump filter X',
      part: 'Gasket',
      maintenance: '1000',
    },
    {
      dataSheetCode: '100',
      department: 'Machine',
      system: 'Fuel System',
      brand: 'Brand XX',
      component: 'Pump filter X',
      part: 'Gasket',
      maintenance: '1000',
    },
    {
      dataSheetCode: '100',
      department: 'Machine',
      system: 'Fuel System',
      brand: 'Brand XX',
      component: 'Pump filter X',
      part: 'Gasket',
      maintenance: '1000',
    },
    {
      dataSheetCode: '100',
      department: 'Machine',
      system: 'Fuel System',
      brand: 'Brand XX',
      component: 'Pump filter X',
      part: 'Gasket',
      maintenance: '1000',
    },
    {
      dataSheetCode: '100',
      department: 'Machine',
      system: 'Fuel System',
      brand: 'Brand XX',
      component: 'Pump filter X',
      part: 'Gasket',
      maintenance: '1000',
    },
  ]);

  return (
    <Card>
      <DataSheetTable dataSheetList={dataSheetList} />
    </Card>
  );
}

export default DataSheetList;
