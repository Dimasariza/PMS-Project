import { Card } from '@mui/material';
import TitlesTable from './TitlesTable';
import { subDays } from 'date-fns';
import {
  Divider,
  CardHeader,
  TextField
} from '@mui/material';

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
  ];

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
        <TitlesTable titleList={titleList} />
      </Card>
    </>
  );
}

export default TitlesList;
