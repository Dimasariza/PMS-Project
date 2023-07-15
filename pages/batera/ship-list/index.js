import Head from 'next/head';
import SidebarLayout from 'src/layouts/HeaderOnlyLayout-Batera';
import PageHeader from 'src/batera/content/ship-list/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import Content from 'src/batera/content/ship-list/Content';

function Users() {
  return (
    <>
      <Head>
        <title>Ship List</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container width={'100%'} height={'100%'}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          width={'100%'}
          height={'100%'}
        >
          <Grid item xs={12} width={'100%'} height={'100%'} >
            <Content width={'100%'} height={'100%'} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Users.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default Users;
