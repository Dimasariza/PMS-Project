import { Typography, Box, Card, Container, Button, styled } from '@mui/material';
import BaseLayout from 'src/layouts/BaseLayout';
import Link from 'src/components/Link';
import Head from 'next/head';
import TextField from '@mui/material/TextField';

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
);

function Login() {
  return (
    <OverviewWrapper>
      <Head>
        <title>Batera PMS</title>
      </Head>
      
      <Box sx={{ mt: 4 }} className='w-full'>
        <Container maxWidth="sm">
          <Box display="flex" flexDirection="column" gap={2} sx={{ mt: 4 }} className='items-center'>

            <img
              src="/static/images/logo/logo-batera.svg"
              alt="Logo Batera"
              width={"30%"}
            />

            <TextField
              sx={{ width: '100%' }}
              required
              id="outlined-required"
              label="Username"
            />
            <TextField
              sx={{ width: '100%' }}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />

            <Button
              sx={{ width: '100%' }}
              component={Link}
              href="/dashboard-batera/tasks"
              variant="contained"
              className="text-3xl font-bold underline"
            >
              Login
            </Button>

            {/* <Button
              sx={{ width: '100%' }}
              component={Link}
              href="/dashboards/tasks"
              variant="contained"
              className="text-3xl font-bold underline"
            >
              Preview
            </Button> */}

            {/* <h1 className="text-3xl font-bold underline">Test tailwind css</h1> */}
          </Box>
        </Container>
      </Box>
    </OverviewWrapper>
  );
}

export default Login;

Login.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};
