import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout-Batera';
import PageHeader from 'src/batera/content/notification/inbox/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import InboxList from 'src/batera/content/notification/inbox/InboxList';

function Inbox() {
  return (
    <>
      <Head>
        <title>Inbox</title>
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
            <InboxList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Inbox.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default Inbox;
