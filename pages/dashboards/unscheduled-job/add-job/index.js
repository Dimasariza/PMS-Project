import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout-Batera';
import PageHeader from 'src/batera/dashboards/unscheduled-job/add-job/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import AddJobList from 'src/batera/dashboards/unscheduled-job/add-job/AddJobList';

function AddJob() {
  return (
    <>
      <Head>
        <title>Add Job</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
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
