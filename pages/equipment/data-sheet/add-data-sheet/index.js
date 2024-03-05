import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout-Batera';
import PageHeader from 'src/batera/equipment/data-sheet/add-data-sheet/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';
import AddDataSheetList from 'src/batera/equipment/data-sheet/add-data-sheet/AddDataSheetList';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { SidebarContext } from 'src/contexts/SidebarContext';

function AddDataSheet() {
  const { shipID } = useContext(SidebarContext);	
  const router = useRouter();
  const postData = () => {
    router.push(`/equipment/data-sheet?id=${shipID}`);
  }
  return (
    <>
      <Head>
        <title>Add Data Sheet</title>
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
            <AddDataSheetList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

AddDataSheet.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default AddDataSheet;
