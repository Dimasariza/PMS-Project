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

  const handleUpdate = (key, minYear, maxDigit) => (event) => {
    // console.log("Incoming ", key, "value", event);
    if(key == 'vesselImage'){
      if(event === undefined || event === null){
        setErrorState((prev) => ({
          ...prev,
          [key]: 'Gambar tidak boleh kosong',
        }));
      }else{
        const selectedFile = event;
        if (selectedFile) {
          const fileSizeInKB = selectedFile.size / 1024;

          if (fileSizeInKB > 1024) {
            setErrorState((prev) => ({
              ...prev,
              [key]: "Ukuran gambar tidak boleh melebihi 1 MB",
            }));
          } else {
            setInputedUser((prev) => ({
              ...prev,
              [key]: event,
            }));
            setErrorState((prev) => ({
              ...prev,
              [key]: null,
            }));
          }
        }
      }
    }else{
      if(event === undefined || event === null){
        setErrorState((prev) => ({
          ...prev,
          [key]: `Kolom ${capitalizeFirstLetter(key)} belum diisi`,
        }));
      }else{
        if(minYear != undefined && event.target.value < minYear && event.target.value > 1000){
          setInputedUser((prev) => ({
            ...prev,
            [key]: 1908,
          }));
          setErrorState((prev) => ({
            ...prev,
            [key]: `Tahun minimal 1908`,
          }));
        }else if(maxDigit != undefined && event.target.value > Math.pow(10, maxDigit) - 1){
          setErrorState((prev) => ({
            ...prev,
            [key]: `${capitalizeFirstLetter(key)} maximal ${maxDigit} digit`,
          }));
        }else{
          setInputedUser((prev) => ({
            ...prev,
            [key]: event.target.value,
          }));
          setErrorState((prev) => ({
            ...prev,
            [key]: null,
          }));
        }
      }
      
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [shownPic, setShowPic] = useState('')
  useEffect(() => {
    if(inputedUser.vesselImage == ''){
      setShowPic('')
    }else{
      setShowPic(URL.createObjectURL(inputedUser.vesselImage))
    }
  }, [inputedUser])

  const postData = async () => {
    if(checkAllErrorCleared()){
      console.log("Result clear")
      const formData = new FormData();
      formData.append("imoNumber", inputedUser.IMO_Number)
      formData.append("vesselName", inputedUser.vesselName)
      formData.append("flag", inputedUser.flag)
      formData.append("picture", inputedUser.vesselImage) 
      formData.append("dwt", parseInt(inputedUser.DWT))
      formData.append("grossTonage", parseInt(inputedUser.grossTonage))
      formData.append("year", parseInt(inputedUser.yearBuilt))
      formData.append("callsign", inputedUser.callSign)
      formData.append("LOA", parseFloat(inputedUser.LOA))
      formData.append("breadth", parseFloat(inputedUser.breadth))
      formData.append("vesselTypeGeneric", inputedUser.vesselTypeGeneric)
      formData.append("vesselTypeDetailed", inputedUser.vesselTypeDetailed)
      console.log(inputedUser);
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

  const checkAllErrorCleared = () => {
    var cheker = true;
    Object.keys(inputedUser).forEach(key => {
      if (inputedUser[key] !== '') {
        console.log(key, ' is ', inputedUser[key], true);


      } else {
        setErrorState(prev => ({
          ...prev,
          [key]: `${capitalizeFirstLetter(key)} tidak boleh kosong`,
        }));
        console.log(key, ' is ', inputedUser[key], false);
        cheker = false;
      }
    });
    return cheker;
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
              shownPic={shownPic} 
              setShowPic={setShowPic}
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
