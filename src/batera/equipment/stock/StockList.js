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

  const [selectedValueIndex, setSelectedValueIndex] = useState(0);

  const handleClickOpen = (value, index) => {
    setSelectedValue(value);
    setSelectedValueIndex(index);
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleUpdate = (key,value) => {
    setSelectedValue((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const confirmUpdate = () => {
    setScheduledJobList(prevList => {
      const newList = [...prevList]; // make a copy of the original array
      newList[selectedValueIndex] = selectedValue; // update the second entry
      return newList; // return the updated array
    });
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
        handleUpdate={handleUpdate}
        confirmUpdate={confirmUpdate}
      />
    </>
  );
}

export default StockList;
