import { Card } from '@mui/material';
import DepartmentsTable from './DepartmentsTable';
import { subDays } from 'date-fns';
import { useState } from 'react';

function DepartmentsList() {
  const [departmentList, setDepartmentList] = useState([
    {
      departmentCode: '100',
      departmentName: 'Engine',
      workplace: 'Ship',
    },
    {
      departmentCode: '200',
      departmentName: 'Deck',
      workplace: 'Ship',
    },
    {
      departmentCode: '300',
      departmentName: 'Administrator',
      workplace: 'Office',
    },
    {
      departmentCode: '400',
      departmentName: 'Surveyor',
      workplace: 'Ship',
    },
    {
      departmentCode: '500',
      departmentName: 'Manager',
      workplace: 'Office',
    }
  ]);

  return (
    <Card>
      <DepartmentsTable departmentList={departmentList} />
    </Card>
  );
}

export default DepartmentsList;
