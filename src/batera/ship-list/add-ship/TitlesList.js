import { Card } from '@mui/material';
import {
  Divider,
  CardHeader,
  TextField,
} from '@mui/material';
import { useMediaQuery } from '@mui/material';
import PictureUpload from 'src/components/CustomComponent/UploadButton/PictureUpload';
import * as React from 'react';


function TitlesList({handleUpdate, inputedUser, errorState, shownPic}) {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const screenState = isSmallScreen ? 0 : isMediumScreen ? 1 : isLargeScreen ? 3 : 2;


  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: '2vh'}}>
      <div style={{width: (screenState >= 2 ) ? '50%' : '100%'}}>
        <Card sx={{paddingBottom: '2%'}}>
          <CardHeader title="Add Ship"/>
          <Divider />
          <div style={{display: 'flex', flexDirection: 'column', padding: '1rem 1rem', width: '100%', gap: '1rem'}}>
            {
              [
                { label : "Vessel Name", onChange : "vesselName" },
                { label : "IMO Number", onChange : "IMO_Number" },
                { label : "Year Built", onChange : "yearBuilt", type : "number", minYear : 1908, maxDigit : 4 },
                { label : "Flag", onChange : "flag" },
                { label : "DWT", onChange : "DWT", type : "number", maxDigit : 7 },
                { label : "Gross Tonages", onChange : "grossTonage", type : "number", maxDigit : 7 },
                { label : "Call Sign", onChange : "callSign" },
                { label : "LOA (m)", onChange : "LOA", type : "number", maxDigit : 6 },
                { label : "Breadth (m)", onChange : "breadth", type : "number", maxDigit : 6 },
                { label : "Vessel Type Generic", onChange : "vesselTypeGeneric" },
                { label : "Vessel Type Detailed", onChange : "vesselTypeDetailed" },
              ].map(({label, onChange, type, minYear,  maxDigit}, index) => 
                
                  <TextField
                    error={errorState[onChange] != null}
                    key={index}
                    sx={{ width: '100%'}}
                    required
                    id="outlined-required"
                    label={label}
                    onChange={handleUpdate(onChange, minYear, maxDigit)}
                    type={type ?? "text"}
                    variant='outlined'
                    helperText={errorState[onChange] != null ? errorState[onChange] : null}
                    value={inputedUser[onChange]}
                    InputLabelProps={{ shrink: true }}
                  />
              )
            }
          </div>
        </Card>

        <div style={{display: (screenState < 2 ) ? 'block' : 'none', width: (screenState < 2 ) ? '100%' : '0%', height: '50vh', minHeight: '400px', maxHeight: '550px', marginTop: '5%'}}>
          <PictureUpload picLink={shownPic} handleUpdate={handleUpdate} error={errorState['vesselImage']}/>
        </div>
      </div>

      <div style={{display: (screenState >= 2 ) ? 'block' : 'none', width: (screenState >= 2 ) ? '50%' : '0%', height: '50vh', minHeight: '400px', maxHeight: '550px'}}>
        <PictureUpload picLink={shownPic} handleUpdate={handleUpdate} error={errorState['vesselImage']}/>
      </div>
        
    </div>
  );
}

export default TitlesList;
