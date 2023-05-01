import { Card } from '@mui/material';
import ScheduledJobTable from './ScheduledJobTable';
import { subDays } from 'date-fns';
import { useState } from 'react';

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

  return (
    <Card>
      <ScheduledJobTable scheduledJobList={scheduledJobList} />
    </Card>
  );
}

export default ScheduledJobList;
