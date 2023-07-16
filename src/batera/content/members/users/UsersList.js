import { Card } from '@mui/material';
import UsersTable from './UsersTable';
import { subDays } from 'date-fns';
import { useState, useEffect, useContext } from 'react';
import DetailsModal from './DetailsModal';
import axios from 'axios';
import { SidebarContext } from 'src/contexts/SidebarContext';

function UsersList() {
  const {user} = useContext(SidebarContext)
  const [usersList, setUserList] = useState([
    // {
    //   id: '1',
    //   name: 'Munreo Ducks',
    //   userName: 'munreo_ducks',
    //   password: 'password123',
    //   title: 'Chief Engineer',
    //   email: 'munreo@marine.com',
    //   workplace: 'Ship',
    //   status: 'Active',
    //   department: 'Engine',
    // },
    // {
    //   id: '2',
    //   name: 'Gunila Canario',
    //   userName: 'gunila_canario',
    //   password: 'password123',
    //   title: 'Captain',
    //   email: 'gunila@marine.com',
    //   workplace: 'Ship',
    //   status: 'Active',
    //   department: 'Deck',
    // },
    // {
    //   id: '3',
    //   name: 'Rowena Giestman',
    //   userName: 'rowena_giestman',
    //   password: 'password123',
    //   title: 'Chief Officer',
    //   email: 'rowena@marine.com',
    //   workplace: 'Ship',
    //   status: 'Active',
    //   department: 'Deck',
    // },
    // {
    //   id: '4',
    //   name: 'Ede Stovings',
    //   userName: 'ede_stovings',
    //   password: 'password123',
    //   title: 'Admin',
    //   email: 'ede@marine.com',
    //   workplace: 'Office',
    //   status: 'Active',
    //   department: 'Administrator',
    // },
    // {
    //   id: '5',
    //   name: 'Crissy Spere',
    //   userName: 'crissy_spere',
    //   password: 'password123',
    //   title: 'Second Engineer',
    //   email: 'crissy@marine.com',
    //   workplace: 'Ship',
    //   status: 'Active',
    //   department: 'Engine',
    // }
  ]);

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    id: '5',
    name: 'Crissy Spere',
    userName: 'crissy_spere',
    password: 'password123',
    title: 'Second Engineer',
    email: 'crissy@marine.com',
    workplace: 'Ship',
    status: 'Active',
    department: 'Engine',
  });

  
  const retriveData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/user', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const results = response.data.data.results;
      const convertedResults = []
      results.map((value, index) => {
        convertedResults.push({
          id: value.id,
          name: value.fullname,
          userName: value.username,
          password: 'password123',
          title: value.userTitle.name,
          email: value.email,
          workplace: value.workPlace,
          status: value.status ? 'Active' : 'Inactive',
          department: value.department.name,
        });
      })
      setUserList(convertedResults)
    } catch (error) {
      // setLoginError(true)
    }
  }

  useEffect(() => {
    retriveData()
  }, [])

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
        <UsersTable usersList={usersList} handleOpen={handleClickOpen}/>
      </Card>
      <DetailsModal
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}

export default UsersList;
