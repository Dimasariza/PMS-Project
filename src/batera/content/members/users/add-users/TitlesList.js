import { Card } from '@mui/material';
import TitlesTable from './TitlesTable';
import { subDays } from 'date-fns';
import {
  Divider,
  CardHeader,
  TextField,
  Avatar,
  IconButton,
  Box
} from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import UploadTwoToneIcon from '@mui/icons-material/UploadTwoTone';

function TitlesList() {
  const url = process.env.PUBLIC_URL || ""
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

  const [titleList, setTitleList] = useState([
    {
      id: '1',
      titleName: 'Admin',
    },
    {
      id: '2',
      titleName: 'Captain',
    },
    {
      id: '3',
      titleName: 'Chief Engineer',
    },
    {
      id: '4',
      titleName: 'Chief Officer',
    },
    {
      id: '5',
      titleName: 'Second Engineer',
    }
  ]);

  const [inputedUser, setInputedUser] = useState(
  {
    fullName: '',
    userName: '',
    title: '',
    email: '',
    workplace: '',
    status: '',
    department: '',
  });

  const handleUpdate = (key) => (event) => {
    setInputedUser((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  const Input = styled('input')({
    display: 'none'
  });
  
  const ButtonUploadWrapper = styled(Box)(
    ({ theme }) => `
      position: relative;
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
  
      .MuiIconButton-root {
        border-radius: 100%;
        background: ${theme.colors.primary.main};
        color: ${theme.palette.primary.contrastText};
        box-shadow: ${theme.colors.shadows.primary};
        width: 300%;
        height: 300%;
        padding: 0;
    
        &:hover {
          background: ${theme.colors.primary.dark};
        }
      }
  `
  );

  const [file, setFile] = useState(null);

  const handleDropzoneChange = (files) => {
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'row', gap: '2vh'}}>
        <div style={{width: '50%'}}>
          <Card >
            <CardHeader
                title="Add User"
              />
            <Divider />
            <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '1vw', paddingRight: '1vw', width: '100%', gap: '2vh'}}>
              <TextField
                sx={{ width: '100%'}}
                required
                id="outlined-required"
                label="User Name"
                onChange={handleUpdate('userName')}
              />
              <TextField
                sx={{ width: '100%'}}
                required
                id="outlined-required"
                label="Full Name"
                onChange={handleUpdate('fullName')}
              />
              <TextField
                sx={{ width: '100%'}}
                id="outlined-select-currency-native"
                select
                label="Title"
                value={inputedUser.title}
                onChange={handleUpdate('title')}
                SelectProps={{
                  native: true
                }}
                helperText="Please select new user's department"
              >
                {titleList.map((option) => (
                  <option key={option.titleName} value={option.titleName}>
                    {option.titleName}
                  </option>
                ))}
              </TextField>

              <TextField
                sx={{ width: '100%'}}
                required
                id="outlined-required"
                label="Email"
                onChange={handleUpdate('fullName')}
              />

              <TextField
                sx={{ width: '100%'}}
                id="outlined-select-currency-native"
                select
                label="Departement"
                value={inputedUser.department}
                onChange={handleUpdate('department')}
                SelectProps={{
                  native: true
                }}
                helperText="Please select new user's department"
              >
                {departmentList.map((option) => (
                  <option key={option.departmentName} value={option.departmentName}>
                    {option.departmentName}
                  </option>
                ))}
              </TextField>

              <TextField
                sx={{ width: '100%'}}
                id="outlined-select-currency-native"
                select
                label="Workplace"
                value={inputedUser.workplace}
                onChange={handleUpdate('workplace')}
                SelectProps={{
                  native: true
                }}
                helperText="Please select new user's workplace"
              >
                {departmentList.map((option) => (
                  <option key={option.workplace} value={option.workplace}>
                    {option.workplace}
                  </option>
                ))}
              </TextField>
              
              <TextField
                sx={{ width: '100%' }}
                id="outlined-password-input"
                label="Password"
                required
                type="password"
                autoComplete="current-password"
              />

            </div>
          </Card>
        </div>
        <div style={{width: '50%', height: '50vh'}}>
          <Card sx={{ height: '100%' }}>
            <CardHeader
                title="Add Profile Picture"
              />
            <Divider />
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '80%', boxSizing: 'border-box'}}>
              <div style={{ minWidth: '50%', minHeight: '50%', maxHeight: '80%', maxWidth: '80%', boxSizing: 'border-box'}}>
                <Avatar variant="rounded" src={url + '/static/images/avatars/4.jpg'} sx={{ width: '100%', height: '100%', boxSizing: 'border-box' }}/>
              </div>
              <div style={{position: 'relative', top: '38%', left: '9%'}}>
                <ButtonUploadWrapper>
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    name="icon-button-file"
                    type="file"
                  />
                  <label htmlFor="icon-button-file">
                    <IconButton component="span" color="primary">
                      <UploadTwoToneIcon sx={{ width: '80%', height: '80%' }}/>
                    </IconButton>
                  </label>
                </ButtonUploadWrapper>
              </div>
            </div>
          </Card>
          
        </div>
      </div>
      
    </>
  );
}

export default TitlesList;
