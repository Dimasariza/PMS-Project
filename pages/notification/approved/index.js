import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout-Batera';
import PageHeader from 'src/batera/notification/approved/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import ApprovedList from 'src/batera/notification/approved/ApprovedList';

function Approved() {
  return (
    <>
      <Head>
        <title>Approved</title>
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
            <ApprovedList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Approved.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default Approved;
