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
import { subDays } from 'date-fns';
import { useState } from 'react';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import Text from 'src/components/Text';
import Label from 'src/components/Label';
import { Padding } from '@mui/icons-material';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const url = process.env.PUBLIC_URL || ""

function SimpleDialog(props) {
  const { onClose, selectedValue, open, shipName } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent:"space-between", alignItems:"center"}}>
          <Typography align='left' variant="h6" style={{ fontWeight: 'bold' }}>
            Delete Ship
          </Typography>
          <IconButton align='right'  onClick={handleClose} variant="contained" color='error'>
            <CloseTwoToneIcon fontSize='small' />
          </IconButton>
        </div>
      </DialogTitle>
      <div style={{padding: '5%'}}>
        <Typography align='center' variant="h5" style={{ fontWeight: 'bold', marginBottom: '5%' }}>
          {"Are you sure you want to delete " + shipName+"?"}
        </Typography>
        <div style={{display: 'flex', padding: '1%', gap: '2%', justifyContent: 'center', alignItems: 'center'}}>
          <NextLink href= {url + "/batera/ship-list"} passHref>
            <Button variant="contained" color="primary" style={{backgroundColor: '#FF5AD9'}}>
              Yes
            </Button>
          </NextLink>
          <Button variant="contained" color="primary" onClick={handleClose} style={{}}>
            No
          </Button>
          
        </div>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  shipName: PropTypes.string.isRequired,
};

function Content() {
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
        <Grid item xs={4} sm={4} md={4} textAlign={{ sm: 'left' }}>
          <Box pr={3} pb={2}>
            {title}
          </Box>
        </Grid>
        <Grid item xs={8} sm={8} md={8}>
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
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
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
            display: 'flex'
          }}>
            <Typography variant="subtitle2" sx={{
              width: '60%',
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
                <div style={{
                  width: '50%',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '5%',
                  padding: '1%',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <NextLink href= {url + "/batera/dashboards/ship-details/update-ship"} passHref>
                    <Button variant="contained" color="primary" style={{width: '45%'}}>
                      Update Ship
                    </Button>
                  </NextLink>
                  <Button variant="contained" color="primary" onClick={handleClickOpen} style={{width: '45%', backgroundColor: '#FF5AD9'}}>
                    Delete Ship
                  </Button>
                  <SimpleDialog
                    selectedValue={selectedValue}
                    open={open}
                    onClose={handleClose}
                    shipName={shipInfo.vesselName}
                  />
                </div>
              </Grid>
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40%', boxSizing: 'border-box'}}>
                <Avatar variant="rounded" src={url + shipInfo.vesselImage} sx={{ width: '80%', height: '80%', boxSizing: 'border-box' }}/>
              </div>
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
