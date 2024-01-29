import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout-Batera';
import PageHeader from 'src/batera/ship-list/add-ship/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';
import { useState, useEffect } from 'react';
import TitlesList from 'src/batera/ship-list/add-ship/TitlesList';
import axios from 'axios';
import { useRouter } from 'next/router';
import {CheckInput, checkAllErrorCleared} from 'src/components/CustomComponent/InputChecker/InputChecker.js'

function Users() {
  const router = useRouter()
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

  const [errorState, setErrorState] = useState(
  {
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
    vesselImage: null,
  });

  const handleUpdate = (key, inputType) => (event) => {
    // console.log(event)
    var value = event
    if(key != 'vesselImage'){
      value = event.target.value
    }
    CheckInput(key, value, inputType, setInputedUser, setErrorState)
  };

  const postData = async () => {
    if(checkAllErrorCleared(inputedUser, setErrorState)){
      const formData = new FormData();
      formData.append("imoNumber", inputedUser.IMO_Number)
      formData.append("vesselName", inputedUser.vesselName)
      formData.append("flag", inputedUser.flag)
      formData.append("dwt", parseInt(inputedUser.DWT))
      formData.append("grossTonage", parseInt(inputedUser.grossTonage))
      formData.append("year", parseInt(inputedUser.yearBuilt))
      formData.append("callsign", inputedUser.callSign)
      formData.append("LOA", parseFloat(inputedUser.LOA))
      formData.append("breadth", parseFloat(inputedUser.breadth))
      formData.append("vesselTypeGeneric", inputedUser.vesselTypeGeneric)
      formData.append("vesselTypeDetailed", inputedUser.vesselTypeDetailed)
      formData.append("picture", inputedUser.vesselImage);
      try {
        const url = process.env.NEXT_PUBLIC_API_URL + "/ship" 
        const response = await axios.post(url, 
        formData);

        router.replace('/ship-list')
      } catch (error) {
        console.log(error)
      }
    }else{

      console.log("Result not clear")
    }
  }

  return (
    <>
      <Head>
        <title>Add Ship</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader postData={postData}/>
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <TitlesList 
              inputedUser={inputedUser} 
              errorState={errorState}
              setInputedUser={setInputedUser} 
              handleUpdate={handleUpdate} 
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Users.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default Users;
