import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout-Batera';
import PageHeader from 'src/batera/dashboards/unscheduled-job/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import UnscheduledJobList from 'src/batera/dashboards/unscheduled-job/UnscheduledJobList';

function UnscheduledJob() {
  return (
    <>
      <Head>
        <title>Unscheduled Job</title>
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
            <UnscheduledJobList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

UnscheduledJob.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default UnscheduledJob;
