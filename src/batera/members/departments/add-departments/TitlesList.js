import { Card } from '@mui/material';
import TitlesTable from './TitlesTable';
import { subDays } from 'date-fns';
import {
  Divider,
  CardHeader,
  TextField
} from '@mui/material';
import { useState, useContext } from 'react';

function TitlesList({departmentList, setDepartmentList, workplaceList, setWorkplaceList, handleUpdate}) {

  return (
    <>
      <div style={{width: '100%'}}>
        <Card sx={{ width: '100%', padding: '1%', gap: '5%'}}>
          <CardHeader
              title="Add Department"
            />
          <Divider />
          <div style={{display: 'flex', flexDirection: 'column', gap: '15%', height: '100%', width: '100%'}}>
            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              required
              id="outlined-required"
              label="Department Code"
              onChange={handleUpdate('departmentCode')}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              sx={{ width: '100%', paddingBottom: '2%'}}
              required
              id="outlined-required"
              label="Department Name"
              onChange={handleUpdate('departmentName')}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              sx={{ width: '100%'}}
              id="outlined-select-currency-native"
              select
              label="Workplace"
              value={departmentList.workplace}
              onChange={handleUpdate('workplace')}
              SelectProps={{
                native: true
              }}
              InputLabelProps={{ shrink: true }}
              helperText="Please select new user's workplace"
            >
              {workplaceList.map((option) => (
                <option key={option.workplace} value={option.value}>
                  {option.workplace}
                </option>
              ))}
            </TextField>
          </div>
        </Card>
      </div>
    </>
  );
}

export default TitlesList;
