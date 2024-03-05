import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout-Batera';
import PageHeader from 'src/batera/dashboards/unscheduled-job/add-job/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';
import { useState } from 'react';
import AddJobList from 'src/batera/dashboards/unscheduled-job/add-job/AddJobList';
import { useContext} from 'react';
import { useRouter } from 'next/router';
import { SidebarContext } from 'src/contexts/SidebarContext';

function AddJob() {
  const router = useRouter();
  const { shipID } = useContext(SidebarContext);	
  const [errorState, setErrorState] = useState(
    {
      vesselName: null,
      IMO: null,
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
    });

  const handleUpdate = (key, minYear, maxDigit, value) => {
    // console.log("Incoming ", key, "value", event);
    if(key == 'vesselImage'){
      if(value === undefined || value === null){
        setErrorState((prev) => ({
          ...prev,
          [key]: 'Gambar tidak boleh kosong',
        }));
      }else{
        const selectedFile = value;
        if (selectedFile) {
          const fileSizeInKB = selectedFile.size / 1024;
          if (fileSizeInKB > 1024) {
            setErrorState((prev) => ({
              ...prev,
              [key]: "Ukuran gambar tidak boleh melebihi 1 MB",
            }));
          } else {
            setSelectedValue((prev) => ({
              ...prev,
              [key]: value,
            }));
            setErrorState((prev) => ({
              ...prev,
              [key]: null,
            }));
          }
        }
      }
    }else{
      if(value === undefined || value === null){
        setErrorState((prev) => ({
          ...prev,
          [key]: `Kolom ${capitalizeFirstLetter(key)} belum diisi`,
        }));
      }else{
        if(minYear != undefined && value < minYear && value > 1000){
          setSelectedValue((prev) => ({
            ...prev,
            [key]: 1908,
          }));
          setErrorState((prev) => ({
            ...prev,
            [key]: `Tahun minimal 1908`,
          }));
        }else if(maxDigit != undefined && value > Math.pow(10, maxDigit) - 1){
          setErrorState((prev) => ({
            ...prev,
            [key]: `${capitalizeFirstLetter(key)} maximal ${maxDigit} digit`,
          }));
        }else{
          if((maxDigit != undefined || minYear != undefined )){
            if(checkIfNumber(value)){
              setSelectedValue((prev) => ({
                ...prev,
                [key]: value,
              }));
              setErrorState((prev) => ({
                ...prev,
                [key]: null,
              }));
            }else{
              setErrorState((prev) => ({
                ...prev,
                [key]: `${capitalizeFirstLetter(key)} hanya boleh diisi dengan angka`,
              }));
            }
          }else{
            setSelectedValue((prev) => ({
              ...prev,
              [key]: value,
            }));
            setErrorState((prev) => ({
              ...prev,
              [key]: null,
            }));
          }
        }
      }
    }
  };

  const postData = () => {
    router.push(`/dashboards/unscheduled-job?id=${shipID}`);
  }


  return (
    <>
      <Head>
        <title>Add Job</title>
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
            <AddJobList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

AddJob.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default AddJob;
