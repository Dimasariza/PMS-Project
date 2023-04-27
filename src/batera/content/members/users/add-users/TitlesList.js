import { Card } from '@mui/material';
import TitlesTable from './TitlesTable';
import { subDays } from 'date-fns';
import {
  Divider,
  CardHeader,
  TextField
} from '@mui/material';
import { useState } from 'react';

function TitlesList() {
  const [titleList, setTitleList] = useState([
    {
      id: '1',
      titleName: 'Admin',
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
  ]);

  function handleUpdate(id, key, value) {
    setTitleList((prevTitleList) => {
      const updatedTitleList = prevTitleList.map((title) =>
        title.id === id ? { ...title, [key]: value } : title
      );
      return updatedTitleList;
    });
  }

  return (
    <>
      <div style={{paddingBottom: '2vh'}}>
        <Card >
          <CardHeader
              title="Add Title"
            />
          <Divider />
          <TextField
            sx={{ width: '100%', padding: '1%' }}
            required
            id="outlined-required"
            label="Title Name"
          />
        </Card>
      </div>
      <Card>
        <TitlesTable titleList={titleList} handleUpdate={handleUpdate} />
      </Card>
    </>
  );
}

export default TitlesList;
