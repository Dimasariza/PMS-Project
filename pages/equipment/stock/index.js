import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout-Batera';
import PageHeader from 'src/batera/equipment/stock/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import StockList from 'src/batera/equipment/stock/StockList';

function Stock() {
  return (
    <>
      <Head>
        <title>Stock</title>
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
            <StockList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Stock.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default Stock;
