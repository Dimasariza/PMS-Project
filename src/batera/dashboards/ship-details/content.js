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
import { useState, useEffect, useContext } from 'react';
import { SidebarContext } from 'src/contexts/SidebarContext';
import Text from 'src/components/Text';
import DeleteModal from './DeleteModal'
import { useRouter } from 'next/router';
import axios from 'axios';
import DetailsModal from './DetailsModal';

function Content() {
  const router = useRouter();
  const {user} = useContext(SidebarContext)
  const id = router.query?.id
  const url = process.env.PUBLIC_URL || ""
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
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
      IMO_Number: '123xxx1980',
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
  
  const retriveData = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/ship/" + id
    await axios.get(url)
        .then(resp => processRetrivedData(resp.data.data))
        .catch(error => console.log(error))
  }

  const processRetrivedData = async (results) => {
    console.log(results)
    var shipData = results.ship

    const imageUrl = shipData.picture;
    // console.log(imageUrl)

    // const response = await axios.get(imageUrl);
    // const imageData = new Blob([response.data]); // Create a Blob from the array buffer
    // const dataUrl = URL.createObjectURL(imageData);

    // console.log(dataUrl)


    // const imageResponse = await fetch(url + shipData.picture);
    // const imageData = await imageResponse.blob();
    // const formData = new FormData();
    // formData.append("image", imageData);

    const convertedResults = {
      vesselName: shipData.vesselName,
      IMO_Number: shipData.imoNumber,
      yearBuilt: shipData.year,
      flag: shipData.flag,
      DWT: shipData.dwt,
      grossTonage: shipData.grossTonage,
      callSign: shipData.callsign,
      LOA: shipData.LOA,
      breadth: shipData.breadth,
      vesselTypeGeneric: shipData.vesselTypeGeneric,
      vesselTypeDetailed: shipData.vesselTypeDetailed,
      vesselImage: imageUrl
    }
    setShipInfo(convertedResults)
    setSummaryList(results.jobLists.results) 
  }

  useEffect(() => {
      if(router.isReady) retriveData()
  }, [router.isReady])
  
  const handleClickOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleClickOpenEditModal = () => {
    setOpenEditModal(true);
  };

  const handleCloseEditModal = (value) => {
    setOpenEditModal(false);
    // setSelectedValue(value);
    // setSelectedValue(prevValue => ({
    //   ...prevValue, // Spread the previous value to retain existing properties
    //   ...value, // Update with the new values (excluding vesselImage)
    //   vesselImage: prevValue.vesselImage, // Retain the old vesselImage
    // }));
  };

  

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const confirmUpdate = (selectedValue) => {
    if(selectedValue != null){
      setShipInfo(selectedValue);
      postData(selectedValue)
    }
  };

  const postData = async (selectedValue) => {
    console.log(selectedValue);
    const formData = new FormData();
    formData.append("imoNumber", selectedValue.IMO_Number)
    formData.append("vesselName", selectedValue.vesselName)
    formData.append("flag", selectedValue.flag)
    formData.append("dwt", parseInt(selectedValue.DWT))
    formData.append("grossTonage", parseInt(selectedValue.grossTonage))
    formData.append("year", parseInt(selectedValue.yearBuilt))
    formData.append("callsign", selectedValue.callSign)
    formData.append("LOA", parseFloat(selectedValue.LOA))
    formData.append("breadth", parseFloat(selectedValue.breadth))
    formData.append("vesselTypeGeneric", selectedValue.vesselTypeGeneric)
    formData.append("vesselTypeDetailed", selectedValue.vesselTypeDetailed)
    formData.append("picture", selectedValue.vesselImage);

    try {
      const url = process.env.NEXT_PUBLIC_API_URL + "/ship/"+id+"/update" 
      const response = await axios.post(url, 
      formData);
    } catch (error) {
      console.log(error)
    }
  }

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
                <GridInfoDetails title={"IMO Number:"} value={shipInfo.IMO_Number}/>
                <GridInfoDetails title={"Year Built:"} value={shipInfo.yearBuilt}/>
                <GridInfoDetails title={"Flag:"} value={shipInfo.flag}/>
                <GridInfoDetails title={"DWT:"} value={shipInfo.DWT}/>
                <GridInfoDetails title={"Gross Tonage:"} value={shipInfo.grossTonage}/>
                <GridInfoDetails title={"Call Sign:"} value={shipInfo.callSign}/>
                <GridInfoDetails title={"LOA x Breadth:"} value={shipInfo.LOA + " X " + shipInfo.breadth+" m"}/>
                <GridInfoDetails title={"Vessel Type - Generic:"} value={shipInfo.vesselTypeGeneric}/>
                <GridInfoDetails title={"Vessel Type - Detailed:"} value={shipInfo.vesselTypeDetailed}/>
                <Typography sx={{
                  width:'100%',
                  display: {
                    xs: 'flex',
                    sm: 'none',
                  },
                  alignItems: 'center',
                  justifyContent: 'center',
                  }}>
                    <Avatar variant="rounded" src={shipInfo.vesselImage} sx={{ width: '80%', height: '80%', boxSizing: 'border-box' }}/>
                </Typography>
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
                  <Button variant="contained" color="primary" onClick={handleClickOpenEditModal} style={{width: '48%', textAlign: 'center'}}>
                    Update Ship
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleClickOpenDeleteModal} style={{width: '48%', textAlign: 'center', backgroundColor: '#FF5AD9'}}>
                    Delete Ship
                  </Button>
                  <DeleteModal
                    onClose={handleCloseDeleteModal}
                    open={openDeleteModal}
                    shipName={shipInfo.vesselName}
                    shipID={id}
                  />
                  <DetailsModal
                    onClose={handleCloseEditModal}
                    open={openEditModal}
                    confirmUpdate={confirmUpdate}
                    defaultFormValue={shipInfo}
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
                <Avatar variant="rounded" src={shipInfo.vesselImage} sx={{ width: '80%', height: '80%', boxSizing: 'border-box' }}/>
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
