import { Card } from '@mui/material';
import TitlesTable from './TitlesTable';
import { subDays } from 'date-fns';
import { useState } from 'react';
import DetailsModal from './DetailsModal';

function TitlesList() {
  const [titleList, setTitleList] = useState([
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
      notification: true,
      inbox: true,
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
      notification: true,
      inbox: true,
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
      notification: true,
      inbox: true,
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
      notification: false,
      inbox: false,
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
      notification: true,
      inbox: true,
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
      notification: true,
      inbox: true,
    }
  ]);

  function handleUpdate(id, key, value) {
    setTitleList((prevTitleList) => {
      const updatedTitleList = prevTitleList.map((title) =>
        title.id === id ? { ...title, [key]: value } : title
      );
      return updatedTitleList;
    });
  }

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    id: '6',
    titleName: 'TestUser',
    shipList: true,
    shipDetails: true,
    jobList: true,
    dataSheet: true,
    stock: true,
    users: true,
    department: true,
    notification: true,
    inbox: true,
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
    <div>
      <Card>
        <TitlesTable titleList={titleList} handleUpdate={handleUpdate} handleOpen={handleClickOpen}/>
      </Card>
      <DetailsModal
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

export default TitlesList;
