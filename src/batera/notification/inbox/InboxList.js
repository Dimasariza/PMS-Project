import { Card } from '@mui/material';
import InboxTable from './InboxTable';
import { subDays } from 'date-fns';
import { useState } from 'react';
import DetailsModal from './DetailsModal';

function InboxList() {
  const [inboxList, setScheduledJobList] = useState([
    {
      sendDate: '18 April 2023',
      job: 'Check And Replace',
      componentCode: '41040-10190',
      department: 'Engine',
      system: 'Main Engine',
      componentName: 'Oil Filter',
      part: 'Element Kit',
      runningHours: '495 H',
      maintenanceInterval: '500 H',
      diffrent: '5 H',
      status: 'On Progress'
    },
    {
      sendDate: '18 April 2023',
      job: 'Check And Replace',
      componentCode: '41040-10190',
      department: 'Engine',
      system: 'Main Engine',
      componentName: 'Oil Filter',
      part: 'Element Kit',
      runningHours: '495 H',
      maintenanceInterval: '500 H',
      diffrent: '5 H',
      status: 'On Progress'
    },
    {
      sendDate: '18 April 2023',
      job: 'Check And Replace',
      componentCode: '41040-10190',
      department: 'Engine',
      system: 'Main Engine',
      componentName: 'Oil Filter',
      part: 'Element Kit',
      runningHours: '495 H',
      maintenanceInterval: '500 H',
      diffrent: '5 H',
      status: 'On Progress'
    },
    {
      sendDate: '18 April 2023',
      job: 'Check And Replace',
      componentCode: '41040-10190',
      department: 'Engine',
      system: 'Main Engine',
      componentName: 'Oil Filter',
      part: 'Element Kit',
      runningHours: '495 H',
      maintenanceInterval: '500 H',
      diffrent: '5 H',
      status: 'On Progress'
    },
    {
      sendDate: '18 April 2023',
      job: 'Check And Replace',
      componentCode: '41040-10190',
      department: 'Engine',
      system: 'Main Engine',
      componentName: 'Oil Filter',
      part: 'Element Kit',
      runningHours: '495 H',
      maintenanceInterval: '500 H',
      diffrent: '5 H',
      status: 'On Progress'
    },
  ]);

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    sendDate: '18 April 2023',
    job: 'Check And Replace',
    componentCode: '41040-10190',
    department: 'Engine',
    system: 'Main Engine',
    componentName: 'Oil Filter',
    part: 'Element Kit',
    runningHours: '495 H',
    maintenanceInterval: '500 H',
    diffrent: '5 H',
    status: 'On Progress'
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
        <InboxTable inboxList={inboxList} handleOpen={handleClickOpen}/>
      </Card>
      <DetailsModal
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}

export default InboxList;
