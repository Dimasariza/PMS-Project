import { Typography, Box, Card, Container, Button, styled } from '@mui/material';
import BaseLayout from 'src/layouts/BaseLayout';
import Link from 'src/components/Link';
import Head from 'next/head';
import TextField from '@mui/material/TextField';
import NextLink from 'next/link';

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
  const url = process.env.PUBLIC_URL || ""

  return (
    <OverviewWrapper>
      <Head>
        <title>Batera PMS</title>
      </Head>
      
      <Box sx={{ mt: 4 }} className='w-full'>
        <Container maxWidth="sm">
          <Box display="flex" flexDirection="column" gap={2} sx={{ mt: 4 }} className='items-center'>

            {/* <img
              src={"/static/images/logo/logo-batera.svg"} 
              alt="Logo Batera"
              width={"30%"}
            /> */}
                 <Box
                  component="img"
                  sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                  }}
                  alt="The house from the offer."
                  src={"/static/images/logo/logo-batera.svg"} 
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
              required
              type="password"
              autoComplete="current-password"
            />

            <NextLink href="/batera/dashboards/tasks" passHref>
              <Button
                sx={{ width: '100%' }}
                component={Link}
                variant="contained"
                className="text-3xl font-bold underline"
              >
                Login
              </Button>
            </NextLink >


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
