import { 
  Grid,
  Typography,
  CardContent,
  Card,
  Box,
  Divider,
  Button,
  Avatar,
  IconButton,
  CircularProgress,
  Skeleton
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
  const [loading, setLoading] = useState(true);
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
  ]);

  const [shipInfo, setShipInfo] = useState(
    {
      vessel_name: 'MV.AXES',
      imo_number: '123xxx1980',
      year: '1980',
      flag: 'Indonesia',
      dwt: '15.000',
      gross_tonage: '11.900',
      callSign: 'AX VII',
      LOA_Breadth: '149.6 X 23.1 m',
      vessel_type_generic: 'Cargo',
      vessel_type_detailed: 'Container Ship',
      image: "/static/images/ship-card/ship1.jpg"
    }
  );

  // const imageUrl = shipInfo.image instanceof File 
  // ? URL.createObjectURL(shipInfo.image) 
  // : '/static/images/ship-card/ship1.jpg';
  // useEffect(() => {
  //   setLoading(true);
  //   // imageUrl = shipInfo.image instanceof File 
  //   //   ? URL.createObjectURL(shipInfo.image) 
  //   //   : '/static/images/ship-card/ship1.jpg';
  //   setLoading(false);
  // }, [shipInfo.image]); // This effect runs whenever `shipInfo.image` changes
  
  
  const retriveData = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/ships/" + id;
    await axios.get(url)
        .then(resp => {processRetrivedData(resp);})
        .catch(error => console.log(error))
  }

  const processRetrivedData = async (results) => {
    console.log(results);
    var shipData = results.data

    const imageUrl = shipData.image;
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
      vessel_name: shipData.vessel_name,
      imo_number: shipData.imo_number,
      year: shipData.year,
      flag: shipData.flag,
      dwt: shipData.dwt,
      gross_tonage: shipData.gross_tonage,
      callSign: shipData.callsign,
      LOA: shipData.LOA,
      breadth: shipData.breadth,
      vessel_type_generic: shipData.vessel_type_generic,
      vessel_type_detailed: shipData.vessel_type_detailed,
      image: imageUrl
    }
    setShipInfo(convertedResults)
    console.log(shipData.department_counts);
    setSummaryList(shipData.department_counts) 
    setLoading(false);
  }

  useEffect(() => {
    retriveData()
  }, [])
  
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
    console.log(selectedValue);
    if(selectedValue != null){
      setShipInfo(selectedValue);
      postData(selectedValue)
    }
  };

  const postData = async (selectedValue) => {
    setLoading(true);
    const formData = new URLSearchParams();
    formData.append("imo_number", selectedValue.imo_number)
    formData.append("vessel_name", selectedValue.vessel_name)
    formData.append("flag", selectedValue.flag)
    formData.append("dwt", parseInt(selectedValue.dwt))
    formData.append("gross_tonage", parseInt(selectedValue.gross_tonage))
    formData.append("year", parseInt(selectedValue.year))
    formData.append("callsign", selectedValue.callSign)
    formData.append("LOA", parseFloat(selectedValue.LOA))
    formData.append("breadth", parseFloat(selectedValue.breadth))
    formData.append("vessel_type_generic", selectedValue.vessel_type_generic)
    formData.append("vessel_type_detailed", selectedValue.vessel_type_detailed)
    // formData.append("image", selectedValue.image);

    // await axios.put(url, formData)
    //     .then(resp => {console.log(resp);})
    //     .catch(error => console.log(error))
    try {
      console.log(selectedValue);
      const url = process.env.NEXT_PUBLIC_API_URL + "/ships/"+id
      const response = await axios.put(url, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error)
    }

    if(selectedValue.image != null){
      const imageFormData = new FormData();
      imageFormData.append("image", selectedValue.image);
      // setShipInfo(prevState => ({
      //   ...prevState,
      //   image: null
      // }));
      try {
        const url = process.env.NEXT_PUBLIC_API_URL + "/ships_image/"+id
        const response = await axios.post(url, imageFormData);
        setShipInfo(prevState => ({
          ...prevState,
          image: response.data.image
        }));
      } catch (error) {
        console.log(error)
      }
    }

    setLoading(false);
    // retriveData();
  }

  // useEffect(() => {
  //   console.log(shipInfo);
  // }, [shipInfo])

  const GridInfoDetails = ({title, value, loading = false}) => {
    return(
      <>
        <Grid item xs={6} sm={8} md={6} lg={4} textAlign={{ sm: 'left' }}>
          <Box pr={3} pb={2}>
            {title}
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={6} lg={8}>
          <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
            {
              loading ? 
              <Skeleton animation="wave" /> 
              : 
              <Text color="black">
                <b>{value}</b>
              </Text>
            }
            
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
                <GridInfoDetails title={"Vessel name:"} value={shipInfo.vessel_name} loading={loading}/>
                <GridInfoDetails title={"IMO Number:"} value={shipInfo.imo_number} loading={loading}/>
                <GridInfoDetails title={"Year Built:"} value={shipInfo.year} loading={loading}/>
                <GridInfoDetails title={"Flag:"} value={shipInfo.flag} loading={loading}/>
                <GridInfoDetails title={"DWT:"} value={shipInfo.dwt} loading={loading}/>
                <GridInfoDetails title={"Gross Tonage:"} value={shipInfo.gross_tonage} loading={loading}/>
                <GridInfoDetails title={"Call Sign:"} value={shipInfo.callSign} loading={loading}/>
                <GridInfoDetails title={"LOA x Breadth:"} value={shipInfo.LOA + " X " + shipInfo.breadth+" m"} loading={loading}/>
                <GridInfoDetails title={"Vessel Type - Generic:"} value={shipInfo.vessel_type_generic} loading={loading}/>
                <GridInfoDetails title={"Vessel Type - Detailed:"} value={shipInfo.vessel_type_detailed} loading={loading}/>
                <Typography sx={{
                  width:'100%',
                  display: {
                    xs: 'flex',
                    sm: 'none',
                  },
                  alignItems: 'center',
                  justifyContent: 'center',
                  }}>
                    {
                      loading ? "a" : "b"
                    }
                    {/* <CircularProgress sx={{visibility: !loading ? 'hidden' : 'visible'}} />  */}
                    {/* <Avatar variant="rounded" src={shipInfo.image} sx={{ width: '80%', height: '80%', boxSizing: 'border-box' }}/> */}
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
                    shipName={shipInfo.vessel_name}
                    shipID={id}
                  />
                  <DetailsModal
                    onClose={handleCloseEditModal}
                    open={openEditModal}
                    confirmUpdate={(value) => confirmUpdate(value)}
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
              alignItems: 'flex-start',
              justifyContent: 'center',
              }}>
                {
                  loading ? <Skeleton variant="rounded" animation="wave" sx={{ width: '100%', height: '100%', boxSizing: 'border-box' }}/> : <Avatar variant="rounded" src={shipInfo.image} sx={{ width: '80%', height: '80%', boxSizing: 'border-box' }}/>
                }
                    
            </Typography>
          </div>
        </CardContent>
      </Card>
      <div style={{height: '3vh'}} />
      <Card>
        <SummaryTable summaryList={summaryList} loading={loading}/>
      </Card>
    </>
  );
}

export default Content;
