import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout-Batera';
import PageHeader from 'src/batera/content/members/departments/add-departments/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';
import TitlesList from 'src/batera/content/members/departments/add-departments/TitlesList';

function Users() {
  return (
    <>
      <Head>
        <title>Add Department</title>
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
            <TitlesList />
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
