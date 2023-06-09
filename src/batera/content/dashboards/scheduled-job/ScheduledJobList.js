import { Card } from '@mui/material';
import ScheduledJobTable from './ScheduledJobTable';
import { subDays } from 'date-fns';
import { useState } from 'react';
import DetailsModal from './DetailsModal';

function ScheduledJobList() {
  const [scheduledJobList, setScheduledJobList] = useState([
    {
      jobName: 'Replace',
      componentCode: '41040-10190',
      department: 'Engine',
      system: 'Main Engine',
      component: 'Oil Filter',
      part: 'Element Kit',
    },
    {
      jobName: 'Replace',
      componentCode: 'F4202-16000',
      department: 'Engine',
      system: 'Main Engine',
      component: 'Oil Filter',
      part: 'Gasket',
    },
    {
      jobName: 'Check And Drain Water',
      componentCode: '35740-02100',
      department: 'Engine',
      system: 'Main Engine',
      component: 'Oil System',
      part: 'Cartridge Assembly',
    },
    {
      jobName: 'Drain Water',
      componentCode: '41062-02103',
      department: 'Engine',
      system: 'Main Engine',
      component: 'Fuel Filter',
      part: 'Cartridge',
    },
    {
      jobName: 'Check and Replace',
      componentCode: '41040-10190',
      department: 'Engine',
      system: 'Main Engine',
      component: 'Oil Filter',
      part: 'Element Kit',
    },
  ]);

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    jobName: 'Check and Replace',
    componentCode: '41040-10190',
    department: 'Engine',
    system: 'Main Engine',
    component: 'Oil Filter',
    part: 'Element Kit',
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
        <ScheduledJobTable scheduledJobList={scheduledJobList} handleOpen={handleClickOpen}/>
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

export default ScheduledJobList;
