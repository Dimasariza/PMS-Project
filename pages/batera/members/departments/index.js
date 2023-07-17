import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout-Batera';
import PageHeader from 'src/batera/content/members/departments/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import DepartmentsList from 'src/batera/content/members/departments/DepartmentsList';

function Department() {
  return (
    <>
      <Head>
        <title>Department</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader  />
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
            <DepartmentsList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Department.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default Department;
