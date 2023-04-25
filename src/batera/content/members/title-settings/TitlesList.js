import { Card } from '@mui/material';
import TitlesTable from './TitlesTable';
import { subDays } from 'date-fns';

function TitlesList() {
  const titleList = [
    {
      id: '1',
      titleName: 'Admin',
      shipList: true,
      shipDetails: false,
      jobList: true,
      dataSheet: true,
      stock: false,
      users: true,
      department: true,
    },
    {
      id: '2',
      titleName: 'Captain',
      shipList: true,
      shipDetails: true,
      jobList: true,
      dataSheet: true,
      stock: true,
      users: true,
      department: true,
    },
    {
      id: '3',
      titleName: 'Chief Engineer',
      shipList: true,
      shipDetails: true,
      jobList: true,
      dataSheet: true,
      stock: true,
      users: true,
      department: true,
    },
    {
      id: '4',
      titleName: 'Chief Officer',
      shipList: true,
      shipDetails: true,
      jobList: true,
      dataSheet: true,
      stock: true,
      users: true,
      department: true,
    },
    {
      id: '5',
      titleName: 'Second Engineer',
      shipList: true,
      shipDetails: true,
      jobList: true,
      dataSheet: false,
      stock: true,
      users: true,
      department: true,
    },
    {
      id: '6',
      titleName: 'TestUser',
      shipList: true,
      shipDetails: true,
      jobList: true,
      dataSheet: true,
      stock: true,
      users: true,
      department: true,
    }
  ];

  return (
    <Card>
      <TitlesTable titleList={titleList} />
    </Card>
  );
}

export default TitlesList;
