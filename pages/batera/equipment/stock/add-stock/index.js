import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout-Batera';
import PageHeader from 'src/batera/content/equipment/stock/add-stock/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import AddStockList from 'src/batera/content/equipment/stock/add-stock/AddStockList';

function AddStock() {
  return (
    <>
      <Head>
        <title>Add Stock</title>
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
            <AddStockList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

AddStock.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default AddStock;
