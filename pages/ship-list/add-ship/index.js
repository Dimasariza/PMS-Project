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
    vessel_name: '',
    imo_number: '',
    year: '',
    flag: '',
    dwt: '',
    gross_tonage: '',
    callSign: '',
    LOA: '',
    breadth: '',
    vessel_type_generic: '',
    vessel_type_detailed: '',
    image: '',
  });

  const [errorState, setErrorState] = useState(
  {
    vessel_name: null,
    imo_number: null,
    year: null,
    flag: null,
    dwt: null,
    gross_tonage: null,
    callSign: null,
    LOA: null,
    breadth: null,
    vessel_type_generic: null,
    vessel_type_detailed: null,
    image: null,
  });

  const handleUpdate = (key, inputType) => (event) => {
    // console.log(event)
    var value = event
    if(key != 'image'){
      value = event.target.value
    }
    CheckInput(key, value, inputType, setInputedUser, setErrorState)
  };

  const postData = async () => {
    if(checkAllErrorCleared(inputedUser, setErrorState)){
      const formData = new FormData();
      formData.append("imo_number", inputedUser.imo_number)
      formData.append("vessel_name", inputedUser.vessel_name)
      formData.append("flag", inputedUser.flag)
      formData.append("dwt", parseInt(inputedUser.dwt))
      formData.append("gross_tonage", parseInt(inputedUser.gross_tonage))
      formData.append("year", parseInt(inputedUser.year))
      formData.append("callsign", inputedUser.callSign)
      formData.append("LOA", parseFloat(inputedUser.LOA))
      formData.append("breadth", parseFloat(inputedUser.breadth))
      formData.append("vessel_type_generic", inputedUser.vessel_type_generic)
      formData.append("vessel_type_detailed", inputedUser.vessel_type_detailed)
      formData.append("image", inputedUser.image);
      try {
        const url = process.env.NEXT_PUBLIC_API_URL + "/ships" 
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
