import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout-Batera';
import PageHeader from 'src/batera/dashboards/ship-details/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import Content from 'src/batera/dashboards/ship-details/Content.js';

function ShipDetails() {
  return (
    <>
      <Head>
        <title>Ship Details</title>
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
            <Content />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

ShipDetails.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ShipDetails;
