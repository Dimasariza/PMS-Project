import { Card } from '@mui/material';
import UsersTable from './UsersTable';
import { subDays } from 'date-fns';
import { useState } from 'react';

function UsersList() {
  const [usersList, setUserList] = useState([
    {
      id: '1',
      name: 'Munreo Ducks',
      userName: 'munreo_ducks',
      title: 'Chief Engineer',
      email: 'munreo@marine.com',
      workplace: 'Ship',
      status: 'Active',
      department: 'Engine',
    },
    {
      id: '2',
      name: 'Gunila Canario',
      userName: 'gunila_canario',
      title: 'Captain',
      email: 'gunila@marine.com',
      workplace: 'Ship',
      status: 'Active',
      department: 'Deck',
    },
    {
      id: '3',
      name: 'Rowena Giestman',
      userName: 'rowena_giestman',
      title: 'Chief Officer',
      email: 'rowena@marine.com',
      workplace: 'Ship',
      status: 'Active',
      department: 'Deck',
    },
    {
      id: '4',
      name: 'Ede Stovings',
      userName: 'ede_stovings',
      title: 'Admin',
      email: 'ede@marine.com',
      workplace: 'Office',
      status: 'Active',
      department: 'Administrator',
    },
    {
      id: '5',
      name: 'Crissy Spere',
      userName: 'crissy_spere',
      title: 'Second Engineer',
      email: 'crissy@marine.com',
      workplace: 'Ship',
      status: 'Active',
      department: 'Engine',
    }
  ]);

  return (
    <Card>
      <UsersTable usersList={usersList} />
    </Card>
  );
}

export default UsersList;
