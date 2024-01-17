import { 
    Typography,
    Button,
    IconButton,
    Grid,
    Box,
    CardContent,
    Card,
    CardHeader,
    Divider,
    TextField
  } from '@mui/material';
  import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
  import NextLink from 'next/link';
  import PropTypes from 'prop-types';
  import DialogTitle from '@mui/material/DialogTitle';
  import Dialog from '@mui/material/Dialog';
  import Text from 'src/components/Text';
  import { useState } from 'react';
  import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
  import GridInfoDetailsEditable from 'src/components/CustomComponent/GridInfo/Editable/GridInfoDetailsEditable';
  import GridInfoDetails from 'src/components/CustomComponent/GridInfo/Static/GridInfoDetailsStatic';
  
  const url = process.env.PUBLIC_URL || ""
  
  function DetailsModal(props) {
    const { onClose, selectedValue, open, handleUpdate, confirmUpdate } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value) => {
      onClose(value);
    };
  
    
  
    return (
      <Dialog onClose={handleClose} open={open} maxWidth={'md'} >
        <div>
          <Card>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent:"space-between", alignItems:"center", padding: '2% 2% 2% 3%'}}>
              <Typography align='left' variant="h3" style={{ width: '100%', height: '100%', fontWeight: 'bold' }} 
                sx={{
                  fontSize:{
                    xs: '15px',
                    sm: '25px'
                  }
                }}
              >
                Ship Details
              </Typography>
              <IconButton align='right'  onClick={handleClose} variant="contained" color='primary' style={{height:'50%', backgroundColor: '#FF5AD9'}}>
                <CloseTwoToneIcon fontSize='small' style={{color: 'white'}} />
              </IconButton>
            </div>
            <Divider />
            <CardContent>
              <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                gap: '5%',
                padding: '1%',
                
              }}>
                <Typography variant="subtitle2" sx={{
                  display: {
                    xs: 'none',
                    sm: 'block'
                  },
                  width: '50%',
                }}>
                  {/* vesselName: results.vesselName,
                  IMO: results.imoNumber,
                  yearBuilt: results.year,
                  flag: results.flag,
                  DWT: results.dwt,
                  grossTonage: results.grossTonage, */}
                  <Grid container spacing={0} alignItems="stretch">
                    <GridInfoDetailsEditable title={"Vessel Name:"} value={selectedValue.vesselName} handleEntryUpdate={(value) => handleUpdate('vesselName', value)}/>
                    <GridInfoDetailsEditable title={"IMO:"} value={selectedValue.IMO} handleEntryUpdate={(value) => handleUpdate('IMO', value)}/>
                    <GridInfoDetailsEditable title={"Year:"} typeIsNumber={true} value={selectedValue.yearBuilt} handleEntryUpdate={(value) => handleUpdate('yearBuilt', value)}/>
                    <GridInfoDetailsEditable title={"Flag:"} value={selectedValue.flag} handleEntryUpdate={(value) => handleUpdate('flag', value)}/>
                    <GridInfoDetailsEditable title={"DWT:"} typeIsNumber={true} value={selectedValue.DWT} handleEntryUpdate={(value) => handleUpdate('DWT', value)}/>
                    <GridInfoDetailsEditable title={"Gross Tonage:"} typeIsNumber={true} value={selectedValue.grossTonage} handleEntryUpdate={(value) => handleUpdate('grossTonage', value)}/>
                  </Grid>
                </Typography>
                <Typography variant="subtitle2" sx={{
                  display: {
                    xs: 'none',
                    sm: 'block'
                  },
                  width: '50%',
                }}>
                  <Grid container spacing={0} alignItems="stretch">
                    {/* callSign: results.callsign,
                    LOA_Breadth: results.LOA + ' X ' + results.breadth,
                    vesselTypeGeneric: results.vesselTypeGeneric,
                    vesselTypeDetailed: results.vesselTypeDetailed,
                    vesselImage: results.picture */}
                    <GridInfoDetailsEditable title={"Call Sign:"} value={selectedValue.callSign} handleEntryUpdate={(value) => handleUpdate('callSign', value)}/>
                    <GridInfoDetailsEditable title={"LOA:"} typeIsNumber={true} value={selectedValue.LOA} handleEntryUpdate={(value) => handleUpdate('LOA', value)}/>
                    <GridInfoDetailsEditable title={"Breadth:"} typeIsNumber={true} value={selectedValue.breadth} handleEntryUpdate={(value) => handleUpdate('breadth', value)}/>
                    <GridInfoDetailsEditable title={"Vessel Type Generic:"} value={selectedValue.vesselTypeGeneric} handleEntryUpdate={(value) => handleUpdate('vesselTypeGeneric', value)}/>
                    <GridInfoDetailsEditable title={"Vessel Type Detailed:"} value={selectedValue.vesselTypeDetailed} handleEntryUpdate={(value) => handleUpdate('vesselTypeDetailed', value)}/>
                  </Grid>
                </Typography>
                <Typography variant="subtitle2" sx={{
                  display: {
                    xs: 'block',
                    sm: 'none'
                  },
                  width: '100%',
                }}>
                  <Grid container spacing={0} alignItems="stretch">
                    <GridInfoDetailsEditable title={"Job Name:"} value={selectedValue.jobName} handleEntryUpdate={(value) => handleUpdate('jobName', value)}/>
                    <GridInfoDetails title={"Component Code:"} value={selectedValue.componentCode}/>
                    <GridInfoDetails title={"Department:"} value={selectedValue.department}/>
                    <GridInfoDetails title={"System:"} value={selectedValue.system}/>
                    <GridInfoDetails title={"Component Name:"} value={selectedValue.component}/>
                    <GridInfoDetails title={"Part:"} value={selectedValue.part}/>
                  </Grid>
                </Typography>
              </div>
              <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                gap: '5%',
                padding: '1%',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                {/* <Button variant="contained" color="primary" style={{width: '45%'}}>
                  Approve
                </Button> */}
                <Button variant="contained" color="primary" style={{width: '45%', backgroundColor: '#FF5AD9'}} onClick={() => {confirmUpdate(0); handleClose();}}>
                  Update
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Dialog>
    );
  }
  
  DetailsModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    // selectedValue: PropTypes.string.isRequired,
    // shipName: PropTypes.string.isRequired,
  };
  
  export default DetailsModal;