import { Card } from '@mui/material';
import DataSheetTable from './DataSheetTable';
import { subDays } from 'date-fns';
import { useState } from 'react';
import DetailsModal from './DetailsModal';

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

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    dataSheetCode: '100',
    department: 'Machine',
    system: 'Fuel System',
    brand: 'Brand XX',
    component: 'Pump filter X',
    part: 'Gasket',
    maintenance: '1000',
  });

  const handleClickOpen = (value) => {
    setSelectedValue(value);
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <Card>
        <DataSheetTable dataSheetList={dataSheetList} handleOpen={handleClickOpen}/>
      </Card>
      <DetailsModal
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}

export default DataSheetList;
