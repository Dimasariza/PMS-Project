import { Card } from '@mui/material';
import ApprovedTable from './ApprovedTable';
import { subDays } from 'date-fns';
import { useState } from 'react';

function ApprovedList() {
  const [approvedList, setScheduledJobList] = useState([
    {
      sendDate: '14 April 2023',
      checkedDate: '20 April 2023',
      checker: 'Gunila Canairo',
      job: 'Replace',
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
      sendDate: '15 April 2023',
      checkedDate: '20 April 2023',
      checker: 'Gunila Canairo',
      job: 'Replace',
      componentCode: 'F4202-16000',
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
      sendDate: '16 April 2023',
      checkedDate: '20 April 2023',
      checker: 'Gunila Canairo',
      job: 'Check And Drain Water',
      componentCode: '35740-02100',
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
      sendDate: '17 April 2023',
      checkedDate: '20 April 2023',
      checker: 'Gunila Canairo',
      job: 'Drain Water',
      componentCode: '41062-02103',
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
      checkedDate: '20 April 2023',
      checker: 'Gunila Canairo',
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
      <ApprovedTable approvedList={approvedList} />
    </Card>
  );
}

export default ApprovedList;
