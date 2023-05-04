import { Card } from '@mui/material';
import StockTable from './StockTable';
import { subDays } from 'date-fns';
import { useState } from 'react';
import DetailsModal from './DetailsModal';

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

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    equipmentCode: '41040-10190',
    category: 'Oil Filter',
    equipment: 'Element Kit',
    department: 'Engine',
    statusPart: 'Ordering',
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
        <StockTable stockList={stockList} handleOpen={handleClickOpen} />
      </Card>
      <DetailsModal
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}

export default StockList;
