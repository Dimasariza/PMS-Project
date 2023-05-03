import { Card } from '@mui/material';
import InboxTable from './InboxTable';
import { subDays } from 'date-fns';
import { useState } from 'react';

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

  return (
    <Card>
      <InboxTable inboxList={inboxList} />
    </Card>
  );
}

export default InboxList;
