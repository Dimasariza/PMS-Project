import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout-Batera';
import PageHeader from 'src/batera/dashboards/scheduled-job/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import ScheduledJobList from 'src/batera/dashboards/scheduled-job/ScheduledJobList.js';

function ScheduledJob() {
  return (
    <>
      <Head>
        <title>Scheduled Job</title>
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
            <ScheduledJobList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

ScheduledJob.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ScheduledJob;
