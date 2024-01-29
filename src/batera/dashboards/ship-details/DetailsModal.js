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
  import { useState, useEffect } from 'react';
  import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
  import GridInfoDetailsEditable from 'src/components/CustomComponent/GridInfo/Editable/GridInfoDetailsEditable';
  import GridInfoDetails from 'src/components/CustomComponent/GridInfo/Static/GridInfoDetailsStatic';
  import {CheckInput, checkAllErrorCleared} from 'src/components/CustomComponent/InputChecker/InputChecker.js'
  import PictureUpload from 'src/components/CustomComponent/UploadButton/PictureUpload';
  
  const url = process.env.PUBLIC_URL || ""
  
  function DetailsModal(props) {
    const { onClose, open, confirmUpdate, defaultFormValue } = props;

    const defaultErrorState = {
      vesselName: null,
      IMO_Number: null,
      yearBuilt: null,
      flag: null,
      DWT: null,
      grossTonage: null,
      callSign: null,
      LOA: null,
      breadth: null,
      vesselTypeGeneric: null,
      vesselTypeDetailed: null,
      vesselImage: null
    }

    useEffect(() => {
      if(open){
        setErrorState(defaultErrorState)
        setSelectedValue(defaultFormValue)
      }
    }, [open])

    const [errorState, setErrorState] = useState(defaultErrorState);
  
    const [selectedValue, setSelectedValue] = useState({
        vesselName: 'MV.AXES',
        IMO_Number: '123xxx1980',
        yearBuilt: '1980',
        flag: 'Indonesia',
        DWT: '15.000',
        grossTonage: '11.900',
        callSign: 'AX VII',
        LOA: '149.6',
        breadth: '23.1',
        vesselTypeGeneric: 'Cargo',
        vesselTypeDetailed: 'Container Ship',
        vesselImage: "/static/images/ship-card/ship1.jpg"
    });

    const handleUpdate = (key, inputType, incomingValue) => {
      CheckInput(key, incomingValue, inputType, setSelectedValue, setErrorState)
      console.log(selectedValue)
    };
  
    const handleClose = () => {
      onClose();
    };

    const confirm = () => {
      if(checkAllErrorCleared(selectedValue, setErrorState)){
        confirmUpdate(selectedValue);
        handleClose();
      }
    }

    const updateImage = (target, type="image") => (event) =>{
      handleUpdate(target, type, event)
    }
  
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
                // gap: '5%',
                // padding: '1%',
                
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
                  {
                    [
                      { label : "Vessel Name", onChange : "vesselName" },
                      { label : "IMO Number", onChange : "IMO_Number" },
                      { label : "Year Built", onChange : "yearBuilt", type : "year"},
                      { label : "Flag", onChange : "flag" },
                      { label : "DWT", onChange : "DWT", type : "int"},
                      { label : "Gross Tonages", onChange : "grossTonage", type : "int"},
                    ].map(({label, onChange, type="string"}, index) => 
                      <GridInfoDetailsEditable 
                        key={onChange}
                        title={label} 
                        type={type}
                        value={selectedValue[onChange]} 
                        handleEntryUpdate={(value) => {handleUpdate(onChange, type, value);}} 
                        errorState={errorState[onChange]}
                      />
                    )
                  }
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
                    {
                      [
                        { label : "Call Sign", onChange : "callSign" },
                        { label : "LOA (m)", onChange : "LOA", type : "float"},
                        { label : "Breadth (m)", onChange : "breadth", type : "float"},
                        { label : "Vessel Type Generic", onChange : "vesselTypeGeneric" },
                        { label : "Vessel Type Detailed", onChange : "vesselTypeDetailed" },
                      ].map(({label, onChange, type="string"}, index) => 
                        <GridInfoDetailsEditable 
                          key={onChange}
                          title={label} 
                          type={type}
                          value={selectedValue[onChange]} 
                          handleEntryUpdate={(value) => {handleUpdate(onChange, type, value);}} 
                          errorState={errorState[onChange]}
                        />
                      )
                    }
                  </Grid>
                </Typography>
                {/* <Typography variant="subtitle2" sx={{
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
                </Typography> */}
              </div>
              <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1%',
                padding: '1%',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <PictureUpload title={"Current Ship Image"} picLink={selectedValue['vesselImage']} handleUpdate={updateImage} error={errorState['vesselImage']}/>
                <Button variant="contained" color="primary" style={{marginTop: '1%', width: '45%', backgroundColor: '#FF5AD9'}} onClick={() => {confirm();}}>
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