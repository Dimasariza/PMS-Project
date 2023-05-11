import { 
  Grid,
  Typography,
  CardContent,
  Card,
  Box,
  Divider,
  Button,
  Avatar,
  IconButton
} from '@mui/material';
import SummaryTable from './SummaryTable';
import { useState } from 'react';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import Text from 'src/components/Text';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DeleteModal from './DeleteModal'

function Content() {
  const url = process.env.PUBLIC_URL || ""
  const [summaryList, setSummaryList] = useState([
    {
      jobStatus: 'On Progress',
      machine: '100',
      deck: '200',
      electrical: '120',
    },
    {
      jobStatus: 'Done',
      machine: '200',
      deck: '400',
      electrical: '300',
    },
    {
      jobStatus: 'Overdue',
      machine: '300',
      deck: '800',
      electrical: '50',
    },
    {
      jobStatus: 'Electrical',
      machine: '350',
      deck: '150',
      electrical: '900',
    },
  ]);

  const [shipInfo, setShipInfo] = useState(
    {
      vesselName: 'MV.AXES',
      IMO: '123xxx1980',
      yearBuilt: '1980',
      flag: 'Indonesia',
      DWT: '15.000',
      grossTonage: '11.900',
      callSign: 'AX VII',
      LOA_Breadth: '149.6 X 23.1 m',
      vesselTypeGeneric: 'Cargo',
      vesselTypeDetailed: 'Container Ship',
      vesselImage: "/static/images/ship-card/ship1.jpg"
    }
  );

  const GridInfoDetails = ({title, value}) => {
    return(
      <>
        <Grid item xs={6} sm={8} md={6} lg={4} textAlign={{ sm: 'left' }}>
          <Box pr={3} pb={2}>
            {title}
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={6} lg={8}>
          <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
            <Text color="black">
              <b>{value}</b>
            </Text>
          </Box>
        </Grid>
      </>
    );
  }

  
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({uwu: 'uwu'});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <>
      <Card>
        <Box
          p={3}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h4" gutterBottom>
              Details
            </Typography>
          </Box>
        </Box>
        <Divider />
        <CardContent sx={{ p: 4 }}>
          <div style={{
            display: 'flex',
            boxSizing: 'border-box', 
          }}>
            <Typography variant="subtitle2" sx={{
              width:{
                xs: '100%',
                sm: '50%',
                md: '50%'
              }
            }}>
              <Grid container spacing={0}>
                <GridInfoDetails title={"Vessel name:"} value={shipInfo.vesselName}/>
                <GridInfoDetails title={"IMO Number:"} value={shipInfo.IMO}/>
                <GridInfoDetails title={"Year Built:"} value={shipInfo.yearBuilt}/>
                <GridInfoDetails title={"Flag:"} value={shipInfo.flag}/>
                <GridInfoDetails title={"DWT:"} value={shipInfo.DWT}/>
                <GridInfoDetails title={"Gross Tonage:"} value={shipInfo.grossTonage}/>
                <GridInfoDetails title={"Call Sign:"} value={shipInfo.callSign}/>
                <GridInfoDetails title={"LOA x Breadth:"} value={shipInfo.LOA_Breadth}/>
                <GridInfoDetails title={"Vessel Type - Generic:"} value={shipInfo.vesselTypeGeneric}/>
                <GridInfoDetails title={"Vessel Type - Detailed:"} value={shipInfo.vesselTypeDetailed}/>
                <Typography 
                  sx={{
                    width:{
                      xs: '100%',
                      sm: '100%',
                      md: '61%',
                      lg: '55%',
                    },
                    display: 'flex',
                    flexDirection: 'row',
                    gap:{
                      xs: '2%',
                      sm: '5%'
                    },
                    paddingTop: '1%',
                    paddingBottom: '1%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <NextLink href= {url + "/batera/dashboards/ship-details/update-ship"} passHref>
                    <Button variant="contained" color="primary" style={{width: '48%', textAlign: 'center'}}>
                      Update Ship
                    </Button>
                  </NextLink>
                  <Button variant="contained" color="primary" onClick={handleClickOpen} style={{width: '48%', textAlign: 'center', backgroundColor: '#FF5AD9'}}>
                    Delete Ship
                  </Button>
                  <DeleteModal
                    selectedValue={selectedValue}
                    open={open}
                    onClose={handleClose}
                    shipName={shipInfo.vesselName}
                  />
                </Typography>
              </Grid>
            </Typography>
            <Typography sx={{
              width:'50%',
              display: {
                xs: 'none',
                sm: 'flex',
              },
              alignItems: 'center',
              justifyContent: 'center',
              }}>
                <Avatar variant="rounded" src={url + shipInfo.vesselImage} sx={{ width: '80%', height: '80%', boxSizing: 'border-box' }}/>
            </Typography>
          </div>
        </CardContent>
      </Card>
      <div style={{height: '3vh'}} />
      <Card>
        <SummaryTable summaryList={summaryList} />
      </Card>
    </>
  );
}

export default Content;
