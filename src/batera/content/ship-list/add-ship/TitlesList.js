import { Card } from '@mui/material';
import {
  Divider,
  CardHeader,
  TextField,
  Avatar,
} from '@mui/material';
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import PictureUpload from 'src/components/CustomComponent/UploadButton/PictureUpload';

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
    vesselImage: '',
  });

  const handleUpdate = (key) => (event) => {
    if(key == 'vesselImage'){
      setInputedUser((prev) => ({
        ...prev,
        [key]: event,
      }));
    }else{
      setInputedUser((prev) => ({
        ...prev,
        [key]: event.target.value,
      }));
    }
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const screenState = isSmallScreen ? 0 : isMediumScreen ? 1 : isLargeScreen ? 3 : 2;

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'row', gap: '2vh'}}>
        <div style={{width: (screenState >= 2 ) ? '50%' : '100%'}}>
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
          <div style={{display: (screenState < 2 ) ? 'block' : 'none', width: (screenState < 2 ) ? '100%' : '0%', height: '50vh', minHeight: '400px', maxHeight: '550px', marginTop: '5%'}}>
            <PictureUpload picLink={'/static/images/ship-card/ship1.jpg'} handleUpdate={handleUpdate}/>
          </div>
        </div>
        <div style={{display: (screenState >= 2 ) ? 'block' : 'none', width: (screenState >= 2 ) ? '50%' : '0%', height: '50vh', minHeight: '400px', maxHeight: '550px'}}>
          <PictureUpload picLink={'/static/images/ship-card/ship1.jpg'} handleUpdate={handleUpdate}/>
        </div>
      </div>
      
    </>
  );
}

export default TitlesList;
