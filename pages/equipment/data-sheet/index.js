import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout-Batera';
import PageHeader from 'src/batera/equipment/data-sheet/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import DataSheetList from 'src/batera/equipment/data-sheet/DataSheetList';

function DataSheet() {
  return (
    <>
      <Head>
        <title>Data Sheet</title>
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
            <DataSheetList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

DataSheet.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default DataSheet;
