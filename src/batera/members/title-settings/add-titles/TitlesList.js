import { Card } from '@mui/material';
import TitlesTable from './TitlesTable';
import { subDays } from 'date-fns';
import {
  Divider,
  CardHeader,
  TextField
} from '@mui/material';
import { useState } from 'react';

function TitlesList({titleList, setTitleList, handleUpdate, handleUpdateName}) {
  

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
            onChange={handleUpdateName('titleName')}
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
