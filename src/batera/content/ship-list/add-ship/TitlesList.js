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
  const [inputedUser, setInputedUser] = useState(
  {
    vesselName: '',
    IMO_Number: '',
    yearBuilt: '',
    flag: '',
    DWT: '',
    grossTonage: '',
    callSign: '',
    LOA: '',
    breadth: '',
    vesselTypeGeneric: '',
    vesselTypeDetailed: '',
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

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'row', gap: '2vh'}}>
        <div style={{width: '50%'}}>
          <Card 
            sx={{paddingBottom: '2%'}} >
            <CardHeader
                title="Add Ship"
              />
            <Divider />
            <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '1vw', paddingRight: '1vw', width: '100%', gap: '2vh'}}>
              <TextField
                sx={{ width: '100%'}}
                required
                id="outlined-required"
                label="Vessel Name"
                onChange={handleUpdate('vesselName')}
              />
              <TextField
                sx={{ width: '100%'}}
                required
                id="outlined-required"
                label="IMO Number"
                onChange={handleUpdate('IMO_Number')}
              />
              <TextField
                sx={{ width: '100%'}}
                required
                id="outlined-required"
                label="Year Built"
                onChange={handleUpdate('yearBuilt')}
              />
              <TextField
                sx={{ width: '100%'}}
                required
                id="outlined-required"
                label="Flag"
                onChange={handleUpdate('flag')}
              />
              <TextField
                sx={{ width: '100%'}}
                required
                id="outlined-required"
                label="DWT"
                onChange={handleUpdate('DWT')}
              />
              <TextField
                sx={{ width: '100%'}}
                required
                id="outlined-required"
                label="Gross Tonages"
                onChange={handleUpdate('grossTonages')}
              />
              <TextField
                sx={{ width: '100%'}}
                required
                id="outlined-required"
                label="DWT"
                onChange={handleUpdate('DWT')}
              />
              <TextField
                sx={{ width: '100%'}}
                required
                id="outlined-required"
                label="Call Sign"
                onChange={handleUpdate('callSign')}
              />
              <TextField
                sx={{ width: '100%'}}
                required
                id="outlined-required"
                label="LOA (m)"
                onChange={handleUpdate('LOA')}
              />
              <TextField
                sx={{ width: '100%'}}
                required
                id="outlined-required"
                label="Breadth (m)"
                onChange={handleUpdate('breadth')}
              />
              <TextField
                sx={{ width: '100%'}}
                required
                id="outlined-required"
                label="Vessel Type Generic"
                onChange={handleUpdate('vesselTypeGeneric')}
              />
              <TextField
                sx={{ width: '100%'}}
                required
                id="outlined-required"
                label="Vessel Type Detailed"
                onChange={handleUpdate('vesselTypeDetailed')}
              />
            </div>
          </Card>
        </div>
        <div style={{width: '50%', height: '50vh'}}>
          <Card sx={{ height: '100%' }}>
            <CardHeader
                title="Add Ship Picture"
              />
            <Divider />
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '80%', boxSizing: 'border-box'}}>
              <div style={{ minWidth: '50%', minHeight: '50%', maxHeight: '80%', maxWidth: '80%', boxSizing: 'border-box'}}>
                <Avatar variant="rounded" src={url + '/static/images/ship-card/ship1.jpg'} sx={{ width: '100%', height: '100%', boxSizing: 'border-box' }}/>
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
