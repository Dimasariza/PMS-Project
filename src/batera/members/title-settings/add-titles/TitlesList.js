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
      <div style={{ paddingBottom: '2vh'}}>
        <Card sx={{ width: '100%', padding: '1%', gap: '5%'}}>
          <CardHeader
              title="Add Title"
            />
          <Divider />
          <div style={{display: 'flex', flexDirection: 'column', gap: '15%', height: '100%', width: '100%'}}>
            <TextField
              sx={{ width: '100%' }}
              required
              id="outlined-required"
              label="Title Name"
              onChange={handleUpdateName('titleName')}
              InputLabelProps={{ shrink: true }}
            />
          </div>
        </Card>
      </div>
      <Card>
        <TitlesTable titleList={titleList} handleUpdate={handleUpdate} />
      </Card>
    </>
  );
}

export default TitlesList;
