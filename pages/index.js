import { Typography, Box, Card, Container, Button, styled } from '@mui/material';
import BaseLayout from 'src/layouts/BaseLayout';
import Link from 'src/components/Link';
import Head from 'next/head';
import TextField from '@mui/material/TextField';
import NextLink from 'next/link';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { SidebarContext } from 'src/contexts/SidebarContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';

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
  const baseURL = "http://localhost:8000";
  const localURL = '/127.0.0.1:8000/api/v1/auth/login';
  const router = useRouter();

  const { user, handleLoginData } = useContext(SidebarContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    sessionStorage.clear()
  }, [])

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/login', {
        username: username,
        password: password
      });
      router.push('/batera/ship-list');
      handleLoginData(response.data.data);
      // Handle the response data and tokens as per your requirements
    } catch (error) {
      setLoginError(true)
    }
  }

  return (
    <OverviewWrapper>
      <Head>
        <title>Batera PMS</title>
      </Head>
      
      <Box sx={{ mt: 4 }} className='w-full'>
        <Container maxWidth="sm">
          <Box display="flex" flexDirection="column" gap={2} sx={{ mt: 4 }} className='items-center'>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img
                src={url + "/static/images/logo/logo-batera.svg"} 
                alt="Logo Batera"
                width={"80%"}
              />
            </div>

            <TextField
              sx={{ width: '100%' }}
              required
              id="outlined-required"
              label="Username"
              value={username}
              onChange={(event) => {setUsername(event.target.value)}}
            />
            <TextField
              sx={{ width: '100%' }}
              id="outlined-password-input"
              label="Password"
              required
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => {setPassword(event.target.value)}}
            />

            {loginError && <p style={{ color: 'red' }}>Login failed. Please check your credentials.</p>}
            {/* <button onClick={handleLogin}>Login</button> */}
            <Button
                sx={{ width: '100%' }}
                variant="contained"
                className="text-3xl font-bold underline"
                onClick={() => {handleLogin()}}
              >
                Login
            </Button>

            {/* <NextLink href= {url + "/batera/ship-list"} passHref>
              <Button
                sx={{ width: '100%' }}
                component={Link}
                variant="contained"
                className="text-3xl font-bold underline"
              >
                Login
              </Button>
            </NextLink > */}

            {/* <NextLink href= {url + "/dashboards/tasks"} passHref>
              <Button
                sx={{ width: '100%' }}
                component={Link}
                variant="contained"
                className="text-3xl font-bold underline"
              >
                Login
              </Button>
            </NextLink > */}


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
